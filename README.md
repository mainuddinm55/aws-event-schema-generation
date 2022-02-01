# AWS EventBridge Schema Generator

This is a schema generation for AWS EventBrige which is supported by [openapi](https://swagger.io/specification/)

## How to use

clone the repository and defines your event properties in `events.js` file on same path like this object

```

exports.events = [
    {
        screen: "splash_screen",
        event: [
            {
                name: "app_launch",
                properties: []
            }
        ]
    }, {
        screen: "login_screen",
        event: [
            {
                name: "login_otp_send",
                properties: [
                    {
                        name: "phone",
                        type: "string",
                        required: true
                    }, {
                        name: "utm_source",
                        type: "string"
                    }
                ]
            }
        ]
    }
]

```

# Run

```
npm start
```

# Result

Finally, the output you're found under schemas' folder.