import React from "react";

function Passwords() {
  return (
    <div className="content container text-center">
      <div className="row mt-5 mb-2 max-auto">
        <h4>Password Options</h4>
      </div>
      <div className="row mx-auto">
        <label htmlFor="passwordLength">Password Length</label>
        <select name="passwordLength" id="passwordLength" className="ml-3">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div className="row mt-2 mb-5 mx-auto password-row">
        <button
          className="btn btn-primary my-4 password-btn"
          id="myPasswordButton"
        >
          Click to generate password
        </button>
      </div>
      <div className="row text-center">
        <div className="col md-6 offset-md-3 save-form">
          <h3 className="text-center">Save Password to Wallet</h3>
          <form action="/save" method="post" className="text-left">
            <div className="form-group">
              <label htmlFor="generatedPassword">Your Password Is</label>
              <input
                type="text"
                id="generatedPassword"
                name="generatedPassword"
                className="form-control password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Site Name</label>
              <input
                type="text"
                id="description"
                name="description"
                className="form-control password"
                placeholder="site name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="siteUrl">Website URL</label>
              <input
                type="text"
                id="siteUrl"
                name="url"
                className="form-control password"
                placeholder="www.siteurl.com"
              />
            </div>
            <button
              className="btn btn-outline-primary save-password"
              type="submit"
            >
              Save to Wallet
            </button>
          </form>
          <div className="row text-center">
            <div className="col-md-6 offset-3 my-5">
              <h2>Saved Passwords for ## USER NAME ##</h2>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Site Name</th>
                <th>URL</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>Some Website</td>
                <td>www.someurl.com</td>
                <td>somepassword</td>
              </tr>
              <tr className="text-center">
                <td>Some Other Website</td>
                <td>www.someotherurl.com</td>
                <td>someotherpassword</td>
              </tr>
              <tr className="text-center">
                <td>Another Website</td>
                <td>www.anotherurl.com</td>
                <td>anotherpassword</td>
              </tr>
              <tr className="text-center">
                <td>And Another Website</td>
                <td>www.andnotherurl.com</td>
                <td>andanotherpassword</td>
              </tr>
              <tr className="text-center">
                <td>One More Website</td>
                <td>www.onemoreurl.com</td>
                <td>onemorepassword</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Passwords;
