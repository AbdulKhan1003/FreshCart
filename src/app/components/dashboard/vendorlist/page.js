import React from 'react'
import Sidebar from '../sidebar/page'
import Link from 'next/link'

function VendorList() {
  return (
<>
  {/* main wrapper */}
  {/* navbar */}
  <nav className="navbar navbar-expand-lg navbar-glass">
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <Link
            className="text-inherit d-block d-xl-none me-4"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
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
          </Link>
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
              <Link
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
              </Link>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0 border-0">
                <div className="border-bottom p-5 d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">Notifications</h5>
                    <p className="mb-0 small">You have 2 unread messages</p>
                  </div>
                  <Link href="#!" className="text-muted"></Link>
                  <Link
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
                  </Link>
                </div>
                <div data-simplebar="" style={{ height: 250 }}>
                  {/* List group */}
                  <ul className="list-group list-group-flush notification-list-scroll fs-6">
                    {/* List group item */}
                    <li className="list-group-item px-5 py-4 list-group-item-action active">
                      <Link href="#!" className="text-muted">
                        <div className="d-flex">
                          <img
                            src="/assets/images/avatar/avatar-1.jpg"
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
                      </Link>
                    </li>
                    <li className="list-group-item px-5 py-4 list-group-item-action">
                      <Link href="#!" className="text-muted">
                        <div className="d-flex">
                          <img
                            src="/assets/images/avatar/avatar-5.jpg"
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
                      </Link>
                    </li>
                    <li className="list-group-item px-5 py-4 list-group-item-action">
                      <Link href="#!" className="text-muted">
                        <div className="d-flex">
                          <img
                            src="/assets/images/avatar/avatar-2.jpg"
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
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="border-top px-5 py-4 text-center">
                  <Link href="#!">View All</Link>
                </div>
              </div>
            </li>
            <li className="dropdown ms-4">
              <Link
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/avatar/avatar-1.jpg"
                  alt=""
                  className="avatar avatar-md rounded-circle"
                />
              </Link>
              <div className="dropdown-menu dropdown-menu-end p-0">
                <div className="lh-1 px-5 py-4 border-bottom">
                  <h5 className="mb-1 h6">FreshCart Admin</h5>
                  <small>admindemo@email.com</small>
                </div>
                <ul className="list-unstyled px-2 py-3">
                  <li>
                    <Link className="dropdown-item" href="#!">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#!">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#!">
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="border-top px-5 py-3">
                  <Link href="#">Log Out</Link>
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
    <Sidebar />
    {/* main */}
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            {/* page header */}
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2>Vendors</h2>
                {/* breacrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="#" className="text-inherit">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Vendors
                    </li>
                  </ol>
                </nav>
              </div>
              {/* button */}
              <div>
                <Link href="/components/dashboard/vendorgrid" className="btn btn-light btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    className="bi bi-grid"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                  </svg>
                </Link>
                <Link href="/components/dashboard/vendorlist" className="btn btn-primary btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    className="bi bi-list-task"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                    />
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card-lg">
              <div className="p-6">
                <div className="row">
                  {/* search bar */}
                  <div className="col-md-4 col-12">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search Seller"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>
              {/* card body */}
              <div className="card-body p-0">
                {/* table */}
                <div className="table-responsive">
                  <table className="table table-centered table-hover text-nowrap table-borderless mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Seller Id</th>
                        <th>Store Name</th>
                        <th>Email</th>
                        <th>Gross Sale</th>
                        <th>Earning</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#010</td>
                        <td>
                          <Link href="#" className="text-reset">
                            E-Grocery Super Market
                          </Link>
                        </td>
                        <td>egrocery@dayrep.com</td>
                        <td>$200.00</td>
                        <td>$60.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#009</td>
                        <td>
                          <Link href="#" className="text-reset">
                            DealShare Mart
                          </Link>
                        </td>
                        <td>werve1962@superrito.com</td>
                        <td>$350.00</td>
                        <td>$150.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#008</td>
                        <td>
                          <Link href="#" className="text-reset">
                            DMart
                          </Link>
                        </td>
                        <td>trablinever@armyspy.com</td>
                        <td>$120.00</td>
                        <td>$45.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#007</td>
                        <td>
                          <Link href="#" className="text-reset">
                            Blinkit Store
                          </Link>
                        </td>
                        <td>steened@rhyta.com</td>
                        <td>$1200.00</td>
                        <td>$400.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#006</td>
                        <td>
                          <Link href="#" className="text-reset">
                            StoreFront Super Market
                          </Link>
                        </td>
                        <td>mansper@einrot.com</td>
                        <td>$230.00</td>
                        <td>$50.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#005</td>
                        <td>
                          <Link href="#" className="text-reset">
                            BigBasket
                          </Link>
                        </td>
                        <td>lizin@armyspy.com</td>
                        <td>$560.00</td>
                        <td>$120.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#004</td>
                        <td>
                          <Link href="#" className="text-reset">
                            Swiggy Instamart
                          </Link>
                        </td>
                        <td>tured@jourrapide.com</td>
                        <td>$780.00</td>
                        <td>$360.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#003</td>
                        <td>
                          <Link href="#" className="text-reset">
                            Online Grocery Mart
                          </Link>
                        </td>
                        <td>liturname@einrot.com</td>
                        <td>$460.00</td>
                        <td>$175.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#002</td>
                        <td>
                          <Link href="#" className="text-reset">
                            Spencer
                          </Link>
                        </td>
                        <td>fark1952@rhyta.com</td>
                        <td>$630.00</td>
                        <td>$190.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#001</td>
                        <td>
                          <Link href="#" className="text-reset">
                            E-Grocery Super Market
                          </Link>
                        </td>
                        <td>heathercarpenter@dayrep.com</td>
                        <td>$200.00</td>
                        <td>$80.00</td>
                        <td>
                          <div className="dropdown">
                            <Link
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="border-top d-md-flex justify-content-between align-items-center p-6">
                <span>Showing 1 to 8 of 12 entries</span>
                <nav className="mt-2 mt-md-0">
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#!">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" href="#!">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#!">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#!">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#!">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default VendorList
