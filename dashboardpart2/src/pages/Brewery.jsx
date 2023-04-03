import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Brewery = () => {
  const [brewery, setBrewery] = useState({});
  const selectedBrewery = useParams();

  const findBrewery = async(breweryName) => {
    let chosenBrewery;
    const response = await fetch(`https://api.openbrewerydb.org/breweries/${breweryName}`);
    chosenBrewery = await response.json();
    setBrewery(chosenBrewery);
  }

  useEffect(() => {
    findBrewery(selectedBrewery.brewery);
  }, [selectedBrewery.brewery]);

  const {name, brewery_type, street, city, state, postal_code, country, phone, website_url} = brewery;

  return (
    <div className="display-box">
      <h3>Details: </h3>
      <h3>{name}</h3>
      {brewery_type }
      {street }
      <p>{city }  {state } {postal_code } </p>
      <p> {country !== "United States" ? country : null} </p>
      <p> { phone } </p>

      {website_url ? (
        <p>
          <a href={website_url} target="_blank" rel="noreferrer">
            {website_url}
          </a>
        </p>
      ) : null}
    </div>
  );
  
}

export default Brewery