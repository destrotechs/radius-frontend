import React ,{useEffect,useState} from "react";
import Form from "./new_form";
import Alert from "./alertcomponent";


function Newuser(props){
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch("/utilities/users").then(res=>{
            if (res.ok){
                return res.json();
            }
            
        }).then(data=>{
            if (data.length>0){
                setUsers(data);
            }
        })
    },[])
    return(
        users.length===0?<Alert mtype='danger' message="No packages"/>:<Form form_title="New User" data={users}/>
    )
}
export default Newuser;