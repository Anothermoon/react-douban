import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import style from './Login.css'

class Login extends Component {
    render () {
        return (
            <div className={style['login-wrapper']}>
                <div>
                    <TextField
                        hintText="用户名"
                        errorText=""
                        floatingLabelText="用户名"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="密码"
                        errorText=""
                        floatingLabelText="密码"
                        type="password"
                        fullWidth={true}
                    />
                </div>
                <div className={style['login-btn']}>
                    <RaisedButton label="登陆" primary={true} fullWidth={true} />
                </div>
            </div>
        )
    }
}

export default Login