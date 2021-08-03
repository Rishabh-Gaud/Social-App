import axios from "axios";
import {  useEffect, useState } from "react"
import "./chatOnline.css"

const ChatOnline = ({onlineUsers,currentId,setCurrentChat}) => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;  
// const {user} = useContext(AuthContext)
    const [friends,setFriends]=useState([]);
    const [onlineFriends,setOnlineFriends]=useState([]);
    useEffect(()=>{
        const getFriends = async()=>{


            try {
                const res = await axios.get("/users/friends/"+currentId);
                setFriends(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFriends();
    },[currentId])

   const  handleClick = async(user)=>{
       try {
           const res = await axios.get(`/conversation/find/${currentId}/${user._id}`)
           setCurrentChat(res.data)
       } catch (error) {
           console.log(error);
       }
   }
useEffect(()=>{
    setOnlineFriends(friends.filter((f)=>onlineUsers.includes(f._id)))
},[friends,onlineUsers])

console.log(onlineUsers);
    return (
        <div className="chatOnline">
          {onlineFriends.map(o=>(
            <div className="chatOnlineFriend" onClick={()=>{handleClick(o)}} >
                <div className="chatOnlineImgContainer">
                    <img src={o?.profilePicture?PF+o.profilePicture:PF+"person/noAvatar.png"}
                     alt="" className="chatOnlineImg" />
                     <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{o.username}</span>
            </div>
          ))}
        </div>
    )
}

export default ChatOnline
