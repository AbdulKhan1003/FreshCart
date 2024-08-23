import React from 'react'
import Sidebar from '../../sidebar/page'
import Link from 'next/link'

function AddPost() {
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
        <div className="row mb-9">
          <div className="col-md-12">
            <div>
              <h2>Create a new post</h2>
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
                      Blog
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Create New Post
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form className="row g-6 needs-validation" noValidate="">
              <div className="col-lg-8 col-12">
                <div className="card card-lg">
                  <div className="card-body p-6 d-flex flex-column gap-3">
                    <div className="col-12">
                      {/* input */}
                      <label htmlFor="blognewTitle" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="blognewTitle"
                        placeholder="Post Title"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter post title
                      </div>
                    </div>
                    <div className="col-12">
                      {/* heading */}
                      <label className="form-label">Cover</label>
                      {/* input */}
                      <div
                        id="my-dropzone"
                        className="dropzone border-dashed rounded-2"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="blogdescriptionTextarea"
                        className="form-label"
                      >
                        Short Descriptions
                      </label>
                      <textarea
                        className="form-control"
                        id="blogdescriptionTextarea"
                        row={5}
                        placeholder="Write a short description"
                        required=""
                        defaultValue={""}
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Content</label>
                      <div className="py-8" id="editor" />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="card card-lg">
                  <div className="card-body p-6 d-flex flex-column gap-3">
                    <div className="col-12">
                      <div className="d-flex flex-column gap-3">
                        <div>
                          <label
                            htmlFor="validationCustom04"
                            className="form-label"
                          >
                            Category
                          </label>
                          <select
                            className="form-select"
                            id="validationCustom04"
                            required=""
                          >
                            <option defaultValue="" disabled="" value="">
                              Select Category
                            </option>
                            <option value="Recipes">Recipes</option>
                            <option value="Company">Company</option>
                            <option value="Retailer">Retailer</option>
                            <option value="Category 4">Category 4</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid category.
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className="form-label" htmlFor="tags">
                              Tags
                            </label>
                            <input
                              name="tags"
                              id="tags"
                              defaultValue='[{"value":"grocery", "editable":false}, {"value":"shop"}]'
                              className="w-100"
                              placeholder="Tags"
                              required=""
                            />
                            <div className="invalid-feedback">
                              Please enter tags
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <label
                            htmlFor="blognewContent"
                            className="form-label"
                          >
                            SEO Content
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="blognewContent"
                            placeholder="Meta Title"
                            required=""
                          />
                          <div className="invalid-feedback">
                            Please enter seo content
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="blogdeseoTextarea"
                            className="form-label visually-hidden"
                          >
                            Content
                          </label>
                          <textarea
                            className="form-control"
                            id="blogdeseoTextarea"
                            row={7}
                            placeholder="Meta Descriptions"
                            required=""
                            defaultValue={""}
                          />
                          <div className="invalid-feedback">
                            Please enter a message in the textarea.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check form-switch ps-0">
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Publish
                        </label>
                        <input
                          className="form-check-input ms-auto"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check form-switch ps-0">
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Enable comments
                        </label>
                        <input
                          className="form-check-input ms-auto"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex flex-row gap-2">
                        <button className="btn btn-primary w-100" type="submit">
                          Post
                        </button>
                        <button className="btn btn-light w-100" type="button">
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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

export default AddPost
