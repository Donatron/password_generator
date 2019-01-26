import React from "react";

function Profile() {
  return (
    <div className="content container">
      <div className="col-md-6 mx-auto">
        <h1 className="text-center my-5">Profile for ## USER NAME ##</h1>
        <form action="/profile" method="post">
          <div className="form-group text-left">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              name="userName"
              id="userName"
              value="name"
              className="form-control"
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value="email"
              className="form-control"
            />
          </div>
          <h3 className="mt-5">Change Password</h3>
          <div className="form-group text-left">
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="text"
              name="currentPassword"
              id="currentPassword"
              value="current password"
              className="form-control"
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="text"
              name="newPassword"
              id="newPassword"
              value="new password"
              className="form-control"
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="newPasswordConfirm">Confirm New Password:</label>
            <input
              type="text"
              name="newPasswordConfirm"
              id="newPasswordConfirm"
              value="confirm new password"
              className="form-control"
            />
          </div>
          <button className="btn btn-outline-primary update mt-3" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
