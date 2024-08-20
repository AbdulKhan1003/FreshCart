import React from 'react'

function Docs() {
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
                  <div className="mb-8" id="intro">
                    <h1 className="mb-0 fw-bold">Introduction</h1>
                    <p className="mb-6 lead text-muted">
                      FreshCart is beautifully designed, expertly crafted
                      components UI kit for building a high-quality website and
                      web apps using web technologies — HTML, CSS, and
                      JavaScript — with integrations of the world’s most popular
                      framework
                      <a
                        href="https://getbootstrap.com/"
                        target="_blank"
                        rel="nofollow"
                      >
                        Bootstrap
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="mb-8">
                    <p className="fs-4 mb-0">
                      Guide will help you get started with a FreshCart Theme,
                      including how to run, customize, update, and integrate
                      your theme!
                    </p>
                    <div className="my-6">
                      <div className="alert alert-info" role="alert">
                        Note: We highly recommend to check out The Guide an
                        official Bootstrap Theme
                        <a
                          href="https://themes.getbootstrap.com/guide/"
                          className="alert-link"
                        >
                          guidelines
                        </a>
                        by Bootstrap core team.
                      </div>
                    </div>
                  </div>
                  <div className="mb-8" id="setting-up">
                    <h2 className="fw-semibold">
                      Setting up local development
                    </h2>
                    <p className="mb-0">
                      FreshCart is built using modern development toolset.
                      Setting up local development Like Gulp, Node js, SASS
                      &amp; Bootstrap SCSS.
                      <a href="environment-setup.html">Read More</a>
                    </p>
                  </div>
                  <div className="mb-8" id="customize-theme">
                    <div className="mb-4">
                      <h2 className="fw-semibold">Customize your theme</h2>
                      <p className="mb-0">
                        Now that you’ve got your theme running and understand
                        the compiling process, let’s discuss the proper ways to
                        edit and customize your theme. There are two primary
                        strategies for working with your theme.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="card border shadow-none mb-4 mb-lg-0">
                          <div className="card-body p-6">
                            <div className="mb-4">
                              <img
                                src="../assets/images/docs/gulp.jpg"
                                alt=""
                                className="avatar-lg"
                              />
                            </div>
                            <h3 className="fw-semibold">Working with Gulp</h3>
                            <p>
                              Working with source files showcases how powerful
                              Bootstrap themes can be and the underlying design
                              systems.
                            </p>
                            <a href="#" className="btn-link">
                              Start with Gulp
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="card border shadow-none mb-4 mb-lg-0">
                          <div className="card-body p-6">
                            <div className="mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={54}
                                height={54}
                                fill="currentColor"
                                className="bi bi-folder-fill text-warning"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                              </svg>
                            </div>
                            <h3 className="fw-semibold">
                              Working with compiled files
                            </h3>
                            <p>
                              Simply attach the compiled CSS and JS files to an
                              HTML page, or use an HTML page already provided in
                              your theme.
                            </p>
                            <a href="#" className="btn-link">
                              Start with compiled HTML files
                            </a>
                          </div>
                        </div>
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
                  <a href="#setting-up">Setting Up</a>
                </li>
                <li>
                  <a href="#customize-theme">Customize Theme</a>
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

export default Docs
