import React from "react";

function Signup() {
  return (
    <div className="content container text-center">
      <div className="row">
        <div className="col-md-6 offset-3 mt-5">
          <h1>Create Account</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-3 mt-3 text-left signup-form">
          <form action="/signup" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm">Confirm Password:</label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
