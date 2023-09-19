import React from "react";

function NavbarDashboard() {
  return (
<div>
<div id="app">
  <div id="sidebar" className="active">
    <div className="sidebar-wrapper active">
      <div className="sidebar-header">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" srcSet="ddd" /></a>
          </div>
          <div className="toggler">
            <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
          </div>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul className="menu">
          <li className="sidebar-title">Menu</li>
          <li className="sidebar-item active ">
            <a href="index.html" className="sidebar-link">
              <i className="bi bi-grid-fill" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-stack" />
              <span>Components</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="component-alert.html">Alert</a>
              </li>
              <li className="submenu-item ">
                <a href="component-badge.html">Badge</a>
              </li>
              <li className="submenu-item ">
                <a href="component-breadcrumb.html">Breadcrumb</a>
              </li>
              <li className="submenu-item ">
                <a href="component-button.html">Button</a>
              </li>
              <li className="submenu-item ">
                <a href="component-card.html">Card</a>
              </li>
              <li className="submenu-item ">
                <a href="component-carousel.html">Carousel</a>
              </li>
              <li className="submenu-item ">
                <a href="component-dropdown.html">Dropdown</a>
              </li>
              <li className="submenu-item ">
                <a href="component-list-group.html">List Group</a>
              </li>
              <li className="submenu-item ">
                <a href="component-modal.html">Modal</a>
              </li>
              <li className="submenu-item ">
                <a href="component-navs.html">Navs</a>
              </li>
              <li className="submenu-item ">
                <a href="component-pagination.html">Pagination</a>
              </li>
              <li className="submenu-item ">
                <a href="component-progress.html">Progress</a>
              </li>
              <li className="submenu-item ">
                <a href="component-spinner.html">Spinner</a>
              </li>
              <li className="submenu-item ">
                <a href="component-tooltip.html">Tooltip</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-collection-fill" />
              <span>Extra Components</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="extra-component-avatar.html">Avatar</a>
              </li>
              <li className="submenu-item ">
                <a href="extra-component-sweetalert.html">Sweet Alert</a>
              </li>
              <li className="submenu-item ">
                <a href="extra-component-toastify.html">Toastify</a>
              </li>
              <li className="submenu-item ">
                <a href="extra-component-rating.html">Rating</a>
              </li>
              <li className="submenu-item ">
                <a href="extra-component-divider.html">Divider</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-grid-1x2-fill" />
              <span>Layouts</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="layout-default.html">Default Layout</a>
              </li>
              <li className="submenu-item ">
                <a href="layout-vertical-1-column.html">1 Column</a>
              </li>
              <li className="submenu-item ">
                <a href="layout-vertical-navbar.html">Vertical with Navbar</a>
              </li>
              <li className="submenu-item ">
                <a href="layout-horizontal.html">Horizontal Menu</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-title">Forms &amp; Tables</li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-hexagon-fill" />
              <span>Form Elements</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="form-element-input.html">Input</a>
              </li>
              <li className="submenu-item ">
                <a href="form-element-input-group.html">Input Group</a>
              </li>
              <li className="submenu-item ">
                <a href="form-element-select.html">Select</a>
              </li>
              <li className="submenu-item ">
                <a href="form-element-radio.html">Radio</a>
              </li>
              <li className="submenu-item ">
                <a href="form-element-checkbox.html">Checkbox</a>
              </li>
              <li className="submenu-item ">
                <a href="form-element-textarea.html">Textarea</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  ">
            <a href="form-layout.html" className="sidebar-link">
              <i className="bi bi-file-earmark-medical-fill" />
              <span>Form Layout</span>
            </a>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-pen-fill" />
              <span>Form Editor</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="form-editor-quill.html">Quill</a>
              </li>
              <li className="submenu-item ">
                <a href="form-editor-ckeditor.html">CKEditor</a>
              </li>
              <li className="submenu-item ">
                <a href="form-editor-summernote.html">Summernote</a>
              </li>
              <li className="submenu-item ">
                <a href="form-editor-tinymce.html">TinyMCE</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  ">
            <a href="table.html" className="sidebar-link">
              <i className="bi bi-grid-1x2-fill" />
              <span>Table</span>
            </a>
          </li>
          <li className="sidebar-item  ">
            <a href="table-datatable.html" className="sidebar-link">
              <i className="bi bi-file-earmark-spreadsheet-fill" />
              <span>Datatable</span>
            </a>
          </li>
          <li className="sidebar-title">Extra UI</li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-pentagon-fill" />
              <span>Widgets</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="ui-widgets-chatbox.html">Chatbox</a>
              </li>
              <li className="submenu-item ">
                <a href="ui-widgets-pricing.html">Pricing</a>
              </li>
              <li className="submenu-item ">
                <a href="ui-widgets-todolist.html">To-do List</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-egg-fill" />
              <span>Icons</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="ui-icons-bootstrap-icons.html">Bootstrap Icons </a>
              </li>
              <li className="submenu-item ">
                <a href="ui-icons-fontawesome.html">Fontawesome</a>
              </li>
              <li className="submenu-item ">
                <a href="ui-icons-dripicons.html">Dripicons</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-bar-chart-fill" />
              <span>Charts</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="ui-chart-chartjs.html">ChartJS</a>
              </li>
              <li className="submenu-item ">
                <a href="ui-chart-apexcharts.html">Apexcharts</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  ">
            <a href="ui-file-uploader.html" className="sidebar-link">
              <i className="bi bi-cloud-arrow-up-fill" />
              <span>File Uploader</span>
            </a>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-map-fill" />
              <span>Maps</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="ui-map-google-map.html">Google Map</a>
              </li>
              <li className="submenu-item ">
                <a href="ui-map-jsvectormap.html">JS Vector Map</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-title">Pages</li>
          <li className="sidebar-item  ">
            <a href="application-email.html" className="sidebar-link">
              <i className="bi bi-envelope-fill" />
              <span>Email Application</span>
            </a>
          </li>
          <li className="sidebar-item  ">
            <a href="application-chat.html" className="sidebar-link">
              <i className="bi bi-chat-dots-fill" />
              <span>Chat Application</span>
            </a>
          </li>
          <li className="sidebar-item  ">
            <a href="application-gallery.html" className="sidebar-link">
              <i className="bi bi-image-fill" />
              <span>Photo Gallery</span>
            </a>
          </li>
          <li className="sidebar-item  ">
            <a href="application-checkout.html" className="sidebar-link">
              <i className="bi bi-basket-fill" />
              <span>Checkout Page</span>
            </a>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-person-badge-fill" />
              <span>Authentication</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="auth-login.html">Login</a>
              </li>
              <li className="submenu-item ">
                <a href="auth-register.html">Register</a>
              </li>
              <li className="submenu-item ">
                <a href="auth-forgot-password.html">Forgot Password</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item  has-sub">
            <a href="#" className="sidebar-link">
              <i className="bi bi-x-octagon-fill" />
              <span>Errors</span>
            </a>
            <ul className="submenu ">
              <li className="submenu-item ">
                <a href="error-403.html">403</a>
              </li>
              <li className="submenu-item ">
                <a href="error-404.html">404</a>
              </li>
              <li className="submenu-item ">
                <a href="error-500.html">500</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-title">Raise Support</li>
          <li className="sidebar-item  ">
            <a href="https://zuramai.github.io/mazer/docs" className="sidebar-link">
              <i className="bi bi-life-preserver" />
              <span>Documentation</span>
            </a>
          </li>
          <li className="sidebar-item  ">
            <a href="https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md" className="sidebar-link">
              <i className="bi bi-puzzle" />
              <span>Contribute</span>
            </a>
          </li>
          <li className="sidebar-item  ">
            <a href="https://github.com/zuramai/mazer#donate" className="sidebar-link">
              <i className="bi bi-cash" />
              <span>Donate</span>
            </a>
          </li>
        </ul>
      </div>
      <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
    </div>
  </div>
  <div id="main">
    <header className="mb-3">
      <a href="#" className="burger-btn d-block d-xl-none">
        <i className="bi bi-justify fs-3" />
      </a>
    </header>
    <div className="page-heading">
      <h3>Profile Statistics</h3>
    </div>
    <div className="page-content">
      <section className="row">
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-3 py-4-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="stats-icon purple">
                        <i className="iconly-boldShow" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h6 className="text-muted font-semibold">Profile Views</h6>
                      <h6 className="font-extrabold mb-0">112.000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-3 py-4-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="stats-icon blue">
                        <i className="iconly-boldProfile" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h6 className="text-muted font-semibold">Followers</h6>
                      <h6 className="font-extrabold mb-0">183.000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-3 py-4-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="stats-icon green">
                        <i className="iconly-boldAdd-User" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h6 className="text-muted font-semibold">Following</h6>
                      <h6 className="font-extrabold mb-0">80.000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-3 py-4-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="stats-icon red">
                        <i className="iconly-boldBookmark" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h6 className="text-muted font-semibold">Saved Post</h6>
                      <h6 className="font-extrabold mb-0">112</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Profile Visit</h4>
                </div>
                <div className="card-body">
                  <div id="chart-profile-visit" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h4>Profile Visit</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <svg className="bi text-primary" width={32} height={32} fill="blue" style={{width: 10}}>
                          <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                        </svg>
                        <h5 className="mb-0 ms-3">Europe</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <h5 className="mb-0">862</h5>
                    </div>
                    <div className="col-12">
                      <div id="chart-europe" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <svg className="bi text-success" width={32} height={32} fill="blue" style={{width: 10}}>
                          <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                        </svg>
                        <h5 className="mb-0 ms-3">America</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <h5 className="mb-0">375</h5>
                    </div>
                    <div className="col-12">
                      <div id="chart-america" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <svg className="bi text-danger" width={32} height={32} fill="blue" style={{width: 10}}>
                          <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                        </svg>
                        <h5 className="mb-0 ms-3">Indonesia</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <h5 className="mb-0">1025</h5>
                    </div>
                    <div className="col-12">
                      <div id="chart-indonesia" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Comments</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-lg">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-md">
                                <img src="assets/images/faces/5.jpg" />
                              </div>
                              <p className="font-bold ms-3 mb-0">Si Cantik</p>
                            </div>
                          </td>
                          <td className="col-auto">
                            <p className=" mb-0">Congratulations on your graduation!</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-md">
                                <img src="assets/images/faces/2.jpg" />
                              </div>
                              <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                            </div>
                          </td>
                          <td className="col-auto">
                            <p className=" mb-0">Wow amazing design! Can you make another
                              tutorial for
                              this design?</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="card">
            <div className="card-body py-4 px-5">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-xl">
                  <img src="assets/images/faces/1.jpg" alt="Face 1" />
                </div>
                <div className="ms-3 name">
                  <h5 className="font-bold">John Duck</h5>
                  <h6 className="text-muted mb-0">@johnducky</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4>Recent Messages</h4>
            </div>
            <div className="card-content pb-4">
              <div className="recent-message d-flex px-4 py-3">
                <div className="avatar avatar-lg">
                  <img src="assets/images/faces/4.jpg" />
                </div>
                <div className="name ms-4">
                  <h5 className="mb-1">Hank Schrader</h5>
                  <h6 className="text-muted mb-0">@johnducky</h6>
                </div>
              </div>
              <div className="recent-message d-flex px-4 py-3">
                <div className="avatar avatar-lg">
                  <img src="assets/images/faces/5.jpg" />
                </div>
                <div className="name ms-4">
                  <h5 className="mb-1">Dean Winchester</h5>
                  <h6 className="text-muted mb-0">@imdean</h6>
                </div>
              </div>
              <div className="recent-message d-flex px-4 py-3">
                <div className="avatar avatar-lg">
                  <img src="assets/images/faces/1.jpg" />
                </div>
                <div className="name ms-4">
                  <h5 className="mb-1">John Dodol</h5>
                  <h6 className="text-muted mb-0">@dodoljohn</h6>
                </div>
              </div>
              <div className="px-4">
                <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">Start
                  Conversation</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4>Visitors Profile</h4>
            </div>
            <div className="card-body">
              <div id="chart-visitors-profile" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div className="footer clearfix mb-0 text-muted">
        <div className="float-start">
          <p>2021 © Mazer</p>
        </div>
        <div className="float-end">
          <p>Crafted with <span className="text-danger"><i className="bi bi-heart" /></span> by <a href="http://ahmadsaugi.com">A. Saugi</a></p>
        </div>
      </div>
    </footer>
  </div>
</div>

</div>

  );
}

export default NavbarDashboard;