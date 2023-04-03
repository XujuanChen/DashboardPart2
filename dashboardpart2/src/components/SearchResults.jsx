import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  let {userQueryBy, userQuery, perPage} = useParams();

  const getResults = async( userQueryBy, userQuery ) => {
    let searchResults;
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries?${userQueryBy}=${userQuery}`
    );
    searchResults = await response.json();
    setResults(searchResults);
    console.log("getResult", searchResults)
  }

  useEffect(() => {
    getResults(userQueryBy, userQuery);
  }, [userQueryBy, userQuery]);

  const handlePerPageSelect = (event) => {
    perPage = event.target.value;
    navigate(`/breweries/${userQueryBy}=${userQuery}&per_page=${perPage}&page=1`);
  }

    return (
      <div >
        <div >
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

        <div className="all-search-results-box">

        <>
          <ul>
            {results.map((brewery) => {
              return (
                <div key={brewery.id}
                >
                  <Link to={"/brewery/" + brewery.id}>
                    <div className="search-result-info">
                      <div className="brewery-details">
                          <li>{brewery.name} </li> 
                        <ul>
                            <li>{brewery.street}</li>
                            <li>
                              {brewery.city}
                              {brewery.state}
                              {brewery.postal_code}
                            </li>
                            <li>{brewery.country }</li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </ul>
        </>

        </div>
      </div>
    );

}

export default SearchResults