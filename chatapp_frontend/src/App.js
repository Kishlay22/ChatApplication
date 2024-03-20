import {Col,Container,Row} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WaitingRoom from './Components/WaitingRoom';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import ChatRoom from './Components/ChatRoom';

function App() {

const [conn,setConn]=useState();
const [messages,setMessages]=useState([]);
const joinChatRoom=async(username,chatroom)=>{
  try{
    const conn=new HubConnectionBuilder()
    .withUrl("http://localhost:5172/Chat").configureLogging(LogLevel.Information)
    .build();

    conn.on("JoinSpecificCharRoom", (username,message)=>{
      console.log("message:",message);
      setMessages(messages=>[...messages,{username,message}]);
    });

    conn.on("ReceiveSpecificMessage",(username,message)=>{
        setMessages(messages=>[...messages,{username,message}]);
    })

    await conn.start();
    await conn.invoke("JoinSpecificCharRoom",{username,chatroom});

    setConn(conn);
  }
  catch(e)
  {

  }
}

const sendMessage=async(message)=>{
  try{
    await conn.invoke("SendMessage",message);
  }
  catch(e)
  {
   console.log("In App->sendMessage",e);
  }
}


  return (
    <div className="App">
     <main>
      <Container>
        <Row className='px-5 my-5'>
          <Col sm='12'>
            <h1 className='font-weignt-light text-center'>Welcome to Chit-Chat</h1>
          </Col>
        </Row>
       {!conn && <WaitingRoom joinChatRoom={joinChatRoom}/>}
       {conn && <ChatRoom messages={messages}sendMessage={sendMessage}></ChatRoom>}
      </Container>
     </main>
     
    </div>
  );
}

export default App;
