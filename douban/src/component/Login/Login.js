import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Validation from './../../util/Validation'
import style from './Login.css'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: '',
            userError: '',
            password: '',
            passwordError: ''
        }
    }

    /**
     * 验证用户名输入框
     */
    validationUser = (value) => {
        let validation = new Validation()
        validation.addRule(value, [{
            strategy: 'notNull',
            errMsg: '用户名不能为空'
        }])
        let msg = validation.startValidation()
        msg ? this.setState({userError: msg}) : this.setState({userError: ''})
    }

    /**
     * 验证密码输入框
     */
    validationPassword = (value) => {
        let validation = new Validation()
        validation.addRule(value, [{
            strategy: 'notNull',
            errMsg: '密码不能为空'
        }])
        let msg = validation.startValidation()
        msg ? this.setState({passwordError: msg}) : this.setState({passwordError: ''})
    }

    handleUserChange = (event, newValue) => {
        this.setState({
            user: newValue
        }, () => {
            let { user } = this.state
            this.validationUser(user)
        })
    }

    handlePasswordChange = (event, newValue) => {
        this.setState({
            password: newValue
        }, () => {
            let { password } = this.state
            this.validationPassword(password)
        })
    }

    handleLoginBtnClick = () => {
        const { user, password } = this.state
        let msg = this.validationUser(user)
        msg = this.validationPassword(password)
        if (msg) {
            return false
        } else {
            // 登陆
        }
    }

    render () {
        const { user, password, userError, passwordError } = this.state
        return (
            <div className={style['login-wrapper']}>
                <div>
                    <TextField
                        hintText="用户名"
                        errorText={userError}
                        floatingLabelText="用户名"
                        fullWidth={true}
                        value={user}
                        onChange={this.handleUserChange}
                    />
                    <TextField
                        hintText="密码"
                        errorText={passwordError}
                        floatingLabelText="密码"
                        type="password"
                        fullWidth={true}
                        value={password}
                        onChange={this.handlePasswordChange}
                    />
                </div>
                <div className={style['login-btn']}>
                    <RaisedButton
                        onClick={this.handleLoginBtnClick}
                        label="登陆"
                        primary={true}
                        fullWidth={true} />
                </div>
            </div>
        )
    }
}

export default Login