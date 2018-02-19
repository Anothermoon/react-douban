import React, { Component } from 'react'
import { GridTile } from 'material-ui/GridList'
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
                        height={280}
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
                        <img width="170" height="238" src={images.medium}/>
                    </LazyLoad>
                </div>
                <div className={style['text-wrapper']}>
                    <p className={style['text']}>{title}</p>
                    <p className={style['text']}>{year}</p>
                    <p className={style['text']}>
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
