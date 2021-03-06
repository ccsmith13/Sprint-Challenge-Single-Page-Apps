import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characters"
        render={routeProps => {
          return <CharacterList {...routeProps} />;
        }}
      />
      <Route
        path="/locations"
        render={routeProps => {
          return <LocationsList {...routeProps} />;
        }}
      />
    </main>
  );
}
