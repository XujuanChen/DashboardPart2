import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState("");
  const {
    userQueryBy,
    userQuery,
    sortMethod,
    sortDirection,
    perPage,
    pageNumber,
  } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getResult = async (
      userQueryBy,
      userQuery,
      sortMethod,
      sortDirection,
      perPage,
      pageNumber
    ) => {
      const URL = `https://api.openbrewerydb.org/breweries?${userQueryBy}=${userQuery}&sort=${sortMethod}:${sortDirection}&per_page=${perPage}&page=${pageNumber}`;
      const response = await fetch(URL);
      const json = await response.json();
      if (json) {
        setResults(json);
      }
    };
    getResult(
      userQueryBy,
      userQuery,
      sortMethod,
      sortDirection,
      perPage,
      pageNumber
    ).catch(console.error);
  }, [userQueryBy, userQuery, sortMethod, sortDirection, perPage, pageNumber]);

  const handlePerPageSelect = (e) => {
    perPage = e.target.value;
    navigate(
      `/breweries/${userQueryBy}=${userQuery}&sort=${sortMethod}:${sortDirection}&per_page=${perPage}&page=1`
    );
  };

  const handleSortMethodSelect = (e) => {
    sortMethod = e.target.value;
    navigate(
      `/breweries/${userQueryBy}=${userQuery}&sort=${sortMethod}:${sortDirection}&per_page=${perPage}&page=1`
    );
  };

  return (
    <div>
      <div className="sort-methods">
        <form>
          <label htmlFor="sort-method">Sort results by: </label>
          <select
            name="sort-method"
            id="sort-method"
            value={sortMethod}
            onChange={handleSortMethodSelect}
          >
            <option value="name">Brewery name</option>
            <option value="type">Brewery type</option>
            <option value="city">City</option>
            <option value="state">State</option>
            <option value="country">Country</option>
          </select>
        </form>
        <form>
          <label htmlFor="results-per-page">Results per page: </label>
          <select
            name="results-per-page"
            id="results-per-page"
            value={perPage}
            onChange={handlePerPageSelect}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </form>
      </div>

      <ol>
        {results &&
          results.map((brewery, idx) => {
            return (
              <div
                className={"search-result-container " + brewery.brewery_type}
                key={idx}
              >
                <Link to={"/brewery/" + brewery.id}>
                  <div className="search-result-info">
                    <div className="brewery-details">
                      {brewery.name ? <li>{brewery.name} </li> : null}
                      <ul>
                        {brewery.street &&
                        brewery.street !== "Unnamed Street" ? (
                          <li>{brewery.street}</li>
                        ) : null}
                        {brewery.city && brewery.postal_code ? (
                          <li>
                            {brewery.city ? brewery.city : null}
                            {brewery.state ? `, ${brewery.state}` : null}
                            {brewery.postal_code ? brewery.postal_code : null}
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </ol>
    </div>
  );
};

export default SearchResults;
