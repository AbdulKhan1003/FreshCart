import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'
import Link from 'next/link'


function ForgotPassword() {
  return (
<>
  {/* navigation */}
    <Header />
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
              src="/assets/images/svg-graphics/fp-g.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
            <div>
              <div className="mb-lg-9 mb-5">
                {/* heading */}
                <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                <p>
                  Please enter the email address associated with your account
                  and We will email you a link to reset your password.
                </p>
              </div>
              {/* form */}
              <form className="needs-validation" noValidate="">
                {/* row */}
                <div className="row g-3">
                  {/* col */}
                  <div className="col-12">
                    {/* input */}
                    <label
                      htmlFor="formForgetEmail"
                      className="form-label visually-hidden"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="formForgetEmail"
                      placeholder="Email"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please enter correct password.
                    </div>
                  </div>
                  {/* btn */}
                  <div className="col-12 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Reset Password
                    </button>
                    <Link href="/components/signup" className="btn btn-light">
                      Back
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <Footer />
  {/* footer */} 
</>

  )
}

export default ForgotPassword
