import React from 'react'
import Sidebar from '../sidebar/page'
import Link from 'next/link'

function EditCustomers() {
  return (
<>
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
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <div>
                <h2>Edit Customer Name</h2>
                {/* breacrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="#" className="text-inherit">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="#" className="text-inherit">
                        Customer Name
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-8 g-5">
          <div className="col-lg-8 col-12">
            <div className="card card-lg border-0">
              <div className="card-body d-flex flex-column gap-8 p-7">
                <div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
                  <div>
                    <img
                      className="image avatar avatar-lg rounded-3"
                      src="/assets/images/docs/placeholder-img.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="file-upload btn btn-light ms-md-4">
                    <input type="file" className="file-input opacity-0" />
                    Upload Photo
                  </div>
                  <span className="ms-md-2">JPG, GIF or PNG. 1MB Max.</span>
                </div>
                <div className="d-flex flex-column gap-4">
                  <h4 className="mb-0 h6">Customer Information</h4>
                  <form className="row g-3 needs-validation" noValidate="">
                    <div className="col-lg-6 col-12">
                      <div>
                        {/* input */}
                        <label
                          htmlFor="customerEditName"
                          className="form-label"
                        >
                          Name
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="customerEditName"
                          placeholder="Customer Name"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter category name
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div>
                        {/* input */}
                        <label
                          htmlFor="customerEditEmail"
                          className="form-label"
                        >
                          Email
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="customerEditEmail"
                          placeholder="Email Address"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter email
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div>
                        {/* input */}
                        <label
                          htmlFor="customerEditPhone"
                          className="form-label"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="customerEditPhone"
                          placeholder="Number"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter phone
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <label
                        className="form-label"
                        htmlFor="customerEditBirthdate"
                      >
                        Birthday
                      </label>
                      <input
                        type="text"
                        className="form-control flatpickr"
                        id="customerEditBirthdate"
                        placeholder="dd/mm/yyyy"
                        required=""
                      />
                      <div className="invalid-feedback">Please enter date</div>
                    </div>
                    <div>
                      <div className="col-12 mt-3">
                        <div className="d-flex flex-column flex-md-row gap-2">
                          <button className="btn btn-primary" type="submit">
                            Create New Customer
                          </button>
                          <button className="btn btn-secondary" type="submit">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card card-lg border-0">
              <div className="card-body p-6 d-flex flex-column gap-6">
                <div>
                  <h4 className="mb-0 h6">Customer Details</h4>
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-row justify-content-between">
                    <span className="fw-medium text-dark">Created at</span>
                    <span className="fw-medium">8 month ago</span>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <span className="fw-medium text-dark">
                      Last modified at
                    </span>
                    <span className="fw-medium">2 month ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul
              className="nav nav-pills justify-content-center mb-6 bg-white border d-inline-flex rounded-3 p-2"
              id="myTab"
              role="tablist"
            >
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}
                <button
                  className="nav-link active"
                  id="address-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#address-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="address-tab-pane"
                  aria-selected="true"
                >
                  Address
                </button>
              </li>
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}
                <button
                  className="nav-link"
                  id="payment-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#payment-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="payment-tab-pane"
                  aria-selected="false"
                >
                  Payment
                </button>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
              {/* tab pane */}
              <div
                className="tab-pane fade show active"
                id="address-tab-pane"
                role="tabpanel"
                aria-labelledby="address-tab"
                tabIndex={0}
              >
                <div className="card h-100 card-lg">
                  <div className="p-6">
                    <div className="d-flex justify-content-between flex-row align-items-center">
                      <div>
                        <h3 className="mb-0 h6">Addresses</h3>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#address"
                        >
                          New Address
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="addressOne"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="addressOne"
                                />
                              </div>
                            </th>
                            <th>Street</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>
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
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="addressTwo"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="addressTwo"
                                />
                              </div>
                            </td>
                            <td>123 Elm St.</td>
                            <td>IL</td>
                            <td>Springfield</td>
                            <td>USA</td>
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
                    <div className="border-top d-md-flex justify-content-between align-items-center p-6">
                      <span>Showing 1 result</span>
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
              {/* tab pane */}
              <div
                className="tab-pane fade"
                id="payment-tab-pane"
                role="tabpanel"
                aria-labelledby="payment-tab"
                tabIndex={0}
              >
                <div className="card h-100 card-lg">
                  <div className="p-6">
                    <div className="d-flex justify-content-between flex-row align-items-center">
                      <div>
                        <h3 className="mb-0 h6">Payments</h3>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#payment"
                        >
                          New Payment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="paymentOne"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="paymentOne"
                                />
                              </div>
                            </th>
                            <th>Order ID</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>
                            <th>
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
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="paymentTwo"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="paymentTwo"
                                />
                              </div>
                            </td>
                            <td>#101</td>
                            <td>TXN001</td>
                            <td>17 May, 2023 at 3:18pm</td>
                            <td>$34.00</td>
                            <td>Credit Card</td>
                            <td>
                              <span className="badge bg-light-success text-dark-success">
                                Completed
                              </span>
                            </td>
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
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="paymentThree"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="paymentThree"
                                />
                              </div>
                            </td>
                            <td>#102</td>
                            <td>TXN002</td>
                            <td>17 May, 2023 at 3:18pm</td>
                            <td>$34.00</td>
                            <td>PayPal</td>
                            <td>
                              <span className="badge bg-light-warning text-dark-warning">
                                Pending
                              </span>
                            </td>
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
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="paymentFour"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="paymentFour"
                                />
                              </div>
                            </td>
                            <td>#103</td>
                            <td>TXN003</td>
                            <td>17 May, 2023 at 3:18pm</td>
                            <td>$34.00</td>
                            <td>Debit Card</td>
                            <td>
                              <span className="badge bg-light-danger text-dark-danger">
                                Failed
                              </span>
                            </td>
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
                    <div className="border-top d-md-flex justify-content-between align-items-center p-6">
                      <span>Showing 1 result</span>
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
          </div>
        </div>
      </div>
    </main>
    {/* Modal */}
    <div
      className="modal fade"
      id="address"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="addressLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content p-6 d-flex flex-column gap-6">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="modal-title" id="addressLabel">
              Create address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-0">
            <form className="row needs-validation g-3" noValidate="">
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerEditAdd" className="form-label">
                  Street
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerEditAdd"
                  placeholder="Street Address"
                  required=""
                />
                <div className="invalid-feedback">Please enter address</div>
              </div>
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerZip" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerZip"
                  placeholder="Enter Zip"
                  required=""
                />
                <div className="invalid-feedback">Please enter zip</div>
              </div>
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerCity"
                  placeholder=" City"
                  required=""
                />
                <div className="invalid-feedback">Please enter city</div>
              </div>
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerCity" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerState"
                  placeholder=" State"
                  required=""
                />
                <div className="invalid-feedback">Please enter state</div>
              </div>
              <div className="col-lg-8 col-12">
                <label htmlFor="customerCountry" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="customerCountry"
                  required=""
                >
                  <option selected="" disabled="" value="">
                    Country
                  </option>
                  <option value="India">India</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex flex-row gap-3">
            <button type="button" className="btn btn-primary">
              Create
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div
      className="modal fade"
      id="payment"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="paymentLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content p-6 d-flex flex-column gap-6">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="modal-title" id="paymentLabel">
              Create payment
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-0">
            <form className="row needs-validation g-3" noValidate="">
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerpayment" className="form-label">
                  Order*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerpayment"
                  placeholder="Order Id"
                  required=""
                />
                <div className="invalid-feedback">Please enter order id</div>
              </div>
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerTransction" className="form-label">
                  Transaction Id
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="customerTransction"
                  placeholder="Transaction Id"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter transaction id
                </div>
              </div>
              <div className="col-lg-6 col-12">
                {/* input */}
                <label htmlFor="customerAmount" className="form-label">
                  Amount*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerAmount"
                  placeholder=" Amount"
                  required=""
                />
                <div className="invalid-feedback">Please enter city</div>
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="customerStatus" className="form-label">
                  Status*
                </label>
                <select className="form-select" id="customerStatus" required="">
                  <option selected="" disabled="" value="">
                    Status
                  </option>
                  <option value="Complete">Complete</option>
                  <option value="Failed">Failed</option>
                  <option value="Pending">Pending</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid status.
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="fw-medium text-dark mb-0">Method*</span>
                <div className="d-flex flex-column flex-md-row gap-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
                    Credit Card
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio2"
                  >
                    Bank Transfer
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio3"
                  >
                    PayPal
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex flex-row gap-3">
            <button type="button" className="btn btn-primary">
              Create
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* modal */}
    <div
      className="modal fade"
      id="delete"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-6 d-flex flex-column gap-6">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-0">
            <div className="d-flex flex-column align-items-center d-flex flex-column gap-6">
              <div className="bg-danger rounded-circle icon-xl bg-light-danger text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="bi bi-trash3-fill text-danger"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
              </div>
              <div className="d-flex flex-column gap-2 text-center">
                <h3 className="mb-0 h4">Delete Customer name</h3>
                <p className="mb-0">are you sure you would like to to this?</p>
              </div>
              <div className="d-flex flex-row gap-2">
                <Link
                  href="#!"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </Link>
                <Link href="#!" className="btn btn-danger">
                  Confim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default EditCustomers
