import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="content container text-center">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1>Login</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-3 mt-3 text-left">
            <form action="/login" method="post" onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Email address"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
