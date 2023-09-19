import React from "react";

function NavbarDashboard() {
  return (
<div>
<div id="main-wrapper">
  {/***********************************
    Nav header start
**********************************/}
  <div className="nav-header">
    <div className="brand-logo">
      <a href="index.html">
        <b className="logo-abbr"><img src="assets-dashboard/images/logo.png" alt /> </b>
        <span className="logo-compact"><img src="assets-dashboard/images/logo-compact.png" alt /></span>
        <span className="brand-title">
          <img src="assets-dashboard/images/logo-text.png" alt />
        </span>
      </a>
    </div>
  </div>
  {/***********************************
    Nav header end
**********************************/}
  {/***********************************
    Header start
**********************************/}
  <div className="header">    
    <div className="header-content clearfix">
      <div className="nav-control">
        <div className="hamburger">
          <span className="toggle-icon"><i className="icon-menu" /></span>
        </div>
      </div>
      <div className="header-left">
        <div className="input-group icons">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i className="mdi mdi-magnify" /></span>
          </div>
          <input type="search" className="form-control" placeholder="Search Dashboard" aria-label="Search Dashboard" />
          <div className="drop-down animated flipInX d-md-none">
            <form action="#">
              <input type="text" className="form-control" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>
      <div className="header-right">
        <ul className="clearfix">
          <li className="icons dropdown d-none d-md-flex">
            <a href="javascript:void(0)" className="log-user" data-toggle="dropdown">
              <span>English</span>  <i className="fa fa-angle-down f-s-14" aria-hidden="true" />
            </a>
            <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
              <div className="dropdown-content-body">
                <ul>
                  <li><a href="javascript:void()">English</a></li>
                  <li><a href="javascript:void()">Dutch</a></li>
                </ul>
              </div>
            </div>
          </li>       
        </ul>
      </div>
    </div>
  </div>
  {/***********************************
    Header end ti-comment-alt
**********************************/}
</div>

</div>

  );
}

export default NavbarDashboard;