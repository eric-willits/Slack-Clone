import React, { useState } from 'react'
import SidebarOption from '../SidebarOption/SidebarOption';
import db from '../../../firebase';

export default function AddChannelModal() {
    const [showModal, setShowModal] = useState(false);
    const [newChannel, setNewChannel] = useState("");

    const modal = (<div className="addchannelmodal__modal">
        <form onSubmit={event => addChannel(event)}>
            <input type="text" placeholder="channel name" onChange={event => setNewChannel(event.target.value)}/>
        </form>
    </div>)

    const addChannel = event => {
        event.preventDefault();
        // Add a new document with a generated id.
        db.collection("channels").add({
            name: newChannel
        })
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            setShowModal(false);
            setNewChannel("");
        })
    }

    return ( 
        <>
            <SidebarOption 
                icon="Add"
                onClick={() => setShowModal(!showModal)}>
                add channel
            </SidebarOption>
            {showModal ? modal : null}
        </>
    )
}
