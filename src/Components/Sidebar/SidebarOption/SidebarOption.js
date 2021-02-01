import React, { Component } from 'react'
import { Sort, Chat, AlternateEmail, BookmarkBorder, LocationSearching,  ImageSearch, PeopleOutline, Apps, ArrowDropDown, ArrowRight} from '@material-ui/icons';

import './SidebarOption.css';

export class SidebarOption extends Component {
    render() {
        let icon = null;
        if(this.props.icon === "Sort"){
            icon = <Sort />
        } else if (this.props.icon === "Chat"){
            icon = <Chat />
        } else if (this.props.icon === "AlternateEmail"){
            icon = <AlternateEmail />
        } else if (this.props.icon === "BookmarkBorder"){
            icon = <BookmarkBorder />
        } else if(this.props.icon === "LocationSearching"){
            icon = <LocationSearching />
        } else if (this.props.icon === "ImageSearch"){
            icon = <ImageSearch />
        } else if (this.props.icon === "PeopleOutline"){
            icon = <PeopleOutline />
        } else if (this.props.icon === "Apps"){
            icon = <Apps />
        } else if (this.props.icon === "ArrowDropDown"){
            icon = <ArrowDropDown className="sidebaroption__arrow"/>
        } else if (this.props.icon === "ArrowRight"){
            icon = <ArrowRight className="sidebaroption__arrow"/>
        } else if (this.props.icon === "Channel"){
            icon = <i>#</i>
        } else if (this.props.icon === "Add"){
            icon = <div className="sidebaroption__addchannel">+</div>
        }

        return (
            <div className={this.props.icon==="Channel" || this.props.icon === "Add" ? "sidebaroption sidebaroption__indent": "sidebaroption"}>
                <div className="sidebaroption__icon" onClick={this.props.onClick}>
                    {icon}
                </div>
                <p className="sidebaroption__text">{this.props.children}</p>
            </div>
        )
    }
}

export default SidebarOption;
