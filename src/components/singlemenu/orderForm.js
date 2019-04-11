import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextFieldGroup from "../../common/textFieldGroup";
import { makeOrder } from "../../actions/order";

class OrderForm extends Component {
  state = {
    data: {
      quantity: '1'
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
    const {singleMenu} = this.props;
    // get value of item
    const value = singleMenu.item
    // set item into the payload
    this.setState({
      ...this.state,
      data: {...this.state.data, item: value}
    },
    // send data to api
    () => this.props.makeOrder(this.state.data, this.props.history));
  }

  render() {
    const { data, errors } = this.state;

    return (
      <div className="orderform">
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            label="Number of items"
            id="quantity"
            name="quantity"
            type="number"
            min={1}
            max={10}
            value={data.quantity}
            onChange={this.onChange}
            error={errors.quantity}
            info="Use digits only, 1-10"
          />
          <input type="submit" className="btn btn-success btn-block" value="Purchase" />
        </form>
      </div>
    );
  }
}

OrderForm.propTypes = {
  makeOrder: PropTypes.func.isRequired,
  singleMenu: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.shape({
    path:PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, { makeOrder })(withRouter(OrderForm));
