const AWS = require('aws-sdk')
AWS.config.update({region: 'ap-southeast-1'})
const schema = new AWS.Schemas()
const registryName = "maya-events"
const path = require('path')
const fs = require('fs')

const schemaPath = path.join(__dirname, 'json')


exports.writeToAws = function writeAllSchemaToAws(folder, type) {
    fs.readdir(path.join(__dirname, folder), ((err, files) => {
        if (err) {
            console.log(err)
        } else {
            for (let file of files) {
                if (file.endsWith('.json')) {
                    let endPoint = `/${file.replace(/\.[^/.]+$/, "")}`
                    const schemaJson = require(`./${folder}/${file}`)
                    let description = ''
                    if (folder === 'json') {
                        description = schemaJson.description
                    } else {
                        schemaJson.info.description
                    }
                    const params = {
                        RegistryName: "maya-events",
                        Content: JSON.stringify(schemaJson, null, 4),
                        SchemaName: getSchemaName(endPoint),
                        Type: type,
                        Description: description
                    }
                    writeSchema(params)
                }
            }
        }
    }))
}
exports.writeToAwsSpeceficFile = function writeAllSchemaToAws(file, folder, type) {
    const schemaJson = require(`./${folder}/${file}.json`)
    let description = ''
    if (folder === 'json') {
        description = schemaJson.description
    } else {
        schemaJson.info.description
    }
    const params = {
        RegistryName: "maya-events",
        Content: JSON.stringify(schemaJson, null, 4),
        SchemaName: getSchemaName(file),
        Type: type,
        Description: description
    }
    writeSchema(params)

}

function writeSchema(params) {
    schema.createSchema(params, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

function getSchemaName(str) {
    const words = str.substr(1).split('_')
    let capitalize = ``
    for (const word of words) {
        capitalize = capitalize.concat(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    }
    return capitalize.concat("Schema")
}


exports.getSchemaDetails = function getSchemaDetails(schemaName, callback) {
    schema.describeSchema({
        SchemaName: schemaName,
        RegistryName: "maya-events"
    }, (err, data) => {
        callback(err, data)
    })
}

function getRegistryDetails() {
    schema.describeRegistry({RegistryName: registryName}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

exports.getRegistries = (req, res, next) => {
    schema.listSchemas({RegistryName: registryName, Limit: 50}, (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
}