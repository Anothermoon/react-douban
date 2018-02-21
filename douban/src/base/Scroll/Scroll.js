import React, { Component } from 'react'

class Scroll extends Component {
    constructor (props) {
        super(props)
        this.scroll = this.onScroll.bind(this)
    }

    componentWillMount () {
        this.props.getData()
        window.addEventListener('scroll', this.scroll)
        window.scrollTo(0, 0)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.scroll)
    }

    onScroll () {
        let { isReq, items, total, refresh, getData } = this.props

        let body = document.querySelector('body')
        let viewHeight = document.documentElement.clientHeight
        let contentHeight = body.clientHeight
        let scrollTop = document.documentElement.scrollTop
        let maxScrollTop = contentHeight - viewHeight
        if (maxScrollTop - 100 < scrollTop && !isReq && items.length < total) {
            this.props.refresh()
            getData({
                start: items.length,
                count: 20
            })
        }
    }

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
