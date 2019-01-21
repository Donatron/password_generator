import React from "react";

function Landing() {
  return (
    <div>
      <div className="jumbotron text-center content">
        <h1 className="display-4">Password Generator</h1>
        <p className="lead">Easily create and store secure passwords</p>
        <br />
        <p>
          Create account to store generated passwords, or create password below
          and save to your favourite passport
        </p>
        <p className="lead">
          <a href="/signup" className="btn btn-primary btn-lg" role="button">
            Create Account
          </a>
        </p>
      </div>
      <div className="container">
        <div className="text-center starter">
          <h3 className="col">Get Started</h3>
          <p id="disclaimer">
            Passwords generated here cannot be saved to your wallet. To save
            passwords click above to create an account.
          </p>
          <button
            className="btn btn-primary my-4 password-btn"
            id="guestPassword"
          >
            Click to generate password
          </button>
          <div className="row col-md-g offset-md-3 text-center align-center password-generator">
            <h5 className="col6 text-right" id="password-title">
              Your password is
            </h5>
            <p className="col-6.text-left.password" id="guestPasswordText" />
          </div>
          <button
            className="btn btn-outline-primary my-4 copy-button"
            data-clipboard-target="#guestPasswordText"
          >
            Copy Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
