import React, {useState, useEffect} from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import MessageBox from "./messagebox";
function Chat(props){

    const endpoint = "http://192.168.1.251:5000/messages";

    let {messages} =props
    
    return(
        <div className="border p-2 m-1">
            <h4>Messages</h4>
            {messages.length===0?'You have no messages':messages.map(message=>
            <div className="border p-2 rounded-pill m-1 text-start w-auto fw-light">{message.message}</div>    
            )}
            <br/>
            <MessageBox />
        </div>
    )
}

export default Chat;