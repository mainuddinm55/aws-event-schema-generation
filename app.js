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
            writeFile(screen.screen, 'json', content)
            writeFile("error_events", 'json', JSON.stringify(errorEvents))
        }
    }
    writeFile("error_screens", 'json', JSON.stringify(errorScreens))
}

function generateKotlinConstraintClass() {
    writeFile("Screen", "kt", getScreenConstraint(screens))
    writeFile("Event", "kt", getEventConstraint(screens))
    writeFile("Param", "kt", getParamConstraint(screens))
}

function getScreenConstraint(screens) {
    let screenClass = `object Screen {
    `
    for (const screen of screens) {
        if (screen.screen.length <= 40) {
            screenClass = screenClass.concat(
                `const val ${screen.screen.toUpperCase()} = "${screen.screen}"
    `)
        }
    }
    return screenClass.concat(`}`)
}

function getEventConstraint(screens) {
    let eventClass = `object Event {
    `
    for (const screen of screens) {
        for (const event of screen.event) {
            if (event.name.length <= 40) {
                eventClass = eventClass.concat(
                    `const val ${event.name.toUpperCase()} = "${event.name}"
    `
                )
            }
        }
    }

    return eventClass.concat(`}`)
}

function getParamConstraint(screens) {
    let paramClass = `object Param {
    `
    const defaultParams = JSON.parse(getDefaultParam())
    for (let key of Object.keys(defaultParams)) {
        paramClass = paramClass.concat(
            `const val ${key.toUpperCase()} = "${key}"
    `
        )
    }
    for (const screen of screens) {
        for (const event of screen.event) {
            if (event.name.length <= 40) {
                for (const property of event.properties) {
                    paramClass = paramClass.concat(
                        `const val ${property.name.toUpperCase()} = "${property.name}"
    `
                    )
                }
            }
        }
    }
    return paramClass.concat(`}`)
}

function getDefaultParam() {
    return `{
          "screen": {
            "type": "string"
          },
          "category": {
            "type": "string"
          },
          "event_name": {
            "type": "string"
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
    }    
        `
}

function writeFile(fileName, fileType = 'json', content) {
    fs.writeFile(`${filePath}/${fileName}.${fileType}`, content, {flag: 'w+'}, err => {
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
    "title": "${capitalizeWord(screen.screen.replaceAll('_', ' '))} Event",
    "description": "All of events will be there which one is trigger on ${capitalizeWord(screen.screen.replaceAll('_', ' '))} ui",
    "version": "1.0.0"
  },
  "paths": {
  },
  "tags":[{
    "name":"Event Details"
  }],
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
    console.log(capitalize)
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
            ],
            "description": "Screen name of where the event was triggered"
          },
          "category": {
            "type": "string",
            "description": "Category name of that event provided from app"
          },
          "event_name": {
            "type": "string",
            "enum": [
              "${event.name}"
            ],
            "description": "Name of event of which is trigger from app"
          },
          "user_id": {
            "type": "string",
            "description": "Unique identifier of a user"
          },
          "is_premium": {
            "type": "boolean",
            "description": "If the user is and premium user then it will be true otherwise false"
          },
          "is_logged_in": {
            "type": "boolean",
            "description": "Whatever user is logged user or guest user. if logged user then it will be true otherwise false"
          },
          "user_region": {
            "type": "string",
            "description": "Short form of user country like bd, pk, in etc"
          },
          "user_ip": {
            "type": "string",
            "description": "Client IP address of a user."
          },
          "device_id": {
            "type": "string",
            "description": "Unique device identification of a user"
          },
          "version_name": {
            "type": "string",
            "description": "Installed app version name"
          },
          "version_code": {
            "type": "string",
            "description": "Installed app version code"
          },
          "device_model": {
            "type": "string",
            "description": "Model of that device user from uses"
          },
          "os_version": {
            "type": "string",
            "description": "Operating system running version"
          },
          "os_platform": {
            "type": "string",
            "description": "Platform of the device whatever android or iOS"
          },
          "device_manufacturer": {
            "type": "string",
            "description": "Manufacturer company of who produced the device"
          },
          "device_product": {
            "type": "string",
            "description": "Product name of the device"
          },
          "device_brand": {
            "type": "string",
            "description": "Brand name of the device"
          },
          "device_sku": {
            "type": "string",
            "description": "Device sku name of the device"
          },
          "network": {
            "type": "string",
            "description": "Which network is user connected, mobile data or wifi"
          },
          "installation_id": {
            "type": "string",
            "description": "Firebase installation id unique identification of onetime installed on that device"
          },
          "event_date": {
            "type": "string",
            "format":"date",
            "description": "Date of event"
          },
          "event_timestamp": {
            "type": "string",
            "description": "Date of timestamp"
          },
          "utm_source": {
            "type": "string",
            "description": "Campaign source"
          },
          "utm_medium": {
            "type": "string",
            "description": "Campaign medium"
          },
          "utm_campaign": {
            "type": "string",
            "description": "Campaign name"
          },
          "utm_term": {
            "type": "string",
            "description": "Campaign term"
          },
          "utm_content": {
            "type": "string",
            "description": "Campaign content"
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
    let schemas = `"screen_view": {
                "type": "object",
                "required": ${getRequiredField({properties: []})},
                "properties": ${getProperties(screen, {name: "screen_view", properties: []})}
              },`
    for (const event of screen.event) {
        if (event.name.length > 40) {
            errorEvents.push(event)
        } else {
            schemas = schemas.concat(
                `"${event.name}": {
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
generateKotlinConstraintClass(screens)

