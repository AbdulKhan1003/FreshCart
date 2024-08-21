import React from 'react'
import Footer from '../footer/page'

function SignIn() {
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
          <a href="signin.html">Sign in</a>
        </span>
      </div>
    </nav>
  </div>
  <main>
    {/* section */}
    <section className="my-lg-14 my-8">
      <div className="container">
        {/* row */}
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
            {/* img */}
            <img
              src="../assets/images/svg-graphics/signin-g.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          {/* col */}
          <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
            <div className="mb-lg-9 mb-5">
              <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
              <p>Welcome back to FreshCart! Enter your email to get started.</p>
            </div>
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                {/* row */}
                <div className="col-12">
                  {/* input */}
                  <label
                    htmlFor="formSigninEmail"
                    className="form-label visually-hidden"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formSigninEmail"
                    placeholder="Email"
                    required=""
                  />
                  <div className="invalid-feedback">Please enter name.</div>
                </div>
                <div className="col-12">
                  {/* input */}
                  <div className="password-field position-relative">
                    <label
                      htmlFor="formSigninPassword"
                      className="form-label visually-hidden"
                    >
                      Password
                    </label>
                    <div className="password-field position-relative">
                      <input
                        type="password"
                        className="form-control fakePassword"
                        id="formSigninPassword"
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
                <div className="d-flex justify-content-between">
                  {/* form check */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    {/* label */}
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                  <div>
                    Forgot password?
                    <a href="forgot-password.html">Reset It</a>
                  </div>
                </div>
                {/* btn */}
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                {/* link */}
                <div>
                  Don’t have an account?
                  <a href="signup.html">Sign Up</a>
                </div>
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

export default SignIn
