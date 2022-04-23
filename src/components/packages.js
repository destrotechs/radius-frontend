import React, {useState,useEffect} from "react";

function Package(){
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch("/packages").then(res=>res.json()).then(data=>{
            console.log("==============DATA=================",data);
            setPackages(data);
        })
    },[])

    return(
        <h2>Packages</h2>
    );
}
export default Package;