# AWS EventBridge Schema Generator

This is a schema generation for AWS EventBrige which is supported by [openapi](https://swagger.io/specification/)

## How to use

<hr/>

clone the repository and defines your event properties within js object like this

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
<hr/>

```
npm start
```

# Result
<hr/>
Finally the output you're found under schemas folder.