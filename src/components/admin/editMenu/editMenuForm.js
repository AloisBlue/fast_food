import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import TextFieldGroup from "../../../common/textFieldGroup";
import { updateMenu } from "../../../actions/menu";

class EditMenuForm extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    const { singleMenu } = this.props;
    this.setState({
      data: singleMenu
    })
  }

  onChange = (e) =>
  this.setState({
    ...this.state,
    data: {...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = (e) => {
    e.preventDefault();
    const { singleMenu } = this.props;
    const { data } = this.state;
    this.props.updateMenu(data, singleMenu._id, this.props.history)
  }


  render() {
    const { data } = this.state;
    return (
      <div className="edit-menu">
        <div className="container">
          <button
            type="button"
            className="btn btn-light text-maroon mb-2"
            onClick={() => {
              this.props.history.push("/managemenu")
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />{' '}
            Back to Manage Menu
          </button>
          <div className="row  card-color">
            <div className="col-md-8 m-auto">
              <h3 className="text-center text-maroon"><
                FontAwesomeIcon icon={faEdit} /> Edit Menu Item
              </h3>
              <p className="text-center">Make changes to your menu item</p>
              <h5 className="text-center text-warning">{data.item}</h5>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="Price"
                  placeholder="price"
                  id="price"
                  name="price"
                  value={data.price}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  label="Description"
                  placeholder="description"
                  id="description"
                  name="description"
                  value={data.description}
                  onChange={this.onChange}
                />
              <input type="submit" value="Update Menu" className="btn maroon btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditMenuForm.propTypes = {
  updateMenu: PropTypes.func.isRequired,
  singleMenu: PropTypes.object.isRequired
}

export default connect(null, { updateMenu })(withRouter(EditMenuForm))
