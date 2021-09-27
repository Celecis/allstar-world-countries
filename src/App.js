import React from "react";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import CountryDetails from "./components/country-details/country-details.component";

import { BrowserRouter as Router, Route } from "react-router-dom";
import FavoritesList from "./components/favorites-list/favorites-list.component";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <div className="main">
          <HomePage />
          <FavoritesList />
        </div>
      </Route>
      <Route path="/countries/:alpha3Code" children={<CountryDetails />} />
    </Router>
  );
}

export default App;
