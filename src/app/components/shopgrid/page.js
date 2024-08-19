'use client'
import React from 'react'
import Link from 'next/link'
import Header from '../header/page'

function shopGrid() {
  return (
<>
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
                  <a href="#!">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Shop</a>
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
        {/* row */}
        <div className="row gx-10">
          {/* col */}
          <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
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
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#categoryFlushOne"
                        aria-expanded="false"
                        aria-controls="categoryFlushOne"
                      >
                        Dairy, Bread &amp; Eggs
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a href="#!" className="nav-link">
                                Milk
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Milk Drinks
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Curd &amp; Yogurt
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Eggs
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Bread
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Buns &amp; Bakery
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Butter &amp; More
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Cheese
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Paneer &amp; Tofu
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Cream &amp; Whitener
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Condensed Milk
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Vegan Drinks
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* nav item */}
                    <li className="nav-item border-bottom w-100">
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Snacks &amp; Munchies
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a href="#!" className="nav-link">
                                Chips &amp; Crisps
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Nachos
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Popcorn
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Bhujia &amp; Mixtures
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Namkeen Snacks
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Healthy Snacks
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Cakes &amp; Rolls
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Energy Bars
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Papad &amp; Fryums
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Rusks &amp; Wafers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Fruits &amp; Vegetables
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Fresh Vegetables
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Herbs &amp; Seasonings
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Fresh Fruits
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Organic Fruits &amp; Vegetables
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Cuts &amp; Sprouts
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Exotic Fruits &amp; Veggies
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Flower Bouquets, Bunches
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Cold Drinks &amp; Juices
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a href="#!" className="nav-link">
                                Soft Drinks
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Fruit Juices
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Coldpress
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Energy Drinks
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Water &amp; Ice Cubes
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Soda &amp; Mixers
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Concentrates &amp; Syrups
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Detox &amp; Energy Drinks
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a href="#!" className="nav-link">
                                Juice Collection
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Breakfast &amp; Instant Food
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Batter
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Breakfast Cereal
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Noodles, Pasta &amp; Soup
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Frozen Non-Veg Snackss
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Frozen Veg
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Vermicelli
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Instant Mixes
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Bakery &amp; Biscuits
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Cookies
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Glucose &amp; Marie
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Sweet &amp; Salty
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Healthy &amp; Digestive
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Cream Biscuits
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Rusks &amp; Wafers
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Cakes &amp; Rolls
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Buns &amp; Bakery
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item border-bottom w-100">
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        Chicken, Meat &amp; Fish
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#!"
                              >
                                Chicken
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Sausage, Salami &amp; Ham
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Exotic Meat
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Eggs
                              </a>
                            </li>
                            {/* nav item */}
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Frozen Non-Veg Snacks
                              </a>
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
                    <a href="#" className="btn btn-dark">
                      Shop Now
                      <i className="feather-icon icon-arrow-right ms-1" />
                    </a>
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
            {/* list icon */}
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
                    <a href="shop-list.html" className="text-muted me-3">
                      <i className="bi bi-list-ul" />
                    </a>
                    <a href="shop-grid.html" className="me-3 active">
                      <i className="bi bi-grid" />
                    </a>
                    <a
                      href="shop-grid-3-column.html"
                      className="me-3 text-muted"
                    >
                      <i className="bi bi-grid-3x3-gap" />
                    </a>
                  </div>
                  <div className="ms-2 d-lg-none">
                    <a
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
                    </a>
                  </div>
                </div>
                <div className="d-flex mt-2 mt-lg-0">
                  <div className="me-2 flex-grow-1">
                    {/* select option */}
                    <select className="form-select">
                      <option selected="">Show: 50</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </select>
                  </div>
                  <div>
                    {/* select option */}
                    <select className="form-select">
                      <option selected="">Sort by: Featured</option>
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
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
              {/* col */}
              <div className="col">
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <div className="position-absolute top-0 start-0">
                        <span className="badge bg-danger">Sale</span>
                      </div>
                      <a href="shop-single.html">
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
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <div className="position-absolute top-0 start-0">
                        <span className="badge bg-success">14%</span>
                      </div>
                      <a href="shop-single.html">
                        {/* img */}
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
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        NutriChoice Digestive
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <a href="shop-single.html">
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
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Cadbury 5 Star Chocolate
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <div className="position-absolute top-0">
                        <span className="badge bg-danger">Hot</span>
                      </div>
                      <a href="shop-single.html">
                        {/* img */}
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
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Onion Flavour Potato
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <a href="shop-single.html">
                        <img
                          src="../assets/images/products/product-img-5.jpg"
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
                        <small>Instant Food</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Salted Instant Popcorn
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <div className="position-absolute top-0">
                        <span className="badge bg-danger">Sale</span>
                      </div>
                      <a href="shop-single.html">
                        {/* img */}
                        <img
                          src="../assets/images/products/product-img-6.jpg"
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
                        <small>Dairy, Bread &amp; Eggs</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Blueberry Greek Yogurt
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
                      <span className="text-muted small">4.5 (189)</span>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <a href="shop-single.html">
                        <img
                          src="../assets/images/products/product-img-7.jpg"
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
                        <small>Dairy, Bread &amp; Eggs</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Britannia Cheese Slices
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <a href="shop-single.html">
                        <img
                          src="../assets/images/products/product-img-8.jpg"
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
                        <small>Instant Food</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Kellogg's Original Cereals
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <a href="shop-single.html">
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
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Slurrp Millet Chocolate
                      </a>
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
                {/* card */}
                <div className="card card-product">
                  <div className="card-body">
                    {/* badge */}
                    <div className="text-center position-relative">
                      <a href="shop-single.html">
                        <img
                          src="../assets/images/products/product-img-10.jpg"
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
                        <small>Dairy, Bread &amp; Eggs</small>
                      </a>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        Amul Butter - 500 g
                      </a>
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
            <div className="row mt-8">
              <div className="col">
                {/* nav */}
                <nav>
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a
                        className="page-link mx-1"
                        href="#"
                        aria-label="Previous"
                      >
                        <i className="feather-icon icon-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link mx-1 active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link mx-1" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link mx-1" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link mx-1" href="#">
                        12
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link mx-1" href="#" aria-label="Next">
                        <i className="feather-icon icon-chevron-right" />
                      </a>
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
  <footer className="footer">
    <div className="container">
      <div className="row g-4 py-4">
        <div className="col-12 col-md-12 col-lg-4">
          <h6 className="mb-4">Categories</h6>
          <div className="row">
            <div className="col-6">
              {/* list */}
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Vegetables &amp; Fruits
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Breakfast &amp; instant food
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Bakery &amp; Biscuits
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Atta, rice &amp; dal
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Sauces &amp; spreads
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Organic &amp; gourmet
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Baby care
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Cleaning essentials
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Personal care
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              {/* list */}
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Dairy, bread &amp; eggs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Cold drinks &amp; juices
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Tea, coffee &amp; drinks
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Masala, oil &amp; more
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Chicken, meat &amp; fish
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Paan corner
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Pharma &amp; wellness
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Home &amp; office
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Pet care
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-8">
          <div className="row g-4">
            <div className="col-6 col-sm-6 col-md-3">
              <h6 className="mb-4">Get to know us</h6>
              {/* list */}
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Company
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#1" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Our Value
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <h6 className="mb-4">For Consumers</h6>
              <ul className="nav flex-column">
                {/* list */}
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Payments
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Shipping
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Product Returns
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="shop-checkout.html" className="nav-link">
                    Shop Checkout
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <h6 className="mb-4">Become a Shopper</h6>
              <ul className="nav flex-column">
                {/* list */}
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Shopper Opportunities
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Become a Shopper
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Earnings
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Ideas &amp; Guides
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    New Retailers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <h6 className="mb-4">Freshcart programs</h6>
              <ul className="nav flex-column">
                {/* list */}
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Freshcart programs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Gift Cards
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Promos &amp; Coupons
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Freshcart Ads
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#!" className="nav-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top py-4">
        <div className="row align-items-center">
          <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item text-dark">Payment Partners</li>
              <li className="list-inline-item">
                <a href="#!">
                  <img src="../assets/images/payment/amazonpay.svg" alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <img
                    src="../assets/images/payment/american-express.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <img src="../assets/images/payment/mastercard.svg" alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <img src="../assets/images/payment/paypal.svg" alt="" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <img src="../assets/images/payment/visa.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 mt-4 mt-md-0">
            <ul className="list-inline mb-0 text-lg-end text-center">
              <li className="list-inline-item mb-2 mb-md-0 text-dark">
                Get deliveries with FreshCart
              </li>
              <li className="list-inline-item ms-4">
                <a href="#!">
                  <img
                    src="../assets/images/appbutton/appstore-btn.svg"
                    alt=""
                    style={{ width: 140 }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <img
                    src="../assets/images/appbutton/googleplay-btn.svg"
                    alt=""
                    style={{ width: 140 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top py-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <span className="small text-muted">
              © 2022
              <span id="copyright">-</span>
              FreshCart eCommerce HTML Template. All rights reserved. Powered by
              <a href="https://codescandy.com/">Codescandy</a>.
            </span>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
              <li className="list-inline-item text-muted">Follow us on</li>
              <li className="list-inline-item me-1">
                <a href="#!" className="btn btn-xs btn-social btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li className="list-inline-item me-1">
                <a href="#!" className="btn btn-xs btn-social btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="btn btn-xs btn-social btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default shopGrid
