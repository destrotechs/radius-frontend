import React, {useEffect,useState} from 'react';
import './App.css';
import './sb_admin1.min.css';
import Chat from './components/chats';
import Contacts from './components/contacts';
import Sidebar from './components/sidebar';
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
        <div className='col-md-2 bg-primary bg-gradient-primary'>
        <Sidebar/>
        </div>
        <div className='col-md-10 d-flex flex-column bg-light mt-3'>
          <Chat messages={messages}/>
        </div>
      </div>
    </div>
  );
}

export default App;
