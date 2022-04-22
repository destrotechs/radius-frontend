import React, { useState, useEffect } from "react";

function MessageBox(){
    
    const [usermessages,setUserMessages] = useState([])
    const [message,setMessage] = useState('');


    function handleSubmit(event){
        fetch('/messages', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"message":message}),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Response:', data);
            alert(data.message);
            setMessage('');
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    function handleChange(event){
        setMessage(event.target.value)
    }

    return(
        <>
        <form style={{"position":"fixed","bottom":0,"width":"inherit"}} >
        <div class="input-group mb-3">
            <input type="text" className="form-control" id="message" placeholder="Message ..." value={message} aria-label="Recipient's username" onChange={handleChange} aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit} id="button-addon2">send</button>
            </div>
        </form>
        </>
    )
}
export default MessageBox;