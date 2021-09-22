import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Countries from "./components/countries/countries.component";
import SearchBox from "./components/searchbox/searchbox.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchField: "",
      region: "All",
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((countriesArray) => this.setState({ countries: countriesArray }));
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleRegion = (e) => {
    this.setState({ region: e.target.value });
  };

  render() {
    const { countries, searchField, region } = this.state;
    console.log(this.state);

    const filteredCountries = countries.filter(
      (country) =>
        (region === "All" || country.region === region) &&
        country.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={Countries} />
        </Switch>

        <SearchBox
          placeholder="search countries"
          handleSearch={this.handleSearch}
          handleRegion={this.handleRegion}
        />

        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

export default App;
