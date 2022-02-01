const fs = require("fs")
const filePath = `${__dirname}/schemas`
const screens = require("./events").events
const errorEvents = []
const errorScreens = []

try {
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath)
    }
} catch (e) {
    console.log(e)
}


function generateContent() {
    for (const screen of screens) {
        if (screen.screen.length > 40) {
            errorScreens.push(screen)
        } else {
            let content = getDefaultSchemaComponent(screen)
            writeFile(screen.screen, content)
            writeFile("error_events", JSON.stringify(errorEvents))
        }
    }
    writeFile("error_screens", JSON.stringify(errorScreens))
}

function writeFile(screen, content) {
    fs.writeFile(`${filePath}/${screen}.json`, content, {flag: 'w+'}, err => {
        if (err) {
            console.log(`Writing file error: ${err}`)
            return
        }
        console.log(`Writing file success`)
    })
}

function getDefaultSchemaComponent(screen) {
    return `
    {
  "openapi": "3.0.3",
  "info": {
    "title": "${capitalizeWord(screen.screen.replace('_', ' '))} Event",
    "description": "All of events will be there which one is trigger on ${capitalizeWord(screen.screen.replace('_', ' '))} ui",
    "version": "1.0.0"
  },
  "paths": {
  },
  "components": {
    "schemas": {
      ${getSchemas(screen)}
    }
  }
}
    `
}

function capitalizeWord(str) {
    const words = str.split(' ')
    let capitalize = ``
    for (const word of words) {
        capitalize = capitalize.concat(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).concat(" ")
    }
    return capitalize.slice(0, -1)
}

function getRequiredField(event) {
    let preRequiredFiled = [
        "screen",
        "category",
        "is_logged_in",
        "device_id",
        "version_name",
        "version_code"
    ]
    for (const property of event.properties) {
        if (property.required) {
            preRequiredFiled.push(property.name)
        }
    }
    return JSON.stringify(preRequiredFiled)
}

function getProperties(screen, event) {
    let properties = `{
          "screen": {
            "type": "string",
            "enum": [
              "${screen.screen}"
            ]
          },
          "category": {
            "type": "string"
          },
          "event_name": {
            "type": "string",
            "enum": [
              "${event.name}"
            ]
          },
          "user_id": {
            "type": "string",
            "description": "This is user id"
          },
          "is_premium": {
            "type": "boolean"
          },
          "is_logged_in": {
            "type": "boolean"
          },
          "user_region": {
            "type": "string"
          },
          "user_ip": {
            "type": "string"
          },
          "device_id": {
            "type": "string"
          },
          "version_name": {
            "type": "string"
          },
          "version_code": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          }
        `

    for (const property of event.properties) {
        properties = properties.concat(`,
          "${property.name}": {
            "type": "${property.type}"
          }`)
    }
    return properties.concat(`}`)
}

function getSchemas(screen) {
    let schemas = `"screen_view_schema": {
                "type": "object",
                "required": ${getRequiredField({properties: []})},
                "properties": ${getProperties(screen, {name: "screen_view", properties: []})}
              },`
    for (const event of screen.event) {
        if (event.name.length > 40) {
            errorEvents.push(event)
        } else {
            schemas = schemas.concat(
                `"${event.name}_schema": {
                "type": "object",
                "required": ${getRequiredField(event)},
                "properties": ${getProperties(screen, event)}
              },`
            )
        }
    }
    return schemas.slice(0, -1)
}

generateContent()