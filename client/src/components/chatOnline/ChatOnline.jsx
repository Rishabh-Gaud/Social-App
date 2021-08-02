import "./chatOnline.css"

const ChatOnline = () => {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img src="https://pbs.twimg.com/profile_images/1173687413341937664/VB2G1AxY_400x400.jpg"
                     alt="" className="chatOnlineImg" />
                     <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Runo Misaki</span>
            </div>
        </div>
    )
}

export default ChatOnline
