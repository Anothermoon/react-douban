import React, { Component } from 'react'
import style from './HotMove.css'
import LazyLoad from 'react-lazyload'
import CircularProgress from 'material-ui/CircularProgress'

class HotMovie extends Component {
    render () {
        const { title, year, images, casts } = this.props
        return (
            <li className={style['item']}>
                <div>
                    <LazyLoad
                        once
                        resize={true}
                        scroll={true}
                        height={280}
                        debounce={350}
                        placeholder={
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '170px',
                                height: '238px'
                            }}>
                                <CircularProgress size={20} thickness={1}/>
                            </div>
                        }
                    >
                        <img width="170" height="238" src={images.medium} alt=""/>
                    </LazyLoad>
                </div>
                <div className={style['text-wrapper']}>
                    <p className={style['text']}>{title}</p>
                    <p className={style['text']}>年代：{year}</p>
                    <p className={style['text']}>
                        主演：
                        {
                            casts.map((item, index) => {
                                if (index < casts.length - 1) {
                                    return (
                                        `${item.name},`
                                    )
                                } else {
                                    return (
                                        `${item.name}`
                                    )
                                }
                            })
                        }
                    </p>
                </div>
            </li>
        )
    }
}

export default HotMovie
