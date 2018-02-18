import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import style from './CustomLink.css'

class CustomLink extends Component {
    /**
     * Link点击
     */
    handleLinkClick = () => {
        this.props.onLinkClick()
    }

    render () {
        let { to, children, ...rest } = this.props
        return (
            <Route path={to} children={({ match }) => {
                return (
                    <div>
                        <Link
                            onClick={this.handleLinkClick}
                            className={`${style['link']} ${match ? style['active-link'] : ''}`}
                            to={to}
                            {...rest}>
                            { children }
                        </Link>
                    </div>
                )
            }} />
        )
    }
}

export default CustomLink
