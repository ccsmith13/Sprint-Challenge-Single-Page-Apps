import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(results => {
        setLocations(results.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  //console.log(locations);
  return (
    <section className="location-list grid-view">
      {locations.map(location => {
        return (
          <LocationCard
            key={location.name}
            name={location.name}
            dimension={location.dimension}
            residents={location.residents.length}
            type={location.type}
          />
        );
      })}
    </section>
  );
}
