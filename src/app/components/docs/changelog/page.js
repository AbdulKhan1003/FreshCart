import React from 'react'

function ChangeLog() {
  return (
<>
  {/* Main wrapper */}
  <main className="docs-main-wrapper">
    {/* Docs header */}
    <div className="docs-header">
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand me-0" href="../index.html">
            <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
          </a>
          <ul className="navbar-nav ms-auto flex-row align-items-center">
            <li className="nav-item d-none d-md-block">
              <a className="nav-link me-4 border-bottom-0" href="../index.html">
                <i className="feather-icon icon-monitor me-2" />
                Live Preview
              </a>
            </li>
            <li className="nav-item d-md-none me-2">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="bi bi-list text-primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </li>
            <li className="nav-item docs-header-btn">
              <a className="btn btn-primary" href="https://bit.ly/freshcart">
                <i className="feather-icon icon-shopping-cart me-2 d-none d-md-inline-block" />
                Buy now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    {/* Left sidebar */}
    {/* Nav Sidebar */}
    <div className="docs-nav-sidebar">
      <div className="docs-nav" data-simplebar="">
        <nav className="navbar navbar-expand-md">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column" id="sidebarnav">
              <li className="navbar-header">
                <h5 className="heading">Getting Started</h5>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a href="environment-setup.html" className="nav-link">
                  Environment setup
                </a>
              </li>
              <li className="nav-item">
                <a href="working-with-gulp.html" className="nav-link">
                  Working with Gulp
                </a>
              </li>
              <li className="nav-item">
                <a href="compiled-files.html" className="nav-link">
                  Compiled Files
                </a>
              </li>
              <li className="nav-item">
                <a href="file-structure.html" className="nav-link">
                  File Structure
                </a>
              </li>
              <li className="nav-item">
                <a href="resources-assets.html" className="nav-link">
                  Resources &amp; assets
                </a>
              </li>
              <li className="nav-item">
                <a href="changelog.html" className="nav-link">
                  Changelog
                </a>
              </li>
              <li>
                <div className="navbar-border" />
              </li>
              <li className="navbar-header mt-0">
                <h5 className="heading">Foundation</h5>
              </li>
              <li className="nav-item">
                <a href="typography.html" className="nav-link">
                  Typography
                </a>
              </li>
              <li className="nav-item">
                <a href="colors.html" className="nav-link">
                  Colors
                </a>
              </li>
              <li className="nav-item">
                <a href="shadows.html" className="nav-link">
                  Shadows
                </a>
              </li>
              <li>
                <div className="navbar-border" />
              </li>
              <li className="navbar-header mt-0">
                <h5 className="heading">
                  Components
                  <small className="text-primary">(Freshcart)</small>
                </h5>
              </li>
              <li className="nav-item">
                <a href="components/card.html" className="nav-link">
                  Card
                </a>
              </li>
              <li className="nav-item">
                <a href="components/counter.html" className="nav-link">
                  Counter
                </a>
              </li>
              <li className="nav-item">
                <a href="components/call-to-action.html" className="nav-link">
                  CTA
                </a>
              </li>
              <li className="nav-item">
                <a href="components/ecommerce.html" className="nav-link">
                  Ecommerce
                </a>
              </li>
              <li className="nav-item">
                <a href="components/features.html" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="components/filter.html" className="nav-link">
                  Filter
                </a>
              </li>
              <li className="nav-item">
                <a href="components/footer.html" className="nav-link">
                  Footer
                </a>
              </li>
              <li className="nav-item">
                <a href="components/form.html" className="nav-link">
                  Form
                </a>
              </li>
              <li className="nav-item">
                <a href="components/list.html" className="nav-link">
                  List
                </a>
              </li>
              <li className="nav-item">
                <a href="components/navbar.html" className="nav-link">
                  Navbar
                </a>
              </li>
              <li className="nav-item">
                <a href="components/testimonials.html" className="nav-link">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="components/review.html" className="nav-link">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a href="components/sidebar.html" className="nav-link">
                  Sidebar
                </a>
              </li>
              <li className="nav-item">
                <a href="components/slider.html" className="nav-link">
                  Slider
                </a>
              </li>
              <li className="nav-item">
                <a href="components/table.html" className="nav-link">
                  Table
                </a>
              </li>
              <li>
                <div className="navbar-border" />
              </li>
              <li className="navbar-header mt-0">
                <h5 className="heading">Components</h5>
              </li>
              <li className="nav-item">
                <a href="accordions.html" className="nav-link">
                  Accordions
                </a>
              </li>
              <li className="nav-item">
                <a href="alerts.html" className="nav-link">
                  Alerts
                </a>
              </li>
              <li className="nav-item">
                <a href="badge.html" className="nav-link">
                  Badge
                </a>
              </li>
              <li className="nav-item">
                <a href="breadcrumb.html" className="nav-link">
                  Breadcrumb
                </a>
              </li>
              <li className="nav-item">
                <a href="buttons.html" className="nav-link">
                  Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="button-group.html" className="nav-link">
                  Button group
                </a>
              </li>
              <li className="nav-item">
                <a href="card.html" className="nav-link">
                  Card
                </a>
              </li>
              <li className="nav-item">
                <a href="carousel.html" className="nav-link">
                  Carousel
                </a>
              </li>
              <li className="nav-item">
                <a href="close-button.html" className="nav-link">
                  Close Button
                </a>
              </li>
              <li className="nav-item">
                <a href="collapse.html" className="nav-link">
                  Collapse
                </a>
              </li>
              <li className="nav-item">
                <a href="dropdowns.html" className="nav-link">
                  Dropdowns
                </a>
              </li>
              <li className="nav-item">
                <a href="list-group.html" className="nav-link">
                  List group
                </a>
              </li>
              <li className="nav-item">
                <a href="modal.html" className="nav-link">
                  Modal
                </a>
              </li>
              <li className="nav-item">
                <a href="navs-tabs.html" className="nav-link">
                  Navs and tabs
                </a>
              </li>
              <li className="nav-item">
                <a href="navbar.html" className="nav-link">
                  Navbar
                </a>
              </li>
              <li className="nav-item">
                <a href="offcanvas.html" className="nav-link">
                  Offcanvas
                </a>
              </li>
              <li className="nav-item">
                <a href="pagination.html" className="nav-link">
                  Pagination
                </a>
              </li>
              <li className="nav-item">
                <a href="placeholders.html" className="nav-link">
                  Placeholders
                </a>
              </li>
              <li className="nav-item">
                <a href="popovers.html" className="nav-link">
                  Popovers
                </a>
              </li>
              <li className="nav-item">
                <a href="progress.html" className="nav-link">
                  Progress
                </a>
              </li>
              <li className="nav-item">
                <a href="scrollspy.html" className="nav-link">
                  Scrollspy
                </a>
              </li>
              <li className="nav-item">
                <a href="spinners.html" className="nav-link">
                  Spinners
                </a>
              </li>
              <li className="nav-item">
                <a href="tables.html" className="nav-link">
                  Tables
                </a>
              </li>
              <li className="nav-item">
                <a href="toasts.html" className="nav-link">
                  Toasts
                </a>
              </li>
              <li className="nav-item">
                <a href="tooltips.html" className="nav-link">
                  Tooltips
                </a>
              </li>
              <li>
                <div className="navbar-border" />
              </li>
              <li className="navbar-header mt-0">
                <h5 className="heading">Forms</h5>
              </li>
              <li className="nav-item">
                <a href="forms.html" className="nav-link">
                  Basic Forms
                </a>
              </li>
              <li className="nav-item">
                <a href="input-group.html" className="nav-link">
                  Input Group
                </a>
              </li>
              <li>
                <div className="navbar-border" />
              </li>
              <li className="navbar-header mt-0">
                <h5 className="heading">Utilities</h5>
              </li>
              <li className="nav-item">
                <a href="background.html" className="nav-link">
                  Background
                </a>
              </li>
              <li className="nav-item">
                <a href="borders.html" className="nav-link">
                  Borders
                </a>
              </li>
              <li className="nav-item">
                <a href="colored-links.html" className="nav-link">
                  Colored Links
                </a>
              </li>
              <li className="nav-item">
                <a href="opacity.html" className="nav-link">
                  Opacity
                </a>
              </li>
              <li className="nav-item">
                <a href="ratio.html" className="nav-link">
                  Ratio
                </a>
              </li>
              <li className="nav-item">
                <a href="stacks.html" className="nav-link">
                  Stacks
                </a>
              </li>
              <li className="nav-item">
                <a href="text-color.html" className="nav-link">
                  Colors
                </a>
              </li>
              <li className="nav-item">
                <a href="text.html" className="nav-link">
                  Text
                </a>
              </li>
              <li className="nav-item">
                <a href="text-truncation.html" className="nav-link">
                  Text truncation
                </a>
              </li>
              <li className="nav-item">
                <a href="vertical-rule.html" className="nav-link">
                  Vertical rule
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="nav-footer">
        <p className="mb-0">
          Developed by
          <a href="https://codescandy.com/" target="_blank">
            Codescandy
          </a>
        </p>
      </div>
    </div>
    {/* Wrapper  */}
    <div className="docs-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="offset-xxl-2 col-xxl-6 offset-xl-1 col-xl-7 col-md-12 col-sm-12 col-12">
            {/* Content */}
            <div className="docs-content mx-xxl-9">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7">
                    <h1 className="mb-0 fw-bold">Changelog</h1>
                    <p className="mb-6 lead text-muted">
                      Stay up to date with all of the latest additions and
                      improvements we've made to FreshCart UI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="docs-example row mt-7">
                    <div className="col-lg-5 col-12">
                      <div id="v130">
                        <h4 className="mb-3">
                          <code>v1.3.0</code>- June 25, 2024
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <span className="badge bg-light-primary text-primary">
                        New
                      </span>
                      <div className="mt-4">
                        <h3 className="mb-4 h5">HTML page in Dashboard</h3>
                        <ul>
                          <li>
                            Added Blog
                            <a href="../dashboard/blog-grid.html">Grid</a>
                          </li>
                          <li>
                            Added Blog
                            <a href="../dashboard/blog-list.html">List</a>
                          </li>
                          <li>
                            Added
                            <a href="../dashboard/blog-new-post.html">
                              Add New Post
                            </a>
                          </li>
                          <li>
                            Updated
                            <a href="../dashboard/customers.html">Customers</a>
                          </li>
                          <li>
                            Added
                            <a href="../dashboard/create-customers.html">
                              Create Customers
                            </a>
                          </li>
                          <li>
                            Added
                            <a href="../dashboard/customers-edits.html">
                              Edit Customer
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 h5">Updated Files</h3>
                        <ul>
                          <li>Bootstrap to v5.3.3</li>
                          <li>
                            Fixed payment date form input with input mask
                            shop-checkout.html page
                          </li>
                          <li>Fixed Minor Issues and Improvements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="docs-example row mt-7">
                    <div className="col-lg-5 col-12">
                      <div id="v121">
                        <h4 className="mb-3">
                          <code>v1.2.1</code>- Nov 09, 2023
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <span className="badge bg-light-primary text-primary">
                        New
                      </span>
                      <div className="mt-4">
                        <h3 className="mb-4 h5">Updated Files</h3>
                        <ul>
                          <li>Bootstrap to v5.3.2</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 h5">Improvement</h3>
                        <ul>
                          <li>Vanilla JS-based version</li>
                          <li>
                            jQuery – Drop (only used for the Silck Slider)
                          </li>
                          <li>Added Imask js</li>
                          <li>Fixed Minor Issues and Improvements</li>
                          <li>
                            Gulp-Imagemin: Minify PNG, JPEG, GIF, and SVG
                            images.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="docs-example row mt-7">
                    <div className="col-lg-5 col-12">
                      <div id="v120">
                        <h4 className="mb-3">
                          <code>v1.2.0</code>- May 25, 2023
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <span className="badge bg-light-primary text-primary">
                        New
                      </span>
                      <div className="mt-4">
                        <h3 className="mb-4 h5">HTML page</h3>
                        <ul>
                          <li>
                            Added
                            <a
                              href="../pages/index-5.html"
                              target="_blank"
                              title="homepage v5"
                            >
                              Homepage v5
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 h5">Vendor JS Files</h3>
                        <ul>
                          <li>Added sticky.js</li>
                          <li>Added modal.js</li>
                          <li>Updated slick-slider.js</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 h5">Partial File Updated</h3>
                        <ul>
                          <li>
                            Add new folder in head for spilt the link, analytics
                            and head meta. for better manage.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 h5">Updated Files</h3>
                        <ul>
                          <li>Bootstrap to v5.3.0-alpha3</li>
                          <li>Added new Navbar in Components navbar.html</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 h5">Improvement</h3>
                        <ul>
                          <li>Optimized Navbars in partials</li>
                          <li>Other small Fixed the bug</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="docs-example row mt-7">
                    <div className="col-lg-5 col-12">
                      <div id="v110">
                        <h4 className="mb-3">
                          <code>v1.1.0</code>- January 11, 2023
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div>
                        <h3 className="mb-4">New HTML pages</h3>
                        <ul>
                          <li>Homepage v4</li>
                          <li>Shop Single v2 (slick slider with arrow)</li>
                          <li>
                            Dashboard
                            <ul>
                              <li>Overview</li>
                              <li>Products</li>
                              <li>Add Product</li>
                              <li>Categories</li>
                              <li>Add Category</li>
                              <li>
                                Order
                                <ul>
                                  <li>List</li>
                                  <li>Single</li>
                                </ul>
                              </li>
                              <li>Sellers</li>
                              <li>Customers</li>
                              <li>Reviews</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4">New Vendor JS Files</h3>
                        <ul>
                          <li>Added Apexchart</li>
                          <li>Added password.js function in JS file</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4">Updated Files</h3>
                        <ul>
                          <li>Bootstrap to v5.3.0-alpha1</li>
                          <li>
                            Gulp.js File update for vendor js Task for
                            optimization.
                          </li>
                          <li>
                            Support for css variables for easily changing
                            colors.
                          </li>
                          <li>
                            Sign In / Sign up page with show / hide password.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4">Improvement</h3>
                        <ul>
                          <li>Optimized javaScript &amp; CSS</li>
                          <li>Other small Fixed the bug</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="docs-example row mt-7">
                    <div className="col-lg-5 col-12">
                      <div id="v101">
                        <h4 className="mb-3">
                          <code>v1.0.1</code>- August 23, 2022
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div>
                        <h3 className="mb-4">Improvement in Docs</h3>
                        <ul>
                          <li>Updated with Semantics HTML 5</li>
                          <li>Components added in Docs</li>
                          <li>Improvised Documents</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="docs-example row mt-7">
                    <div className="col-lg-5 col-12">
                      <div id="initial">
                        <h4 className="mb-3">
                          <code>v1.0.0</code>- July 07, 2022
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div>
                        <h3 className="mb-0">Initial Release FreshCart</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 d-none d-xl-block position-fixed end-0">
            {/* Sidebar nav fixed */}
            <div className="sidebar-nav-fixed">
              <span className="px-4 mb-2 d-block text-uppercase ls-md fw-semibold fs-6">
                Contents
              </span>
              <ul className="list-unstyled">
                <li>
                  <a href="#intro" className="active">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#v130">v.1.3.0</a>
                </li>
                <li>
                  <a href="#v121">v.1.2.1</a>
                </li>
                <li>
                  <a href="#v120">v.1.2.0</a>
                </li>
                <li>
                  <a href="#v101">v.1.1.0</a>
                </li>
                <li>
                  <a href="#v101">v.1.0.1</a>
                </li>
                <li>
                  <a href="#initial">v.1.0.0</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Scripts */}
  {/* Libs JS */}
  {/*  */}
  {/* Theme JS */}
</>

  )
}

export default ChangeLog
