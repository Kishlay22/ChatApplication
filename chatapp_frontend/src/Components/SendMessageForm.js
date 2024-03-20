import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SendMessageForm=({sendMessage})=>{
    const [msg,setMsg]=useState('');

    return(
        <Form onSubmit={e=>{
            e.preventDefault();
            sendMessage(msg);
            setMsg('');
        }}>
            <InputGroup className="mb-3">
                <Form.Control onChange={e=>setMsg(e.target.value)} value={msg} placeholder="type message here"></Form.Control>
                <button className="btn btn-primary" type="submit" disabled={!msg}>Send</button>
            </InputGroup>
        </Form>

    )

}

export default SendMessageForm;