import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../../common/textFieldGroup";
import { login } from "../../actions/auth";

class Login extends Component {
  state = {
    data: {
      email: '',
      password: ''
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

    this.props.login(this.state.data, this.props.history)
  }


  render() {
    const { data, errors } = this.state;
    return (
      <div className="login card-color">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="text-center text-maroon display-4">Login</h1>
              <p className="text-center">Log in to your account</p>
              {
                errors.global &&
                <div className="card card-body text-danger">
                  <h2>Something went wrong</h2>
                  <p>{errors.global}</p>
                </div>
              }
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="Email"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
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
                <input type="submit" value="Login" className="btn maroon btn-block mt-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, { login })(Login);
