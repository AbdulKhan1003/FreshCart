import React from 'react'
import Footer from '../footer/page'

function SignUp() {
  return (
<>
  {/* navigation */}
  <div className="border-bottom shadow-sm">
    <nav className="navbar navbar-light py-2">
      <div className="container justify-content-center justify-content-lg-between">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/images/logo/freshcart-logo.svg"
            alt=""
            className="d-inline-block align-text-top"
          />
        </a>
        <span className="navbar-text">
          Already have an account?
          <a href="/components/signin"> Sign in</a>
        </span>
      </div>
    </nav>
  </div>
  <main>
    {/* section */}
    <section className="my-lg-14 my-8">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
            {/* img */}
            <img
              src="../assets/images/svg-graphics/signup-g.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          {/* col */}
          <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
            <div className="mb-lg-9 mb-5">
              <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
              <p>Welcome to FreshCart! Enter your email to get started.</p>
            </div>
            {/* form */}
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                {/* col */}
                <div className="col">
                  {/* input */}
                  <label
                    htmlFor="formSignupfname"
                    className="form-label visually-hidden"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formSignupfname"
                    placeholder="First Name"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter first name.
                  </div>
                </div>
                <div className="col">
                  {/* input */}
                  <label
                    htmlFor="formSignuplname"
                    className="form-label visually-hidden"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formSignuplname"
                    placeholder="First Name"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter last name.
                  </div>
                </div>
                <div className="col-12">
                  {/* input */}
                  <label
                    htmlFor="formSignupEmail"
                    className="form-label visually-hidden"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formSignupEmail"
                    placeholder="Email"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter email.</div>
                </div>
                <div className="col-12">
                  <div className="password-field position-relative">
                    <label
                      htmlFor="formSignupPassword"
                      className="form-label visually-hidden"
                    >
                      Password
                    </label>
                    <div className="password-field position-relative">
                      <input
                        type="password"
                        className="form-control fakePassword"
                        id="formSignupPassword"
                        placeholder="*****"
                        required=""
                      />
                      <span>
                        <i className="bi bi-eye-slash passwordToggler" />
                      </span>
                      <div className="invalid-feedback">
                        Please enter password.
                      </div>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                {/* text */}
                <p>
                  <small>
                    By continuing, you agree to our
                    <a href="#!">Terms of Service</a>
                    &amp;
                    <a href="#!">Privacy Policy</a>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  {/* footer */}
  <Footer />
</>

  )
}

export default SignUp
