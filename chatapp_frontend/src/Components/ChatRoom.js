import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import "./ChatRoom.css";

const ChatRoom=({messages,sendMessage})=>{
return(
<div>
    <Row className="px-5 py-5">
        <Col sm={12}>
            <h2 className="chatroom-heading">ChatRoom</h2>
        </Col>
        <Col>
         
        </Col>
    </Row>
    <Row className="px-5 py-5">
        <Col sm={12}>
        {console.log("chatRoom",messages)}
            <MessageContainer  messages={messages}/>
        </Col>
        <Col sm={12}>
        {console.log("chatRoom",messages)}
            <SendMessageForm sendMessage={sendMessage}/>
        </Col>
    </Row>
</div>)
};

export default ChatRoom;