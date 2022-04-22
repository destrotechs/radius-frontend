import React from "react";
import Navabar from "./navbar";
function Sidebar(){
    return(
        <>
        <Navabar/>
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
    
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i><span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i><span>Badges</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i><span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i><span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i><span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle"></i><span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle"></i><span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle"></i><span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle"></i><span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>
    
          
    
        </ul>
    
      </aside>
      </>
    )
}
export default Sidebar;