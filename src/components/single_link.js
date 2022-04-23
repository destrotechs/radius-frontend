import React from "react";

function SingleLink(props){
    let {menuitem} = props;
    return (
        <li className="nav-item">
          <a className="nav-link" href={menuitem.path}>
            <i className="bi bi-menu-button-wide"></i><span>{menuitem.title}</span>
          </a>
        </li>
      );

}
export default SingleLink;