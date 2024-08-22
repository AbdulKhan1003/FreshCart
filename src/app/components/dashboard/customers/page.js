import React from 'react'
import Sidebar from '../sidebar/page'
import Navbar from '../navbar/page'

function Customers() {
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
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <div>
                <h2>Customers</h2>
                {/* breacrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#" className="text-inherit">
                        Dashboard
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Customers
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <a href="/components/dashboard/createcustomers" className="btn btn-primary">
                  Add New Customer
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card-lg">
              <div className="p-6">
                <div className="row justify-content-between">
                  <div className="col-md-4 col-12">
                    <form className="d-flex" role="search">
                      <label
                        htmlFor="searchCustomers"
                        className="visually-hidden"
                      >
                        Search Customers
                      </label>
                      <input
                        className="form-control"
                        type="search"
                        id="searchCustomers"
                        placeholder="Search Customers"
                        aria-label="Search"
                      />
                    </form>
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
                              id="checkAll"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkAll"
                            />
                          </div>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Purchase Date</th>
                        <th>Phone</th>
                        <th>Spent</th>
                        <th />
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
                              id="customerOne"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerOne"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-1.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Bonnie Howe
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>bonniehowe@gmail.com</td>
                        <td>17 May, 2023 at 3:18pm</td>
                        <td>-</td>
                        <td>$49.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerTwo"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerTwo"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-2.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Judy Nelson
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>judynelson@gmail.com</td>
                        <td>27 April, 2023 at 2:47pm</td>
                        <td>435-239-6436</td>
                        <td>$490.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerThree"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerThree"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-3.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                John Mattox
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>johnmattox@gmail.com</td>
                        <td>27 April, 2023 at 2:47pm</td>
                        <td>347-424-9526</td>
                        <td>$29.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerFour"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerFour"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-4.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Wayne Rossman
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>waynerossman@gmail.com</td>
                        <td>27 April, 2023 at 2:47pm</td>
                        <td>-</td>
                        <td>$39.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerFive"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerFive"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-5.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Rhonda Pinson
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>rhondapinson@gmail.com</td>
                        <td>18 March, 2023 at 2:47pm</td>
                        <td>304-471-8451</td>
                        <td>$213.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerSix"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerSix"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-6.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                John Mattox
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>johnmattox@gmail.com</td>
                        <td>18 March, 2023 at 2:47pm</td>
                        <td>410-636-2682</td>
                        <td>$490.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerSeven"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerSeven"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-7.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Wayne Rossman
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>waynerossman@gmail.com</td>
                        <td>18 March, 2023 at 2:47pm</td>
                        <td>845-294-6681</td>
                        <td>$39.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerEight"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerEight"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-8.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Richard Shelton
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>richarddhelton@jourrapide.com</td>
                        <td>12 March, 2023 at 9:47am</td>
                        <td>313-887-8495</td>
                        <td>$19.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerNine"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerNine"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-9.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Stephanie Morales
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>stephaniemorales@gmail.com</td>
                        <td>22 Feb, 2023 at 9:47pm</td>
                        <td>812-682-1588</td>
                        <td>$250.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerTen"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerTen"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-10.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Stephanie Morales
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>stephaniemorales@gmail.com</td>
                        <td>22 Feb, 2023 at 9:47pm</td>
                        <td>812-682-1588</td>
                        <td>$250.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-0">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="customerEleven"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customerEleven"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/avatar/avatar-11.jpg"
                              alt=""
                              className="avatar avatar-xs rounded-circle"
                            />
                            <div className="ms-2">
                              <a
                                href="#!"
                                className="text-inherit"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                              >
                                Pasquale Kidd
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>pasqualekidd@rhyta.com</td>
                        <td>22 Feb, 2023 at 9:47pm</td>
                        <td>336-396-0658</td>
                        <td>$159.00</td>
                        <td>
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
                                  <i className="bi bi-trash me-3" />
                                  Delete
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/components/dashboard/editcustomers"
                                >
                                  <i className="bi bi-pencil-square me-3" />
                                  Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="border-top d-md-flex justify-content-between align-items-center p-6">
                  <span>Showing 1 to 8 of 12 entries</span>
                  <nav className="mt-2 mt-md-0">
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
        </div>
      </div>
    </main>
    {/*offcanvas*/}
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Customer Details
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4">
        <div className="d-flex flex-row align-items-center gap-4 w-100">
          <div className="flex-shrink-0">
            <img
              src="/assets/images/avatar/avatar-1.jpg"
              alt="avatar"
              className="avatar avatar-xl rounded-circle"
            />
          </div>
          <div className="d-flex flex-column gap-1 flex-grow-1">
            <h3 className="mb-0 h5 d-flex flex-row gap-3">
              Anita Parmar
              <span className="badge bg-light-success text-dark-success">
                Verified
              </span>
            </h3>
            <div className="d-md-flex align-items-center justify-content-between">
              <div className="">#CU001</div>
              <div className="text-black-50">
                Last Active:
                <span className="text-dark">31 May, 2025 3:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column gap-md-6 gap-2">
          <div className="d-flex flex-row gap-2">
            <span className="text-dark fw-semibold">Email</span>
            <span className="text-black-50">anitaparmar@example.com</span>
          </div>
          <div className="d-flex flex-row gap-2">
            <span className="text-dark fw-semibold">Phone Number</span>
            <span className="text-black-50">123-456-7890</span>
          </div>
        </div>
        <div className="card rounded">
          <div className="card-body">
            <div className="row">
              <div className="border-end col-4">
                <div className="d-flex flex-column gap-1">
                  <span className="text-black-50">Join Date</span>
                  <span className="text-dark">31 May, 2024</span>
                </div>
              </div>
              <div className="border-end col-4">
                <div className="d-flex flex-column gap-1">
                  <span className="text-black-50">Total Spent</span>
                  <span className="text-dark">$105</span>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column gap-1">
                  <span className="text-black-50">Total Order</span>
                  <span className="text-dark">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="border-bottom p-4">
            <h3 className="mb-0 h6">Details</h3>
          </div>
          <div className="card-body p-4 d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-2 lh-1">
              <div className="h6 mb-0">Email</div>
              <span className="text-black-50">anitaparmar@example.com</span>
            </div>
            <div className="d-flex flex-column gap-2 lh-1">
              <div className="h6 mb-0">Phone Number</div>
              <span className="text-black-50">123-456-7890</span>
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="h6 mb-0">Address</div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    123 Apple St., Springfield, IL, 62701, USA
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    456 Banana St., Metropolis, NY, 10001, USA
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="bg-light rounded-top px-4 py-3">
            <a
              href="#"
              className="d-flex align-items-center justify-content-between text-inherit"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="d-flex flex-row align-items-center gap-2">
                <h3 className="mb-0 h5">Orders</h3>
                <span className="text-black-50 lh-1">#001</span>
              </div>
              <div className="d-flex flex-row gap-6 align-items-center">
                <div>
                  <span className="text-inherit">
                    Date:
                    <span className="text-dark">31 May, 2025</span>
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chevron-down chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="card-body py-0 px-4">
            <div
              className="accordion d-flex flex-column"
              id="accordionExample1"
            >
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample1"
              >
                <ul className="list-group list-group-flush mb-0">
                  <li className="list-group-item px-0 py-1">
                    <a
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <img
                          src="/assets/images/products/product-img-18.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />
                        <span className="h6 mb-0">Organic Banana</span>
                      </div>
                      <span className="text-black-50">$35.00</span>
                    </a>
                  </li>
                  <li className="list-group-item px-0 py-1">
                    <a
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <img
                          src="/assets/images/products/product-img-15.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />
                        <span className="h6 mb-0">Fresh Apple</span>
                      </div>
                      <span className="text-black-50">$70.00</span>
                    </a>
                  </li>
                  <li className="list-group-item px-0 py-1">
                    <a
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <img
                          src="/assets/images/products/product-img-19.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />
                        <span className="h6 mb-0">BeetRoot</span>
                      </div>
                      <span className="text-black-50">$29.00</span>
                    </a>
                  </li>
                  <li className="list-group-item px-0 py-3">
                    <div className="d-flex flex-row justify-content-between">
                      <span className="text-dark fw-semibold">
                        Total Order Amount
                      </span>
                      <span className="text-dark fw-semibold">$134.00</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="bg-light rounded-top px-4 py-3">
            <a
              href="#"
              className="d-flex align-items-center justify-content-between text-inherit"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div className="d-flex flex-row align-items-center gap-2">
                <h3 className="mb-0 h5">Orders</h3>
                <span className="text-black-50 lh-1">#002</span>
              </div>
              <div className="d-flex flex-row gap-6 align-items-center">
                <div>
                  <span className="text-inherit">
                    Date:
                    <span className="text-dark">12 May, 2025</span>
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chevron-down chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="card-body py-0 px-4">
            <div
              className="accordion d-flex flex-column"
              id="accordionExample2"
            >
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample2"
              >
                <ul className="list-group list-group-flush mb-0">
                  <li className="list-group-item px-0 py-1">
                    <a
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <img
                          src="/assets/images/products/product-img-18.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />
                        <span className="h6 mb-0">Organic Banana</span>
                      </div>
                      <span className="text-black-50">$35.00</span>
                    </a>
                  </li>
                  <li className="list-group-item px-0 py-1">
                    <a
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <img
                          src="/assets/images/products/product-img-15.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />
                        <span className="h6 mb-0">Fresh Apple</span>
                      </div>
                      <span className="text-black-50">$70.00</span>
                    </a>
                  </li>
                  <li className="list-group-item px-0 py-1">
                    <a
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <img
                          src="/assets/images/products/product-img-19.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />
                        <span className="h6 mb-0">BeetRoot</span>
                      </div>
                      <span className="text-black-50">$29.00</span>
                    </a>
                  </li>
                  <li className="list-group-item px-0 py-3">
                    <div className="d-flex flex-row justify-content-between">
                      <span className="text-dark fw-semibold">
                        Total Order Amount
                      </span>
                      <span className="text-dark fw-semibold">$134.00</span>
                    </div>
                  </li>
                </ul>
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

export default Customers
