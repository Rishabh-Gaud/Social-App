import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Converstation from '../../components/conversation/Converstation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import { AuthContext } from '../../context/AuthContext'
import './messenger.css'
import axios from "axios";

const Messenger = () => {
  const {user} = useContext(AuthContext);
  const [conversation,setConversation]= useState([]);
  const [currentChat,setCurrentChat]= useState(null);
  const [messages,setMessages]= useState([]);
  const [newMessages,setNewMessages]= useState("");
  const scrollRef = useRef()
  useEffect(()=>{
    const getConversation = async()=>{
      try {
        const res = await axios.get("/conversation/"+user._id);
      setConversation(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getConversation();
  },[user]);

  useEffect(()=>{
    const getMessages = async()=>{
      try {
        const res = await axios.get("/message/"+currentChat?._id)
        setMessages(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getMessages();
  },[currentChat])
  
  const handleSubmit =async (e)=>{
    e.preventDefault();
    const  newermessage = {
      sender:user._id,
      text : newMessages,
      conversationId:currentChat._id,
    };
try {
  const res =await axios.post("/message/",newermessage);
  setMessages([...messages,res.data])
  setNewMessages("");
} catch (error) {
  console.log(error);
}

  }

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages])
  return (
        <>

        <Topbar/>
        <div className="chatPage">
            
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                    <input type="text" 
                    className="chatMenuInput" 
                    placeholder="Search for Friends" />
                      {conversation.map((c)=>(
                       
                      <div onClick={()=>{setCurrentChat(c)}}> 
                       <Converstation conversation={c} currentUser={user}/> 
                      </div>
                      ))}
                      
                    
                    
                    </div>
                
                </div>
                <div className="chatBox">
                  <div className="chatBoxWrapper">
                    {
                    currentChat
                    ?<>
                 <div className="chatBoxTop">
                   {messages.map(m=>(
                     <div ref={scrollRef}>
                        
                      <Message message={m} own = {m.sender === user._id} />
                
                     </div>
                   ))}
              
                 </div>
                  <div className="chatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="write something..."
                    onChange={(e)=>setNewMessages(e.target.value)}
                    value={newMessages}
                    >

                    </textarea>
                    <button className="chatSubmitButton"
                    onClick={handleSubmit}
                    >send</button>
                  </div></>:
                  <span className="noConversationText">Open A conversation to start a chat</span> }
                  
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
