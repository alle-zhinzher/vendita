import React from 'react'

function RegisterAlerts(props) {

    return (
        <div>
            {props.errorMsg.username ?
                <h4>Username: {props.errorMsg.username}</h4>
                :
                ""
            }
            {props.errorMsg.email ?
                <h4>Email: {props.errorMsg.username}</h4>
                :
                ""
            }
            {props.errorMsg.password ?
                <h4>Password: {props.errorMsg.password}</h4>
                :
                ""
            }
            {props.passwordError ?
                <h4>Password: {props.passwordError}</h4>
                :
                ""
            }
        </div>
    )
}

export default RegisterAlerts;