import React, { Component } from 'react'
import style from './Comming.css'
import { connect } from 'react-redux'
import * as commingActions from './../../store/actions/commingActions'

function mapStateToProps (state) {
    return {
        commingMovieList: state.commingMovieList
    }
}

@connect(mapStateToProps, commingActions)
class Coming extends Component {

    componentWillMount () {
        this.getCommingMovieData()
    }

    getCommingMovieData = (params) => {
        this.props.getComming(params)
    }

    render () {
        return (
            <section>

            </section>
        )
    }
}

export default Coming
