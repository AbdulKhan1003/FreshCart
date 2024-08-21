'use client'
import Link from "next/link"

function header() {
  return (
    <>
      <div className="bg-light py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 text-center text-md-start">
              <span>Super Value Deals - Save more with coupons</span>
            </div>

            <div className="col-6 text-end d-none d-md-block">
              <div className="dropdown selectBox">
                <a
                  className="dropdown-toggle selectValue text-reset"
                  href="javascript:void(0)"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="me-2">
                    <svg
                      width={16}
                      height={13}
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#selectedlang)">
                        <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                        <path
                          d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                          fill="white"
                        />
                        <path
                          d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                          fill="#C8102E"
                        />
                        <path
                          d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
                          fill="white"
                        />
                        <path
                          d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
                          fill="#C8102E"
                        />
                      </g>
                      <defs>
                        <clipPath id="selectedlang">
                          <rect
                            width={16}
                            height={12}
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  English
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="javascript:void(0)">
                      <span className="me-2">
                        <svg
                          width={16}
                          height={13}
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#selectedlang)">
                            <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
                            <path
                              d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                              fill="white"
                            />
                            <path
                              d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                              fill="#C8102E"
                            />
                            <path
                              d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
                              fill="white"
                            />
                            <path
                              d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
                              fill="#C8102E"
                            />
                          </g>
                          <defs>
                            <clipPath id="selectedlang">
                              <rect
                                width={16}
                                height={12}
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0)">
                      <span className="me-2">
                        <svg
                          width={16}
                          height={13}
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5543_19751)">
                            <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
                            <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
                            <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
                          </g>
                          <defs>
                            <clipPath id="clip0_5543_19751">
                              <rect
                                width={16}
                                height={12}
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Deutsch
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="py-lg-5 py-4 px-0 border-bottom border-bottom-lg-0">
        <div className="container-fluid">
          <div className="row w-100 align-items-center g-0 gx-lg-3">
            <div className="col-xxl-9 col-lg-8">
              <div className="d-flex align-items-center">
                <Link className="navbar-brand d-none d-lg-block" href="/">
                  <img
                    src="/assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
                  />
                </Link>
                <div className="w-100 ms-4 d-none d-lg-block">
                  <form action="#">
                    <div className="input-group">
                      <select className="form-select">
                        <option selected="">All Categories</option>
                        <option value="Milk Drinks">Milk Drinks</option>
                        <option value="Curd & Yogurt">Curd &amp; Yogurt</option>
                        <option value="Eggs">Eggs</option>
                        <option value="Buns & Bakery">Buns &amp; Bakery</option>
                        <option value="Cheese">Cheese</option>
                        <option value="Condensed Milk">Condensed Milk</option>
                        <option value="Dairy Products">Dairy Products</option>
                      </select>
                      <input
                        type="text"
                        aria-label="Last name"
                        className="form-control w-45"
                        placeholder="Search for products"
                      />
                      <button
                        className="input-group-text bg-transparent"
                        type="submit"
                      >
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
                          className="feather feather-search"
                        >
                          <circle cx={11} cy={11} r={8} />
                          <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex justify-content-between w-100 d-lg-none">
                <Link className="navbar-brand" href="/">
                  <img
                    src="../assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
                  />
                </Link>
                <div className="d-flex align-items-center lh-1">
                  <div className="list-inline me-4">
                    <div className="list-inline-item">
                      <Link
                        href="/components/signup"
                        className="text-muted"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        className="text-muted position-relative"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        href="/components/shopcart"
                        role="button"
                        aria-controls="offcanvasRight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-bag"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          1<span className="visually-hidden">unread messages</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* Button */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbar-default"
                    aria-controls="navbar-default"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-text-indent-left text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 d-flex align-items-center">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-outline-gray-400 text-reset d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <i className="feather-icon icon-map-pin me-2" />
                Pick Location
              </button>
              <div className="list-inline ms-auto d-lg-block d-none">
                <div className="list-inline-item me-5">
                  <Link
                    href="/components/shopwishlist"
                    className="text-reset position-relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item me-5">
                  <Link
                    href="#offcanvasExample"
                    className="text-reset"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link href="/components/shopcart"
                    className="text-reset position-relative"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 py-lg-2 navbar-default">
        <div className="container-fluid">
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="navbar-default"
            aria-labelledby="navbar-defaultLabel"
          >
            <div className="offcanvas-header pb-1">
              <Link href="/">
                <img
                  src="../assets/images/logo/freshcart-logo.svg"
                  alt="eCommerce HTML Template"
                />
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <div className="d-block d-lg-none mb-4">
                <form action="#">
                  <div className="input-group">
                    <input
                      className="form-control rounded"
                      type="search"
                      placeholder="Search for products"
                    />
                    <span className="input-group-append">
                      <button
                        className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                        type="button"
                      >
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
                          className="feather feather-search"
                        >
                          <circle cx={11} cy={11} r={8} />
                          <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg>
                      </button>
                    </span>
                  </div>
                </form>
                <div className="mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-gray-400 text-muted w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#locationModal"
                  >
                    <i className="feather-icon icon-map-pin me-2" />
                    Pick Location
                  </button>
                </div>
              </div>
              <div class="d-block d-lg-none mb-4">
                     <a
                        class="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample">
                        <span class="me-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-grid">
                              <rect x="3" y="3" width="7" height="7"></rect>
                              <rect x="14" y="3" width="7" height="7"></rect>
                              <rect x="14" y="14" width="7" height="7"></rect>
                              <rect x="3" y="14" width="7" height="7"></rect>
                           </svg>
                        </span>
                        All Departments
                     </a>
                     <div class="collapse mt-2" id="collapseExample">
                        <div class="card card-body">
                           <ul class="mb-0 list-unstyled">
                              <li><a class="dropdown-item" href="/components/shopgrid">Dairy, Bread & Eggs</a></li>
                              <li><a class="dropdown-item" href="/components/shopgrid">Snacks & Munchies</a></li>
                              <li><a class="dropdown-item" href="/components/shopgrid">Fruits & Vegetables</a></li>
                              <li><a class="dropdown-item" href="/components/shopgrid">Cold Drinks & Juices</a></li>
                              <li><a class="dropdown-item" href="/components/shopgrid">Breakfast & Instant Food</a></li>
                              <li><a class="dropdown-item" href="/components/shopgrid">Bakery & Biscuits</a></li>
                              <li><a class="dropdown-item" href="/components/shopgrid">Chicken, Meat & Fish</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
              <div className="dropdown me-3 d-none d-lg-block">
                <button
                  className="btn btn-primary px-6"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="me-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-grid"
                    >
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                  </span>
                  All Departments
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Dairy, Bread &amp; Eggs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Snacks &amp; Munchies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Fruits &amp; Vegetables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Cold Drinks &amp; Juices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Breakfast &amp; Instant Food
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Bakery &amp; Biscuits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/components/shopgrid">
                      Chicken, Meat &amp; Fish
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="navbar-nav align-items-center navbar-offcanvas-color">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </Link>
                    
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/">
                          Home 1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/index2">
                          Home 2
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/index3">
                          Home 3
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/index4">
                          Home 4
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/index5">
                          Home 5
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/components/shopgrid">
                          Shop Grid - Filter
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopgridcolumn">
                          Shop Grid - 3 column
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shoplist">
                          Shop List - Filter
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopfilter">
                          Shop - Filter
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopwide">
                          Shop Wide
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopsingle">
                          Shop Single
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopsingle">
                          Shop Single v2
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopwishlist">
                          Shop Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopcart">
                          Shop Cart
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/shopcheckout">
                          Shop Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Stores
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/components/storelist">
                          Store List
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/storegrid">
                          Store Grid
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/storesingle">
                          Store Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown dropdown-fullwidth">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mega menu
                    </Link>
                    <div className="dropdown-menu pb-0">
                      <div className="row p-2 p-lg-4">
                        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                          <h6 className="text-primary ps-3">
                            Dairy, Bread &amp; Eggs
                          </h6>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Butter
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Milk Drinks
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Curd &amp; Yogurt
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Eggs
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Buns &amp; Bakery
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Cheese
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Condensed Milk
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Dairy Products
                          </Link>
                        </div>
                        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                          <h6 className="text-primary ps-3">
                            Breakfast &amp; Instant Food
                          </h6>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Breakfast Cereal
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Noodles, Pasta &amp; Soup
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Frozen Veg Snacks
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Frozen Non-Veg Snacks
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Vermicelli
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Instant Mixes
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Batter
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Fruit and Juices
                          </Link>
                        </div>
                        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                          <h6 className="text-primary ps-3">
                            Cold Drinks &amp; Juices
                          </h6>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Soft Drinks
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Fruit Juices
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Coldpress
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Water &amp; Ice Cubes
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Soda &amp; Mixers
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Health Drinks
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Herbal Drinks
                          </Link>
                          <Link className="dropdown-item" href="/components/shopgrid">
                            Milk Drinks
                          </Link>
                        </div>
                        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                          <div className="card border-0">
                            <img
                              src="../assets/images/banner/menu-banner.jpg"
                              alt="eCommerce HTML Template"
                              className="img-fluid"
                            />
                            <div className="position-absolute ps-6 mt-8">
                              <h5 className="mb-0">
                                Dont miss this
                                <br />
                                offer today.
                              </h5>
                              <Link href="#" className="btn btn-primary btn-sm mt-3">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/components/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/blogsingle">
                          Blog Single
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/blogcategory">
                          Blog Category
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/about">
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/error404">
                          404 Error
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Account
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/components/signin">
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/signup">
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/components/forgotpassword">
                          Forgot Password
                        </Link>
                      </li>
                      <li className="dropdown-submenu dropend">
                        <Link
                          className="dropdown-item dropdown-list-group-item dropdown-toggle"
                          href="#"
                        >
                          My Account
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" href="/components/dashboard/orders">
                              Orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/components/account/accountsettings"
                            >
                              Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/components/account/accountaddress"
                            >
                              Address
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/components/account/accountpayment"
                            >
                              Payment Method
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/components/account/accountnotification"
                            >
                              Notification
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/components/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-flyout">
                    <Link
                      className="nav-link"
                      href="#"
                      id="navbarDropdownDocs"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Docs
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-lg"
                      aria-labelledby="navbarDropdownDocs"
                    >
                      <Link
                        className="dropdown-item align-items-start"
                        href="/components/docs"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            className="bi bi-file-text text-primary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                          </svg>
                        </div>
                        <div className="ms-3 lh-1">
                          <h6 className="mb-1">Documentations</h6>
                          <p className="mb-0 small">Browse the all documentation</p>
                        </div>
                      </Link>
                      <Link
                        className="dropdown-item align-items-start"
                        href="components/docs/changelog"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            className="bi bi-layers text-primary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                          </svg>
                        </div>
                        <div className="ms-3 lh-1">
                          <h6 className="mb-1">
                            Changelog
                            <span className="text-primary ms-1">v1.3.0</span>
                          </h6>
                          <p className="mb-0 small">See what's new</p>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>



  )
}

export default header
