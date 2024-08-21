import React from 'react'
import Sidebar from '../../sidebar/page'

function BlogList() {
  return (
<>
  {/* navbar */}
  <nav className="navbar navbar-expand-lg navbar-glass">
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <a
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
                      </a>
                    </li>
                    <li className="list-group-item px-5 py-4 list-group-item-action">
                      <a href="#!" className="text-muted">
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
                      </a>
                    </li>
                    <li className="list-group-item px-5 py-4 list-group-item-action">
                      <a href="#!" className="text-muted">
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
                  src="/assets/images/avatar/avatar-1.jpg"
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
    <Sidebar />
    <main className="main-content-wrapper">
      <div className="container">
        <div className="row mb-9">
          <div className="col-md-12">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <h2>Blog List</h2>
                {/* breacrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#" className="text-inherit">
                        Dashboard
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <a href="/components/dashboard/blog/addpost" className="btn btn-primary">
                  New Post
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 mb-9">
            <div className="row justify-content-between d-flex flex-md-row flex-column gap-2">
              <div className="col-lg-4 col-md-4 col-12">
                <form className="d-flex" role="search">
                  <label
                    htmlFor="postSearch"
                    className="form-label visually-hidden"
                  >
                    Search Post
                  </label>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search Post"
                    aria-label="Search"
                    id="postSearch"
                  />
                </form>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                {/* main */}
                <label
                  htmlFor="postbyDate"
                  className="form-label visually-hidden"
                >
                  Post by Date
                </label>
                <select className="form-select" id="postbyDate">
                  <option selected="">Latest</option>
                  <option value="Popular">Popular</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-6">
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-1.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-danger text-dark-danger">
                          Draft
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Quickly get a project started Bootstrap 5 Example
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">02 June, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-2.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-success text-dark-success">
                          Published
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Quickly get a project started Bootstrap 5 Example
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">1 June, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-3.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-success text-dark-success">
                          Published
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Harissa Chickpeas with Whipped Feta
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">26 May, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-4.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-success text-dark-success">
                          Published
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Almond Butter Chocolate Chip Zucchini Bars
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">24 May, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-5.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-success text-dark-success">
                          Published
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">20 May, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-9.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-success text-dark-success">
                          Published
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Quickly get a project started Bootstrap 5 Example
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center h-100">
                      <small className="">16 May, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-7.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-danger text-dark-danger">
                          Draft
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Red Chile Chicken Tacos with Creamy Corn
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">10 May, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card card-lg rounded-4 border-0 card-lift">
              <div className="row g-1 p-4">
                <div className="col-md-4">
                  <div className="img-zoom">
                    <a href="../pages/blog-single.html">
                      <img
                        src="/assets/images/blog/blog-img-8.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <span className="badge bg-light-success text-dark-success">
                          Published
                        </span>
                        <div>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="text-reset"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="feather-icon icon-more-vertical fs-5" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <a
                          href="../pages/blog-single.html"
                          className="text-reset"
                        >
                          Garlic Cream Bucatini with Peas and Asparagus
                        </a>
                      </h3>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small className="">08 May, 2024</small>
                      <small className="">
                        Read time:
                        <small className="text-dark">12min</small>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div>
              <nav className="mt-7 mt-lg-10">
                <ul className="pagination mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#!">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
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

export default BlogList
