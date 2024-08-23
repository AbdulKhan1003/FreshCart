import React from 'react'
import Sidebar from '../sidebar/page'
import Link from 'next/link'

function AddCategory() {
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
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              {/* page header */}
              <div>
                <h2>Add New Category</h2>
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
                        Categories
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add New Category
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link href="/components/dashboard/categories" className="btn btn-light">
                  Back to Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-12">
            {/* card */}
            <div className="card mb-6 shadow border-0">
              {/* card body */}
              <div className="card-body p-6">
                <h4 className="mb-5 h5">Category Image</h4>
                <div className="mb-4 d-flex">
                  <div className="position-relative">
                    <img
                      className="image icon-shape icon-xxxl bg-light rounded-4"
                      src="/assets/images/icons/bakery.svg"
                      alt="Image"
                    />
                    <div className="file-upload position-absolute end-0 top-0 mt-n2 me-n1">
                      <input type="file" className="file-input" />
                      <span className="icon-shape icon-sm rounded-circle bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="currentColor"
                          className="bi bi-pencil-fill text-muted"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="mb-4 h5 mt-5">Category Information</h4>
                <div className="row">
                  {/* input */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Category Name"
                      required=""
                    />
                  </div>
                  {/* input */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Slug</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Slug"
                      required=""
                    />
                  </div>
                  {/* input */}
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Parent Category</label>
                    <select className="form-select">
                      <option selected="">Category Name</option>
                      <option value="Dairy, Bread & Eggs">
                        Dairy, Bread &amp; Eggs
                      </option>
                      <option value="Snacks & Munchies">
                        Snacks &amp; Munchies
                      </option>
                      <option value="Fruits & Vegetables">
                        Fruits &amp; Vegetables
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Date</label>
                    <input
                      type="text"
                      className="form-control flatpickr"
                      placeholder="Select Date"
                    />
                  </div>
                  <div />
                  {/* input */}
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Descriptions</label>
                    <div className="py-8" id="editor" />
                  </div>
                  {/* input */}
                  <div className="mb-3 col-lg-12">
                    <label className="form-label" id="productSKU">
                      Status
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Active
                      </label>
                    </div>
                    {/* input */}
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Disabled
                      </label>
                    </div>
                    {/* input */}
                  </div>
                  <div className="mb-3 col-lg-12 mt-5">
                    <h4 className="mb-4 h5">Meta Data</h4>
                    {/* input */}
                    <div className="mb-3">
                      <label className="form-label">Meta Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                      />
                    </div>
                    {/* input */}
                    <div className="mb-3">
                      <label className="form-label">Meta Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Meta Description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <Link href="#" className="btn btn-primary">
                      Create Product
                    </Link>
                    <Link href="#" className="btn btn-secondary ms-2">
                      Save
                    </Link>
                  </div>
                </div>
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

export default AddCategory
