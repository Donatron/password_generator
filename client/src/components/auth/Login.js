import React from "react";

function Login() {
  return (
    <div className="content container text-center">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-3 mt-3 text-left">
          <form action="/login" method="post">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="password"
                name="password"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
