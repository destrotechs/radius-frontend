import React from "react";

function Alert(props){
    let {mtype,message} = props;

    let classname = 'alert alert-'+mtype+' alert-dismissible fade show';
    if (props){
        return(
            <div className={classname}>
                {message}
            </div>
        )
    }else{
        return null
    }
    
}
export default Alert;