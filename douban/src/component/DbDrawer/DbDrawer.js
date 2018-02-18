import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import CustomLink from './../../base/CustomLink/CustomLink'

class DbDrawer extends Component {

    /** 
     * Link点击 
     */
    handleLinkClik = () => {
        this.props.onCloseDrawer()
    }

    render () {
        return (
            <Drawer
                docked={false}
                width={'50%'}
                open={this.props.open}
                onRequestChange={() => this.props.onLeftIconClick()}
            >
                <MenuItem>
                    <CustomLink
                        onLinkClick={this.handleLinkClik}
                        to="/hot">
                        正在热映
                    </CustomLink>
                </MenuItem>
                <MenuItem>
                    <CustomLink
                        onLinkClick={this.handleLinkClik}
                        to="/coming">
                        即将上映
                    </CustomLink>
                </MenuItem>
                <MenuItem>
                    <CustomLink
                        onLinkClick={this.handleLinkClik}
                        to="/top250">
                        TOP250
                    </CustomLink>
                </MenuItem>
                <MenuItem>
                    <CustomLink
                        onLinkClick={this.handleLinkClik}
                        to="/publicpraise">
                        口碑榜
                    </CustomLink>
                </MenuItem>
                <MenuItem>
                    <CustomLink
                        onLinkClick={this.handleLinkClik}
                        to="/america">
                        北美票房排行
                    </CustomLink>
                </MenuItem>
                <MenuItem>
                    <CustomLink
                        onLinkClick={this.handleLinkClik}
                        to="/newmovie">
                        新片榜
                    </CustomLink>
                </MenuItem>
            </Drawer>
        )
    }
}

export default DbDrawer