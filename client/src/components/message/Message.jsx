import "./message.css"

const Message = ({own}) => {
    return (
        <div className={own?"message own":"message"}>
            <div className="messageTop">
                <img 
                src="https://pbs.twimg.com/profile_images/1173687413341937664/VB2G1AxY_400x400.jpg"
                 alt=""
                  className="messageImg" />
                  <p className="messageText">
                      Lorem ipsum dolor sit amet consectetur, adipisiloo this is a text</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
           </div>
    )
}

export default Message
