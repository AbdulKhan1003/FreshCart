import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'

function ShopSingle() {
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
                <a href="#!">Terms of Service</a>
                &amp;
                <a href="#!">Privacy Policy</a>
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <div className="modal-footer border-0 justify-content-center">
          Already have an account?
          <a href="#">Sign in</a>
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
          <a href="#!" className="alert-link">
            checkout now!
          </a>
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
                    <a href="shop-single.html" className="text-inherit">
                      <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                    </a>
                    <span>
                      <small className="text-muted">.98 / lb</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <a
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
                      </a>
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
                    <a href="shop-single.html" className="text-inherit">
                      <h6 className="mb-0">NutriChoice Digestive</h6>
                    </a>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <a
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
                      </a>
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
                    <a href="shop-single.html" className="text-inherit">
                      <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                    </a>
                    <span>
                      <small className="text-muted">1 kg</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <a
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
                      </a>
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
                    <a href="shop-single.html" className="text-inherit">
                      <h6 className="mb-0">Onion Flavour Potato</h6>
                    </a>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <a
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
                      </a>
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
                    <a href="shop-single.html" className="text-inherit">
                      <h6 className="mb-0">Salted Instant Popcorn</h6>
                    </a>
                    <span>
                      <small className="text-muted">100g</small>
                    </span>
                    {/* text */}
                    <div className="mt-2 small lh-1">
                      <a
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
                      </a>
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
          <a href="#!" className="btn btn-primary">
            Continue Shopping
          </a>
          <a href="#!" className="btn btn-dark">
            Update Cart
          </a>
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
            <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
              Clear All
            </a>
          </div>
          <div>
            <div data-simplebar="" style={{ height: 300 }}>
              <div className="list-group list-group-flush">
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                >
                  <span>Alabama</span>
                  <span>Min:$20</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Alaska</span>
                  <span>Min:$30</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Arizona</span>
                  <span>Min:$50</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>California</span>
                  <span>Min:$29</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Colorado</span>
                  <span>Min:$80</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Florida</span>
                  <span>Min:$90</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Arizona</span>
                  <span>Min:$50</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>California</span>
                  <span>Min:$29</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Colorado</span>
                  <span>Min:$80</span>
                </a>
                <a
                  href="#"
                  className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                >
                  <span>Florida</span>
                  <span>Min:$90</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
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
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Bakery Biscuits</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Napolitanke Ljesnjak
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <section className="mt-8">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-xl-6">
            {/* img slide */}
            <div className="product" id="product">
              <div
                className="zoom"
                onmousemove="zoom(event)"
                style={{
                  backgroundImage:
                    "url(../assets/images/products/product-single-img-1.jpg)"
                }}
              >
                {/* img */}
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
              <div className="thumbnails row g-3" id="productThumbnails">
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
          <div className="col-md-7 col-xl-6">
            <div className="ps-lg-10 mt-6 mt-md-0">
              {/* content */}
              <a href="#!" className="mb-4 d-block">
                Bakery Biscuits
              </a>
              {/* heading */}
              <h1 className="mb-1">Napolitanke Ljesnjak</h1>
              <div className="mb-4">
                {/* rating */}
                {/* rating */}
                <small className="text-warning">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-half" />
                </small>
                <a href="#" className="ms-2">
                  (30 reviews)
                </a>
              </div>
              <div className="fs-4">
                {/* price */}
                <span className="fw-bold text-dark">$32</span>
                <span className="text-decoration-line-through text-muted">
                  $35
                </span>
                <span>
                  <small className="fs-6 ms-2 text-danger">26% Off</small>
                </span>
              </div>
              {/* hr */}
              <hr className="my-6" />
              <div className="mb-5">
                <button type="button" className="btn btn-outline-secondary">
                  250g
                </button>
                {/* btn */}
                <button type="button" className="btn btn-outline-secondary">
                  500g
                </button>
                {/* btn */}
                <button type="button" className="btn btn-outline-secondary">
                  1kg
                </button>
              </div>
              <div>
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
                <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                  {/* button */}
                  {/* btn */}
                  <button type="button" className="btn btn-primary">
                    <i className="feather-icon icon-shopping-bag me-2" />
                    Add to cart
                  </button>
                </div>
                <div className="col-md-4 col-4">
                  {/* btn */}
                  <a
                    className="btn btn-light"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    aria-label="Compare"
                  >
                    <i className="bi bi-arrow-left-right" />
                  </a>
                  <a
                    className="btn btn-light"
                    href="shop-wishlist.html"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    aria-label="Wishlist"
                  >
                    <i className="feather-icon icon-heart" />
                  </a>
                </div>
              </div>
              {/* hr */}
              <hr className="my-6" />
              <div>
                {/* table */}
                <table className="table table-borderless mb-0">
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
              <div className="mt-8">
                {/* dropdown */}
                <div className="dropdown">
                  <a
                    className="btn btn-outline-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Share
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-facebook me-2" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-twitter me-2" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-instagram me-2" />
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-lg-14 mt-8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}
                <button
                  className="nav-link active"
                  id="product-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="product-tab-pane"
                  aria-selected="true"
                >
                  Product Details
                </button>
              </li>
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}
                <button
                  className="nav-link"
                  id="details-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#details-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="details-tab-pane"
                  aria-selected="false"
                >
                  Information
                </button>
              </li>
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}
                <button
                  className="nav-link"
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="reviews-tab-pane"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </li>
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}
                <button
                  className="nav-link"
                  id="sellerInfo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sellerInfo-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="sellerInfo-tab-pane"
                  aria-selected="false"
                  disabled=""
                >
                  Seller Info
                </button>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
              {/* tab pane */}
              <div
                className="tab-pane fade show active"
                id="product-tab-pane"
                role="tabpanel"
                aria-labelledby="product-tab"
                tabIndex={0}
              >
                <div className="my-8">
                  <div className="mb-5">
                    {/* text */}
                    <h4 className="mb-1">Nutrient Value &amp; Benefits</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nisi, tellus iaculis urna bibendum in lacus, integer. Id
                      imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
                      varius habitant ornare ac rhoncus. Consequat risus
                      facilisis ante ipsum netus risus adipiscing sagittis sed.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-1">Storage Tips</h5>
                    <p className="mb-0">
                      Nisi, tellus iaculis urna bibendum in lacus, integer. Id
                      imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
                      varius habitant ornare ac rhoncus. Consequat risus
                      facilisis ante ipsum netus risus adipiscing sagittis
                      sed.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                  {/* content */}
                  <div className="mb-5">
                    <h5 className="mb-1">Unit</h5>
                    <p className="mb-0">3 units</p>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-1">Seller</h5>
                    <p className="mb-0">DMart Pvt. LTD</p>
                  </div>
                  <div>
                    <h5 className="mb-1">Disclaimer</h5>
                    <p className="mb-0">
                      Image shown is a representation and may slightly vary from
                      the actual product. Every effort is made to maintain
                      accuracy of all information displayed.
                    </p>
                  </div>
                </div>
              </div>
              {/* tab pane */}
              <div
                className="tab-pane fade"
                id="details-tab-pane"
                role="tabpanel"
                aria-labelledby="details-tab"
                tabIndex={0}
              >
                <div className="my-8">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="mb-4">Details</h4>
                    </div>
                    <div className="col-12 col-lg-6">
                      <table className="table table-striped">
                        {/* table */}
                        <tbody>
                          <tr>
                            <th>Weight</th>
                            <td>1000 Grams</td>
                          </tr>
                          <tr>
                            <th>Ingredient Type</th>
                            <td>Vegetarian</td>
                          </tr>
                          <tr>
                            <th>Brand</th>
                            <td>Dmart</td>
                          </tr>
                          <tr>
                            <th>Item Package Quantity</th>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th>Form</th>
                            <td>Larry the Bird</td>
                          </tr>
                          <tr>
                            <th>Manufacturer</th>
                            <td>Dmart</td>
                          </tr>
                          <tr>
                            <th>Net Quantity</th>
                            <td>340.0 Gram</td>
                          </tr>
                          <tr>
                            <th>Product Dimensions</th>
                            <td>9.6 x 7.49 x 18.49 cm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-lg-6">
                      <table className="table table-striped">
                        {/* table */}
                        <tbody>
                          <tr>
                            <th>ASIN</th>
                            <td>SB0025UJ75W</td>
                          </tr>
                          <tr>
                            <th>Best Sellers Rank</th>
                            <td>#2 in Fruits</td>
                          </tr>
                          <tr>
                            <th>Date First Available</th>
                            <td>30 April 2022</td>
                          </tr>
                          <tr>
                            <th>Item Weight</th>
                            <td>500g</td>
                          </tr>
                          <tr>
                            <th>Generic Name</th>
                            <td>Banana Robusta</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab pane */}
              <div
                className="tab-pane fade"
                id="reviews-tab-pane"
                role="tabpanel"
                aria-labelledby="reviews-tab"
                tabIndex={0}
              >
                <div className="my-8">
                  {/* row */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="me-lg-12 mb-6 mb-md-0">
                        <div className="mb-5">
                          {/* title */}
                          <h4 className="mb-3">Customer reviews</h4>
                          <span>
                            {/* rating */}
                            <small className="text-warning">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                            </small>
                            <span className="ms-3">4.1 out of 5</span>
                            <small className="ms-3">
                              11,130 global ratings
                            </small>
                          </span>
                        </div>
                        <div className="mb-8">
                          {/* progress */}
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                5
                              </span>
                              <i className="bi bi-star-fill ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div className="progress" style={{ height: 6 }}>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            <span className="text-muted ms-3">53%</span>
                          </div>
                          {/* progress */}
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                4
                              </span>
                              <i className="bi bi-star-fill ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div className="progress" style={{ height: 6 }}>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={50}
                                />
                              </div>
                            </div>
                            <span className="text-muted ms-3">22%</span>
                          </div>
                          {/* progress */}
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                3
                              </span>
                              <i className="bi bi-star-fill ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div className="progress" style={{ height: 6 }}>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "35%" }}
                                  aria-valuenow={35}
                                  aria-valuemin={0}
                                  aria-valuemax={35}
                                />
                              </div>
                            </div>
                            <span className="text-muted ms-3">14%</span>
                          </div>
                          {/* progress */}
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                2
                              </span>
                              <i className="bi bi-star-fill ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div className="progress" style={{ height: 6 }}>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "22%" }}
                                  aria-valuenow={22}
                                  aria-valuemin={0}
                                  aria-valuemax={22}
                                />
                              </div>
                            </div>
                            <span className="text-muted ms-3">5%</span>
                          </div>
                          {/* progress */}
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                1
                              </span>
                              <i className="bi bi-star-fill ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div className="progress" style={{ height: 6 }}>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "14%" }}
                                  aria-valuenow={14}
                                  aria-valuemin={0}
                                  aria-valuemax={14}
                                />
                              </div>
                            </div>
                            <span className="text-muted ms-3">7%</span>
                          </div>
                        </div>
                        <div className="d-grid">
                          <h4>Review this product</h4>
                          <p className="mb-0">
                            Share your thoughts with other customers.
                          </p>
                          <a
                            href="#"
                            className="btn btn-outline-gray-400 mt-4 text-muted"
                          >
                            Write the Review
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* col */}
                    <div className="col-md-8">
                      <div className="mb-10">
                        <div className="d-flex justify-content-between align-items-center mb-8">
                          <div>
                            {/* heading */}
                            <h4>Reviews</h4>
                          </div>
                          <div>
                            <select className="form-select">
                              <option selected="">Top Reviews</option>
                              <option value="Most Recent">Most Recent</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex border-bottom pb-6 mb-6">
                          {/* img */}
                          {/* img */}
                          <img
                            src="../assets/images/avatar/avatar-10.jpg"
                            alt=""
                            className="rounded-circle avatar-lg"
                          />
                          <div className="ms-5">
                            <h6 className="mb-1">Shankar Subbaraman</h6>
                            {/* select option */}
                            {/* content */}
                            <p className="small">
                              <span className="text-muted">
                                30 December 2022
                              </span>
                              <span className="text-primary ms-3 fw-bold">
                                Verified Purchase
                              </span>
                            </p>
                            {/* rating */}
                            <div className="mb-2">
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <span className="ms-3 text-dark fw-bold">
                                Need to recheck the weight at delivery point
                              </span>
                            </div>
                            {/* text*/}
                            <p>
                              Product quality is good. But, weight seemed less
                              than 1kg. Since it is being sent in open package,
                              there is a possibility of pilferage in between.
                              FreshCart sends the veggies and fruits through
                              sealed plastic covers and Barcode on the weight
                              etc. .
                            </p>
                            <div>
                              <div className="border icon-shape icon-lg border-2">
                                {/* img */}
                                <img
                                  src="../assets/images/products/product-img-1.jpg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="border icon-shape icon-lg border-2 ms-1">
                                {/* img */}
                                <img
                                  src="../assets/images/products/product-img-2.jpg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="border icon-shape icon-lg border-2 ms-1">
                                {/* img */}
                                <img
                                  src="../assets/images/products/product-img-3.jpg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            {/* icon */}
                            <div className="d-flex justify-content-end mt-4">
                              <a href="#" className="text-muted">
                                <i className="feather-icon icon-thumbs-up me-1" />
                                Helpful
                              </a>
                              <a href="#" className="text-muted ms-4">
                                <i className="feather-icon icon-flag me-2" />
                                Report abuse
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                          {/* img */}
                          <img
                            src="../assets/images/avatar/avatar-12.jpg"
                            alt=""
                            className="rounded-circle avatar-lg"
                          />
                          <div className="ms-5">
                            <h6 className="mb-1">Robert Thomas</h6>
                            {/* content */}
                            <p className="small">
                              <span className="text-muted">
                                29 December 2022
                              </span>
                              <span className="text-primary ms-3 fw-bold">
                                Verified Purchase
                              </span>
                            </p>
                            {/* rating */}
                            <div className="mb-2">
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star text-warning" />
                              <span className="ms-3 text-dark fw-bold">
                                Need to recheck the weight at delivery point
                              </span>
                            </div>
                            <p>
                              Product quality is good. But, weight seemed less
                              than 1kg. Since it is being sent in open package,
                              there is a possibility of pilferage in between.
                              FreshCart sends the veggies and fruits through
                              sealed plastic covers and Barcode on the weight
                              etc. .
                            </p>
                            {/* icon */}
                            <div className="d-flex justify-content-end mt-4">
                              <a href="#" className="text-muted">
                                <i className="feather-icon icon-thumbs-up me-1" />
                                Helpful
                              </a>
                              <a href="#" className="text-muted ms-4">
                                <i className="feather-icon icon-flag me-2" />
                                Report abuse
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                          {/* img */}
                          <img
                            src="../assets/images/avatar/avatar-9.jpg"
                            alt=""
                            className="rounded-circle avatar-lg"
                          />
                          <div className="ms-5">
                            <h6 className="mb-1">Barbara Tay</h6>
                            {/* content */}
                            <p className="small">
                              <span className="text-muted">
                                28 December 2022
                              </span>
                              <span className="text-danger ms-3 fw-bold">
                                Unverified Purchase
                              </span>
                            </p>
                            {/* rating */}
                            <div className="mb-2">
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star text-warning" />
                              <span className="ms-3 text-dark fw-bold">
                                Need to recheck the weight at delivery point
                              </span>
                            </div>
                            <p>
                              Everytime i ordered from fresh i got greenish
                              yellow bananas just like i wanted so go for it ,
                              its happens very rare that u get over riped ones.
                            </p>
                            {/* icon */}
                            <div className="d-flex justify-content-end mt-4">
                              <a href="#" className="text-muted">
                                <i className="feather-icon icon-thumbs-up me-1" />
                                Helpful
                              </a>
                              <a href="#" className="text-muted ms-4">
                                <i className="feather-icon icon-flag me-2" />
                                Report abuse
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                          {/* img */}
                          <img
                            src="../assets/images/avatar/avatar-8.jpg"
                            alt=""
                            className="rounded-circle avatar-lg"
                          />
                          <div className="ms-5 flex-grow-1">
                            <h6 className="mb-1">Sandra Langevin</h6>
                            {/* content */}
                            <p className="small">
                              <span className="text-muted">
                                8 December 2022
                              </span>
                              <span className="text-danger ms-3 fw-bold">
                                Unverified Purchase
                              </span>
                            </p>
                            {/* rating */}
                            <div className="mb-2">
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star-fill text-warning" />
                              <i className="bi bi-star text-warning" />
                              <span className="ms-3 text-dark fw-bold">
                                Great product
                              </span>
                            </div>
                            <p>
                              Great product &amp; package. Delivery can be
                              expedited.
                            </p>
                            {/* icon */}
                            <div className="d-flex justify-content-end mt-4">
                              <a href="#" className="text-muted">
                                <i className="feather-icon icon-thumbs-up me-1" />
                                Helpful
                              </a>
                              <a href="#" className="text-muted ms-4">
                                <i className="feather-icon icon-flag me-2" />
                                Report abuse
                              </a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="btn btn-outline-gray-400 text-muted"
                          >
                            Read More Reviews
                          </a>
                        </div>
                      </div>
                      <div>
                        {/* rating */}
                        <h3 className="mb-5">Create Review</h3>
                        <div className="border-bottom py-4 mb-4">
                          <h4 className="mb-3">Overall rating</h4>
                          <div className="rater" />
                        </div>
                        <div className="border-bottom py-4 mb-4">
                          <h4 className="mb-0">Rate Features</h4>
                          <div className="my-5">
                            <h5>Flavor</h5>
                            <div className="rater" />
                          </div>
                          <div className="my-5">
                            <h5>Value for money</h5>
                            <div className="rater" />
                          </div>
                          <div className="my-5">
                            <h5>Scent</h5>
                            <div className="rater" />
                          </div>
                        </div>
                        {/* form control */}
                        <div className="border-bottom py-4 mb-4">
                          <h5>Add a headline</h5>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="What’s most important to know"
                          />
                        </div>
                        <div className="border-bottom py-4 mb-4">
                          <h5>Add a photo or video</h5>
                          <p>
                            Shoppers find images and videos more helpful than
                            text alone.
                          </p>
                          <div
                            id="my-dropzone"
                            className="dropzone mt-4 border-dashed rounded-2 min-h-0"
                          />
                        </div>
                        <div className="py-4 mb-4">
                          {/* heading */}
                          <h5>Add a written review</h5>
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="What did you like or dislike? What did you use this product for?"
                            defaultValue={""}
                          />
                        </div>
                        {/* button */}
                        <div className="d-flex justify-content-end">
                          <a href="#" className="btn btn-primary">
                            Submit Review
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab pane */}
              <div
                className="tab-pane fade"
                id="sellerInfo-tab-pane"
                role="tabpanel"
                aria-labelledby="sellerInfo-tab"
                tabIndex={0}
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section */}
    <section className="my-lg-14 my-14">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-12">
            {/* heading */}
            <h3>Related Items</h3>
          </div>
        </div>
        {/* row */}
        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
          {/* col */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  <a href="#!">
                    {/* img */}
                    <img
                      src="../assets/images/products/product-img-1.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </a>
                  {/* action btn */}
                  <div className="card-product-action">
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      />
                    </a>
                    <a
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </a>
                  </div>
                </div>
                {/* heading */}
                <div className="text-small mb-1">
                  <a href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </a>
                </div>
                <h2 className="fs-6">
                  <a href="#!" className="text-inherit text-decoration-none">
                    Haldiram's Sev Bhujia
                  </a>
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
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <a href="#!" className="btn btn-primary btn-sm">
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
                      Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <a href="#!">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </a>
                  {/* action btn */}
                  <div className="card-product-action">
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      />
                    </a>
                    <a
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </a>
                  </div>
                </div>
                {/* heading */}
                <div className="text-small mb-1">
                  <a href="#!" className="text-decoration-none text-muted">
                    <small>Bakery &amp; Biscuits</small>
                  </a>
                </div>
                <h2 className="fs-6">
                  <a href="#!" className="text-inherit text-decoration-none">
                    NutriChoice Digestive
                  </a>
                </h2>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (25)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
                  {/* btn */}
                  <div>
                    <a href="#!" className="btn btn-primary btn-sm">
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
                      Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <a href="#!">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </a>
                  {/* action btn */}
                  <div className="card-product-action">
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      />
                    </a>
                    <a
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </a>
                  </div>
                </div>
                {/* heading */}
                <div className="text-small mb-1">
                  <a href="#!" className="text-decoration-none text-muted">
                    <small>Bakery &amp; Biscuits</small>
                  </a>
                </div>
                <h2 className="fs-6">
                  <a href="#!" className="text-inherit text-decoration-none">
                    Cadbury 5 Star Chocolate
                  </a>
                </h2>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </small>
                  <span className="text-muted small">5 (469)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <a href="#!" className="btn btn-primary btn-sm">
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
                      Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <a href="#!">
                    <img
                      src="../assets/images/products/product-img-4.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </a>
                  {/* action btn */}
                  <div className="card-product-action">
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      />
                    </a>
                    <a
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </a>
                  </div>
                </div>
                {/* heading */}
                <div className="text-small mb-1">
                  <a href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </a>
                </div>
                <h2 className="fs-6">
                  <a href="#!" className="text-inherit text-decoration-none">
                    Onion Flavour Potato
                  </a>
                </h2>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                  </small>
                  <span className="text-muted small">3.5 (456)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$3</span>
                    <span className="text-decoration-line-through text-muted">
                      $5
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <a href="#!" className="btn btn-primary btn-sm">
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
                      Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <a href="#!">
                    <img
                      src="../assets/images/products/product-img-9.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </a>
                  {/* action btn */}
                  <div className="card-product-action">
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Quick View"
                      />
                    </a>
                    <a
                      href="shop-wishlist.html"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </a>
                  </div>
                </div>
                {/* heading */}
                <div className="text-small mb-1">
                  <a href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </a>
                </div>
                <h2 className="fs-6">
                  <a href="#!" className="text-inherit text-decoration-none">
                    Slurrp Millet Chocolate
                  </a>
                </h2>
                <div className="text-warning">
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (67)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$6</span>
                    <span className="text-decoration-line-through text-muted">
                      $10
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <a href="#!" className="btn btn-primary btn-sm">
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
                      Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  {/* footer */}
    <Footer />
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
                <a href="#!" className="mb-4 d-block">
                  Bakery Biscuits
                </a>
                <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                <div className="mb-4">
                  <small className="text-warning">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <a href="#" className="ms-2">
                    (30 reviews)
                  </a>
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
                    <a
                      className="btn btn-light"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </a>
                    <a
                      className="btn btn-light"
                      href="#!"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Wishlist"
                    >
                      <i className="feather-icon icon-heart" />
                    </a>
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
  {/* Javascript*/}
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default ShopSingle
