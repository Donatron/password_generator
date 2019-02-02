import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      // TODO: push to My Passwords
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errros: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };

    this.props.signupUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="content container text-center">
        <div className="row">
          <div className="col-md-6 offset-3 mt-5">
            <h1>Create Account</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-3 mt-3 text-left signup-form">
            <form action="/signup" method="post" onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Full Name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.onChange}
                error={errors.name}
              />
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
              <TextFieldGroup
                placeholder="Confirm password"
                name="passwordConfirm"
                type="password"
                value={this.state.passwordConfirm}
                onChange={this.onChange}
                error={errors.passwordConfirm}
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

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isrequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup);
