const express = require('express')
const app = express()
const schemas = require('./aws_schemas')
const schemaGenerator = require('./schema_generator')

app.get('/', ((req, res, next) => {
    res.send(`
    <form action="/generate-json-schema"><p style="font-size: large">Generate JSON schema <button>click here</button></p></form>
    <form action="/generate-open-api-schema"><p style="font-size: large">Generate OpenAPI schema <button>click here</button></p></form>
    <form action="/generate-kotlin-constraint"><p style="font-size: large">Generate Kotlin schema <button>click here</button></p></form>
    <form action="/write-json-schema-to-aws"><p style="font-size: large">Write JSON schema to AWS <button>click here</button></p></form>
    <form action="/write-openapi-schema-to-aws"><p style="font-size: large">Write OpenAPI Schemas to AWS <button >click here</button></p></form>
    <form action="/schema"><p style="font-size: large">AWS Schemas <button>click here</button></p></form>
    `)
}))

app.get('/generate-json-schema', ((req, res, next) => {
    try {
        const result = schemaGenerator.generateJson4Draft()
        res.json(result)
    } catch (e) {
        res.status(400).json({error: e})
    }
}))

app.get('/generate-open-api-schema', ((req, res, next) => {
    try {
        const result = schemaGenerator.generateOpenApiSchemas()
        res.json(result)
    } catch (e) {
        res.status(400).json({error: e})
    }
}))

app.get('/generate-kotlin-constraint', ((req, res, next) => {
    try {
        const result = schemaGenerator.generateConstraint()
        res.json(result)

    } catch (e) {
        res.status(400).json({error: e})
    }
}))

app.get('/write-json-schema-to-aws', (req, res, next) => {
    try {
        schemas.writeToAws('json', "JSONSchemaDraft4")
        res.json({msg: "Writing to aws, please see log"})
    } catch (e) {
        res.status(400).json({error: e})
    }
})

app.get('/write-openapi-schema-to-aws', (req, res, next) => {
    try {
        schemas.writeToAws('schemas', "OpenApi3")
        res.json({msg: "Writing to aws, please see log"})
    } catch (e) {
        res.status(400).json({error: e})
    }
})

app.get('/write-json-schema-to-aws/:name', (req, res, next) => {
    try {
        schemas.writeToAwsSpeceficFile(req.params.name, 'json', "JSONSchemaDraft4")
        res.json({msg: "Writing to aws, please see log"})
    } catch (e) {
        res.status(400).json({error: e})
    }
})

app.get('/write-openapi-schema-to-aws/:name', (req, res, next) => {
    try {
        schemas.writeToAwsSpeceficFile(req.params.name, 'schemas', "OpenApi3")
        res.json({msg: "Writing to aws, please see log"})
    } catch (e) {
        res.status(400).json({error: e})
    }
})


app.get('/schema', schemas.getRegistries)

app.get('schema/:schema', (req, res) => {
    schemas.getSchemaDetails(req.params.schema, (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
})

app.listen(3000, () => {
    console.log("Server listener 3000")
})
