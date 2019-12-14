import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Rick &amp; Morty Fan Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/characters">
        <button>Characters</button>
      </Link>

      <Link to="/locations">
        <button>Locations</button>
      </Link>
    </header>
  );
}
