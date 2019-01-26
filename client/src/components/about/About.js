import React from "react";

function About() {
  return (
    <div className="content container text-center">
      <div className="row">
        <div className="col mx-auto my-5">
          <h1 className="display-4">
            Easily Generate and Store Secure Passwords
          </h1>
          <p className="lead">
            Tired of trying to think up new passwords and then remembering them
            when you need to?
          </p>
          <p>
            Worry no more! Simply sign up for a free account and let Password
            Generator look after it all for you.
          </p>
          <h3 className="mt-5">Why Register?</h3>
          <p>
            Registered users enjoy more options over their passwords than users
            who simply generate passwords on the home page.
          </p>
          <h3 className="mt-5">Added Benefits:</h3>
        </div>
        <ul className="col-lg-6 offset-lg-3 mb-5 benefits">
          <li className="text-left">
            <i className="fa fa-check" aria-hidden="true">
              <p>Choose password length</p>
            </i>
          </li>
          <li className="text-left">
            <i className="fa fa-check" aria-hidden="true">
              <p>Add "special characters" to your passwords</p>
            </i>
          </li>
          <li className="text-left">
            <i className="fa fa-check" aria-hidden="true">
              <p>Save passwords to your wallet so you never forget them</p>
            </i>
          </li>
        </ul>
      </div>
      <a href="/signup" className="btn btn-primary btn-lg" role="button">
        Create Account
      </a>
    </div>
  );
}

export default About;
