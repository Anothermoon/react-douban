import React, { Component } from 'react'
import Login from './../../component/Login/Login'
import Register from './../../component/Register/Register'
import style from './LoginRegister.css'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'

function mapStateToProps (state) {
    return state
}

@connect(mapStateToProps)
class LoginRegister extends Component {
    render () {
        return (
            <section className={style['login-register-wrapper']}>
                <Tabs>
                    <Tab label="登陆">
                        <Login/>
                    </Tab>
                    <Tab label="注册">
                        <Register/>
                    </Tab>
                </Tabs>
            </section>
        )
    }
}

export default LoginRegister
