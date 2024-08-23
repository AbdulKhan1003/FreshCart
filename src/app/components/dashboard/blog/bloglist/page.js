import React from 'react'
import Navbar from '../../navbar/page'
import Sidebar from '../../sidebar/page'
import Link from 'next/link'

function BlogList() {
  return (
<>
  {/* navbar */}
  <Navbar />
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
                      <Link href="#" className="text-inherit">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <Link href="/components/dashboard/blog/addpost" className="btn btn-primary">
                  New Post
                </Link>
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
                  <option defaultValue="">Latest</option>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-1.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Quickly get a project started Bootstrap 5 Example
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-2.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Quickly get a project started Bootstrap 5 Example
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-3.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Harissa Chickpeas with Whipped Feta
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-4.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Almond Butter Chocolate Chip Zucchini Bars
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-5.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-9.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Quickly get a project started Bootstrap 5 Example
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-7.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Red Chile Chicken Tacos with Creamy Corn
                        </Link>
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
                    <Link href="/components/shopsingle">
                      <img
                        src="/assets/images/blog/blog-img-8.jpg"
                        alt="blog img"
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                      />
                    </Link>
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
                                  <i className="bi bi-eye-fill me-3" />
                                  View
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-0 h5">
                        <Link
                          href="/components/shopsingle"
                          className="text-reset"
                        >
                          Garlic Cream Bucatini with Peas and Asparagus
                        </Link>
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
    </main>
  </div>
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default BlogList
