import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../../common/textFieldGroup";
import { newMenu } from "../../actions/menu";

class MenuForm extends Component {
  state = {
    data: {
      item: '',
      price: '',
      description: '',
      menuImage: undefined
    },
    errors: {},
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = (e) => {
    switch(e.target.name) {
      case 'menuImage':
        this.setState(prevState => ({
          ...prevState,
          data: {...prevState.data, menuImage: e.target.files[0]}
        }))
        break;
      default:
        this.setState({
          ...this.state,
          data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }
  }

  handleImageOnchange = (e) =>
    this.setState(prevState => ({
      ...prevState,
      data: {...prevState.data, menuImage: e.target.files[0]}
    }))

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.data);

    // this.props.newMenu(this.state.data, this.props.history)
  }



  render() {
    const { data, errors, hasError } = this.state;
    if (hasError.hasError) {
     // You can render any custom fallback UI
     return <h1>Something went wrong.</h1>;
     }
    return (
      <div className="menuform">
        <div className="container">
          <button
            onClick={() => {
              this.props.history.push("/managemenu")
            }}
            className="btn btn-light text-maroon mb-2"
            type="button"
          >
            Back To Manage Menu
          </button>
          <div className="row  card-color">
            <div className="col-md-8 m-auto">
              <h3 className="text-center text-maroon">Add Menu Item</h3>
              <p className="text-center">Proceed to add the menu of your choice</p>
              <img src={data.menuImage} alt="" />
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="Item"
                  id="item"
                  name="item"
                  type="text"
                  placeholder="Enter item"
                  value={data.item}
                  onChange={this.onChange}
                  error={errors.item}
                />
                <TextFieldGroup
                  label="Price"
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  placeholder="Enter price"
                  value={data.price}
                  onChange={this.onChange}
                  error={errors.price}
                />
                <TextFieldGroup
                  label="Description"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Enter description"
                  value={data.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                <label className="text-muted" htmlFor="menuImage">Item Image</label><br />
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

export default connect(mapStateToProps, { newMenu })(MenuForm);
