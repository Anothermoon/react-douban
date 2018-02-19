import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import style from './Register.css'
import RaisedButton from 'material-ui/RaisedButton'

class Register extends Component {
    render () {
        return (
            <div className={style['register-wrapper']}>
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
                        fullWidth={true}
                        type="password"
                    />
                    <TextField
                        hintText="再次输入密码"
                        errorText=""
                        floatingLabelText="再次输入密码"
                        fullWidth={true}
                        type="password"
                    />
                </div>
                <div className={style['register-btn']}>
                    <RaisedButton label="注册" primary={true} fullWidth={true} />
                </div>
            </div>
        )
    }
}

export default Register