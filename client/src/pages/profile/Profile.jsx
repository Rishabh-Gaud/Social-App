import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Profile() {
  const PF =process.env.REACT_APP_PUBLIC_FOLDER;


  const [user,setUser] = useState({})
const params = useParams().username;
// console.log(params.username);1

  useEffect (()=>{
    const fetchUser = async ()=> {
      
    const res  = await axios.get(`/users?username=${params}`)
       setUser(res.data);
      //  console.log(res.data);
  }
    fetchUser();
  },[params]);


  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture?PF+user.coverPicture:PF+"person/noCover.png"}
                alt="cover"
              />
              <img
                className="profileUserImg"
                src={user.profilePicture?PF+user.profilePicture:PF+"person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={params}/>
            <Rightbar user = {user}/>
          </div>
        </div>
      </div>
    </>
  );
}
