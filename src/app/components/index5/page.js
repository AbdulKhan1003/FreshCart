import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'
import Link from 'next/link'

function Index() {
  return (
<>
  {/* navigation */}
    <Header />
  {/* Shop Cart */}
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header border-bottom">
      <div className="text-start">
        <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
          Shop Cart
        </h5>
        <small>Location in 382480</small>
      </div>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <div>
        {/* alert */}
        <div className="alert alert-danger p-2" role="alert">
          You’ve got FREE delivery. Start
          <Link href="#!" className="alert-link">
            checkout now!
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          {/* list group */}
          <li className="list-group-item py-3 ps-0 border-top">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img
                    src="../assets/images/products/product-img-1.jpg"
                    alt="Ecommerce"
                    className="icon-shape icon-xxl"
                  />
                  <div className="ms-3">
                    {/* title */}
                    <Link href="/components/shopsingle" className="text-inherit">
                      <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                    </Link>
                    <span>
                      <small className="text-muted">.98 / lb</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <Link
                        href="#!"
                        className="text-decoration-none text-inherit"
                      >
                        <span className="me-1 align-text-bottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        <span className="text-muted">Remove</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* input group */}
              <div className="col-4 col-md-3 col-lg-3">
                {/* input */}
                {/* input */}
                <div className="input-group input-spinner">
                  <input
                    type="button"
                    defaultValue="-"
                    className="button-minus btn btn-sm"
                    data-field="quantity"
                  />
                  <input
                    type="number"
                    step={1}
                    max={10}
                    defaultValue={1}
                    name="quantity"
                    className="quantity-field form-control-sm form-input"
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="button-plus btn btn-sm"
                    data-field="quantity"
                  />
                </div>
              </div>
              {/* price */}
              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                <span className="fw-bold">$5.00</span>
              </div>
            </div>
          </li>
          {/* list group */}
          <li className="list-group-item py-3 ps-0">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img
                    src="../assets/images/products/product-img-2.jpg"
                    alt="Ecommerce"
                    className="icon-shape icon-xxl"
                  />
                  <div className="ms-3">
                    <Link href="/components/shopsingle" className="text-inherit">
                      <h6 className="mb-0">NutriChoice Digestive</h6>
                    </Link>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <Link
                        href="#!"
                        className="text-decoration-none text-inherit"
                      >
                        <span className="me-1 align-text-bottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        <span className="text-muted">Remove</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* input group */}
              <div className="col-4 col-md-3 col-lg-3">
                {/* input */}
                {/* input */}
                <div className="input-group input-spinner">
                  <input
                    type="button"
                    defaultValue="-"
                    className="button-minus btn btn-sm"
                    data-field="quantity"
                  />
                  <input
                    type="number"
                    step={1}
                    max={10}
                    defaultValue={1}
                    name="quantity"
                    className="quantity-field form-control-sm form-input"
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="button-plus btn btn-sm"
                    data-field="quantity"
                  />
                </div>
              </div>
              {/* price */}
              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                <span className="fw-bold text-danger">$20.00</span>
                <div className="text-decoration-line-through text-muted small">
                  $26.00
                </div>
              </div>
            </div>
          </li>
          {/* list group */}
          <li className="list-group-item py-3 ps-0">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img
                    src="../assets/images/products/product-img-3.jpg"
                    alt="Ecommerce"
                    className="icon-shape icon-xxl"
                  />
                  <div className="ms-3">
                    {/* title */}
                    <Link href="/components/shopsingle" className="text-inherit">
                      <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                    </Link>
                    <span>
                      <small className="text-muted">1 kg</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <Link
                        href="#!"
                        className="text-decoration-none text-inherit"
                      >
                        <span className="me-1 align-text-bottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        <span className="text-muted">Remove</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* input group */}
              <div className="col-4 col-md-3 col-lg-3">
                {/* input */}
                {/* input */}
                <div className="input-group input-spinner">
                  <input
                    type="button"
                    defaultValue="-"
                    className="button-minus btn btn-sm"
                    data-field="quantity"
                  />
                  <input
                    type="number"
                    step={1}
                    max={10}
                    defaultValue={1}
                    name="quantity"
                    className="quantity-field form-control-sm form-input"
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="button-plus btn btn-sm"
                    data-field="quantity"
                  />
                </div>
              </div>
              {/* price */}
              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                <span className="fw-bold">$15.00</span>
                <div className="text-decoration-line-through text-muted small">
                  $20.00
                </div>
              </div>
            </div>
          </li>
          {/* list group */}
          <li className="list-group-item py-3 ps-0">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img
                    src="../assets/images/products/product-img-4.jpg"
                    alt="Ecommerce"
                    className="icon-shape icon-xxl"
                  />
                  <div className="ms-3">
                    {/* title */}
                    {/* title */}
                    <Link href="/components/shopsingle" className="text-inherit">
                      <h6 className="mb-0">Onion Flavour Potato</h6>
                    </Link>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <Link
                        href="#!"
                        className="text-decoration-none text-inherit"
                      >
                        <span className="me-1 align-text-bottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        <span className="text-muted">Remove</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* input group */}
              <div className="col-4 col-md-3 col-lg-3">
                {/* input */}
                {/* input */}
                <div className="input-group input-spinner">
                  <input
                    type="button"
                    defaultValue="-"
                    className="button-minus btn btn-sm"
                    data-field="quantity"
                  />
                  <input
                    type="number"
                    step={1}
                    max={10}
                    defaultValue={1}
                    name="quantity"
                    className="quantity-field form-control-sm form-input"
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="button-plus btn btn-sm"
                    data-field="quantity"
                  />
                </div>
              </div>
              {/* price */}
              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                <span className="fw-bold">$15.00</span>
                <div className="text-decoration-line-through text-muted small">
                  $20.00
                </div>
              </div>
            </div>
          </li>
          {/* list group */}
          <li className="list-group-item py-3 ps-0 border-bottom">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img
                    src="../assets/images/products/product-img-5.jpg"
                    alt="Ecommerce"
                    className="icon-shape icon-xxl"
                  />
                  <div className="ms-3">
                    {/* title */}
                    <Link href="/components/shopsingle" className="text-inherit">
                      <h6 className="mb-0">Salted Instant Popcorn</h6>
                    </Link>
                    <span>
                      <small className="text-muted">100g</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <Link
                        href="#!"
                        className="text-decoration-none text-inherit"
                      >
                        <span className="me-1 align-text-bottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        <span className="text-muted">Remove</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* input group */}
              <div className="col-4 col-md-3 col-lg-3">
                {/* input */}
                {/* input */}
                <div className="input-group input-spinner">
                  <input
                    type="button"
                    defaultValue="-"
                    className="button-minus btn btn-sm"
                    data-field="quantity"
                  />
                  <input
                    type="number"
                    step={1}
                    max={10}
                    defaultValue={1}
                    name="quantity"
                    className="quantity-field form-control-sm form-input"
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="button-plus btn btn-sm"
                    data-field="quantity"
                  />
                </div>
              </div>
              {/* price */}
              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                <span className="fw-bold">$15.00</span>
                <div className="text-decoration-line-through text-muted small">
                  $25.00
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* btn */}
        <div className="d-flex justify-content-between mt-4">
          <Link href="#!" className="btn btn-primary">
            Continue Shopping
          </Link>
          <Link href="#!" className="btn btn-dark">
            Update Cart
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="userModal"
    tabIndex={-1}
    aria-labelledby="userModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-4">
        <div className="modal-header border-0">
          <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
            Sign Up
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter Your Name"
                required=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email address"
                required=""
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                required=""
              />
              <small className="form-text">
                By Signup, you agree to our
                <Link href="#">Terms of Service</Link>
                &amp;
                <Link href="#">Privacy Policy</Link>
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <div className="modal-footer border-0 justify-content-center">
          Already have an account?
          <Link href="#">Sign in</Link>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white position-fixed bottom-0 w-100 z-1 shadow-lg d-block d-lg-none text-center">
    <div className="d-flex align-items-center">
      <div className="w-25 icon-hover py-4">
        {/* Button */}
        <button
          className="navbar-toggler collapsed d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="currentColor"
            className="bi bi-text-indent-left text-primary"
            viewBox="0 0 16 16"
          >
            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </div>
      <div className="dropdown w-25 ms-2 py-4 icon-hover">
        <Link
          href="#"
          className="text-inherit"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="text-center">
            <div className="position-relative d-inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1<span className="visually-hidden">unread messages</span>
              </span>
            </div>
          </div>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg p-0">
          <div>
            <h6 className="px-4 border-bottom py-3 mb-0">Notification</h6>
            <p className="mb-0 px-4 py-3">
              <Link href="/components/signin">Sign in</Link>
              or
              <Link href="/components/signup">Register</Link>
              in or so you don t have to enter your details every time
            </p>
          </div>
        </div>
      </div>
      <div className="w-25 ms-2 py-4 icon-hover">
        <Link
          href="#"
          className="text-inherit"
          data-bs-toggle="modal"
          data-bs-target="#userModal"
        >
          <div className="text-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-25 ms-2 py-4 icon-hover">
        <Link href="/components/orders" className="text-inherit">
          <div className="text-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="currentColor"
                className="bi bi-archive"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-25 ms-2 py-4 icon-hover">
        <Link
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasRight"
          className="text-inherit"
        >
          <div className="text-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-25 ms-2 py-4 icon-hover">
        <Link
          className="text-inherit"
          data-bs-toggle="offcanvas"
          href="#offcanvasCategory"
          role="button"
          aria-controls="offcanvasCategory"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="currentColor"
            className="bi bi-funnel"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
  <main>
    <section className="mt-8">
      <div className="container">
        <div className="hero-slider">
          <div
            style={{
              background:
                "url(../assets/images/slider/hero-img-slider-1.jpg) no-repeat",
              backgroundSize: "cover",
              borderRadius: "0.5rem",
              backgroundPosition: "center"
            }}
          >
            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
              <h1 className="text-white display-5 fw-bold mt-4">
                SuperMarket For Fresh Grocery
              </h1>
              <p className="lead text-white">
                Introduced a new model for online grocery shopping and
                convenient home delivery at any time.
              </p>
              <Link href="#!" className="btn btn-dark mt-3">
                Shop Now
                <i className="feather-icon icon-arrow-right ms-1" />
              </Link>
            </div>
          </div>
          <div
            style={{
              background:
                "url(../assets/images/slider/hero-img-slider-2.jpg) no-repeat",
              backgroundSize: "cover",
              borderRadius: "0.5rem",
              backgroundPosition: "center"
            }}
          >
            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
              <h1 className="text-dark display-5 fw-bold mt-4">
                Opening Sale
                <br />
                Discount up to
                <span className="text-primary display-6">50%</span>
              </h1>
              <p className="lead">
                Snack on late-night munchies of delicious nuts &amp; you’re
                guaranteed happiness before you doze!
              </p>
              <Link href="#!" className="btn btn-dark mt-3">
                Shop Now
                <i className="feather-icon icon-arrow-right ms-1" />
              </Link>
            </div>
          </div>
          <div
            style={{
              background:
                "url(../assets/images/slider/hero-img-slider-3.jpg) no-repeat",
              backgroundSize: "cover",
              borderRadius: "0.5rem",
              backgroundPosition: "center"
            }}
          >
            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
              <h1 className="text-dark display-5 fw-bold mt-4">
                Midnight Munch Combo
              </h1>
              <p className="lead">
                Snack on late-night munchies of delicious nuts &amp; you’re
                guaranteed happiness before you doze!
              </p>
              <Link href="#!" className="btn btn-dark mt-3">
                Shop Now
                <i className="feather-icon icon-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="mt-lg-12 mb-lg-14 mb-8">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* col */}
          <Linkside className="col-xl-3 col-lg-4 col-md-4 mb-6 mb-md-0">
            <div id="sidebar">
              <div className="sidebar__inner">
                <div
                  className="offcanvas offcanvas-start offcanvas-collapse"
                  tabIndex={-1}
                  id="offcanvasCategory"
                  aria-labelledby="offcanvasCategoryLabel"
                >
                  <div className="offcanvas-header d-lg-none">
                    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">
                      Filter
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body p-lg-0">
                    <div className="mb-4">
                      {/* title */}
                      <h3 className="mb-4 h5">Categories</h3>
                      {/* nav */}
                      <div className="card">
                        <ul
                          className="nav nav-category"
                          id="categoryCollapseMenu"
                        >
                          <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#categoryFlushOne"
                              aria-expanded="false"
                              aria-controls="categoryFlushOne"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 56 56"
                                  fill="#3d4f58"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.554 2.349c-.376.182-.407.432-.407 3.257v2.703l-3.272 4.671c-1.799 2.569-3.353 4.805-3.453 4.969-.178.292-.181.621-.182 18.059v17.76l.244.245.244.244 18.026-.065 18.026-.065.233-.232.234-.232.051-2.915c.028-1.603.028-9.593 0-17.755l-.051-14.84-3.384-5.093-3.383-5.094v-5.18l-.273-.273-.273-.273-11.09.006c-7.435.005-11.156.038-11.29.103m21.339 3.344v1.96H17.64v-3.92h20.253v1.96m-.669 3.53c-.017.042-1.331 1.953-2.92 4.247l-2.888 4.17h-9.973c-8.305 0-9.96-.021-9.898-.125.041-.069 1.375-1.98 2.963-4.247l2.888-4.121h9.93c5.461 0 9.916.034 9.898.076m4.547 4.919 2.936 4.435v24.73H32.573V18.614l3.104-4.449c1.707-2.447 3.116-4.451 3.131-4.454.015-.002 1.349 1.991 2.963 4.431m-24.938-3.129c-.257.103-.5.451-.5.716 0 .114.102.325.226.469l.225.262h7.595c7.02 0 7.614-.012 7.84-.16.493-.323.394-1.076-.17-1.291-.296-.113-14.936-.109-15.216.004m14.247 24.92v16.8H10.733v-33.6H31.08v16.8m-10.976-8.119c-3.088.33-5.696 2.571-6.593 5.666-.178.614-.21.937-.203 2.08.006 1.216.034 1.434.267 2.147.466 1.421 1.092 2.438 2.071 3.365 1.529 1.446 3.266 2.141 5.354 2.141s3.825-.695 5.354-2.141c.979-.927 1.605-1.944 2.071-3.365.234-.715.26-.929.266-2.147.007-1.548-.102-2.073-.701-3.355-1.402-3.001-4.539-4.748-7.886-4.391m2.52 1.677c2.812.719 4.817 3.514 4.595 6.404-.255 3.321-2.928 5.825-6.219 5.825a6.227 6.227 0 0 1-5.971-4.433c-1.01-3.303.992-6.923 4.31-7.792.937-.245 2.335-.247 3.285-.004m22.083 16.522v1.214H32.573V44.8h12.134v1.213m0 4.667v1.96H32.573v-3.92h12.134v1.96"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">
                                  Dairy, Bread &amp; Eggs
                                </span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* accordion collapse */}
                            <div
                              id="categoryFlushOne"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                {/* nav */}
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Milk
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Milk Drinks
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Curd &amp; Yogurt
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Eggs
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Bread
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Buns &amp; Bakery
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Butter &amp; More
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Cheese
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Paneer &amp; Tofu
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Cream &amp; Whitener
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Condensed Milk
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Vegan Drinks
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          {/* nav item */}
                          <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 56 56"
                                  fill="#3d4f58"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.553 3.46a.567.567 0 0 0-.246.502c0 .17.378 1.537.84 3.038.462 1.501.84 2.826.84 2.945 0 .119.042.326.093.461.117.309.417 3.805.607 7.094.472 8.134.292 18.735-.461 27.3l-.119 1.353-.9 2.368c-.495 1.302-.9 2.508-.9 2.68 0 .201.072.38.204.502.204.19.21.19 19.626.19 17.12 0 19.445-.016 19.622-.14.411-.288.367-.515-.623-3.176L46.2 46.06l-.138-1.587c-.508-5.834-.654-9.601-.654-16.846 0-6.477.046-8.021.376-12.694.322-4.556.305-4.454 1.356-7.825.855-2.74.932-3.044.828-3.294-.062-.151-.189-.315-.281-.364-.27-.145-4.672-.111-4.867.037-.238.181-.363.581-.264.844.181.473.381.522 2.135.522 1.259 0 1.613.026 1.579.117-.063.172-.371 1.138-.908 2.847l-.477 1.516H32.574c-8.952 0-12.375.029-12.543.106-.287.13-.462.53-.379.862.14.559-.67.526 12.721.526h12.264l-.059.63a220.588 220.588 0 0 0-.497 6.911c-.197 3.436-.226 14.449-.047 17.799.152 2.853.381 6.408.519 8.055.061.735.093 1.355.07 1.377-.022.023-7.453.041-16.511.041H11.641l.059-.677c.781-8.881.933-20.385.383-28.91-.142-2.204-.287-4.037-.379-4.783l-.055-.443 1.852-.003c1.99-.003 2.088-.025 2.266-.495.117-.308.004-.642-.289-.846-.178-.126-.524-.15-2.137-.15h-1.925L10.72 7.07l-.697-2.263 14.098-.047c7.755-.026 14.167-.08 14.25-.122.176-.088.362-.461.362-.727 0-.102-.103-.289-.229-.415l-.229-.229H8.799l-.246.193m22.633 13.916c-1.036.181-1.419.876-1.744 3.166-.264 1.858-.499 2.876-.83 3.6-.224.488-1.22 2.085-1.301 2.085-.066 0 .041-.717.334-2.24.471-2.444.316-3.265-.713-3.782-.388-.194-.595-.232-1.288-.232-1.954 0-3.675.674-5.084 1.993-1.055.987-1.705 2.046-2.139 3.485-.334 1.109-.358 2.948-.053 4.066a7.584 7.584 0 0 0 3.239 4.387c.595.379 1.759.909 1.994.909.053 0 .266.326.473.724.724 1.391 1.716 2.361 3.133 3.06 1.041.515 1.707.693 2.85.761 4.039.243 7.475-3.003 7.478-7.063.001-1.872-.544-3.225-1.411-3.5-.174-.056-.169-.08.098-.515.683-1.11 1.059-2.554 1.056-4.06-.002-1.6-.328-2.752-1.131-4.002-1.173-1.827-3.415-3.111-4.961-2.842m1.667 1.823c.953.46 1.888 1.397 2.356 2.361 1.7 3.503-.297 7.865-4.001 8.735-.795.186-2.426.142-2.945-.08-.317-.135-.362-.205-.584-.909l-.241-.763.439-.598c.241-.329.45-.598.463-.598.013 0-.021.127-.075.282-.302.868.541 1.81 1.465 1.637 1.229-.231 1.416-1.963.264-2.444-.412-.172-.676-.162-1.075.042l-.335.17.47-.699c.783-1.165 1.368-2.515 1.515-3.495l.06-.402.347.346c.457.457.872.538 1.451.282.756-.334 1.008-1.285.509-1.918-.416-.529-1.181-.676-1.739-.336l-.304.185.004-.208c.009-.488.249-1.554.404-1.791.149-.226.209-.249.51-.197.188.033.657.212 1.042.398m-6.497 2.367c.137.125.074.923-.173 2.161-.631 3.175-.542 4.352.559 7.372.286.785.545 1.605.575 1.822.051.369.037.401-.215.5-.785.308-2.289.25-3.386-.132-2.384-.829-3.94-2.896-4.086-5.429-.157-2.712 1.622-5.324 4.17-6.124.986-.309 2.306-.397 2.556-.17m5.704.369c0 .2-.271.171-.311-.033-.024-.125.014-.163.139-.139.095.018.172.095.172.172m-8.419.829c-1.068.671-.589 2.343.672 2.343.758 0 1.26-.508 1.26-1.274 0-.439-.039-.545-.311-.842-.27-.295-.377-.345-.817-.377-.391-.029-.573.005-.804.15m.801 1.19c-.081.098-.138.103-.236.021-.098-.081-.103-.137-.021-.235.081-.098.137-.103.235-.022.098.081.103.138.022.236m7.725.968c-1.076.326-1.222 1.887-.221 2.362.403.191.721.197 1.142.022.854-.357.949-1.758.149-2.223-.335-.195-.753-.258-1.07-.161m.551 1.126c.088.142-.103.308-.277.241a.149.149 0 0 1-.089-.199c.063-.166.275-.19.366-.042m-11.618.524c-1.151.605-.863 2.263.421 2.42.683.083 1.317-.432 1.404-1.14.119-.974-.963-1.733-1.825-1.28m.693 1.154c0 .073-.073.146-.163.163-.161.031-.227-.167-.099-.295.098-.098.262-.015.262.132m2.218.241c-.472.233-.71.693-.654 1.27.038.399.101.528.377.782.448.41.879.482 1.395.233.49-.237.724-.609.724-1.146-.001-.974-.967-1.571-1.842-1.139m5.627-.052c.097.155-.12.334-.249.205-.107-.108-.04-.307.104-.307.046 0 .111.046.145.102m-4.835 1.182c.051.153-.241.262-.366.137-.054-.054-.068-.146-.032-.204.082-.134.346-.089.398.067m10.982 1.428c.083.208.198.691.254 1.074.25 1.68-.414 3.475-1.767 4.772-.599.575-1.895 1.255-2.707 1.421-2.078.425-4.386-.436-5.669-2.116-.177-.233-.323-.453-.323-.49 0-.036.348-.088.773-.115 1.689-.105 2.637-.986 2.459-2.287l-.055-.397.395-.001c1.204-.002 2.289-.344 4.477-1.412.931-.455 1.764-.827 1.852-.827.099 0 .216.143.311.378m-11.21.645c-1.072.653-.588 2.337.672 2.337.709 0 1.259-.55 1.259-1.26 0-.988-1.086-1.593-1.931-1.077m8.921.832c-.322.322-.363.414-.362.817 0 .795.513 1.341 1.259 1.341.702 0 1.259-.549 1.26-1.241.001-.765-.537-1.278-1.341-1.279-.403 0-.494.041-.816.362m-8.121.352c-.081.098-.137.103-.235.021-.098-.081-.103-.137-.022-.235.081-.098.138-.103.236-.022.098.081.103.138.021.236m9.148.44c.08.097.075.154-.023.235-.098.081-.155.074-.242-.03-.113-.136-.064-.332.083-.332.042 0 .124.057.182.127m-3.237.154c-.545.125-.953.652-.953 1.232 0 .972 1.109 1.606 1.932 1.104.415-.253.604-.58.611-1.058.013-.875-.733-1.475-1.59-1.278m.494 1.218c0 .073-.074.146-.163.163-.161.031-.228-.167-.099-.295.097-.098.262-.015.262.132m-2.747.806c-1.151.605-.862 2.263.422 2.42.682.083 1.317-.432 1.403-1.14.12-.974-.963-1.733-1.825-1.28m.699 1.063c.096.155-.12.334-.249.205-.108-.108-.04-.307.104-.307.045 0 .11.046.145.102m15.886 12.7c.322.88.57 1.615.552 1.633-.018.018-8.141.022-18.051.009L10.1 50.353l.61-1.61.61-1.61 16.857.001 16.856.001.585 1.6"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">
                                  Snacks &amp; Munchies
                                </span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* collapse */}
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Chips &amp; Crisps
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Nachos
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Popcorn
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Bhujia &amp; Mixtures
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Namkeen Snacks
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Healthy Snacks
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Cakes &amp; Rolls
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Energy Bars
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Papad &amp; Fryums
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Rusks &amp; Wafers
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 56 56"
                                  fill="#3d4f58"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.552 4.492c-.866.461-1.259.989-1.259 1.691 0 .528.117.739 1.345 2.441 1.38 1.914 2.031 2.908 2.619 4l.44.817-.441.443c-.57.571-1.258 1.618-1.562 2.377-.488 1.219-.553 1.833-.484 4.552.086 3.344.063 3.438-1.322 5.563-3.071 4.71-3.467 10.38-1.059 15.17 2.11 4.199 5.779 7.017 10.451 8.028 1.317.285 4.424.309 5.74.044 1.2-.242 2.463-.661 3.593-1.194l.98-.462.234.301c.71.915 3.156 2.749 4.598 3.449 1.351.656 2.078.68 5.062.167 1.944-.334 2.488-.327 4.337.057 2.919.605 3.775.501 5.844-.71 2.809-1.644 4.954-3.989 6.433-7.033 1.184-2.436 1.726-4.8 1.726-7.529 0-5.719-2.753-10.986-7.364-14.089-1.117-.752-2.25-1.345-2.748-1.438l-.344-.065.306-.339c1.465-1.622 2.695-4.262 3.013-6.47l.063-.437-.36-.03c-.345-.028-.361-.044-.389-.393l-.03-.364-.904.057a8.632 8.632 0 0 0-5.733 2.661c-.295.309-.537.534-.537.499-.001-.034-.064-.751-.141-1.592-.161-1.741-.302-2.174-.844-2.587-.311-.238-.446-.274-1.117-.303-.63-.026-.829.002-1.142.161-.777.396-.981.914-.864 2.186.044.472.103 1.142.13 1.487l.051.628-.683-.683c-1.416-1.416-3.251-2.255-5.362-2.451l-.666-.062-.738-1.41c-2.178-4.161-3.174-5.38-5.154-6.307-1.09-.51-1.935-.678-3.443-.686-1.828-.01-3.34.312-4.9 1.042a9.268 9.268 0 0 1-1.4.511c-.36.089-.962.307-1.34.485-.377.179-.723.302-.768.274-.045-.028-.469-.557-.943-1.174-.586-.767-.971-1.18-1.211-1.303-.481-.245-1.233-.236-1.713.02m2.094 2.643a50.969 50.969 0 0 1 1.627 2.227c.562.842 1.607 2.753 1.538 2.814-.085.076-.845.433-.865.407a49.22 49.22 0 0 1-.518-.916c-.589-1.054-1.261-2.071-2.63-3.975-.556-.774-1.011-1.457-1.011-1.518 0-.15.554-.477.708-.418.068.026.586.647 1.151 1.379m11.561-.924c.396.08 1.073.312 1.506.517.65.308.924.513 1.587 1.185.776.787 1.151 1.344 2.241 3.324l.303.551-.639-.065c-3.356-.339-6.537-1.796-8.756-4.013-.52-.519-.88-.946-.815-.968.16-.053 1.526.225 2.259.461 1.281.411 2.653 1.054 3.641 1.707.563.371 1.045.654 1.071.627.146-.145-.034-.347-.799-.894-.994-.711-2.754-1.615-4.006-2.058l-.887-.313.374-.062c.205-.034.436-.076.513-.092.407-.086 1.778-.033 2.407.093M13.66 7.966c1.401 1.737 3.681 3.322 6.046 4.201 1.675.623 3.918 1.084 5.287 1.088.803.002.954.064.954.391 0 .894.68 3.212 1.311 4.467.426.848 1.333 2.136 2.049 2.91.592.641.643.724.444.724-.498 0-1.203.309-2.085.915l-.928.638-.793-.551c-.435-.303-1.38-.848-2.098-1.212-1.102-.558-1.404-.76-1.925-1.286-.772-.781-1.097-1.434-1.528-3.067-.445-1.682-.816-2.371-1.818-3.374-1.393-1.395-2.794-1.961-4.97-2.012l-1.281-.03-.544-1.054c-.3-.58-.824-1.484-1.167-2.01l-.621-.957.207-.135c.386-.253 1.138-.552 1.793-.714l.654-.162.186.218c.103.119.475.575.827 1.012m1.273 5.433c1.492.35 2.805 1.337 3.47 2.608.188.359.452 1.087.586 1.616.437 1.726.743 2.384 1.555 3.351.598.712 1.395 1.288 2.556 1.848.565.272 1.356.71 1.758.973l.732.479-.638.674c-3.328 3.512-5.01 8.519-4.507 13.415.281 2.742 1.276 5.584 2.694 7.694l.479.713-.866.409c-1.863.881-3.618 1.215-5.994 1.14-2.274-.072-3.719-.439-5.695-1.447-3.677-1.875-6.298-5.395-7.104-9.539-.257-1.322-.234-3.725.049-5.034.428-1.982 1.088-3.53 2.284-5.359.82-1.254.906-1.417 1.185-2.253.211-.631.219-.763.225-3.734.005-2.719.025-3.14.175-3.593.432-1.304 1.033-2.154 2-2.833.859-.602 1.179-.773 1.976-1.051.745-.26 2.153-.295 3.08-.077m21.083.064c.081.219.109.498.336 3.311l.138 1.701-.268.679c-.146.374-.284.739-.306.812-.022.072-.149-.18-.283-.56-.222-.629-.249-.867-.302-2.606-.032-1.052-.094-2.249-.138-2.66-.044-.411-.061-.778-.038-.817.024-.038.209-.07.413-.07.298 0 .385.041.448.21m-7.036 1.346c.308.075.896.299 1.307.498 1.822.883 3.144 2.497 3.972 4.847.296.84.779 2.799.708 2.87-.01.01-.407-.166-.882-.392-2.548-1.21-4.469-3.093-5.616-5.505-.347-.728-.842-2.16-.842-2.433 0-.154.379-.122 1.353.115m15.111.008c-.127.551-.53 1.677-.836 2.339-1.045 2.262-3.088 4.279-5.504 5.432-1.073.512-1.086.509-.92-.211.414-1.805 1.18-3.749 1.84-4.671 1.147-1.604 2.636-2.606 4.459-3.002.937-.203 1.031-.192.961.113m-.7 8.239c.482.256 1.217.707 1.633 1.002 1.007.713 2.66 2.385 3.44 3.478 1.207 1.69 2.219 4.091 2.656 6.297.262 1.32.232 4.607-.052 5.927-.456 2.109-1.295 4.096-2.452 5.805-.801 1.182-2.749 3.126-3.894 3.886-.479.318-1.235.755-1.68.973-.765.373-.852.394-1.602.387-.519-.005-1.293-.115-2.24-.317-1.943-.415-3.19-.427-5.133-.046-.898.175-1.668.267-2.288.272-.927.007-.941.003-1.82-.425a14.925 14.925 0 0 1-1.726-1.026c-1.094-.776-2.73-2.419-3.521-3.536-4.301-6.077-3.704-14.517 1.4-19.8 1.469-1.52 2.983-2.612 3.789-2.733.629-.094 1.555.146 3.458.897 1.321.521 1.731.722 1.733.846.002.192.006.193.339.066.174-.066.395-.067.689-.004.913.195 2.076-.217 3.907-1.386 1.913-1.222 2.072-1.249 3.364-.563"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">
                                  Fruits &amp; Vegetables
                                </span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* collapse */}
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link active"
                                      aria-current="page"
                                      href="#"
                                    >
                                      Fresh Vegetables
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Herbs &amp; Seasonings
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Fresh Fruits
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Organic Fruits &amp; Vegetables
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Cuts &amp; Sprouts
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Exotic Fruits &amp; Veggies
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Flower Bouquets, Bunches
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 56 56"
                                  fill="#3d4f58"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.584 4.331c-.159.07-.317.199-.35.286-.033.087-.061 2.877-.061 6.2v6.042l-.536.166c-1.986.614-3.595 2.318-4.193 4.442-.162.576-.171 1.354-.171 15.711v15.105l.262.225.262.225h14.166l.262-.225.262-.225V21.42l-.206-.653a5.763 5.763 0 0 0-3.738-3.747l-.77-.242V4.699l-.24-.226c-.24-.225-.255-.226-2.45-.248-1.712-.018-2.275.006-2.499.106m3.696 2.762V8.4h-2.613V5.787h2.613v1.306m0 6.207v3.407h-2.613V9.893h2.613V13.3m1.522 5.039c1.64.427 2.844 1.683 3.138 3.273.068.372.1 5.114.1 15.085V51.24H13.72V36.977c0-9.772.032-14.437.1-14.817.326-1.797 1.822-3.382 3.599-3.812.797-.193 4.652-.199 5.383-.009m8.691 7.68c-.659.547-1.417 1.856-1.769 3.054-.305 1.037-.347 2.592-.099 3.64.338 1.427 1.315 2.991 2.437 3.902.653.529 2.019 1.212 2.751 1.375.283.063.619.144.747.18l.233.066.025 4.822.024 4.822-.398.004c-.218.003-.511.055-.65.117-.14.062-1.304.847-2.588 1.746-2.504 1.752-2.651 1.899-2.431 2.43.064.156.193.324.285.373.103.055 2.626.09 6.503.09 6.17 0 6.34-.005 6.532-.184.269-.25.342-.528.217-.826-.071-.17-.848-.771-2.438-1.883-1.284-.899-2.448-1.684-2.588-1.746-.139-.062-.431-.114-.649-.117l-.397-.004v-4.81c0-3.767.025-4.816.117-4.843.064-.018.494-.121.956-.228 3.136-.728 5.359-3.565 5.386-6.872.01-1.326-.223-2.337-.802-3.48-.33-.652-1.038-1.556-1.316-1.683-.178-.081-1.543-.11-5.069-.109-4.433.002-4.841.016-5.019.164m9.828 1.872c.2.299.484.898.63 1.33.229.675.267.93.267 1.812.001 1.62-.461 2.778-1.583 3.964-.669.707-1.329 1.131-2.29 1.473-.581.206-.841.242-1.712.241-.869-.001-1.139-.04-1.763-.253-.935-.32-1.435-.615-2.12-1.249a5.555 5.555 0 0 1-1.536-2.398c-.557-1.751-.32-3.398.721-5.021l.284-.443h8.739l.363.544m-26.252.058-.229.229.003 7.914c.003 8.37-.012 8.082.434 8.319.281.15 9.067.155 9.395.005a.778.778 0 0 0 .331-.331c.073-.161.104-2.52.104-8.067v-7.84l-.229-.229-.23-.229h-9.35l-.229.229m8.544 8.171v6.907h-7.28V29.213h7.28v6.907m9.254-6.483c-.377.479-.49 1.662-.248 2.592.411 1.577 1.522 2.688 3.099 3.098.741.193 1.169.177 1.463-.054.546-.429.182-1.3-.543-1.3-.666 0-1.275-.275-1.825-.826-.684-.683-.894-1.252-.795-2.15.117-1.054.1-1.236-.133-1.425-.314-.255-.79-.224-1.018.065M17.5 32.214c-.472.259-.572.837-.204 1.183.211.198.275.203 2.804.203h2.588l.23-.229c.367-.368.297-.896-.151-1.128-.213-.11-.737-.136-2.672-.133-1.562.001-2.474.038-2.595.104m-.191 3.482a.73.73 0 0 0-.051.997c.178.22.181.22 2.636.248 1.351.016 2.553.004 2.671-.025.575-.145.766-.807.353-1.22l-.23-.229h-5.15l-.229.229m-.042 3.317c-.26.26-.246.752.029 1.011.211.198.275.203 2.83.203 2.613 0 2.615-.001 2.818-.216a.69.69 0 0 0-.013-.981c-.212-.199-.275-.203-2.847-.203-2.506 0-2.639.008-2.817.186m21.788 11.294 1.202.84h-7.434l1.202-.84 1.202-.84h2.626l1.202.84"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">
                                  Cold Drinks &amp; Juices
                                </span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* collapse */}
                            <div
                              id="flush-collapseFour"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Soft Drinks
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Fruit Juices
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Coldpress
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Energy Drinks
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Water &amp; Ice Cubes
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Soda &amp; Mixers
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Concentrates &amp; Syrups
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Detox &amp; Energy Drinks
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      href="#"
                                      className="nav-link"
                                    >
                                      Juice Collection
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  fill="#3d4f58"
                                  viewBox="0 0 56 56"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.254 1.513c-.71.273-1.49 1.063-1.759 1.781-.176.471-.202.73-.202 2.047 0 1.345.022 1.551.198 1.916.243.502.77.869 1.341.933l.421.048v1.751c0 2.174-.068 2.433-1.216 4.576-.982 1.833-1.147 2.203-1.473 3.308l-.248.84-.029 15.4c-.022 11.182-.001 15.554.076 15.96.32 1.697 1.702 3.091 3.425 3.457.53.112 2.56.134 12.579.134 7.666.001 12.164-.033 12.553-.094 1.265-.199 2.642-1.189 3.209-2.308.554-1.094.53-.279.503-17.125l-.026-15.424-.211-.746c-.12-.424-.715-1.777-1.375-3.127-.64-1.309-1.205-2.569-1.256-2.8-.051-.231-.094-1.177-.095-2.101l-.002-1.682.468-.166c.611-.217 1.068-.628 1.261-1.131.126-.33.149-.673.123-1.842-.032-1.406-.039-1.449-.34-2.06-.334-.678-.812-1.152-1.505-1.494l-.427-.211-12.74-.019-12.74-.019-.513.198M32.097 2.94c.174.103.447.348.606.545.289.357.29.364.32 1.64.025 1.033.004 1.303-.105 1.393-.104.087-3.241.113-13.604.115-12.557.003-13.474-.008-13.556-.155-.05-.088-.069-.661-.045-1.295.038-.975.076-1.194.265-1.532.235-.418.667-.74 1.149-.856.161-.039 5.774-.064 12.473-.056 11.999.014 12.185.017 12.497.201m14.01 4.864c-1.432.516-3.071 2.37-3.929 4.44-1.486 3.591-.888 8.241 1.417 11.011l.362.434-.659 13.192c-.526 10.555-.638 13.304-.559 13.752.207 1.178 1.02 2.331 2.021 2.867 2.469 1.322 5.43.03 6.055-2.641.131-.558.099-1.499-.464-13.83l-.604-13.232.565-.712c.921-1.158 1.547-2.597 1.924-4.418.228-1.099.231-3.43.007-4.357-.531-2.195-1.649-4.183-3.098-5.512-1.085-.994-2.11-1.329-3.038-.994m-14.929 2.369c.029 1.09.103 2.115.171 2.38.067.257.664 1.58 1.327 2.94.886 1.818 1.242 2.653 1.346 3.15.122.588.137 2.652.116 16.006l-.025 15.331-.319.588c-.367.678-.688.978-1.407 1.317l-.514.242H6.953l-.466-.231c-.679-.335-1.288-.982-1.529-1.626l-.201-.539.025-15.462.025-15.462.302-.887c.166-.488.674-1.584 1.129-2.437.454-.853.906-1.745 1.004-1.982l.178-.43 5.865-.026 5.865-.025.178-.22a.786.786 0 0 0-.024-1.011l-.203-.216H7.747v-3.36l11.69.023 11.69.024.051 1.913m16.334-.762c1.185.755 2.455 2.6 3.017 4.382.689 2.187.459 4.931-.593 7.067-1.056 2.142-2.596 3.023-4.066 2.325-2.184-1.036-3.55-5.39-2.779-8.858.474-2.131 1.843-4.228 3.255-4.985.481-.258.67-.247 1.166.069m-27.03 2.391c-.25.251-.285.48-.125.83.167.367.462.435 1.895.435 1.191 0 1.362-.02 1.572-.186a.933.933 0 0 0 .294-.42c.068-.271-.141-.742-.369-.83-.083-.032-.8-.058-1.594-.058-1.408 0-1.449.006-1.673.229m4.2 0c-.25.251-.285.48-.125.83.169.37.459.435 1.961.435h1.403l.273-.273c.15-.15.273-.341.273-.425 0-.23-.254-.672-.425-.738-.083-.032-.821-.058-1.641-.058-1.457 0-1.494.005-1.719.229M7.784 22.253c-.159.07-.317.197-.35.284-.033.087-.061 4.411-.061 9.608v9.449l.216.203.216.203h23.616l.203-.216.203-.216v-9.45c0-5.986-.034-9.513-.092-9.621-.05-.094-.224-.217-.387-.274-.21-.073-3.629-.102-11.785-.099-9.433.003-11.541.026-11.779.129m22.549 9.854V40.6H8.867V23.613h21.466v8.494M11.67 24.529c-.409.409-.341.889.169 1.191.152.09.362.315.466.501.475.843 1.176 3.037 1.7 5.318.247 1.074.257 1.177.114 1.257-.386.216-.96.853-1.249 1.387-.305.563-.317.62-.317 1.61 0 .942.022 1.069.263 1.54.344.673.982 1.315 1.637 1.646.485.246.609.268 1.554.268.99 0 1.047-.012 1.61-.317a3.683 3.683 0 0 0 1.595-1.674c.217-.463.248-.647.248-1.463 0-.815-.031-1-.248-1.463-.544-1.159-1.636-1.926-2.869-2.014l-.645-.046-.348-1.459a52.396 52.396 0 0 0-.656-2.482c-.171-.563-.294-1.04-.275-1.06.02-.019.536.24 1.146.575 1.235.679 4.057 2.09 4.654 2.326l.385.153-.138.588c-.318 1.358.251 2.891 1.357 3.657 1.645 1.14 3.983.705 5.037-.937 1.144-1.783.462-4.196-1.453-5.136-.482-.236-.629-.262-1.514-.262-.897 0-1.023.023-1.493.268-.282.147-.585.33-.673.407-.211.187-.428.125-1.787-.504-1.762-.815-6.084-3.139-7.032-3.781-.609-.413-.897-.435-1.238-.094m35.23.344c.462 0 .977-.035 1.143-.077l.304-.077v.416c0 .229.252 5.93.561 12.668.309 6.739.534 12.403.501 12.588-.212 1.17-1.195 2.035-2.424 2.133-.838.067-1.448-.162-2.059-.773-.909-.909-.894.306-.182-14.129.341-6.909.619-12.64.618-12.736-.002-.153.04-.164.348-.093.193.044.728.08 1.19.08m-22.113 4.984c.967.439 1.429 1.695.984 2.675-.357.784-1.414 1.37-2.177 1.205-1.055-.228-1.754-1.063-1.753-2.097.001-.709.614-1.579 1.308-1.856.383-.153 1.224-.115 1.638.073m-7.847 4.139c.351.185.724.583.932.995.248.49.166 1.463-.163 1.934-.76 1.088-2.229 1.235-3.149.315a2.019 2.019 0 0 1-.229-2.613 2.036 2.036 0 0 1 2.609-.631m29.413 10.251-.246.193v4.826l.246.194c.135.106.339.193.454.193.114 0 .318-.087.454-.193l.246-.194V44.44l-.246-.193c-.136-.107-.34-.194-.454-.194-.115 0-.319.087-.454.194"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">Baby Care</span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* collapse */}
                            <div
                              id="flush-collapseFive"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link active"
                                      aria-current="page"
                                      href="#"
                                    >
                                      Diapers, Wipes &amp; More
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Baby Food
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Bath &amp; Hair Care
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Oral &amp; Nasal Care
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Baby Skin Care Online
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Cleaning Needs Online
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Feeding Accessories Online
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSix"
                              aria-expanded="false"
                              aria-controls="flush-collapseSix"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 56 56"
                                  fill="#3d4f58"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M39.615 1.482c-2.408.689-5.92 3.244-11.615 8.45-2.166 1.98-11.172 10.99-13.38 13.386C8.679 29.765 5.119 34.379 3.338 37.94c-1.308 2.616-1.407 3.949-.369 4.983.266.264.589.48.822.55 2.419.718 6.677-1.78 13.242-7.77 3.539-3.228 13.946-13.993 18.728-19.372 6.081-6.838 8.485-10.74 8.015-13.006-.172-.825-.85-1.597-1.659-1.885-.492-.176-1.82-.154-2.502.042M41.95 3.09c.305.268.33.329.33.823 0 .687-.174 1.258-.693 2.275-1.41 2.762-4.569 6.675-10.641 13.179C19.811 31.295 13.759 37.073 9.241 40.089c-3.039 2.029-5.195 2.564-5.46 1.354-.144-.656.72-2.735 1.964-4.725 1.147-1.835 1.162-1.851 2.853-2.9 3.103-1.926 5.079-2.913 7.362-3.677.967-.324 1.034-.36.671-.364-1.579-.016-4.415.816-6.564 1.926-.58.299-1.094.56-1.142.58-.123.05 1.938-2.486 3.252-4.003 1.047-1.208 1.136-1.285 2.134-1.856 2.704-1.546 6.071-2.998 8.501-3.664.595-.164 1.071-.306 1.058-.317-.013-.011-.524.018-1.137.063-2.117.157-4.114.668-6.119 1.566-.99.443-1.047.458-.83.218.127-.141.893-.956 1.701-1.811 1.603-1.698 1.606-1.699 4.164-3.063 3.621-1.929 6.062-2.922 9.058-3.683l.513-.13-.887.046c-1.256.065-3.035.369-4.323.74-1.132.326-2.913.989-3.609 1.344-.216.11-.411.182-.433.159-.023-.022.916-.962 2.085-2.088l2.127-2.048 1.68-.896c3.259-1.738 4.995-2.521 7.747-3.496l1.68-.594-.84.058c-1.726.121-4.457.823-6.324 1.626-.449.193-.816.341-.816.329 0-.05 2.445-2.216 3.546-3.141 3.918-3.293 6.511-4.835 8.14-4.84.57-.002.657.025.957.288m9.6 8.104c-3.248.878-8.229 4.84-17.159 13.651-10.108 9.974-16.547 17.56-19.17 22.584-.611 1.171-1.088 2.441-1.182 3.148-.137 1.034.376 2.074 1.23 2.492.475.232.572.246 1.417.201 1.455-.077 2.921-.706 5.197-2.232 4.091-2.741 8.783-7.083 17.162-15.882 8.679-9.114 11.932-12.829 14.239-16.259 1.075-1.6 1.613-2.603 1.974-3.682.263-.786.292-.973.256-1.68-.044-.881-.177-1.218-.672-1.714-.752-.751-1.972-.984-3.292-.627m1.879 1.445c1.063.444.789 1.993-.81 4.58-2.201 3.562-7.288 9.321-18.131 20.524-5.979 6.177-11.058 10.673-14.201 12.572-1.739 1.05-3.38 1.654-4.126 1.518-.359-.066-.667-.482-.667-.903-.001-.697.922-2.758 2.034-4.543.791-1.269.895-1.399 1.307-1.638.19-.111.864-.506 1.498-.88 1.963-1.156 4.975-2.407 7.34-3.05.668-.181 1.235-.351 1.26-.377.056-.057-1.169.039-2.146.167-1.751.23-3.687.806-5.625 1.674-.569.254-1.045.452-1.058.439-.041-.041 2.068-2.648 3.34-4.129l1.202-1.4 1.187-.638c2.708-1.456 5.552-2.652 7.814-3.284.974-.273 1.065-.314.7-.318-1.759-.02-4.605.637-6.649 1.535-.668.294-.877.354-.79.23.065-.093.915-1.011 1.888-2.041 1.744-1.844 1.786-1.88 2.797-2.43 3.14-1.707 7.404-3.449 9.707-3.966l.653-.146-.98.052c-1.309.07-2.657.273-3.719.561-.909.246-2.802.9-3.607 1.247-.44.189-.344.077 1.629-1.9l2.096-2.101 1.217-.647c.67-.356 1.701-.867 2.291-1.135.59-.269 1.42-.652 1.844-.852 1.079-.508 1.958-.854 3.896-1.535 1.625-.571 1.66-.588 1.073-.54-1.922.157-4.072.666-6.206 1.468l-1.12.42.7-.662c.995-.942 3.428-3.067 4.526-3.953 3.944-3.182 6.518-4.47 7.836-3.919"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">
                                  Bakery &amp; Biscuits
                                </span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* collapse */}
                            <div
                              id="flush-collapseSix"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link active"
                                      aria-current="page"
                                      href="#"
                                    >
                                      Cookies
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Glucose &amp; Marie
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Sweet &amp; Salty
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Healthy &amp; Digestive
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Cream Biscuits
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Rusks &amp; Wafers
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Cakes &amp; Rolls
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Buns &amp; Bakery
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item w-100 collapsed px-4 py-1">
                            <Link
                              href="#"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeven"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeven"
                            >
                              <span className="d-flex align-items-center">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 56 56"
                                  fill="#3d4f58"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.342 12.136c-.305.13-.469.365-.472.677-.003.214.283.543 1.616 1.867 1.545 1.532 2.439 2.59 2.985 3.528.137.236.249.475.249.533 0 .058-.472.346-1.05.642-2.358 1.206-4.255 2.774-5.369 4.44-.232.347-.437.63-.456.63-.019 0-2.621-2.18-5.782-4.844-3.161-2.665-5.823-4.865-5.915-4.889-.241-.063-.706.187-.823.443a.766.766 0 0 0-.043.434c.031.118 1.606 2.987 3.5 6.375 3.12 5.581 3.434 6.181 3.341 6.386-.057.125-1.621 2.94-3.476 6.255-2.185 3.906-3.371 6.12-3.371 6.288 0 .341.365.726.688.726.138 0 .372-.094.52-.209.209-.162 10.492-8.805 11.152-9.373.131-.113.191-.06.508.453 1.043 1.69 2.971 3.328 5.46 4.639l1.021.537-.431.646c-.666.998-1.604 2.06-3.026 3.426-1.097 1.053-1.301 1.292-1.298 1.522.003.336.167.562.5.688.331.126 3.662.127 4.923.001 3.735-.371 7.508-1.581 10.049-3.221l.683-.441 1.464.016c4.25.045 8.621-.661 12.126-1.958 3.082-1.141 5.879-2.956 7.46-4.842 1.093-1.304 1.965-3.169 1.807-3.867-.109-.487-.214-.581-1.147-1.03l-.833-.4.639-.255c.736-.294 1.223-.633 1.337-.933.116-.307-.059-1.015-.472-1.905-1.192-2.565-3.822-4.809-7.506-6.403-3.609-1.562-7.478-2.34-12.18-2.449-1.923-.045-2.216-.071-2.38-.217-.427-.379-1.755-1.174-2.828-1.694-1.944-.941-4.542-1.714-7.037-2.094-1.172-.179-5.789-.275-6.133-.128m5.323 1.535c2.614.306 5.066 1.003 7.247 2.062.705.342 1.239.636 1.188.655-.051.018-.702.12-1.447.227a31.97 31.97 0 0 0-5.145 1.176c-.7.225-1.294.409-1.322.409-.027 0-.216-.305-.421-.677-.471-.859-1.206-1.817-2.328-3.033l-.882-.957h.966c.532 0 1.496.062 2.144.138m16.648 4.284c1.741.233 3.431.551 4.045.763.085.029-.018.202-.315.532-4.39 4.883-4.351 13.224.084 17.874.306.321.539.596.518.611-.091.066-1.9.454-2.885.618-1.901.317-3.264.42-5.367.407l-2.753-.017c-1.762-.01-5.24-.63-7.453-1.33-1.542-.487-3.565-1.375-4.876-2.139-2.013-1.174-3.966-3.188-4.423-4.562-.239-.72-.645-.964-1.122-.672-.153.094-2.229 1.815-4.612 3.825-2.383 2.009-4.347 3.64-4.365 3.622-.017-.017 1.124-2.095 2.536-4.616 1.413-2.522 2.568-4.661 2.568-4.754 0-.093-.073-.273-.162-.4-.275-.393-4.964-8.809-4.927-8.845.019-.019 2.03 1.649 4.47 3.707s4.537 3.78 4.66 3.827c.37.141.64-.078 1.056-.851.543-1.01.947-1.53 1.884-2.422 3.084-2.933 8.25-4.832 14.533-5.341 1.044-.084 5.915.03 6.906.163m6.887 1.659c3.874 1.487 6.556 3.559 7.801 6.027.161.319.292.637.292.707 0 .075-.386.274-.946.486-1.475.558-1.934 1.125-1.536 1.895.158.305.586.554 1.642.954.437.165.822.327.857.359.099.09-.527 1.365-.984 2.004-.963 1.348-2.832 2.839-4.863 3.879-.988.506-2.736 1.222-2.985 1.222-.254 0-1.719-1.493-2.252-2.294a11.827 11.827 0 0 1-1.778-4.456c-.19-1.042-.212-3.266-.043-4.264.282-1.664.952-3.4 1.809-4.688.538-.809 1.824-2.125 2.076-2.125.078 0 .488.132.91.294m.533 3.807a2.64 2.64 0 0 0-1.541 1.308c-.09.177-.184.582-.21.899-.038.479-.007.662.185 1.078.465 1.01 1.138 1.435 2.266 1.432.839-.003 1.145-.122 1.677-.654.544-.545.655-.835.656-1.724.001-.661-.034-.85-.209-1.13-.636-1.024-1.799-1.521-2.824-1.209m1.297 1.676a.917.917 0 0 1-.645 1.596c-.945 0-1.28-1.279-.455-1.736.379-.21.78-.159 1.1.14M23.151 38.635c1.474.509 3.032.892 4.843 1.192l1.535.255-.928.44c-2.51 1.193-6.256 2.038-9.031 2.038h-1.015l.882-.957c1.027-1.114 1.806-2.106 2.218-2.826.161-.281.323-.51.36-.51.037 0 .548.166 1.136.368"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <span className="ms-2">
                                  Chicken, Meat &amp; Fish
                                </span>
                              </span>
                              <i className="feather-icon icon-chevron-right" />
                            </Link>
                            {/* collapse */}
                            <div
                              id="flush-collapseSeven"
                              className="accordion-collapse collapse"
                              data-bs-parent="#categoryCollapseMenu"
                            >
                              <div>
                                <ul className="nav flex-column ms-8">
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link active"
                                      aria-current="page"
                                      href="#"
                                    >
                                      Chicken
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Sausage, Salami &amp; Ham
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Exotic Meat
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Eggs
                                    </Link>
                                  </li>
                                  {/* nav item */}
                                  <li className="nav-item">
                                    <Link
                                      className="nav-link"
                                      href="#"
                                    >
                                      Frozen Non-Veg Snacks
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card mb-6">
                      <div className="card-body d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="var(--fc-primary)"
                            className="bi bi-phone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 small">
                            Download the FreshCart App to your Phone.
                          </p>
                        </div>
                      </div>
                      <div className="card-body d-flex align-items-center border-top">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="var(--fc-primary)"
                            className="bi bi-reply"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 small">
                            Return Policy customers can return a product and ask
                            for a refund.
                          </p>
                        </div>
                      </div>
                      <div className="card-body d-flex align-items-center border-top">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="var(--fc-primary)"
                            className="bi bi-bag-check"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 small">
                            Order now so you don t miss the opportunities.
                          </p>
                        </div>
                      </div>
                      <div className="card-body d-flex align-items-center border-top">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="var(--fc-primary)"
                            className="bi bi-clock-history"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 small">
                            Your order will arrive at your door in 15 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      {/* title */}
                      <h5 className="mb-3">Testimonials</h5>
                      <div className="card bg-light-warning border-0">
                        <div className="card-body p-5">
                          <h6>The Best Grocery Store Design</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipis cing
                            elit. Curabitur iaculis maximus purus, a gravida dui
                            tempor eget.
                          </p>
                          <div className="d-flex align-items-center">
                            <div>
                              <img
                                src="../assets/images/avatar/avatar-1.jpg"
                                alt=""
                                className="avatar avatar-md rounded-circle"
                              />
                            </div>
                            <div className="ms-3 lh-1">
                              <h6 className="mb-0">Alishia Jones</h6>
                              <small>Sales Manager</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-xl-9 col-lg-8 col-md-12 mb-6 mb-md-0">
            <div className="mb-12 product-content">
              <div className="mb-6">
                <h3 className="mb-0">New Arrivals</h3>
              </div>
              <div className="product-slider-four-column">
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-snack-munchies.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-45%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Salted Instant Popcorn
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$18</span>
                      <span className="text-decoration-line-through text-muted">
                        $24
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">4.5</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-dairy-bread-eggs.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-12%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Blueberry Greek Yogurt
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$15</span>
                      <span className="text-decoration-line-through text-muted">
                        $20
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </small>
                      <span className="text-muted small">5.0</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-snack-munchies.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-55%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Kellogg s Original Cereals
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$18</span>
                      <span className="text-decoration-line-through text-muted">
                        $24
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">3.5</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-tea-coffee-drinks.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-45%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Tea Coffee &amp; Drinks
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$18</span>
                      <span className="text-decoration-line-through text-muted">
                        $24
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">4.5</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-bakery-biscuits.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-25%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Slurrp Millet Chocolate
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$120</span>
                      <span className="text-decoration-line-through text-muted">
                        $165
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">4.5</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-atta-rice-dal.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-55%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Atta, Rice &amp; Dal
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$18</span>
                      <span className="text-decoration-line-through text-muted">
                        $24
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">3.5</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-chicken-meat-fish.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-45%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Chicken, Meat &amp; Fish
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$18</span>
                      <span className="text-decoration-line-through text-muted">
                        $24
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">4.5</span>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="item">
                  {/* card */}
                  <div className="card card-product mb-4">
                    <div className="card-body text-center py-8">
                      {/* img */}
                      <Link href="#">
                        <img
                          src="../assets/images/category/category-cleaning-essentials.jpg"
                          alt="Grocery Ecommerce Template"
                          className="mb-3"
                        />
                      </Link>
                      {/* text */}
                    </div>
                  </div>
                  <div>
                    <span className="badge bg-danger rounded-pill">-25%</span>
                    <h2 className="mt-3 fs-6">
                      <Link href="#" className="text-inherit">
                        Cleaning Essentials
                      </Link>
                    </h2>
                    <div>
                      <span className="text-dark fs-5 fw-bold">$120</span>
                      <span className="text-decoration-line-through text-muted">
                        $165
                      </span>
                    </div>
                    <div className="text-warning">
                      {/* rating */}
                      <small>
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span className="text-muted small">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-6">
                <h3 className="mb-1">Deal of the day</h3>
                <p>Brings to users an array of discounts on a variety</p>
              </div>
              <div className="card border border-danger p-6">
                <div className="row">
                  <div className="col-lg-5 text-center">
                    <Link href="/components/shopsingle">
                      <img
                        src="../assets/images/products/deal-img.jpg"
                        alt="Grocery Ecommerce Template"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="col-lg-7 text-center text-lg-start">
                    <div className="mb-3">
                      <small className="text-warning">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </small>
                      <span>
                        <small>4.5</small>
                      </span>
                    </div>
                    <h2 className="fs-4">
                      <Link
                        href="/components/shopsingle"
                        className="text-inherit text-decoration-none"
                      >
                        Parle Platina Nutricrunch Digestive Cookies
                      </Link>
                    </h2>
                    <div className="d-flex justify-content-center align-items-center justify-content-lg-between mt-3">
                      <div>
                        <span className="text-dark fs-5 fw-bold">$100</span>
                        <span className="text-decoration-line-through text-muted fs-5">
                          $150
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Link href="#" className="btn btn-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus"
                        >
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                        Add to cart
                      </Link>
                    </div>
                    <div className="mt-6 mb-6">
                      <div className="d-flex justify-content-between mb-2">
                        <span>
                          Already Sold:
                          <span className="text-dark fs-6 fw-bold">45</span>
                        </span>
                        <span>
                          Available:
                          <span className="text-dark fs-6 fw-bold">25</span>
                        </span>
                      </div>
                      <div
                        className="progress bg-light-danger"
                        role="progressbar"
                        aria-label="Example 1px high"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ height: 5 }}
                      >
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <p className="fw-bold text-dark mb-0">
                      Hurry up offer ends soon
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start text-center mt-1">
                      <div
                        className="deals-countdown"
                        data-countdown="2024/10/10 00:00:00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light-danger text-danger p-4 rounded bg-opacity-50 text-center mb-12 d-flex align-items-center justify-content-center">
              <p className="mb-0">
                First time here? Get 10% off your first order!
                <span className="link-danger link-underline-danger">
                  Click here
                </span>
              </p>
              <span className="border-dashed border-danger py-1 px-3 text-danger rounded bg-light-danger ms-4">
                FIRSTTIME10
              </span>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center mb-6">
                  <div className="col-xl-10 col-lg-9 col-8">
                    <div className="mb-4 mb-lg-0">
                      <h3 className="mb-1">New Products</h3>
                      <p className="mb-0">New products with updated stocks.</p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-4 text-end">
                    <Link href="#" className="btn btn-light">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="row row-cols-xl-4 row-cols-lg-3 g-4">
                  <div className="col">
                    <div className="mb-6">
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-instant-food.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -45%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Instant Food
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-atta-rice-dal.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -12%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Atta Rice &amp; Dal
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$15</span>
                          <span className="text-decoration-line-through text-muted">
                            $20
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </small>
                          <span className="text-muted small">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-baby-care.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -55%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Baby Care
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">3.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-tea-coffee-drinks.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -45%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Tea Coffee &amp; Drinks
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-cleaning-essentials.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -25%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Cleaning Essentials
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$120</span>
                          <span className="text-decoration-line-through text-muted">
                            $165
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-pet-care.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -55%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Pet Cares
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">3.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-chicken-meat-fish.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -45%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Salted Instant Popcorn
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-bakery-biscuits.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -25%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Bakery &amp; Biscuits
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$120</span>
                          <span className="text-decoration-line-through text-muted">
                            $165
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-pet-care.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -55%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Pet Cares
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">3.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-cleaning-essentials.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -25%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Cleaning Essentials
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$120</span>
                          <span className="text-decoration-line-through text-muted">
                            $165
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-bakery-biscuits.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -25%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Bakery &amp; Biscuits
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$120</span>
                          <span className="text-decoration-line-through text-muted">
                            $165
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-6">
                      {/* card */}
                      <div className="card card-product mb-4">
                        <div className="card-body text-center py-8">
                          {/* img */}
                          <Link href="#">
                            <img
                              src="../assets/images/category/category-chicken-meat-fish.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3"
                            />
                          </Link>
                          {/* text */}
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-danger rounded-pill">
                          -45%
                        </span>
                        <h2 className="mt-3 fs-6">
                          <Link href="#" className="text-inherit">
                            Salted Instant Popcorn
                          </Link>
                        </h2>
                        <div>
                          <span className="text-dark fs-5 fw-bold">$18</span>
                          <span className="text-decoration-line-through text-muted">
                            $24
                          </span>
                        </div>
                        <div className="text-warning">
                          {/* rating */}
                          <small>
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row align-items-center mb-8">
            <div className="col-md-8 col-12">
              {/* heading */}
              <div className="d-flex">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-journal text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>
                </div>
                <div className="ms-3">
                  <h3 className="mb-0">Our most popular recipes</h3>
                  <p className="mb-0">
                    Check out most popular recipes of all time.
                  </p>
                </div>
                <div />
              </div>
            </div>
            {/* button */}
            <div className="col-md-4 text-end d-none d-md-block">
              <Link href="#" className="btn btn-primary">
                View all recipes
              </Link>
            </div>
          </div>
          <div className="row">
            {/* col */}
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <Link href="#">
                  {/* img */}
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-1.jpg"
                      alt=""
                      className="img-fluid rounded w-100"
                    />
                  </div>
                </Link>
              </div>
              {/* text */}
              <div>
                <h4 className="h5">
                  <Link href="#" className="text-inherit">
                    Spaghetti with Crispy Zucchini
                  </Link>
                </h4>
                <p>
                  Praesent vestibulum magna lacinia augue mollisvel aliquet
                  massa posuere. Duis et mauris tortor.
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    className="bi bi-clock text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">15</span>
                    min
                  </small>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <Link href="#">
                  <div className="img-zoom">
                    {/* img */}
                    <img
                      src="../assets/images/blog/blog-img-2.jpg"
                      alt=""
                      className="img-fluid rounded w-100"
                    />
                  </div>
                </Link>
              </div>
              {/* text */}
              <div>
                <h4 className="h5">
                  <Link href="#" className="text-inherit">
                    Almond Butter Chocolate Chip Zucchini Bars
                  </Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur sit amet tincidunt
                  ellentesque aliquet ligula in ultrices congue.
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    className="bi bi-clock text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">18</span>
                    min
                  </small>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <Link href="#">
                  {/* img */}
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-3.jpg"
                      alt=""
                      className="img-fluid rounded w-100"
                    />
                  </div>
                </Link>
              </div>
              {/* text */}
              <div>
                <h4 className="h5">
                  <Link href="#" className="text-inherit">
                    Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
                  </Link>
                </h4>
                <p>
                  Praesent vestibulum magna lacinia augue mollisvel aliquet
                  massa posuere. Duis et mauris tortor.
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    className="bi bi-clock text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">20</span>
                    min
                  </small>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-12 col-md-6 col-lg-3 mb-8">
              <div className="mb-4">
                <Link href="#">
                  {/* img */}
                  <div className="img-zoom">
                    <img
                      src="../assets/images/blog/blog-img-4.jpg"
                      alt=""
                      className="img-fluid rounded w-100"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <h4 className="h5">
                  <Link href="#" className="text-inherit">
                    Simple Homemade Tomato Soup
                  </Link>
                </h4>
                <p>
                  Aliquam tempus velit augue, sodales tincidunt augue ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                </p>
                <div className="d-flex align-items-center lh-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    className="bi bi-clock text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <small className="ms-1">
                    <span className="text-dark fw-bold">9</span>
                    min
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* Modal */}
  <div
    className="modal fade"
    id="modal-subscribe"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-block">
              <img
                src="../assets/images/banner/modal_img.jpg"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="px-8 py-8 py-lg-0">
              <div className="position-absolute end-0 top-0 m-6">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <span className="bg-light-danger text-danger badge rounded-pill mb-4 px-4 py-2">
                7 Day Super Sale
              </span>
              <h2 className="display-6 fw-bold">
                Discount up to
                <br />
                <span className="text-primary">50%</span>
              </h2>
              <p className="lead mb-5">
                Seven day of grate deals - what could be better?
              </p>
              <div className="d-grid">
                <Link href="#" className="btn btn-primary" data-bs-dismiss="modal">
                  Start Show Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* modal */}
  {/* Modal */}
  <div
    className="modal fade"
    id="quickViewModal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-8">
          <div className="position-absolute top-0 end-0 me-3 mt-3">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="row">
            <div className="col-lg-6">
              {/* img slide */}
              <div className="product productModal" id="productModal">
                <div
                  className="zoom"
                  onmousemove="zoom(event)"
                  style={{
                    backgroundImage:
                      "url(../assets/images/products/product-single-img-1.jpg)"
                  }}
                >
                  {/* img */}
                  <img
                    src="../assets/images/products/product-single-img-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div
                    className="zoom"
                    onmousemove="zoom(event)"
                    style={{
                      backgroundImage:
                        "url(../assets/images/products/product-single-img-2.jpg)"
                    }}
                  >
                    {/* img */}
                    <img
                      src="../assets/images/products/product-single-img-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="zoom"
                    onmousemove="zoom(event)"
                    style={{
                      backgroundImage:
                        "url(../assets/images/products/product-single-img-3.jpg)"
                    }}
                  >
                    {/* img */}
                    <img
                      src="../assets/images/products/product-single-img-3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="zoom"
                    onmousemove="zoom(event)"
                    style={{
                      backgroundImage:
                        "url(../assets/images/products/product-single-img-4.jpg)"
                    }}
                  >
                    {/* img */}
                    <img
                      src="../assets/images/products/product-single-img-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* product tools */}
              <div className="product-tools">
                <div className="thumbnails row g-3" id="productModalThumbnails">
                  <div className="col-3">
                    <div className="thumbnails-img">
                      {/* img */}
                      <img
                        src="../assets/images/products/product-single-img-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="thumbnails-img">
                      {/* img */}
                      <img
                        src="../assets/images/products/product-single-img-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="thumbnails-img">
                      {/* img */}
                      <img
                        src="../assets/images/products/product-single-img-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="thumbnails-img">
                      {/* img */}
                      <img
                        src="../assets/images/products/product-single-img-4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-8 mt-6 mt-lg-0">
                <Link href="#!" className="mb-4 d-block">
                  Bakery Biscuits
                </Link>
                <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                <div className="mb-4">
                  <small className="text-warning">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <Link href="#" className="ms-2">
                    (30 reviews)
                  </Link>
                </div>
                <div className="fs-4">
                  <span className="fw-bold text-dark">$32</span>
                  <span className="text-decoration-line-through text-muted">
                    $35
                  </span>
                  <span>
                    <small className="fs-6 ms-2 text-danger">26% Off</small>
                  </span>
                </div>
                <hr className="my-6" />
                <div className="mb-4">
                  <button type="button" className="btn btn-outline-secondary">
                    250g
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    500g
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    1kg
                  </button>
                </div>
                <div>
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step={1}
                      max={10}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                <div className="mt-3 row justify-content-start g-2 align-items-center">
                  <div className="col-lg-4 col-md-5 col-6 d-grid">
                    {/* button */}
                    {/* btn */}
                    <button type="button" className="btn btn-primary">
                      <i className="feather-icon icon-shopping-bag me-2" />
                      Add to cart
                    </button>
                  </div>
                  <div className="col-md-4 col-5">
                    {/* btn */}
                    <Link
                      className="btn btn-light"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                    <Link
                      className="btn btn-light"
                      href="#!"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Wishlist"
                    >
                      <i className="feather-icon icon-heart" />
                    </Link>
                  </div>
                </div>
                <hr className="my-6" />
                <div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Product Code:</td>
                        <td>FBB00255</td>
                      </tr>
                      <tr>
                        <td>Availability:</td>
                        <td>In Stock</td>
                      </tr>
                      <tr>
                        <td>Type:</td>
                        <td>Fruits</td>
                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td>
                          <small>
                            01 day shipping.
                            <span className="text-muted">
                              ( Free pickup today)
                            </span>
                          </small>
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
    </div>
  </div>
  {/* Footer */}
  {/* footer */}
  <Footer />
  {/* Javascript*/}
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default Index
