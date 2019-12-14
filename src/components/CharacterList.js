import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {}, [searchTerm]);
  console.log("characters", characters);

  const [searchResults, setSearchResults] = useState(characters);
  const handleChange = event => {
    setSearchTerm(event.target.value);
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  };
  console.log("search results", searchResults);
  return (
    <div>
      <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
      <section className="character-list">
        {searchResults.map(char => {
          return (
            <div>
              <CharacterCard
                key={char.id}
                name={char.name}
                image={char.image}
                location={char.location}
                status={char.status}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
