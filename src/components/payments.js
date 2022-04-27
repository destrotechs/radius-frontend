import React, {useEffect, useState} from "react";
import Alert from "./alertcomponent";
import TableData from "./Table";
function Payments(props){
    const [payments,setPayments] = useState([]);
    useEffect(()=>{
        fetch("/payments/all").then(res=>{
            if (res.ok){
                return res.json();
            }
            
        }).then(data=>{
            if (data.length>0){
                setPayments(data);
            }
        })
    },[])
    return(
        payments.length===0?<Alert mtype="danger" message="There are no payments to display"/>:<TableData data={payments} page_title="All Payments"/>
    )
}
export default Payments;