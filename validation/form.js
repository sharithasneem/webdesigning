$(document).ready(function() {
    $(thisform).validate({
        rules: {
            fname: {
                required: true,
                minLength:2,
                maxLength:20,
            },
            sname: {
                required: true,
            },
            password: {
                required: true,
                minLength:4,
                maxLength:8
            },
            re_password: {
                required: true,
                equalTo: '#password',
            }

        },
        messages: {
            fname: {
                required:"please enter first name"
            }
        }
    })
    
    })
