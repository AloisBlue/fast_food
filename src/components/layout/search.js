import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    query: '',
    options: [],
    loading: false
  }

  onSearch = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchMenu, 1000);
  };

  fetchMenu = () => {
    const { query } = this.state;
    if (!query) {
      return ;
    }
    this.setState({ loading: true })
    axios
      .get(`/api/menus/search?q=${query}`)
      .then(res => res.data)
  }

  render() {
    const { query, options, loading } = this.state;
    // const searchIcon = `ss${  <FontAwesomeIcon icon={faSearch} />}`
    return (
      <div className="search">
        <div className="float-right mb-2 mr-1">
          <div className="container">
            <div className="col-2">
              <input
                type="text"
                className="signer"
                placeholder="Search..."
                onChange={this.onSearch}
                value={query}
                options={options}
                loading={loading}sea
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
