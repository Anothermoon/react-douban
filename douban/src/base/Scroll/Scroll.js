import React, { Component } from 'react'

class Scroll extends Component {
    render () {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default Scroll
