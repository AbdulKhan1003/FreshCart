import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'
import Link from 'next/link'

function Index() {
  return (
<>
  {/* navigation */}
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
    {/* section */}
    <section className="mt-8">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-xxl-8 col-xl-7">
            {/* hero slider */}
            <div className="hero-slider">
              <div
                style={{
                  background:
                    "url(../assets/images/slider/slider-image-1.jpg) no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "0.5rem"
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-7 col-lg-9 py-14 px-8 text-xs-center">
                  {/* badge */}
                  <div className="d-flex align-items-center mb-4">
                    <span>Exclusive Offer</span>
                    <span className="badge bg-danger ms-2">15%</span>
                  </div>
                  {/* title */}
                  <h2 className="text-dark display-5 fw-bold mb-3">
                    Best Online Deals, Free Stuff
                  </h2>
                  <p className="fs-5 text-dark">
                    Only on this week... Don’t miss
                  </p>
                  {/* price */}
                  <div className="mb-4 mt-4">
                    <span className="text-dark">
                      Start from
                      <span className="fs-4 text-danger ms-1">$5.99</span>
                    </span>
                  </div>
                  {/* btn */}
                  <Link href="#!" className="btn btn-primary">
                    Get Best Deal
                    <i className="feather-icon icon-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
              {/* img */}
              <div
                style={{
                  background:
                    "url(../assets/images/slider/slider-image-2.jpg) no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "0.5rem"
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-7 col-lg-9 py-14 ps-8 text-xs-center">
                  {/* badge */}
                  <div className="d-flex align-items-center mb-4">
                    <span>Exclusive Offer</span>
                    <span className="badge bg-danger ms-2">35%</span>
                  </div>
                  {/* title */}
                  <h2 className="text-dark display-5 fw-bold mb-3">
                    Chocozay wafer-rolls Deals
                  </h2>
                  {/* para */}
                  <p className="fs-5 text-dark">
                    Only on this week... Don’t miss
                  </p>
                  <div className="mb-4 mt-4">
                    <span className="text-dark">
                      Start from
                      <span className="fs-4 text-danger ms-1">$34.99</span>
                    </span>
                  </div>
                  {/* btn */}
                  <Link href="#!" className="btn btn-primary">
                    Shop Deals Now
                    <i className="feather-icon icon-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
              {/* img */}
              <div
                style={{
                  background:
                    "url(../assets/images/slider/slider-image-3.jpg) no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "0.5rem"
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-7 col-lg-9 py-14 ps-8 text-xs-center">
                  {/* badge */}
                  <div className="d-flex align-items-center mb-4">
                    <span>Exclusive Offer</span>
                    <span className="badge bg-danger ms-2">20%</span>
                  </div>
                  {/* title */}
                  <h2 className="text-dark display-5 fw-bold mb-3">
                    Cokoladni Kolutici Lasta
                  </h2>
                  {/* para */}
                  <p className="fs-5 text-dark">
                    Only on this week... Don’t miss
                  </p>
                  <div className="mb-4 mt-4">
                    <span className="text-dark">
                      Start from
                      <span className="fs-4 text-primary ms-1">$5.99</span>
                    </span>
                  </div>
                  {/* btn */}
                  <Link href="#!" className="btn btn-primary">
                    Shop This Week Offer
                    <i className="feather-icon icon-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-12 d-lg-flex d-xl-block gap-3 gap-xl-0">
            <div
              className="flex-fill px-8 py-9 mb-6 rounded"
              style={{
                background:
                  "url(../assets/images/banner/ad-banner-1.jpg) no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div>
                <h3 className="mb-0 fw-bold">
                  10% cashback on
                  <br />
                  personal care
                </h3>
                <div className="mt-4 mb-5 fs-5">
                  <p className="mb-0">Max cashback: $12</p>
                  <span>
                    Code:
                    <span className="fw-bold text-dark">CARE12</span>
                  </span>
                </div>
                <Link href="#" className="btn btn-dark">
                  Shop Now
                </Link>
              </div>
            </div>
            <div
              className="flex-fill px-8 py-8 rounded"
              style={{
                background:
                  "url(../assets/images/banner/ad-banner-2.jpg) no-repeat",
                backgroundSize: "cover"
              }}
            >
              {/* Banner Content */}
              <div>
                {/* Banner Content */}
                <h3 className="fw-bold mb-3">
                  Say yes to
                  <br />
                  season’s fresh
                </h3>
                <div className="mt-4 mb-5 fs-5">
                  <p className="fs-5 mb-0">
                    Refresh your day
                    <br />
                    the fruity way
                  </p>
                </div>
                <Link href="#" className="btn btn-dark">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section category */}
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-6">
              {/* heading    */}
              <h3 className="mb-0">Shop Popular Categories</h3>
            </div>
          </div>
          <div className="row">
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/dairy-bread-eggs.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Dairy, Bread &amp; Eggs
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/fruits-vegetables.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                <div className="mt-4">
                  {/* text */}
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Fruits &amp; Vegetables
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/snack-munchies.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Snack &amp; Munchies
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/bakery-biscuits.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Bakery &amp; Biscuits
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/instant-food.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Instant Food
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/tea-coffee-drinks.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Tea, Coffee &amp; Drinks
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/cold-drinks-juices.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Cold Drinks &amp; Juices
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/chicken-meat-fish.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Chicken, Meat &amp; Fish
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              {/* text */}
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/baby-care.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Baby Care
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/cleaning-essentials.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* img */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Cleaning Essentials
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/pet-care.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Pet Care
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* col */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center mb-10">
                {/* img */}
                <Link href="#">
                  <img
                    src="../assets/images/category/atta-rice-dal.png"
                    alt=""
                    className="card-image rounded-circle"
                  />
                </Link>
                {/* text */}
                <div className="mt-4">
                  <h5 className="fs-6 mb-0">
                    <Link href="/components/shopgrid" className="text-inherit">
                      Atta, Rice &amp; Dal
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section */}
    <section className="mb-lg-14 mb-8">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-12">
            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
              {/* heading */}
              <div className="mb-5 mb-xl-0">
                <h3 className="mb-0">New Products</h3>
                <p className="mb-0">New products with updated stocks</p>
              </div>
              <div>
                {/* nav */}
                <nav>
                  <ul
                    className="nav nav-pills nav-scroll border-bottom-0 gap-1"
                    id="nav-tab"
                    role="tablist"
                  >
                    {/* nav item */}
                    <li className="nav-item">
                      {/* nav link */}
                      <Link
                        href="#"
                        className="nav-link active"
                        id="nav-fruitsandveg-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-fruitsandveg"
                        role="tab"
                        aria-controls="nav-fruitsandveg"
                        aria-selected="true"
                      >
                        Fruits &amp; Vegetables
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      {/* nav link */}
                      <Link
                        href="#"
                        className="nav-link"
                        id="nav-snackMunchies-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-snackMunchies"
                        role="tab"
                        aria-controls="nav-snackMunchies"
                        aria-selected="false"
                      >
                        Snack &amp; Munchies
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      {/* nav link */}
                      <Link
                        href="#"
                        className="nav-link"
                        id="nav-bakery-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-bakery"
                        role="tab"
                        aria-controls="nav-bakery"
                        aria-selected="false"
                      >
                        Bakery &amp; Biscuits
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      {/* nav link */}
                      <Link
                        href="#"
                        className="nav-link"
                        id="nav-tea-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-tea"
                        role="tab"
                        aria-controls="nav-tea"
                        aria-selected="false"
                      >
                        Tea, Coffee &amp; Drinks
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      {/* nav link */}
                      <Link
                        href="#"
                        className="nav-link"
                        id="nav-drinks-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-drinks"
                        role="tab"
                        aria-controls="nav-drinks"
                        aria-selected="false"
                      >
                        Cold Drinks &amp; Juices
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row">
          <div className="col-12">
            {/* tab */}
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-fruitsandveg"
                role="tabpanel"
                aria-labelledby="nav-fruitsandveg-tab"
                tabIndex={0}
              >
                {/* row */}
                <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-1.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-h   ="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$18</span>
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Britannia NutriChoice Digestive Biscuits
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
                          <span className="text-muted small">4.4(3,149)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$15</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 star chocolate
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-4.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(140)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$12</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $18
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-warning text-dark">
                              14%
                            </span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-5.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$40</span>
                            <span className="text-decoration-line-through text-muted">
                              $65
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-6.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Epigamia Blueberry Greek Yogurt, 90g
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
                          <span className="text-muted small">4.4(694)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$17</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-8.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Kellogg's Special K Original Cereal
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$25</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $28
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-9.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Slurrp Farm No Maida Millet Pancake Mix
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
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$34</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $38
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Britannia NutriChoice Digestive Biscuits
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
                          <span className="text-muted small">4.4(3,149)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$15</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 star chocolate
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-snackMunchies"
                role="tabpanel"
                aria-labelledby="nav-snackMunchies-tab"
                tabIndex={0}
              >
                <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-4.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(140)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$12</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $18
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-1.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$18</span>
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Britannia NutriChoice Digestive Biscuits
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
                          <span className="text-muted small">4.4(3,149)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$15</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 star chocolate
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-warning text-dark">
                              14%
                            </span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-5.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$40</span>
                            <span className="text-decoration-line-through text-muted">
                              $65
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-6.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Epigamia Blueberry Greek Yogurt, 90g
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
                          <span className="text-muted small">4.4(694)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$17</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-8.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Kellogg's Special K Original Cereal
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$25</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $28
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-9.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Slurrp Farm No Maida Millet Pancake Mix
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
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$34</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $38
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-bakery"
                role="tabpanel"
                aria-labelledby="nav-bakery-tab"
                tabIndex={0}
              >
                <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-warning text-dark">
                              14%
                            </span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-5.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$40</span>
                            <span className="text-decoration-line-through text-muted">
                              $65
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-6.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Epigamia Blueberry Greek Yogurt, 90g
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
                          <span className="text-muted small">4.4(694)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$17</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-8.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Kellogg's Special K Original Cereal
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$25</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $28
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-9.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Slurrp Farm No Maida Millet Pancake Mix
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
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$34</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $38
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-1.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$18</span>
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Britannia NutriChoice Digestive Biscuits
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
                          <span className="text-muted small">4.4(3,149)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$15</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 star chocolate
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-4.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(140)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$12</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $18
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-tea"
                role="tabpanel"
                aria-labelledby="nav-tea-tab"
                tabIndex={0}
              >
                <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-4.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(140)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$12</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $18
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-warning text-dark">
                              14%
                            </span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-5.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$40</span>
                            <span className="text-decoration-line-through text-muted">
                              $65
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-6.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Epigamia Blueberry Greek Yogurt, 90g
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
                          <span className="text-muted small">4.4(694)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$17</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-1.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$18</span>
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Britannia NutriChoice Digestive Biscuits
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
                          <span className="text-muted small">4.4(3,149)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$15</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 star chocolate
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-8.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Kellogg's Special K Original Cereal
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$25</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $28
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-9.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Slurrp Farm No Maida Millet Pancake Mix
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
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$34</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $38
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-drinks"
                role="tabpanel"
                aria-labelledby="nav-drinks-tab"
                tabIndex={0}
              >
                <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-4.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(140)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$12</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $18
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-warning text-dark">
                              14%
                            </span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-5.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$40</span>
                            <span className="text-decoration-line-through text-muted">
                              $65
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-6.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Epigamia Blueberry Greek Yogurt, 90g
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
                          <span className="text-muted small">4.4(694)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$17</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-1.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
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
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$18</span>
                            <span className="text-decoration-line-through text-muted">
                              $24
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-2.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Britannia NutriChoice Digestive Biscuits
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
                          <span className="text-muted small">4.4(3,149)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$15</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Cadbury 5 star chocolate
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$32</span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-8.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Kellogg's Special K Original Cereal
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
                          <span className="text-muted small">4.7(1,130)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$25</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $28
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    {/* card */}
                    <div className="card card-product-v2 h-100">
                      <div className="card-body position-relative">
                        {/* badge */}
                        <div className="text-center position-relative">
                          {/* img */}
                          <Link href="#!">
                            <img
                              src="../assets/images/products/product-img-9.jpg"
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action btn */}
                          <div className="product-action-btn">
                            <Link
                              href="#!"
                              className="btn-action mb-1"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="bi bi-eye" />
                            </Link>
                            <Link
                              href="/components/shopwishlist"
                              className="btn-action mb-1"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                            >
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        {/* title */}
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            Slurrp Farm No Maida Millet Pancake Mix
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
                          <span className="text-muted small">4.5(212)</span>
                        </div>
                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-danger">$34</span>
                            <span className="text-muted text-decoration-line-through ms-1">
                              $38
                            </span>
                          </div>
                          <div>
                            <span className="text-uppercase small text-primary">
                              In Stock
                            </span>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="product-fade-block">
                          <div className="d-grid mt-4">
                            <Link
                              href="#"
                              className="btn btn-primary rounded-pill"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* hidden class for hover */}
                      <div
                        className="product-content-fade border-info"
                        style={{ marginBottom: "-60px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-4 bg-light d-lg-flex justify-content-between align-items-center rounded">
              <div className="p-10">
                <h2 className="mb-1 fw-bold">One Stop Grocery Shop</h2>
                <p className="mb-0 lead">
                  Shopping for your furry friend? Find food,
                  <br />
                  treats, and more in one easy spot.
                </p>
                <Link href="#" className="btn btn-dark mt-5">
                  Get Discount on Share
                </Link>
              </div>
              <div className="p-6 d-lg-block d-none">
                <img
                  src="../assets/images/svg-graphics/store-graphics.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-md-flex justify-content-between align-items-center mb-8">
              <div>
                <h3 className="mb-1">Special Offers of the View All Week!</h3>
                <p>
                  Get exclusive ongoing offers, deals, and discount codes of
                  shopping
                </p>
              </div>
              <div>
                <Link href="#">
                  View All
                  <i className="feather-icon icon-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-0 border border-2 border-danger rounded-3">
          <div className="col mb-lg-0">
            <div className="card card-product-v2 h-100">
              <div className="card-body position-relative text-center">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0">
                    <span className="badge bg-info">25%</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-dark">$15</span>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Britannia NutriChoice Digestive Biscuits
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
                  <span className="text-muted small">4.4(3,149)</span>
                </div>
                <div className="mt-3">
                  <span className="text-uppercase small text-primary">
                    In Stock
                  </span>
                </div>
                <div className="mt-4">
                  <div className="progress mt-6" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-gray-400"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow={88}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="my-3">
                    <small>
                      the available products :
                      <span className="text-dark fw-bold">12</span>
                    </small>
                  </div>
                </div>
                {/* btn */}
                <div className="product-fade-block">
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="product-content-fade border-info"
                style={{ marginBottom: "-60px" }}
              />
            </div>
          </div>
          <div className="col mb-lg-0">
            <div className="card card-product-v2 h-100">
              <div className="card-body position-relative text-center">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 text-danger">
                    <small>Buy 1 Get $4.00 Off</small>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-dark">$32</span>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Cadbury 5 star chocolate
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
                  <span className="text-muted small">4.7(1,130)</span>
                </div>
                <div className="mt-3">
                  <span className="text-uppercase small text-primary">
                    In Stock
                  </span>
                </div>
                <div className="mt-4">
                  <div className="progress mt-6" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-gray-400"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow={65}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="my-3">
                    <small>
                      the available products :
                      <span className="text-dark fw-bold">34</span>
                    </small>
                  </div>
                </div>
                {/* btn */}
                <div className="product-fade-block">
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="product-content-fade border-info"
                style={{ marginBottom: "-60px" }}
              />
            </div>
          </div>
          <div className="col mb-lg-0">
            <div className="card card-product-v2 h-100">
              <div className="card-body position-relative text-center">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0">
                    <span className="badge bg-info">22%</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-8.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-danger">$25</span>
                  <span className="text-muted text-decoration-line-through ms-1">
                    $28
                  </span>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Kellogg's Special K Original Cereal
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
                  <span className="text-muted small">4.7(1,130)</span>
                </div>
                <div className="mt-3">
                  <span className="text-uppercase small text-primary">
                    In Stock
                  </span>
                </div>
                <div className="mt-4">
                  <div className="progress mt-6" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-gray-400"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="my-3">
                    <small>
                      the available products :
                      <span className="text-dark fw-bold">8</span>
                    </small>
                  </div>
                </div>
                {/* btn */}
                <div className="product-fade-block">
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="product-content-fade border-info"
                style={{ marginBottom: "-60px" }}
              />
            </div>
          </div>
          <div className="col mb-lg-0">
            <div className="card card-product-v2 h-100">
              <div className="card-body position-relative text-center">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0">
                    <span className="badge bg-info">16%</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-9.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-danger">$34</span>
                  <span className="text-muted text-decoration-line-through ms-1">
                    $38
                  </span>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Slurrp Farm No Maida Millet Pancake Mix
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
                  <span className="text-muted small">4.5(212)</span>
                </div>
                <div className="mt-3">
                  <span className="text-uppercase small text-primary">
                    In Stock
                  </span>
                </div>
                <div className="mt-4">
                  <div className="progress mt-6" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-gray-400"
                      role="progressbar"
                      style={{ width: "78%" }}
                      aria-valuenow={78}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="my-3">
                    <small>
                      the available products :
                      <span className="text-dark fw-bold">67</span>
                    </small>
                  </div>
                </div>
                {/* btn */}
                <div className="product-fade-block">
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="product-content-fade border-info"
                style={{ marginBottom: "-60px" }}
              />
            </div>
          </div>
          <div className="col mb-lg-0">
            <div className="card card-product-v2 h-100">
              <div className="card-body position-relative text-center">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-10.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-danger">$22</span>
                  <span className="text-muted text-decoration-line-through ms-1">
                    $29
                  </span>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Amul Butter - 500g
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
                  <span className="text-muted small">4.3(68)</span>
                </div>
                <div className="mt-3">
                  <span className="text-uppercase small text-primary">
                    In Stock
                  </span>
                </div>
                <div className="mt-4">
                  <div className="progress mt-6" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-gray-400"
                      role="progressbar"
                      style={{ width: "44%" }}
                      aria-valuenow={44}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="my-3">
                    <small>
                      the available products :
                      <span className="text-dark fw-bold">44</span>
                    </small>
                  </div>
                </div>
                {/* btn */}
                <div className="product-fade-block">
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="product-content-fade border-info"
                style={{ marginBottom: "-60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <h3 className="mb-1">Bestsellers In Your Area</h3>
            <p className="mb-0">
              Find the bestseller products in your area with discount.
            </p>
          </div>
        </div>
        <div className="product-slider">
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-1.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
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
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-danger">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Britannia NutriChoice Digestive Biscuits
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
                  <span className="text-muted small">4.4(3,149)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$15</span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Cadbury 5 star chocolate
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
                  <span className="text-muted small">4.7(1,130)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-4.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Onion Flavour Potato
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
                  <span className="text-muted small">4.5(140)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-danger">$12</span>
                    <span className="text-muted text-decoration-line-through ms-1">
                      $18
                    </span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-warning text-dark">14%</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-5.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
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
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5(212)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-danger">$40</span>
                    <span className="text-decoration-line-through text-muted">
                      $65
                    </span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-6.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Epigamia Blueberry Greek Yogurt, 90g
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
                  <span className="text-muted small">4.4(694)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$17</span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-8.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Kellogg's Special K Original Cereal
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
                  <span className="text-muted small">4.7(1,130)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-danger">$25</span>
                    <span className="text-muted text-decoration-line-through ms-1">
                      $28
                    </span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-9.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Slurrp Farm No Maida Millet Pancake Mix
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
                  <span className="text-muted small">4.5(212)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-danger">$34</span>
                    <span className="text-muted text-decoration-line-through ms-1">
                      $38
                    </span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Britannia NutriChoice Digestive Biscuits
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
                  <span className="text-muted small">4.4(3,149)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$15</span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {/* card */}
            <div className="card card-product h-100">
              <div className="card-body position-relative">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="product-action-btn">
                    <Link
                      href="#!"
                      className="btn-action mb-1"
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
                      href="/components/shopwishlist"
                      className="btn-action mb-1"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                    >
                      <i className="bi bi-heart" />
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Compare"
                    >
                      <i className="bi bi-arrow-left-right" />
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Cadbury 5 star chocolate
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
                  <span className="text-muted small">4.7(1,130)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                  </div>
                  <div>
                    <span className="text-uppercase small text-primary">
                      In Stock
                    </span>
                  </div>
                </div>
                <div>
                  {/* btn */}
                  <div className="d-grid mt-4">
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section cta */}
    <section
      className="bg-dark"
      style={{
        background: "url(../assets/images/svg-graphics/pattern.svg) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="offset-lg-1 col-lg-10">
            <div className="row align-items-center">
              {/* col */}
              <div className="col-md-6">
                <div className="text-white mt-8 mt-lg-0">
                  <span>$30 discount for your first order</span>
                  <h2 className="h2 text-white my-4">
                    Get top deals, latest trends, and more.
                  </h2>
                  <p className="text-white-50">
                    Join our email subscription now to get updates on promotions
                    and coupons.
                  </p>
                  {/* form */}
                  <form className="row g-3 needs-validation" noValidate="">
                    <div className="col-6">
                      {/* input */}
                      <label
                        htmlFor="emailAddress"
                        className="form-label visually-hidden"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailAddress"
                        placeholder="Enter Email Address"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter email.
                      </div>
                    </div>
                    {/* btn */}
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary mb-3">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* col */}
              <div className="col-md-6">
                <div className="text-center">
                  {/* img */}
                  <img
                    src="../assets/images/png/girl-email.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

export default Index
