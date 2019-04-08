import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../../common/textFieldGroup";
import { signup } from "../../actions/auth";

class Signup extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = (e) =>
    this.setState({
      ...this.state,
      data: {...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = (e) => {
    e.preventDefault();

    this.props.signup(this.state.data, this.props.history)
  }

  render() {
    const { data, errors } = this.state;

    return(
      <div className="signup card-color">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="text-center display-4 text-maroon">Sign Up</h1>
              <p className="text-center">Sign up for an account with Rosewood Food Sellers</p>
              {errors.global &&
                <div className="card card-body text-danger">
                  <h2>Something went wrong</h2>
                  <p>{errors.global}</p>
                </div>
              }
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={data.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                />
                <TextFieldGroup
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={data.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                />
                <TextFieldGroup
                  label="User Name"
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="User Name"
                  value={data.userName}
                  onChange={this.onChange}
                  error={errors.userName}
                />
                <TextFieldGroup
                  label="Email"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={data.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  label="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={data.confirmPassword}
                  onChange={this.onChange}
                  error={errors.confirmPassword}
                />
              <input type="submit" value="Signup" className="btn maroon btn-block mt-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { signup }) (Signup);
