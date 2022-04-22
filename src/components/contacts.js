import React, { useEffect, useState } from "react";

function Contacts(){
    const [contacts,setContacts] = useState([]);
    useEffect(()=>{
        fetch('/contacts').then(res => res.json()).then(contacts=>{
            if(contacts!=null){
                setContacts(contacts)
            }else{
                console.error("There are no contacts available")
            }
        })
    },[])


   
    return(
        <div className="border p-2 m-1">
            <h4>Contacts</h4>
            {contacts.length===0?'There are no Contacts':contacts.map(contact=>
            <li>{contact.name}</li>    
            )}
        </div>
    )
}

export default Contacts;