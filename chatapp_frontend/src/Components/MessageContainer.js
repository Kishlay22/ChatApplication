const MessageContainer=({messages})=>{
 return (<div className="chat-area">
     {
     console.log(messages)}
    {messages.map((msg,index)=>
    <table striped bordered>
        <tr  key={index}>
            <td className="chat-data" >{msg.message}-{msg.username}</td>
        </tr>
    </table>)}
 </div>
 )
}

export default MessageContainer;