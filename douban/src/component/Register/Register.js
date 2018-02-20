import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import style from './Register.css'
import RaisedButton from 'material-ui/RaisedButton'
import Validation from './../../util/Validation'

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: '',
            userError: '',
            password: '',
            passwordError: '',
            repeatPassword: '',
            repeatPasswordError: ''
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
        return msg
    }

    /**
     * 验证密码输入框
     */
    validationPassword = (value) => {
        let validation = new Validation()
        validation.addRule(value, [{
            strategy: 'notNull',
            errMsg: '密码不能为空'
        }, {
            strategy: 'password',
            errMsg: '以字母开头，长度在6~18之间，只能包含字母、数字和下划线'
        }])
        let msg = validation.startValidation()
        msg ? this.setState({passwordError: msg}) : this.setState({passwordError: ''})
        return msg
    }

    /**
     * 验证密码重复输入框
     */
    validationRepeatPassword = (value) => {
        let validation = new Validation()
        validation.addRule(value, [{
            strategy: 'passwordNotRepeat',
            errMsg: '两次密码不一致'
        }])
        let msg = validation.startValidation()
        msg ? this.setState({repeatPasswordError: msg}) : this.setState({repeatPasswordError: ''})
        return msg
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

    handleRepeatPasswordChange = (event, newValue) => {
        this.setState({
            repeatPassword: newValue
        }, () => {
            let { password, repeatPassword } = this.state
            this.validationRepeatPassword([password, repeatPassword])
        })
    }

    handleRegisterBtnClick = () => {
        const { user, password, repeatPassword } = this.state
        let msg = this.validationUser(user)
        msg = this.validationPassword(password)
        msg = this.validationRepeatPassword([password, repeatPassword])
        if (msg) {
            return false
        } else {
            // ...登陆
        }
    }

    render () {
        const { user, userError, password, passwordError, repeatPassword, repeatPasswordError } = this.state
        return (
            <div className={style['register-wrapper']}>
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
                        fullWidth={true}
                        type="password"
                        value={password}
                        onChange={this.handlePasswordChange}
                    />
                    <TextField
                        hintText="再次输入密码"
                        errorText={repeatPasswordError}
                        floatingLabelText="再次输入密码"
                        fullWidth={true}
                        type="password"
                        value={repeatPassword}
                        onChange={this.handleRepeatPasswordChange}
                    />
                </div>
                <div className={style['register-btn']}>
                    <RaisedButton
                        label="注册"
                        primary={true}
                        fullWidth={true}
                        onClick={this.handleRegisterBtnClick}
                    />
                </div>
            </div>
        )
    }
}

export default Register
