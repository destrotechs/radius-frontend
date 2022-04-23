import React from "react";

function MultiLink(props){
    let {menuitem,index} = props;
    return (
        <li className="nav-item" key={index}>
          <a className="nav-link collapsed" data-bs-target={`#component${index}`} data-bs-toggle="collapse" href={menuitem.path===null?'#':menuitem.path}>
            <i className={menuitem.icon}></i><span>{menuitem.title}</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id={`component${index}`} className="nav-content collapse " data-bs-parent="#sidebar-nav">
            {menuitem.children.map((child,index) =>{
              return (
                <li key={index}>
                  <a href={child.path}>
                    <i className={child.icon}></i><span>{child.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      );

}
export default MultiLink;