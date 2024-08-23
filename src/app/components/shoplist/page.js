import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'
import Link from 'next/link'

function ShopList() {
  return (
<>
  {/* navbar */}
    <Header />
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
          <form className="needs-validation" noValidate="">
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
              <div className="invalid-feedback">Please enter name.</div>
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
              <div className="invalid-feedback">Please enter email.</div>
            </div>
            <div className="mb-3">
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
              <div className="invalid-feedback">Please enter password.</div>
              <small className="form-text">
                By Signup, you agree to our
                <Link href="#!">Terms of Service</Link>
                &amp;
                <Link href="#!">Privacy Policy</Link>
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
    id="locationModal"
    tabIndex={-1}
    aria-labelledby="locationModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-sm modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-6">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="mb-1" id="locationModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mb-0 small">
                Enter your address and we will specify the offer you area.
              </p>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="my-5">
            <input
              type="search"
              className="form-control"
              placeholder="Search your area"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Select Location</h6>
            <Link href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
              Clear All
            </Link>
          </div>
          <div>
            <div data-simplebar="" style={{ height: 300 }}>
              <div className="list-group list-group-flush">
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                >
                  <span>Alabama</span>
                  <span>Min:$20</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Alaska</span>
                  <span>Min:$30</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Arizona</span>
                  <span>Min:$50</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>California</span>
                  <span>Min:$29</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Colorado</span>
                  <span>Min:$80</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Florida</span>
                  <span>Min:$90</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Arizona</span>
                  <span>Min:$50</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>California</span>
                  <span>Min:$29</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Colorado</span>
                  <span>Min:$80</span>
                </Link>
                <Link
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Florida</span>
                  <span>Min:$90</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    {/* section*/}
    <div className="mt-4">
      <div className="container">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-12">
            {/* breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="#!">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#!">Shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Snacks &amp; Munchies
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* section */}
    <div className="mt-8 mb-lg-14 mb-8">
      {/* container */}
      <div className="container">
        <div className="row gx-10">
          {/* col */}
          <Linkside className="col-lg-3 col-md-4 mb-6 mb-md-0">
            <div
              className="offcanvas offcanvas-start offcanvas-collapse w-md-50"
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
              <div className="offcanvas-body ps-lg-2 pt-lg-0">
                <div className="mb-8">
                  {/* title */}
                  <h5 className="mb-3">Categories</h5>
                  {/* nav */}
                  <ul className="nav nav-category" id="categoryCollapseMenu">
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#categoryFlushOne"
                        aria-expanded="false"
                        aria-controls="categoryFlushOne"
                      >
                        Dairy, Bread &amp; Eggs
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
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Milk
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Milk Drinks
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Curd &amp; Yogurt
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Eggs
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Bread
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Buns &amp; Bakery
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Butter &amp; More
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Cheese
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Paneer &amp; Tofu
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Cream &amp; Whitener
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Condensed Milk
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Vegan Drinks
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* nav item */}
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Snacks &amp; Munchies
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Chips &amp; Crisps
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Nachos
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Popcorn
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Bhujia &amp; Mixtures
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Namkeen Snacks
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Healthy Snacks
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Cakes &amp; Rolls
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Energy Bars
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Papad &amp; Fryums
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Rusks &amp; Wafers
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Fruits &amp; Vegetables
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Fresh Vegetables
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Herbs &amp; Seasonings
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Fresh Fruits
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Organic Fruits &amp; Vegetables
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Cuts &amp; Sprouts
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Exotic Fruits &amp; Veggies
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Flower Bouquets, Bunches
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Cold Drinks &amp; Juices
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Soft Drinks
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Fruit Juices
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Coldpress
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Energy Drinks
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Water &amp; Ice Cubes
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Soda &amp; Mixers
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Concentrates &amp; Syrups
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Detox &amp; Energy Drinks
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link href="#!" className="nav-link">
                                Juice Collection
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Breakfast &amp; Instant Food
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Batter
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Breakfast Cereal
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Noodles, Pasta &amp; Soup
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Frozen Non-Veg Snackss
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Frozen Veg
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Vermicelli
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Instant Mixes
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Bakery &amp; Biscuits
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseSix"
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Cookies
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Glucose &amp; Marie
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Sweet &amp; Salty
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Healthy &amp; Digestive
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Cream Biscuits
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Rusks &amp; Wafers
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Cakes &amp; Rolls
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Buns &amp; Bakery
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <Link
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        Chicken, Meat &amp; Fish
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                      {/* collapse */}
                      <div
                        id="flush-collapseSeven"
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {/* nav item */}
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Chicken
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Sausage, Salami &amp; Ham
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Exotic Meat
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Eggs
                              </Link>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <Link className="nav-link" href="#!">
                                Frozen Non-Veg Snacks
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h5 className="mb-3">Stores</h5>
                  <div className="my-4">
                    {/* input */}
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search by store"
                    />
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="eGrocery"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="eGrocery">
                      E-Grocery
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="DealShare"
                    />
                    <label className="form-check-label" htmlFor="DealShare">
                      DealShare
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Dmart"
                    />
                    <label className="form-check-label" htmlFor="Dmart">
                      DMart
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Blinkit"
                    />
                    <label className="form-check-label" htmlFor="Blinkit">
                      Blinkit
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="BigBasket"
                    />
                    <label className="form-check-label" htmlFor="BigBasket">
                      BigBasket
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="StoreFront"
                    />
                    <label className="form-check-label" htmlFor="StoreFront">
                      StoreFront
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="Spencers"
                    />
                    <label className="form-check-label" htmlFor="Spencers">
                      Spencers
                    </label>
                  </div>
                  {/* form check */}
                  <div className="form-check mb-2">
                    {/* input */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="onlineGrocery"
                    />
                    <label className="form-check-label" htmlFor="onlineGrocery">
                      Online Grocery
                    </label>
                  </div>
                </div>
                <div className="mb-8">
                  {/* price */}
                  <h5 className="mb-3">Price</h5>
                  <div>
                    {/* range */}
                    <div id="priceRange" className="mb-3" />
                    <small className="text-muted">Price:</small>
                    <span id="priceRange-value" className="small" />
                  </div>
                </div>
                {/* rating */}
                <div className="mb-8">
                  <h5 className="mb-3">Rating</h5>
                  <div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="ratingFive"
                      />
                      <label className="form-check-label" htmlFor="ratingFive">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="ratingFour"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="ratingFour">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="ratingThree"
                      />
                      <label className="form-check-label" htmlFor="ratingThree">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="ratingTwo"
                      />
                      <label className="form-check-label" htmlFor="ratingTwo">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                      {/* input */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="ratingOne"
                      />
                      <label className="form-check-label" htmlFor="ratingOne">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-8 position-relative">
                  {/* Banner Design */}
                  {/* Banner Content */}
                  <div className="position-absolute p-5 py-8">
                    <h3 className="mb-0">Fresh Fruits</h3>
                    <p>Get Upto 25% Off</p>
                    <Link href="#" className="btn btn-dark">
                      Shop Now
                      <i className="feather-icon icon-arrow-right ms-1" />
                    </Link>
                  </div>
                  {/* Banner Content */}
                  {/* Banner Image */}
                  {/* img */}
                  <img
                    src="../assets/images/banner/assortment-citrus-fruits.png"
                    alt=""
                    className="img-fluid rounded"
                  />
                  {/* Banner Image */}
                </div>
              </div>
            </div>
          </aside>
          <section className="col-lg-9 col-md-12">
            {/* card */}
            <div className="card mb-4 bg-light border-0">
              {/* card body */}
              <div className="card-body p-9">
                <h2 className="mb-0 fs-1">Snacks &amp; Munchies</h2>
              </div>
            </div>
            {/* text */}
            <div className="d-lg-flex justify-content-between align-items-center">
              <div className="mb-3 mb-lg-0">
                <p className="mb-0">
                  <span className="text-dark">24</span>
                  Products found
                </p>
              </div>
              {/* icon */}
              <div className="d-md-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <Link href="shop-list.html" className="active me-3">
                      <i className="bi bi-list-ul" />
                    </Link>
                    <Link href="shop-grid.html" className="me-3 text-muted">
                      <i className="bi bi-grid" />
                    </Link>
                    <Link
                      href="shop-grid-3-column.html"
                      className="me-3 text-muted"
                    >
                      <i className="bi bi-grid-3x3-gap" />
                    </Link>
                  </div>
                  <div className="ms-2 d-lg-none">
                    <Link
                      className="btn btn-outline-gray-400 text-muted"
                      data-bs-toggle="offcanvas"
                      href="#offcanvasCategory"
                      role="button"
                      aria-controls="offcanvasCategory"
                    >
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
                        className="feather feather-filter me-2"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                      Filters
                    </Link>
                  </div>
                </div>
                <div className="d-flex mt-2 mt-lg-0">
                  <div className="me-2 flex-grow-1">
                    {/* select option */}
                    <select className="form-select">
                      <option defaultValue="">Show: 50</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </select>
                  </div>
                  <div>
                    {/* select option */}
                    <select className="form-select">
                      <option defaultValue="">Sort by: Featured</option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low">Price: High to Low</option>
                      <option value="Release Date">Release Date</option>
                      <option value="Avg. Rating">Avg. Rating</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row g-4 row-cols-1 mt-2">
              <div className="col">
                {/* card */}
                <div className="card card-product">
                  {/* card body */}
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* col */}
                      <div className="col-md-4 col-12">
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0">
                            {/* badge */}
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <Link href="/components/shopsingle">
                            {/* img */}
                            <img
                              src="../assets/images/products/product-img-1.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-8 col-12 flex-grow-1">
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link
                            href="#!"
                            className="text-decoration-none text-muted"
                          >
                            <small>Snack &amp; Munchies</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            href="/components/shopsingle"
                            className="text-inherit text-decoration-none"
                          >
                            Haldiram's Sev Bhujia
                          </Link>
                        </h2>
                        <div>
                          {/* rating */}
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(149)</span>
                        </div>
                        <div className="mt-6">
                          {/* price */}
                          <div>
                            <span className="text-dark">$18</span>
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          {/* btn */}
                          <div className="mt-3">
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i
                                className="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              />
                            </Link>
                            <Link
                              href="shop-wishlist.html"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                          {/* btn */}
                          <div className="mt-2">
                            <Link href="#!" className="btn btn-primary">
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
                                className="feather feather-shopping-bag me-2"
                              >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col */}
              <div className="col">
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12">
                        <div className="text-center position-relative">
                          <Link href="/components/shopsingle">
                            {/* img */}
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-8 col-12 flex-grow-1">
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link
                            href="#!"
                            className="text-decoration-none text-muted"
                          >
                            <small>Bakery &amp; Biscuits</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            href="/components/shopsingle"
                            className="text-inherit text-decoration-none"
                          >
                            NutriChoice Digestive
                          </Link>
                        </h2>
                        <div>
                          {/* rating */}
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(25)</span>
                        </div>
                        <div className="mt-6">
                          {/* price */}
                          <div>
                            <span className="text-dark">$24</span>
                          </div>
                          {/* btn */}
                          <div className="mt-3">
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i
                                className="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              />
                            </Link>
                            <Link
                              href="shop-wishlist.html"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                          {/* btn */}
                          <div className="mt-2">
                            <Link href="#!" className="btn btn-primary">
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
                                className="feather feather-shopping-bag me-2"
                              >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col */}
              <div className="col">
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12">
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0">
                            {/* badge */}
                            <span className="badge bg-success">14%</span>
                          </div>
                          <Link href="/components/shopsingle">
                            {/* img */}
                            <img
                              src="../assets/images/products/product-img-10.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-8 col-12 flex-grow-1">
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link
                            href="#!"
                            className="text-decoration-none text-muted"
                          >
                            <small>Bakery &amp; Biscuits</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            href="/components/shopsingle"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 Star Chocolate
                          </Link>
                        </h2>
                        <div>
                          {/* rating */}
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </small>
                          <span className="text-muted small">5(69)</span>
                        </div>
                        <div className="mt-6">
                          {/* price */}
                          <div>
                            <span className="text-dark">$14</span>
                          </div>
                          {/* btn */}
                          <div className="mt-3">
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i
                                className="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              />
                            </Link>
                            <Link
                              href="shop-wishlist.html"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                          {/* btn */}
                          <div className="mt-2">
                            <Link href="#!" className="btn btn-primary">
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
                                className="feather feather-shopping-bag me-2"
                              >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col */}
              <div className="col">
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12">
                        <div className="text-center position-relative">
                          <Link href="/components/shopsingle">
                            {/* img */}
                            <img
                              src="../assets/images/products/product-img-4.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-8 col-12 flex-grow-1">
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link
                            href="#!"
                            className="text-decoration-none text-muted"
                          >
                            <small>Snack &amp; Munchies</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            href="/components/shopsingle"
                            className="text-inherit text-decoration-none"
                          >
                            Onion Flavour Potato
                          </Link>
                        </h2>
                        <div>
                          {/* rating */}
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                            <i className="bi bi-star" />
                          </small>
                          <span className="text-muted small">3.5(456)</span>
                        </div>
                        <div className="mt-6">
                          {/* price */}
                          <div>
                            <span className="text-dark">$3</span>
                            <span className="text-decoration-line-through text-muted">
                              $9
                            </span>
                          </div>
                          {/* btn */}
                          <div className="mt-3">
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i
                                className="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              />
                            </Link>
                            <Link
                              href="shop-wishlist.html"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                          {/* btn */}
                          <div className="mt-2">
                            <Link href="#!" className="btn btn-primary">
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
                                className="feather feather-shopping-bag me-2"
                              >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col */}
              <div className="col">
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12">
                        <div className="text-center position-relative">
                          <Link href="/components/shopsingle">
                            {/* img */}
                            <img
                              src="../assets/images/products/product-img-5.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-8 col-12 flex-grow-1">
                        {/* heading */}
                        <div className="text-small mb-1">
                          <Link
                            href="#!"
                            className="text-decoration-none text-muted"
                          >
                            <small>Instant Food</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            href="/components/shopsingle"
                            className="text-inherit text-decoration-none"
                          >
                            Salted Instant Popcorn
                          </Link>
                        </h2>
                        <div>
                          {/* rating */}
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </small>
                          <span className="text-muted small">4.5(456)</span>
                        </div>
                        <div className="mt-6">
                          {/* price */}
                          <div>
                            <span className="text-dark">$13</span>
                            <span className="text-decoration-line-through text-muted">
                              $19
                            </span>
                          </div>
                          {/* btn */}
                          <div className="mt-3">
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i
                                className="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              />
                            </Link>
                            <Link
                              href="shop-wishlist.html"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                          {/* btn */}
                          <div className="mt-2">
                            <Link href="#!" className="btn btn-primary">
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
                                className="feather feather-shopping-bag me-2"
                              >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row mt-8">
              <div className="col">
                {/* nav */}
                <nav>
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <Link
                        className="page-link mx-1"
                        href="#"
                        aria-label="Previous"
                      >
                        <i className="feather-icon icon-chevron-left" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link mx-1 active" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link mx-1" href="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link mx-1" href="#">
                        ...
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link mx-1" href="#">
                        12
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link mx-1" href="#" aria-label="Next">
                        <i className="feather-icon icon-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
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

export default ShopList
