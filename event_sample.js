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