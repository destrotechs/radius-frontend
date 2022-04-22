import React, {useEffect,useState} from 'react';
import './App.css';
import './css/bootstrap-icons/bootstrap-icons.css';
import './css/boxicons/css/boxicons.min.css';
import './css/quill/quill.snow.css';
import './css/quill/quill.bubble.css';

import './css/remixicon/remixicon.css';
import './css/simple-datatables/style.css';
import './css/style.css';


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
        <div className='col-md-2'>
        <Sidebar/>
        </div>
        <div className='col-md-10 ml-3 mt-5'>
          <div className='wrapper mt-4 main m-2'>
            <Chat messages={messages}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
