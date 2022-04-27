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
// {menuitems.map((menuitem,index)=>{
//     // return (
//      return <Route path={menuitem.path} element={getComponent(menuitem.component)}/>
//     // );
//   })}
  
//   {menuitems.map((menuitem,index)=>{
//     return (
//       menuitem.children.length===0?'':menuitem.children.map((child,index)=>{
//         // return (
//         return <Route path={child.path} element={getComponent(child.component)}/>
//         // );
//       })
//     );
//   })}