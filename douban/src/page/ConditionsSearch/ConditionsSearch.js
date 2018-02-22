import React, { Component } from 'react'
import TypeList from './../../component/TypeList/TypeList'
import style from './ConditionsSearch.css'
import { base } from './../../public/js/base'

class ConditionsSearch extends Component {
    componentWillMount () {
    }

    render () {
        const { form, type, region } = base
        return (
            <section className={style['conditions-search-wrapper']}>
                <div className={style['type-list-wrapper']}>
                    <TypeList list={form}/>
                </div>
                <div className={style['type-list-wrapper']}>
                    <TypeList list={type}/>
                </div>
                <div className={style['type-list-wrapper']}>
                    <TypeList list={region}/>
                </div>
            </section>
        )
    }
}

export default ConditionsSearch
