import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Brewery = () => {
  const [brewery, setBrewery] = useState({});
  const [totalBreweries, setTotalBreweries] = useState(0);

  const selectedBrewery = useParams();

  const getTotalBreweries = async () => {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries/meta`
    );
    const json = await response.json();
    setTotalBreweries(json.total);
  };

  const findBrewery = async (breweryName) => {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries/${breweryName}`
    );
    const json = await response.json();
    setBrewery(json.total);
  };

  useEffect(() => {
    if (!brewery.id) {
      findBrewery(selectedBrewery.brewery);
    }
    if (!totalBreweries) {
      getTotalBreweries();
    }
  }, [totalBreweries, selectedBrewery.brewery]);

  const {
    name,
    brewery_type,
    street,
    address_2,
    address_3,
    county_province,
    city,
    state,
    postal_code,
    latitude,
    longitude,
    country,
    phone,
    website_url,
    updated_at,
  } = brewery;

  return (
    <div className="brewery">
      <div className="details">
        <div className="brewery-container">
          <div className="brewery-info">
            <h3 className="brewery-name">{name}</h3>
            {brewery_type && brewery_type !== "closed" ? (
              <h4 className="brewery-type">Brewery type: {brewery_type}</h4>
            ) : null}
            {street && street !== "Unnamed Street" ? <p>{street}</p> : null}
            {city && postal_code ? (
              <p>
                {city ? city : null}
                {state ? `, ${state}` : null} {postal_code ? postal_code : null}
              </p>
            ) : null}

            <br />
            {phone ? (
              <p>
                {phone.length === 10 && country === "United States"
                  ? `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}${phone[8]}${phone[9]}`
                  : phone}
              </p>
            ) : null}

            {website_url ? (
              <p>
                <a href={website_url} target="_blank" rel="noreferrer">
                  {website_url}
                </a>
              </p>
            ) : null}
            <br />

            {updated_at ? (
              <p>
                <em>
                  Last updated:{" "}
                  {updated_at[5] +
                    updated_at[6] +
                    `/` +
                    updated_at[8] +
                    updated_at[9] +
                    `/` +
                    updated_at[0] +
                    updated_at[1] +
                    updated_at[2] +
                    updated_at[3]}
                </em>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brewery;
