import { useState } from "react";
import './WaitingRoom.css'
import {Row,Col,Form, Button} from 'react-bootstrap';

const WaitingRoom=({joinChatRoom})=>{
 const [user,setUser] =useState();
 const [chatroom,setChatroom]=useState();

 return <Form className="waitingForm" onSubmit={e=>{
    e.preventDefault();
    joinChatRoom(user,chatroom);
 }}>
   <Col className='px-5 py-5'>
    <Row sm={12}>

        <Form.Group className="waiting-flelds">
            <Form.Control placeholder="Username"
               onChange={e=>setUser(e.target.value)} required/>
             <Form.Control placeholder="ChatRoom"
               onChange={e=>setChatroom(e.target.value)}/>  
        </Form.Group>
    </Row>

    <Row sm={9}>
        
        <hr/><br/>
        <Button variant='success' type='submit'>Join</Button>
    </Row>
   </Col>
 </Form>
}

export default WaitingRoom;