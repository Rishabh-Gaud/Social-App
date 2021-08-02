import React from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Converstation from '../../components/conversation/Converstation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'

const Messenger = () => {
    return (
        <>

        <Topbar/>
        <div className="chatPage">
            
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                    <input type="text" 
                    className="chatMenuInput" 
                    placeholder="Search for Friends" />
                       <Converstation/>
                       <Converstation/>
                       <Converstation/>
                       <Converstation/>
                       <Converstation/>
                       <Converstation/>
                       <Converstation/>
                    </div>
                
                </div>
                <div className="chatBox">
                  <div className="chatBoxWrapper">
                 <div className="chatBoxTop">
                 <Message/>
                  <Message own={true}/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message own = {true}/>
                 </div>
                  
                  <div className="chatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="write something..." ></textarea>
                    <button className="chatSubmitButton">send</button>
                  </div>
                  </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                      <ChatOnline/>
                      <ChatOnline/>
                      <ChatOnline/>
                      <ChatOnline/>
                      <ChatOnline/>
                    </div>
                </div>
           
        </div>

        </>
    )
}

export default Messenger
