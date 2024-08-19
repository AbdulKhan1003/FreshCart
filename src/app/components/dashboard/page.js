import React from 'react'

function Dashboard() {
  return (
<>
  {/* main */}
  <div>
    {/* navbar */}
    <nav className="navbar navbar-expand-lg navbar-glass">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <a
              className="text-inherit d-block d-xl-none me-4"
              data-bs-toggle="offcanvas"
              href="/offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-text-indent-right"
                viewBox="0 0 16 16"
              >
                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </a>
            <form role="search">
              <label htmlFor="search" className="form-label visually-hidden">
                Search
              </label>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
            </form>
          </div>
          <div>
            <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
              <li className="dropdown-center">
                <a
                  className="position-relative btn-icon btn-ghost-secondary btn rounded-circle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-bell fs-5" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                    2<span className="visually-hidden">unread messages</span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0 border-0">
                  <div className="border-bottom p-5 d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1">Notifications</h5>
                      <p className="mb-0 small">You have 2 unread messages</p>
                    </div>
                    <a href="#!" className="text-muted"></a>
                    <a
                      href="#"
                      className="btn btn-ghost-secondary btn-icon rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Mark all as read"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        fill="currentColor"
                        className="bi bi-check2-all text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                      </svg>
                    </a>
                  </div>
                  <div data-simplebar="" style={{ height: 250 }}>
                    {/* List group */}
                    <ul className="list-group list-group-flush notification-list-scroll fs-6">
                      {/* List group item */}
                      <li className="list-group-item px-5 py-4 list-group-item-action active">
                        <a href="#!" className="text-muted">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-1.jpg"
                              alt=""
                              className="avatar avatar-md rounded-circle"
                            />
                            <div className="ms-4">
                              <p className="mb-1">
                                <span className="text-dark">
                                  Your order is placed
                                </span>
                                waiting for shipping
                              </p>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-clock text-muted"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                                <small className="ms-2">1 minute ago</small>
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-5 py-4 list-group-item-action">
                        <a href="#!" className="text-muted">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-5.jpg"
                              alt=""
                              className="avatar avatar-md rounded-circle"
                            />
                            <div className="ms-4">
                              <p className="mb-1">
                                <span className="text-dark">Jitu Chauhan</span>
                                answered to your pending order list with notes
                              </p>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-clock text-muted"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                                <small className="ms-2">2 days ago</small>
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-5 py-4 list-group-item-action">
                        <a href="#!" className="text-muted">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-2.jpg"
                              alt=""
                              className="avatar avatar-md rounded-circle"
                            />
                            <div className="ms-4">
                              <p className="mb-1">
                                <span className="text-dark">
                                  You have new messages
                                </span>
                                2 unread messages
                              </p>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-clock text-muted"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                                <small className="ms-2">3 days ago</small>
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="border-top px-5 py-4 text-center">
                    <a href="#!">View All</a>
                  </div>
                </div>
              </li>
              <li className="dropdown ms-4">
                <a
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/images/avatar/avatar-1.jpg"
                    alt=""
                    className="avatar avatar-md rounded-circle"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end p-0">
                  <div className="lh-1 px-5 py-4 border-bottom">
                    <h5 className="mb-1 h6">FreshCart Admin</h5>
                    <small>admindemo@email.com</small>
                  </div>
                  <ul className="list-unstyled px-2 py-3">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="border-top px-5 py-3">
                    <a href="#">Log Out</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className="main-wrapper">
      {/* navbar vertical */}
      {/* navbar */}
      <nav className="navbar-vertical-nav d-none d-xl-block">
        <div className="navbar-vertical">
          <div className="px-4 py-5">
            <a href="../index.html" className="navbar-brand">
              <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
            </a>
          </div>
          <div
            className="navbar-vertical-content flex-grow-1"
            data-simplebar=""
          >
            <ul className="navbar-nav flex-column" id="sideNavbar">
              <li className="nav-item">
                <a className="nav-link  active " href="index.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-house" />
                    </span>
                    <span className="nav-link-text">Dashboard</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Store Managements</span>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="products.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-cart" />
                    </span>
                    <span className="nav-link-text">Products</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="categories.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-list-task" />
                    </span>
                    <span className="nav-link-text">Categories</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  collapsed "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navCategoriesOrders"
                  aria-expanded="false"
                  aria-controls="navCategoriesOrders"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-bag" />
                    </span>
                    <span className="nav-link-text">Orders</span>
                  </div>
                </a>
                <div
                  id="navCategoriesOrders"
                  className="collapse "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="order-list.html">
                        List
                      </a>
                    </li>
                    {/* Nav item */}
                    <li className="nav-item">
                      <a className="nav-link " href="order-single.html">
                        Single
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="vendor-grid.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-shop" />
                    </span>
                    <span className="nav-link-text">Sellers / Vendors</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  collapsed "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navCustomer"
                  aria-expanded="false"
                  aria-controls="navCustomer"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-people" />
                    </span>
                    <span className="nav-link-text">Customers</span>
                    <span className="badge bg-light-success text-dark-success ms-2">
                      New
                    </span>
                  </div>
                </a>
                <div
                  id="navCustomer"
                  className="collapse "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="customers.html">
                        Customers
                      </a>
                    </li>
                    {/* Nav item */}
                    <li className="nav-item">
                      <a className="nav-link " href="create-customers.html">
                        Create Customers
                      </a>
                    </li>
                    {/* Nav item */}
                    <li className="nav-item">
                      <a className="nav-link " href="customers-edits.html">
                        Edit Customers
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="reviews.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-star" />
                    </span>
                    <span className="nav-link-text">Reviews</span>
                  </div>
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a
                  className="nav-link  collapsed "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenuLevelFirst"
                  aria-expanded="false"
                  aria-controls="navMenuLevelFirst"
                >
                  <span className="nav-link-icon">
                    <i className="bi bi-arrow-90deg-down" />
                  </span>
                  <span className="nav-link-text">Menu Level</span>
                </a>
                <div
                  id="navMenuLevelFirst"
                  className="collapse "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenuLevelSecond1"
                        aria-expanded="false"
                        aria-controls="navMenuLevelSecond1"
                      >
                        Two Level
                      </a>
                      <div
                        id="navMenuLevelSecond1"
                        className="collapse"
                        data-bs-parent="#navMenuLevel"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link " href="#">
                              NavItem 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">
                              NavItem 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  collapsed "
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenuLevelThreeOne1"
                        aria-expanded="false"
                        aria-controls="navMenuLevelThreeOne1"
                      >
                        Three Level
                      </a>
                      <div
                        id="navMenuLevelThreeOne1"
                        className="collapse "
                        data-bs-parent="#navMenuLevel"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              className="nav-link  collapsed "
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#navMenuLevelThreeTwo"
                              aria-expanded="false"
                              aria-controls="navMenuLevelThreeTwo"
                            >
                              NavItem 1
                            </a>
                            <div
                              id="navMenuLevelThreeTwo"
                              className="collapse collapse "
                              data-bs-parent="#navMenuLevelThree"
                            >
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link " href="#">
                                    NavChild Item 1
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">
                              Nav Item 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Site Settings</span>
                <span className="badge bg-light-info text-dark-info">
                  Coming Soon
                </span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  collapsed "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navBlog"
                  aria-expanded="false"
                  aria-controls="navBlog"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-newspaper" />
                    </span>
                    <span className="nav-link-text">Blog</span>
                    <span className="badge bg-light-success text-dark-success ms-2">
                      New
                    </span>
                  </div>
                </a>
                <div
                  id="navBlog"
                  className="collapse "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="blog-grid.html">
                        Grid
                      </a>
                    </li>
                    {/* Nav item */}
                    <li className="nav-item">
                      <a className="nav-link " href="blog-list.html">
                        List
                      </a>
                    </li>
                    {/* Nav item */}
                    <li className="nav-item">
                      <a className="nav-link " href="blog-new-post.html">
                        Add Post
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-images" />
                    </span>
                    <span className="nav-link-text">Media</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-gear" />
                    </span>
                    <span className="nav-link-text">Store Settings</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Support</span>
                <span className="badge bg-light-info text-dark-info">
                  Coming Soon
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-headphones" />
                    </span>
                    <span className="nav-link-text">Support Ticket</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-question-circle" />
                    </span>
                    <span className="nav-link-text">Help Center</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-infinity" />
                    </span>
                    <span className="nav-link-text">How FreshCart Works</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Our Apps</span>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-apple" />
                    </span>
                    <span className="nav-link-text">Apple Store</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-google-play" />
                    </span>
                    <span className="nav-link-text">Google Play Store</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav
        className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac"
        tabIndex={-1}
        id="offcanvasExample"
      >
        <div className="navbar-vertical">
          <div className="px-4 py-5 d-flex justify-content-between align-items-center">
            <a href="../index.html" className="navbar-brand">
              <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div
            className="navbar-vertical-content flex-grow-1"
            data-simplebar=""
          >
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <a className="nav-link  active " href="index.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-house" />
                    </span>
                    <span>Dashboard</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Store Managements</span>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="products.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-cart" />
                    </span>
                    <span className="nav-link-text">Products</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="categories.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-list-task" />
                    </span>
                    <span className="nav-link-text">Categories</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  collapsed "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navOrders"
                  aria-expanded="false"
                  aria-controls="navOrders"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-bag" />
                    </span>
                    <span className="nav-link-text">Orders</span>
                  </div>
                </a>
                <div
                  id="navOrders"
                  className="collapse "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="order-list.html">
                        List
                      </a>
                    </li>
                    {/* Nav item */}
                    <li className="nav-item">
                      <a className="nav-link " href="order-single.html">
                        Single
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="vendor-grid.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-shop" />
                    </span>
                    <span className="nav-link-text">Sellers / Vendors</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="customers.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-people" />
                    </span>
                    <span className="nav-link-text">Customers</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="reviews.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-star" />
                    </span>
                    <span className="nav-link-text">Reviews</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Site Settings</span>
                <span className="badge bg-light-info text-dark-info">
                  Coming Soon
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-newspaper" />
                    </span>
                    <span className="nav-link-text">Blog</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-images" />
                    </span>
                    <span className="nav-link-text">Media</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-gear" />
                    </span>
                    <span className="nav-link-text">Store Settings</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Support</span>
                <span className="badge bg-light-info text-dark-info">
                  Coming Soon
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-headphones" />
                    </span>
                    <span className="nav-link-text">Support Ticket</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-question-circle" />
                    </span>
                    <span className="nav-link-text">Help Center</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-infinity" />
                    </span>
                    <span className="nav-link-text">How FreshCart Works</span>
                  </div>
                </a>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Our Apps</span>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-apple" />
                    </span>
                    <span className="nav-link-text">Apple Store</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-google-play" />
                    </span>
                    <span className="nav-link-text">Google Play Store</span>
                  </div>
                </a>
              </li>
              <li
                id="navMenuLevel"
                className="collapse "
                data-bs-parent="#sideNavbar"
              >
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#navMenuLevelSecond2"
                      aria-expanded="false"
                      aria-controls="navMenuLevelSecond2"
                    >
                      Two Level
                    </a>
                    <div
                      id="navMenuLevelSecond2"
                      className="collapse"
                      data-bs-parent="#navMenuLevel"
                    >
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            NavItem 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            NavItem 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  collapsed "
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#navMenuLevelThree2"
                      aria-expanded="false"
                      aria-controls="navMenuLevelThree2"
                    >
                      Three Level
                    </a>
                    <div
                      id="navMenuLevelThree2"
                      className="collapse "
                      data-bs-parent="#navMenuLevel"
                    >
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link  collapsed "
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#navMenuLevelThree3"
                            aria-expanded="false"
                            aria-controls="navMenuLevelThree3"
                          >
                            NavItem 1
                          </a>
                          <div
                            id="navMenuLevelThree3"
                            className="collapse collapse "
                            data-bs-parent="#navMenuLevelThree"
                          >
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <a className="nav-link " href="#">
                                  NavChild Item 1
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            Nav Item 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* main wrapper */}
      <main className="main-content-wrapper">
        <section className="container">
          {/* row */}
          <div className="row mb-8">
            <div className="col-md-12">
              {/* card */}
              <div
                className="card bg-light border-0 rounded-4"
                style={{
                  backgroundImage:
                    "url(../assets/images/slider/slider-image-1.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "right"
                }}
              >
                <div className="card-body p-lg-12">
                  <h1>Welcome back! FreshCart</h1>
                  <p>
                    FreshCart is simple &amp; clean design for developer and
                    designer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Create Product
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="table-responsive-xl mb-6 mb-lg-0">
            <div className="row flex-nowrap pb-3 pb-lg-0">
              <div className="col-lg-4 col-12 mb-6">
                {/* card */}
                <div className="card h-100 card-lg">
                  {/* card body */}
                  <div className="card-body p-6">
                    {/* heading */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                      <div>
                        <h4 className="mb-0 fs-5">Earnings</h4>
                      </div>
                      <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                        <i className="bi bi-currency-dollar fs-5" />
                      </div>
                    </div>
                    {/* project number */}
                    <div className="lh-1">
                      <h1 className="mb-2 fw-bold fs-2">$93,438.78</h1>
                      <span>Monthly revenue</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 mb-6">
                {/* card */}
                <div className="card h-100 card-lg">
                  {/* card body */}
                  <div className="card-body p-6">
                    {/* heading */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                      <div>
                        <h4 className="mb-0 fs-5">Orders</h4>
                      </div>
                      <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                        <i className="bi bi-cart fs-5" />
                      </div>
                    </div>
                    {/* project number */}
                    <div className="lh-1">
                      <h1 className="mb-2 fw-bold fs-2">42,339</h1>
                      <span>
                        <span className="text-dark me-1">35+</span>
                        New Sales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 mb-6">
                {/* card */}
                <div className="card h-100 card-lg">
                  {/* card body */}
                  <div className="card-body p-6">
                    {/* heading */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                      <div>
                        <h4 className="mb-0 fs-5">Customer</h4>
                      </div>
                      <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                        <i className="bi bi-people fs-5" />
                      </div>
                    </div>
                    {/* project number */}
                    <div className="lh-1">
                      <h1 className="mb-2 fw-bold fs-2">39,354</h1>
                      <span>
                        <span className="text-dark me-1">30+</span>
                        new in 2 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-xl-8 col-lg-6 col-md-12 col-12 mb-6">
              {/* card */}
              <div className="card h-100 card-lg">
                <div className="card-body p-6">
                  {/* heading */}
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="mb-1 fs-5">Revenue</h3>
                      <small>(+63%) than last year)</small>
                    </div>
                    <div>
                      {/* select option */}
                      <select className="form-select">
                        <option selected="">2019</option>
                        <option value={2023}>2020</option>
                        <option value={2024}>2021</option>
                        <option value={2025}>2022</option>
                        <option value={2025}>2023</option>
                      </select>
                    </div>
                  </div>
                  {/* chart */}
                  <div id="revenueChart" className="mt-6" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12 mb-6">
              {/* card */}
              <div className="card h-100 card-lg">
                {/* card body */}
                <div className="card-body p-6">
                  {/* heading */}
                  <h3 className="mb-0 fs-5">Total Sales</h3>
                  <div
                    id="totalSale"
                    className="mt-6 d-flex justify-content-center"
                  />
                  <div className="mt-4">
                    {/* list */}
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={8}
                          height={8}
                          fill="currentColor"
                          className="bi bi-circle-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <circle cx={8} cy={8} r={8} />
                        </svg>
                        <span className="ms-1">
                          <span className="text-dark">Shippings $32.98</span>
                          (2%)
                        </span>
                      </li>
                      <li className="mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={8}
                          height={8}
                          fill="currentColor"
                          className="bi bi-circle-fill text-warning"
                          viewBox="0 0 16 16"
                        >
                          <circle cx={8} cy={8} r={8} />
                        </svg>
                        <span className="ms-1">
                          <span className="text-dark">Refunds $11</span>
                          (11%)
                        </span>
                      </li>
                      <li className="mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={8}
                          height={8}
                          fill="currentColor"
                          className="bi bi-circle-fill text-danger"
                          viewBox="0 0 16 16"
                        >
                          <circle cx={8} cy={8} r={8} />
                        </svg>
                        <span className="ms-1">
                          <span className="text-dark">Order $14.87</span>
                          (1%)
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={8}
                          height={8}
                          fill="currentColor"
                          className="bi bi-circle-fill text-info"
                          viewBox="0 0 16 16"
                        >
                          <circle cx={8} cy={8} r={8} />
                        </svg>
                        <span className="ms-1">
                          <span className="text-dark">Income 3,271</span>
                          (86%)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
              {/* card */}
              <div className="card h-100 card-lg">
                {/* card body */}
                <div className="card-body p-6">
                  <h3 className="mb-0 fs-5">Sales Overview</h3>
                  <div className="mt-6">
                    {/* text */}
                    <div className="mb-5">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="fs-6">Total Profit</h5>
                        <span>
                          <span className="me-1 text-dark">$1,619</span>
                          (8.6%)
                        </span>
                      </div>
                      {/* main wrapper */}
                      <div>
                        {/* progressbar */}
                        <div
                          className="progress bg-light-primary"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-label="Example 1px high"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-5">
                      {/* text */}
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="fs-6">Total Income</h5>
                        <span>
                          <span className="me-1 text-dark">$3,571</span>
                          (86.4%)
                        </span>
                      </div>
                      <div>
                        {/* progressbar */}
                        <div
                          className="progress bg-info-soft"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            aria-label="Example 1px high"
                            style={{ width: "88%" }}
                            aria-valuenow={88}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* text */}
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="fs-6">Total Expenses</h5>
                        <span>
                          <span className="me-1 text-dark">$3,430</span>
                          (74.5%)
                        </span>
                      </div>
                      <div>
                        {/* progressbar */}
                        <div
                          className="progress bg-light-danger"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-label="Example 1px high"
                            style={{ width: "45%" }}
                            aria-valuenow={45}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
              <div className="position-relative h-100">
                {/* card */}
                <div className="card card-lg mb-6">
                  {/* card body */}
                  <div className="card-body px-6 py-8">
                    <div className="d-flex align-items-center">
                      <div>
                        {/* svg */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          fill="currentColor"
                          className="bi bi-bell text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                      </div>
                      {/* text */}
                      <div className="ms-4">
                        <h5 className="mb-1">
                          Start your day with New Notification.
                        </h5>
                        <p className="mb-0">
                          You have
                          <a className="link-info" href="#!">
                            2 new notification
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className="card card-lg">
                  {/* card body */}
                  <div className="card-body px-6 py-8">
                    <div className="d-flex align-items-center">
                      {/* svg */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          fill="currentColor"
                          className="bi bi-lightbulb text-success"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                        </svg>
                      </div>
                      {/* text */}
                      <div className="ms-4">
                        <h5 className="mb-1">
                          Monitor your Sales and Profitability
                        </h5>
                        <p className="mb-0">
                          <a className="link-info" href="#!">
                            View Performance
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
              <div className="card h-100 card-lg">
                {/* heading */}
                <div className="p-6">
                  <h3 className="mb-0 fs-5">Recent Order</h3>
                </div>
                <div className="card-body p-0">
                  {/* table */}
                  <div className="table-responsive">
                    <table className="table table-centered table-borderless text-nowrap table-hover">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Order Number</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Order Date</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#FC0005</td>
                          <td>Haldiram's Sev Bhujia</td>
                          <td>28 March 2023</td>
                          <td>$18.00</td>
                          <td>
                            <span className="badge bg-light-primary text-dark-primary">
                              Shipped
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#FC0004</td>
                          <td>NutriChoice Digestive</td>
                          <td>24 March 2023</td>
                          <td>$24.00</td>
                          <td>
                            <span className="badge bg-light-warning text-dark-warning">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#FC0003</td>
                          <td>Onion Flavour Potato</td>
                          <td>8 Feb 2023</td>
                          <td>$9.00</td>
                          <td>
                            <span className="badge bg-light-danger text-dark-danger">
                              Cancel
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#FC0002</td>
                          <td>Blueberry Greek Yogurt</td>
                          <td>20 Jan 2023</td>
                          <td>$12.00</td>
                          <td>
                            <span className="badge bg-light-warning text-dark-warning">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#FC0001</td>
                          <td>Slurrp Millet Chocolate</td>
                          <td>14 Jan 2023</td>
                          <td>$8.00</td>
                          <td>
                            <span className="badge bg-light-info text-dark-info">
                              Processing
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default Dashboard
