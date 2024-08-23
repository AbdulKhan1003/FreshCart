'use client'
import Link from "next/link"
import React from "react";
import Header from "./header/page";
import Footer from './footer/page'
import "primereact/resources/themes/lara-light-cyan/theme.css";

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
      {/* contianer */}
      <div className="container">
        <div className="row">
          {/* col */}
          <div className="col-12">
            {/* cta */}
            <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded">
              {/* img */}
              <div className="d-lg-flex align-items-center">
                <img
                  src="../assets/images/about/about-icons-1.svg"
                  alt=""
                  className="img-fluid"
                />
                {/* text */}
                <div className="ms-lg-4">
                  <h1 className="fs-2 mb-1">Welcome to FreshCart</h1>
                  <span>
                    Download the app get free food &amp;
                    <span className="text-primary">$30</span>
                    off on your first order.
                  </span>
                </div>
              </div>
              <div className="mt-3 mt-lg-0">
                {/* btn */}
                <Link href="#" className="btn btn-dark">
                  Download FreshCart App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section */}
    <section className="mt-8">
      <div className="container">
        {/* row */}
        <div className="table-responsive-xl pb-6 pb-xl-0">
          <div className="row flex-nowrap">
            <div className="col-12 col-xl-4 col-lg-6">
              <div
                className="p-8 mb-3 rounded"
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
            </div>
            <div className="col-12 col-xl-4 col-lg-6">
              <div
                className="p-8 mb-3 rounded"
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
            <div className="col-12 col-xl-4 col-lg-6">
              <div
                className="p-8 mb-3 rounded"
                style={{
                  background:
                    "url(../assets/images/banner/ad-banner-3.jpg) no-repeat",
                  backgroundSize: "cover"
                }}
              >
                <div>
                  {/* Banner Content */}
                  <h3 className="fw-bold mb-3">
                    When in doubt,
                    <br />
                    eat ice cream
                  </h3>
                  <div className="mt-4 mb-5 fs-5">
                    <p className="fs-5 mb-0">
                      Enjoy a scoop of
                      <br />
                      summer today
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
      </div>
    </section>
    {/* section */}
    <section className="my-lg-14 my-8">
      {/* category */}
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-12">
            <div className="mb-8">
              {/* heading */}
              <h3 className="mb-0">Shop by Category</h3>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-dairy-bread-eggs.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-snack-munchies.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Snack &amp; Munchies</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-bakery-biscuits.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Bakery &amp; Biscuits</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-instant-food.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  <div className="text-truncate">Instant Food</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-tea-coffee-drinks.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  <div className="text-truncate">Tea, Coffee &amp; Drinks</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  <img
                    src="../assets/images/category/category-fruits-vegetables.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  <div className="text-truncate">Fruits &amp; Vegetables</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-cold-drinks-juices.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Cold Drinks &amp; Juices</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-chicken-meat-fish.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  <div className="text-truncate">Chicken, Meat &amp; Fish</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-baby-care.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Baby Care</div>
                </div>
              </div>
            </Link>
          </div>
          {/* text */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-cleaning-essentials.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Cleaning Essentials</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-pet-care.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Pet Care</div>
                </div>
              </div>
            </Link>
          </div>
          {/* col */}
          <div className="col">
            <Link
              href="/components/shopgrid"
              className="text-decoration-none text-inherit"
            >
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img
                    src="../assets/images/category/category-atta-rice-dal.jpg"
                    alt="Grocery Ecommerce Template"
                    className="mb-3"
                  />
                  {/* text */}
                  <div className="text-truncate">Atta, Rice &amp; Dal</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* section */}
    <section>
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-12 mb-6">
            {/* heading */}
            <h3 className="mb-1">Fruits &amp; vegetables</h3>
            <p className="mb-0">eat fresh, stay healthy</p>
          </div>
        </div>
        {/* slider */}
        <div className="product-slider">
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  {/* img */}
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-15.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Fresh Apple
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
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* badge */}
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-success">14%</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-16.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                {/* title */}
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Golden Pineapple
                  </Link>
                </h2>
                {/* rating */}
                <div className="text-warning">
                  {/* rating */}
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
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-17.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Fresh Kiwi
                  </Link>
                </h2>
                {/* rating */}
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </small>
                  <span className="text-muted small">5 (469)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* badge */}
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Hot</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-18.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                {/* action btn */}
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Fresh Banana
                  </Link>
                </h2>
                {/* rating */}
                <div className="text-warning">
                  {/* rating */}
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
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-19.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Beatroot
                  </Link>
                </h2>
                {/* rating */}
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (39)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span className="text-dark">$13</span>
                    <span className="text-decoration-line-through text-muted">
                      $18
                    </span>
                  </div>
                  {/*  btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* badge */}
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-15.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Fresh Apple
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
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* badge */}
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-success">14%</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-16.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Golden Pineapple
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
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
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-17.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Fresh Kiwi
                  </Link>
                </h2>
                {/* rating*/}
                <div className="text-warning">
                  {/* rating */}
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
                  {/*  btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* badge */}
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Hot</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-18.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Fresh Banana
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
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
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-19.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Fruits &amp; Vegetables</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Beatroot
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (39)</span>
                </div>
                {/* price */}
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span className="text-dark">$13</span>
                    <span className="text-decoration-line-through text-muted">
                      $18
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section */}
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <h3 className="mb-1">Breakfast &amp; dairy</h3>
            <p className="mb-0">butter, cheese, milk, curd and more</p>
          </div>
        </div>
        <div className="product-slider">
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
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
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Haldiram's Sev Bhujia
                  </Link>
                </h2>
                <div>
                  <small className="text-warning">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5(149)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-success">14%</span>
                  </div>
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Bakery &amp; Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    NutriChoice Digestive
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (25)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Bakery &amp; Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Cadbury 5 Star Chocolate
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </small>
                  <span className="text-muted small">5 (469)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Hot</span>
                  </div>
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-4.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Onion Flavour Potato
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                  </small>
                  <span className="text-muted small">3.5 (456)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$3</span>
                    <span className="text-decoration-line-through text-muted">
                      $5
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-5.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Instant Food</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Salted Instant Popcorn
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (39)</span>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span className="text-dark">$13</span>
                    <span className="text-decoration-line-through text-muted">
                      $18
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-6.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Dairy, Bread &amp; Eggs</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Blueberry Greek Yogurt
                  </Link>
                </h2>
                <div>
                  <small className="text-warning">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (189)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-7.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Dairy, Bread &amp; Eggs</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Britannia Cheese Slices
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </small>
                  <span className="text-muted small">5 (345)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-8.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Instant Food</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Kellogg's Original Cereals
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4 (90)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-9.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Slurrp Millet Chocolate
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (67)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$3</span>
                    <span className="text-decoration-line-through text-muted">
                      $5
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-10.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="bi bi-eye" />
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Dairy, Bread &amp; Eggs</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Amul Butter - 500 g
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                  </small>
                  <span className="text-muted small">3.5 (89)</span>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span className="text-dark">$13</span>
                    <span className="text-decoration-line-through text-muted">
                      $18
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
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
          <div className="col-12 mb-6">
            <h3 className="mb-1">Biscuits, snacks &amp; chocolates</h3>
            <p className="mb-0">discover a wide variety of munchies</p>
          </div>
        </div>
        <div className="product-slider">
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
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
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Haldiram's Sev Bhujia
                  </Link>
                </h2>
                <div>
                  <small className="text-warning">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5(149)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-success">14%</span>
                  </div>
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-2.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Bakery &amp; Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    NutriChoice Digestive
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (25)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-3.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Bakery &amp; Biscuits</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Cadbury 5 Star Chocolate
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </small>
                  <span className="text-muted small">5 (469)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Hot</span>
                  </div>
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-4.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Onion Flavour Potato
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                  </small>
                  <span className="text-muted small">3.5 (456)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$3</span>
                    <span className="text-decoration-line-through text-muted">
                      $5
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-5.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Instant Food</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Salted Instant Popcorn
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (39)</span>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span className="text-dark">$13</span>
                    <span className="text-decoration-line-through text-muted">
                      $18
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                {/* badge */}
                <div className="text-center position-relative">
                  <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                  {/* img */}
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-6.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="#!"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Dairy, Bread &amp; Eggs</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Blueberry Greek Yogurt
                  </Link>
                </h2>
                <div>
                  <small className="text-warning">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (189)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$18</span>
                    <span className="text-decoration-line-through text-muted">
                      $24
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-7.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Dairy, Bread &amp; Eggs</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Britannia Cheese Slices
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </small>
                  <span className="text-muted small">5 (345)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$24</span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                {/* text */}
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-8.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Instant Food</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Kellogg's Original Cereals
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4 (90)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$32</span>
                    <span className="text-decoration-line-through text-muted">
                      $35
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-9.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
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
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Snack &amp; Munchies</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Slurrp Millet Chocolate
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="text-muted small">4.5 (67)</span>
                </div>
                {/* rating */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">$3</span>
                    <span className="text-decoration-line-through text-muted">
                      $5
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="item">
            {/* item */}
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <Link href="#!">
                    <img
                      src="../assets/images/products/product-img-10.jpg"
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid"
                    />
                  </Link>
                  {/* action btn */}
                  <div className="card-product-action">
                    <Link
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="bi bi-eye" />
                    </Link>
                    <Link
                      href="/components/shopwishlist"
                      className="btn-action"
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
                <div className="text-small mb-1">
                  <Link href="#!" className="text-decoration-none text-muted">
                    <small>Dairy, Bread &amp; Eggs</small>
                  </Link>
                </div>
                <h2 className="fs-6">
                  <Link href="#!" className="text-inherit text-decoration-none">
                    Amul Butter - 500 g
                  </Link>
                </h2>
                <div className="text-warning">
                  {/* rating */}
                  <small>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                  </small>
                  <span className="text-muted small">3.5 (89)</span>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <span className="text-dark">$13</span>
                    <span className="text-decoration-line-through text-muted">
                      $18
                    </span>
                  </div>
                  {/* btn */}
                  <div>
                    <Link href="#!" className="btn btn-primary btn-sm">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* section */}
    {/* cta section */}
    <section>
      <div className="container">
        <hr className="my-lg-14 my-8" />
        {/* row */}
        <div className="row align-items-center">
          <div className="offset-lg-2 col-lg-4 col-md-6">
            <div className="text-center">
              {/* img */}
              <img
                src="../assets/images/png/iphone-2.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mb-6">
              <div className="mb-7">
                {/* heading */}
                <h2>Get the FreshCart app</h2>
                <p className="mb-0">
                  We will send you a link, open it on your phone to download the
                  app.
                </p>
              </div>
              <div className="mb-5">
                {/* form check */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Email
                  </label>
                </div>
                {/* form check */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Phone
                  </label>
                </div>
                {/* form */}
                <form className="row g-3 mt-1">
                  {/* col */}
                  <div className="col-lg-6 col-7">
                    {/* input */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  {/* col */}
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">
                      Share app link
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {/* app */}
                <small>Download app from</small>
                <ul className="list-inline mb-0 mt-3">
                  {/* list item */}
                  <li className="list-inline-item">
                    {/* img */}
                    <Link href="#!">
                      <img
                        src="../assets/images/appbutton/appstore-btn.svg"
                        alt=""
                        style={{ width: 140 }}
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    {/* img */}
                    <Link href="#!">
                      <img
                        src="../assets/images/appbutton/googleplay-btn.svg"
                        alt=""
                        style={{ width: 140 }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-lg-14 my-8" />
      </div>
    </section>
    {/* featured section */}
    <section className="my-lg-14 my-8">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6">
                <img src="../assets/images/icons/clock.svg" alt="" />
              </div>
              {/* title */}
              <h3 className="h5 mb-3">10 minute grocery now</h3>
              {/* text */}
              <p className="mb-0">
                Get your order delivered to your doorstep at the earliest from
                FreshCart pickup stores near you.
              </p>
            </div>
          </div>
          {/* col */}
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6">
                <img src="../assets/images/icons/gift.svg" alt="" />
              </div>
              {/* title */}
              <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
              {/* text */}
              <p className="mb-0">
                Cheaper prices than your local supermarket, great cashback
                offers to top it off. Get best pricess &amp; offers.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6">
                <img src="../assets/images/icons/package.svg" alt="" />
              </div>
              {/* title */}
              <h3 className="h5 mb-3">Wide Assortment</h3>
              {/* text */}
              <p className="mb-0">
                Choose from 5000+ products across food, personal care,
                household, bakery, veg and non-veg &amp; other categories.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6">
                <img src="../assets/images/icons/refresh-cw.svg" alt="" />
              </div>
              {/* title */}
              <h3 className="h5 mb-3">Easy Returns</h3>
              {/* text */}
              <p className="mb-0">
                Not satisfied with a product? Return it at the doorstep &amp;
                get a refund within hours. No questions asked
                <Link href="#!">policy</Link>.
              </p>
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
