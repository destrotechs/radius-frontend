import React, {useState,useEffect} from "react";
import TableData from "./Table";
import Alert from "./alertcomponent";
function Package(){
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch("/packages").then(res=>{
            if (res.ok){
                return res.json();
            }else{
                console.log("RESPONSE=======================",res);
            }
            
        }).then(data=>{
            console.log("==============DATA=================",data);
            setPackages(data);
        })
    },[])

    return(
        <>
        {packages.length===0?<Alert mtype="danger" message="There are no packages present"/>: <TableData data={packages}/>}
        </>
        

    );
}
export default Package;