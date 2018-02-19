import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class DbHeader extends Component {
    constructor () {
        super()
        this.state = {
        }
    }

    /**
     * 点击Bar左侧图标
     */
    handleLeftIconClick = () => {
        this.props.onLeftIconClick()
    }

    render () {
        const { title } = this.props
        return (
            <AppBar
                title={title}
                onLeftIconButtonClick={this.handleLeftIconClick}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    zIndex: 999
                }}
            />
        )
    }
}

export default DbHeader