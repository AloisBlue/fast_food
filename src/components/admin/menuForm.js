import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import TextFieldGroup from "../../common/textFieldGroup";
import SelectListGroup from "../../common/selectListGroup";
import TextAreaFieldGroup from "../../common/textAreaFieldGroup";
import { newMenu } from "../../actions/menu";

class MenuForm extends Component {
  state = {
    data: {
      item: '',
      price: '',
      description: '',
      category: ''
    },
    menuImage: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = (e) => {
    switch(e.target.name) {
      case 'menuImage':
        this.setState({
          ...this.state,
          menuImage: e.target.files[0]
        });
        break;
      default:
        this.setState({
          ...this.state,
          data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { data, menuImage } = this.state;
    const formData = new FormData();
    formData.append('menuImage', menuImage)
    formData.append('addMenu[item]', data.item)
    formData.append('addMenu[price]', data.price)
    formData.append('addMenu[description]', data.description)
    formData.append('addMenu[category]', data.category)
    this.props.newMenu(formData, this.props.history)

  }



  render() {
    const { data, errors } = this.state;
    const asterisk = <span style = {{ color: 'red'}}>*</span>

    const options = [
      { label: 'Select Food Category', value: 0 },
      { label: 'Break Fast', value: 'Break Fast' },
      { label: 'Cereals', value: 'Cereals' },
      { label: 'Snacks', value: 'Snacks' },
      { label: 'Salad', value: 'Salad' },
      { label: 'Soft Drinks', value: 'Soft Drinks' },
      { label: 'Whole Meal', value: 'Whole Meal' },
      { label: 'Kienyenji', value: 'Kienyenji' },
      { label: 'Bakings', value: 'Bakings' },
      { label: 'Meat Products', value: 'Meat Products' },
      { label: 'Others', value: 'Others' }
    ]

    return (
      <div className="menuform">
        <div className="container">
          <button
            onClick={() => {
              this.props.history.push("/managemenu")
            }}
            className="btn btn-maroon text-maroon mb-2"
            type="button"
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back To Manage Menu
          </button>
          <div className="row  card-color">
            <div className="col-md-8 m-auto">
              <h3 className="text-center text-maroon">Add Menu Item</h3>
              <p className="text-center">Proceed to add the menu of your choice</p>
              <small style={{fontStyle: 'italic'}}>All fields marked with {asterisk} are required</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label={asterisk}
                  id="item"
                  name="item"
                  type="text"
                  placeholder="Enter item"
                  value={data.item}
                  onChange={this.onChange}
                  info="Food item"
                  error={errors.item}
                />
                <TextFieldGroup
                  label={asterisk}
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  placeholder="Enter price"
                  value={data.price}
                  onChange={this.onChange}
                  info="Price"
                  error={errors.price}
                />
                <TextAreaFieldGroup
                  label={asterisk}
                  name="description"
                  type="text"
                  placeholder="Enter description"
                  value={data.description}
                  onChange={this.onChange}
                  info="Give a short description"
                  error={errors.description}
                />
                <SelectListGroup
                  label={asterisk}
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Enter food category"
                  value={data.category}
                  onChange={this.onChange}
                  options={options}
                  info="Select food category"
                  error={errors.category}
                />
              <label className="text-muted" htmlFor="menuImage">{asterisk} Item Image</label><br />
                <input
                  className=""
                  id="menuImage"
                  name="menuImage"
                  type="file"
                  value={data.menuImage}
                  onChange={this.onChange}
                />
                {errors.menuImage && (
                  <div className="invalid-feedback">{errors.menuImage}</div>
		             )}
                <input type="submit" value="Add Item" className="btn maroon btn-block mt-3 mb-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  newMenu: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, { newMenu })(withRouter(MenuForm));
