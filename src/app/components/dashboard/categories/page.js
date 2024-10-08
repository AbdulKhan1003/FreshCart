import React from 'react'
import Sidebar from '../sidebar/page'
import Navbar from '../navbar/page'
import Link from 'next/link'

function Categories() {
  return (
<>
  {/* main wrapper */}
  {/* navbar */}
  <Navbar />
  <div className="main-wrapper">
    {/* navbar vertical */}
    {/* navbar */}

    <Sidebar />
    {/* main */}
    <main className="main-content-wrapper">
      <div className="container">
        {/* row */}
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              {/* pageheader */}
              <div>
                <h2>Categories</h2>
                {/* breacrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="#" className="text-inherit">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Categories
                    </li>
                  </ol>
                </nav>
              </div>
              {/* button */}
              <div>
                <Link href="/components/dashboard/addcategory" className="btn btn-primary">
                  Add New Category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            {/* card */}
            <div className="card h-100 card-lg">
              <div className="px-6 py-6">
                <div className="row justify-content-between">
                  <div className="col-lg-4 col-md-6 col-12 mb-2 mb-md-0">
                    {/* form */}
                    <form className="d-flex" role="search">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search Category"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  {/* select option */}
                  <div className="col-xl-2 col-md-4 col-12">
                    <select className="form-select">
                      <option defaultValue="">Status</option>
                      <option value="Published">Published</option>
                      <option value="Unpublished">Unpublished</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* card body */}
              <div className="card-body p-0">
                {/* table */}
                <div className="table-responsive">
                  <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
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
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Proudct</th>
                        <th>Status</th>
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
                              id="categoryOne"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryOne"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/snacks.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Snack &amp; Munchies
                          </Link>
                        </td>
                        <td>12</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryTwo"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryTwo"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/bakery.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Bakery &amp; Biscuits
                          </Link>
                        </td>
                        <td>8</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryThree"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryThree"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/baby-food.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Baby Care
                          </Link>
                        </td>
                        <td>32</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryFour"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryFour"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/wine.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Cold Drinks &amp; Juices
                          </Link>
                        </td>
                        <td>34</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryFive"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryFive"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/toiletries.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Toiletries
                          </Link>
                        </td>
                        <td>23</td>
                        <td>
                          <span className="badge bg-light-danger text-dark-danger">
                            Unpublished
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
                              id="categorySeven"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categorySeven"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/dairy.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Dairy, Bread &amp; Eggs
                          </Link>
                        </td>
                        <td>16</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryEight"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryEight"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/fish.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Chicken, Meat &amp; Fish
                          </Link>
                        </td>
                        <td>14</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryNine"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryNine"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/fruit.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Fruits &amp; Vegetables
                          </Link>
                        </td>
                        <td>32</td>
                        <td>
                          <span className="badge bg-light-primary text-dark-primary">
                            Published
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
                              id="categoryTen"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="categoryTen"
                            />
                          </div>
                        </td>
                        <td>
                          <Link href="#!">
                            <img
                              src="/assets/images/icons/petfoods.svg"
                              alt=""
                              className="icon-shape icon-sm"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="text-reset">
                            Pet Food
                          </Link>
                        </td>
                        <td>25</td>
                        <td>
                          <span className="badge bg-light-danger text-dark-danger">
                            Unpublished
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
              </div>
              <div className="border-top d-flex justify-content-between align-items-md-center px-6 py-6 flex-md-row flex-column gap-4">
                <span>Showing 1 to 8 of 12 entries</span>
                <nav>
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

export default Categories
