import React ,{useEffect,useState} from "react";
import Form from "./new_form";
import Alert from "./alertcomponent";


function Newpackage(props){
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch("/utilities/packages").then(res=>{
            if (res.ok){
                return res.json();
            }
            
        }).then(data=>{
            if (data.length>0){
                setPackages(data);
            }
        })
    },[])
    return(
        packages.length===0?<Alert mtype='danger' message="No packages"/>:<Form form_title="New Package" data={packages}/>
    )
}
export default Newpackage;