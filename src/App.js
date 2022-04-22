import React, {useEffect,useState} from 'react';
import './App.css';
import Chat from './components/chats';
import Contacts from './components/contacts';

function App() {

  const [messages,setMessages] = useState([])

  useEffect(()=>{
     fetch('/messages').then(res => res.json()).then(data =>{
         if(data!=null){
             setMessages(data);
         }else{
             console.log("Warning!! No messages available");
         }
     })
  },[])




  return (
    <div className="App">
      <div className='row'>
        <div className='col-md-3'>
        <Contacts/>
        </div>
        <div className='col-md-9'>
          <Chat messages={messages}/>
        </div>
      </div>
    </div>
  );
}

export default App;
