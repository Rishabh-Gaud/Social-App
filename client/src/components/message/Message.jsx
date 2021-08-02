import "./message.css"
import {format} from 'timeago.js'

const Message = ({message,own}) => {
    return (
        <div className={own?"message own":"message"}>
            <div className="messageTop">
                <img 
                src="https://pbs.twimg.com/profile_images/1173687413341937664/VB2G1AxY_400x400.jpg"
                 alt=""
                  className="messageImg" />
                  <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
           </div>
    )
}

export default Message
