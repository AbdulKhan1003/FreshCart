import React from 'react'
import Header from '../header/page'
import Link from 'next/link'

function ShopCart() {
    return (
        <>
            <Header />
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
                                            Shop Cart
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section */}
                <section className="mb-lg-14 mb-8 mt-8">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                {/* card */}
                                <div className="card py-1 border-0 mb-8">
                                    <div>
                                        <h1 className="fw-bold">Shop Cart</h1>
                                        <p className="mb-0">Shopping in 382480</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
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
                                                <div className="col-4 col-md-4 col-lg-3">
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
                                                <div className="col-4 col-md-4 col-lg-3">
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
                                                <div className="col-4 col-md-4 col-lg-3">
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
                                                <div className="col-4 col-md-4 col-lg-3">
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
                                                <div className="col-4 col-md-4 col-lg-3">
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
                            {/* sidebar */}
                            <div className="col-12 col-lg-4 col-md-5">
                                {/* card */}
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <h2 className="h5 mb-4">Summary</h2>
                                        <div className="card mb-2">
                                            {/* list group */}
                                            <ul className="list-group list-group-flush">
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Item Subtotal</div>
                                                    </div>
                                                    <span>$70.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Service Fee</div>
                                                    </div>
                                                    <span>$3.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    <span className="fw-bold">$67.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            {/* btn */}
                                            <button
                                                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                                                type="submit"
                                            >
                                                Go to Checkout
                                                <span className="fw-bold">$67.00</span>
                                            </button>
                                        </div>
                                        {/* text */}
                                        <p>
                                            <small>
                                                By placing your order, you agree to be bound by the
                                                Freshcart
                                                <Link href="#!">Terms of Service</Link>
                                                and
                                                <Link href="#!">Privacy Policy.</Link>
                                            </small>
                                        </p>
                                        {/* heading */}
                                        <div className="mt-8">
                                            <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                                            <form>
                                                <div className="mb-2">
                                                    {/* input */}
                                                    <label htmlFor="giftcard" className="form-label sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="giftcard"
                                                        placeholder="Promo or Gift Card"
                                                    />
                                                </div>
                                                {/* btn */}
                                                <div className="d-grid">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-dark mb-1"
                                                    >
                                                        Redeem
                                                    </button>
                                                </div>
                                                <p className="text-muted mb-0">
                                                    <small>Terms &amp; Conditions apply</small>
                                                </p>
                                            </form>
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
                                            <Link href="#!" className="nav-link">
                                                Vegetables &amp; Fruits
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Breakfast &amp; instant food
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Bakery &amp; Biscuits
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Atta, rice &amp; dal
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Sauces &amp; spreads
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Organic &amp; gourmet
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Baby care
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Cleaning essentials
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Personal care
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    {/* list */}
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Dairy, bread &amp; eggs
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Cold drinks &amp; juices
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Tea, coffee &amp; drinks
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Masala, oil &amp; more
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Chicken, meat &amp; fish
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Paan corner
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Pharma &amp; wellness
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Home &amp; office
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Pet care
                                            </Link>
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
                                            <Link href="#!" className="nav-link">
                                                Company
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#1" className="nav-link">
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Help Center
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Our Value
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h6 className="mb-4">For Consumers</h6>
                                    <ul className="nav flex-column">
                                        {/* list */}
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Payments
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Shipping
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Product Returns
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                FAQ
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="shop-checkout.html" className="nav-link">
                                                Shop Checkout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h6 className="mb-4">Become a Shopper</h6>
                                    <ul className="nav flex-column">
                                        {/* list */}
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Shopper Opportunities
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Become a Shopper
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Earnings
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Ideas &amp; Guides
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                New Retailers
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h6 className="mb-4">Freshcart programs</h6>
                                    <ul className="nav flex-column">
                                        {/* list */}
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Freshcart programs
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Gift Cards
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Promos &amp; Coupons
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Freshcart Ads
                                            </Link>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <Link href="#!" className="nav-link">
                                                Careers
                                            </Link>
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
                                        <Link href="#!">
                                            <img src="../assets/images/payment/amazonpay.svg" alt="" />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#!">
                                            <img
                                                src="../assets/images/payment/american-express.svg"
                                                alt=""
                                            />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#!">
                                            <img src="../assets/images/payment/mastercard.svg" alt="" />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#!">
                                            <img src="../assets/images/payment/paypal.svg" alt="" />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#!">
                                            <img src="../assets/images/payment/visa.svg" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-7 mt-4 mt-md-0">
                                <ul className="list-inline mb-0 text-lg-end text-center">
                                    <li className="list-inline-item mb-2 mb-md-0 text-dark">
                                        Get deliveries with FreshCart
                                    </li>
                                    <li className="list-inline-item ms-4">
                                        <Link href="#!">
                                            <img
                                                src="../assets/images/appbutton/appstore-btn.svg"
                                                alt=""
                                                style={{ width: 140 }}
                                            />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
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
                    <div className="border-top py-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <span className="small text-muted">
                                    © 2022
                                    <span id="copyright">-</span>
                                    FreshCart eCommerce HTML Template. All rights reserved. Powered by
                                    <Link href="https://codescandy.com/">Codescandy</Link>.
                                </span>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
                                    <li className="list-inline-item text-muted">Follow us on</li>
                                    <li className="list-inline-item me-1">
                                        <Link href="#!" className="btn btn-xs btn-social btn-icon">
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
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-1">
                                        <Link href="#!" className="btn btn-xs btn-social btn-icon">
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
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="#!" className="btn btn-xs btn-social btn-icon">
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
                                        </Link>
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

export default ShopCart
