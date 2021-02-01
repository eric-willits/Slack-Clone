import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import db from '../../firebase';
import { NavLink } from 'react-router-dom';
import AddChannelModal from './AddChannelModal/AddChannelModal';


function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [showChannels, setShowChannels] =  useState(true);

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <SidebarOption icon="Sort">All unreads</SidebarOption>
                <SidebarOption icon="Chat">Threads</SidebarOption>
                <SidebarOption icon="AlternateEmail">Mentions</SidebarOption>
                <SidebarOption icon="BookmarkBorder">Saved items</SidebarOption>
                <SidebarOption icon="LocationSearching">Channel browser</SidebarOption>
                <SidebarOption icon="ImageSearch">File browser</SidebarOption>
                <SidebarOption icon="PeopleOutline">People & users</SidebarOption>
                <SidebarOption icon="Apps">Apps</SidebarOption>
                <SidebarOption icon={showChannels ? "ArrowDropDown" : "ArrowRight"} 
                    className="sidebar__channels-header"
                    onClick={() => setShowChannels(!showChannels)}>Channels</SidebarOption>
            </div>
            {showChannels ? (
                <div className="sidebar__channels">
                    {channels.map(channel => <NavLink to={`/channel/${channel.id}`} activeClassName="sidebar__active"><SidebarOption icon="Channel">{channel.name}</SidebarOption></NavLink>)}
                    <AddChannelModal />
                </div>
            ) : null}
        </div>
    )
}

export default Sidebar;