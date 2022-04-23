import React from "react";
import { Outlet, Link } from "react-router-dom";
import {menuitems} from "./menuitems";
import Navabar from "./navbar";
import MultiLink from "./multilayer_link";
import SingleLink from "./single_link";

function Sidebar(){
    return(
        <>
        <Navabar/>
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

          {menuitems.map((menuitem,index)=>{
            return (
            menuitem.children.length>0?
              <MultiLink menuitem={menuitem} index={index}/>
              :
              <SingleLink menuitem={menuitem} index={index}/>
            );
          })}
        </ul>
    
      </aside>
      </>
    )
}
export default Sidebar;