import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './Chat.css';
import Message from './Message/Message';
import { StarOutline, InfoOutlined } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase';

function Chat(){
    let { channelId } = useParams();
    const [roomDetails, setRoomDetails] = useState("");
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [{user}] = useStateValue();

    useEffect(() => {
        //get channel name
        if(channelId){
            db.collection("channels").doc(channelId).onSnapshot(snapshot => setRoomDetails(snapshot.data()))
        }
        //get channel messages
        db.collection("channels").doc(channelId)
        .collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
            message: newMessage,
            user: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userImage: user.photoURL
        });
        setNewMessage("");
    }

    const handleEnterKeyPress = e => {
        if(e.key === "Enter" && !e.shiftKey){
            sendMessage(e);
        }
    }

    return(
        <div className="chat">
            <div className="chat__top">
                <div className="chat__header">
                    <div className="chat__header-left">
                        <p className="chat__header-name">#{roomDetails?.name}</p>
                        <StarOutline className="chat__header-star"/>
                    </div>
                    <div className="chat__header-right">
                        <InfoOutlined className="chat__header-star"/>
                    </div>
                </div>
                <div className="chat__messages">
                    {messages.map(message => (
                        <Message 
                            message={message.message} 
                            timestamp={message.timestamp}
                            user={message.user} 
                            userImage={message.userImage}
                        />
                    ))}
                </div>
            </div>
            <div className="chat__input">
                <form onSubmit={e => sendMessage(e)}>
                    <textarea
                        placeholder={`message #${roomDetails?.name}`} 
                        className="chat__input-input"
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        onKeyPress={handleEnterKeyPress}
                        />
                    <button type="submit" className="chat__input-button">send</button>
                </form>
            </div>
        </div>       
    )
}

export default Chat;