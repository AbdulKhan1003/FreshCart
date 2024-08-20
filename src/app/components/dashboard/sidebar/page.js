import React from 'react'
import Link from 'next/link'

function Sidebar() {
  return (
    <>
    <nav className="navbar-vertical-nav d-none d-xl-block">
    <div className="navbar-vertical">
      <div className="px-4 py-5">
        <Link href="/components/dashboard" className="navbar-brand">
          <img src="/assets/images/logo/freshcart-logo.svg" alt="" />
        </Link>
      </div>
      <div
        className="navbar-vertical-content flex-grow-1"
        data-simplebar=""
      >
        <ul className="navbar-nav flex-column" id="sideNavbar">
          <li className="nav-item">
            <Link className="nav-link  active " href="/components/dashboard">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-house" />
                </span>
                <span className="nav-link-text">Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Store Managements</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/components/dashboard/products">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-cart" />
                </span>
                <span className="nav-link-text">Products</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/components/dashboard/categories">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-list-task" />
                </span>
                <span className="nav-link-text">Categories</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  collapsed "
              href="/components/dashboard/orders" 
              data-bs-toggle="collapse"
              data-bs-target="#navCategoriesOrders"
              aria-expanded="false"
              aria-controls="navCategoriesOrders"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-bag" />
                </span>
                <span className="nav-link-text">Orders</span>
              </div>
            </Link>
            <div
              id="navCategoriesOrders"
              className="collapse "
              data-bs-parent="#sideNavbar"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " href="/components/dashboard/orders">
                    List
                  </Link>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link " href="/components/dashboard/orders">
                    Single
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/components/dashboard/vendorgrid">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-shop" />
                </span>
                <span className="nav-link-text">Sellers / Vendors</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  collapsed "
              href="/components/dashboard/customers"
              data-bs-toggle="collapse"
              data-bs-target="#navCustomer"
              aria-expanded="false"
              aria-controls="navCustomer"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-people" />
                </span>
                <span className="nav-link-text">Customers</span>
                <span className="badge bg-light-success text-dark-success ms-2">
                  New
                </span>
              </div>
            </Link>
            <div
              id="navCustomer"
              className="collapse "
              data-bs-parent="#sideNavbar"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " href="/components/dashboard/customers">
                    Customers
                  </Link>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link " href="/components/dashboard/customers">
                    Create Customers
                  </Link>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link " href="/components/dashboard/customers">
                    Edit Customers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/components/dashboard/reviews">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-star" />
                </span>
                <span className="nav-link-text">Reviews</span>
              </div>
            </Link>
          </li>
          {/* Nav item */}
          <li className="nav-item">
            <Link
              className="nav-link  collapsed "
              href="/components/dashboard/menulevel"
              data-bs-toggle="collapse"
              data-bs-target="#navMenuLevelFirst"
              aria-expanded="false"
              aria-controls="navMenuLevelFirst"
            >
              <span className="nav-link-icon">
                <i className="bi bi-arrow-90deg-down" />
              </span>
              <span className="nav-link-text">Menu Level</span>
            </Link>
            <div
              id="navMenuLevelFirst"
              className="collapse "
              data-bs-parent="#sideNavbar"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenuLevelSecond1"
                    aria-expanded="false"
                    aria-controls="navMenuLevelSecond1"
                  >
                    Two Level
                  </Link>
                  <div
                    id="navMenuLevelSecond1"
                    className="collapse"
                    data-bs-parent="#navMenuLevel"
                  >
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link className="nav-link " href="#">
                          NavItem 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " href="#">
                          NavItem 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  collapsed "
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenuLevelThreeOne1"
                    aria-expanded="false"
                    aria-controls="navMenuLevelThreeOne1"
                  >
                    Three Level
                  </Link>
                  <div
                    id="navMenuLevelThreeOne1"
                    className="collapse "
                    data-bs-parent="#navMenuLevel"
                  >
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link
                          className="nav-link  collapsed "
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navMenuLevelThreeTwo"
                          aria-expanded="false"
                          aria-controls="navMenuLevelThreeTwo"
                        >
                          NavItem 1
                        </Link>
                        <div
                          id="navMenuLevelThreeTwo"
                          className="collapse collapse "
                          data-bs-parent="#navMenuLevelThree"
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link className="nav-link " href="#">
                                NavChild Item 1
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " href="#">
                          Nav Item 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Site Settings</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  collapsed "
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navBlog"
              aria-expanded="false"
              aria-controls="navBlog"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-newspaper" />
                </span>
                <span className="nav-link-text">Blog</span>
                <span className="badge bg-light-success text-dark-success ms-2">
                  New
                </span>
              </div>
            </Link>
            <div
              id="navBlog"
              className="collapse "
              data-bs-parent="#sideNavbar"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " href="blog-grid.html">
                    Grid
                  </Link>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link " href="blog-list.html">
                    List
                  </Link>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link " href="blog-new-post.html">
                    Add Post
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-images" />
                </span>
                <span className="nav-link-text">Media</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-gear" />
                </span>
                <span className="nav-link-text">Store Settings</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Support</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-headphones" />
                </span>
                <span className="nav-link-text">Support Ticket</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-question-circle" />
                </span>
                <span className="nav-link-text">Help Center</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-infinity" />
                </span>
                <span className="nav-link-text">How FreshCart Works</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Our Apps</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-apple" />
                </span>
                <span className="nav-link-text">Apple Store</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-google-play" />
                </span>
                <span className="nav-link-text">Google Play Store</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav
    className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac"
    tabIndex={-1}
    id="offcanvasExample"
  >
    <div className="navbar-vertical">
      <div className="px-4 py-5 d-flex justify-content-between align-items-center">
        <Link href="/components/dashboard" className="navbar-brand">
          <img src="assets/images/logo/freshcart-logo.svg" alt="" />
        </Link>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div
        className="navbar-vertical-content flex-grow-1"
        data-simplebar=""
      >
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <Link className="nav-link  active " href="/components/dashboard">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-house" />
                </span>
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Store Managements</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/components/dashboard/products">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-cart" />
                </span>
                <span className="nav-link-text">Products</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/components/dashboard/categories">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-list-task" />
                </span>
                <span className="nav-link-text">Categories</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  collapsed "
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navOrders"
              aria-expanded="false"
              aria-controls="navOrders"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-bag" />
                </span>
                <span className="nav-link-text">Orders</span>
              </div>
            </Link>
            <div
              id="navOrders"
              className="collapse "
              data-bs-parent="#sideNavbar"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link " href="order-list.html">
                    List
                  </Link>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link " href="order-single.html">
                    Single
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="vendor-grid.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-shop" />
                </span>
                <span className="nav-link-text">Sellers / Vendors</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="customers.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-people" />
                </span>
                <span className="nav-link-text">Customers</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="reviews.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-star" />
                </span>
                <span className="nav-link-text">Reviews</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Site Settings</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-newspaper" />
                </span>
                <span className="nav-link-text">Blog</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-images" />
                </span>
                <span className="nav-link-text">Media</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-gear" />
                </span>
                <span className="nav-link-text">Store Settings</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Support</span>
            <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-headphones" />
                </span>
                <span className="nav-link-text">Support Ticket</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-question-circle" />
                </span>
                <span className="nav-link-text">Help Center</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-infinity" />
                </span>
                <span className="nav-link-text">How FreshCart Works</span>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-6 mb-3">
            <span className="nav-label">Our Apps</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-apple" />
                </span>
                <span className="nav-link-text">Apple Store</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="#!">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <i className="bi bi-google-play" />
                </span>
                <span className="nav-link-text">Google Play Store</span>
              </div>
            </Link>
          </li>
          <li
            id="navMenuLevel"
            className="collapse "
            data-bs-parent="#sideNavbar"
          >
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenuLevelSecond2"
                  aria-expanded="false"
                  aria-controls="navMenuLevelSecond2"
                >
                  Two Level
                </Link>
                <div
                  id="navMenuLevelSecond2"
                  className="collapse"
                  data-bs-parent="#navMenuLevel"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link " href="#">
                        NavItem 1
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " href="#">
                        NavItem 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  collapsed "
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenuLevelThree2"
                  aria-expanded="false"
                  aria-controls="navMenuLevelThree2"
                >
                  Three Level
                </Link>
                <div
                  id="navMenuLevelThree2"
                  className="collapse "
                  data-bs-parent="#navMenuLevel"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link  collapsed "
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenuLevelThree3"
                        aria-expanded="false"
                        aria-controls="navMenuLevelThree3"
                      >
                        NavItem 1
                      </Link>
                      <div
                        id="navMenuLevelThree3"
                        className="collapse collapse "
                        data-bs-parent="#navMenuLevelThree"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link " href="#">
                              NavChild Item 1
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " href="#">
                        Nav Item 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Sidebar
