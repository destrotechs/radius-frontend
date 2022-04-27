import React, {useState,useEffect} from "react";
import TableData from "./Table";
import Alert from "./alertcomponent";
function Package(){
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch("/packages/all").then(res=>{
            if (res.ok){
                return res.json();
            }else{
                console.log("RESPONSE=======================",res);
            }
            
        }).then(data=>{
            console.log("==============DATA=================",data);
            if (data.length>0){
                setPackages(data);
            }
        })
    },[])

    return(
        <>
        {packages.length===0?<Alert mtype="danger" message="There are no packages present"/>: <TableData data={packages} page_title="Available Packages"/>}
        
        </>
        

    );
}
export default Package;