import React, { Component } from "react";

class Search extends Component {
  state = {
    filtered: []
  }

  componentDidMount() {
    const { items } = this.state;
    this.setState({
      filtered: items
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menu) {
      this.setState({
        filtered: nextProps.menu
      });
    }
  }

  onChange = (e) => {
    let currentSearch = [];
    let newSearch = [];

    if (e.target.value !== '') {
      const { allMenu } = this.props;
      currentSearch = allMenu.menu;
      // filter
      newSearch = currentSearch.filter(item => {
        const lowercase = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lowercase.includes(filter);
      });
    } else {
      newSearch = this.props.items;
    }
    this.setState({
      filtered: newSearch
    })
  }



  render() {
    const { filtered} = this.state;
    const {allMenu} = this.props;
    console.log(allMenu);
    return (
      <div className="search">
        <div className="container">
          <div className="col-2">
            <form>
              <input
                className="signer"
                placeholder="Search..."
                value={filtered}
                onChange={this.onChange}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
