import React from 'react'

const Search = (props) => {
  const { radioClick, submitClick, textInput } = props;
  const { searchBar, searchMethod, searchMethodName } = props.form;

  return (
    <>
      <div className="display-box">
        <h3 className='pd-top'>Search for breweries by {searchMethodName}:</h3>
        <form className="search-form" onSubmit={submitClick}>
          <div className="search-radio-buttons">
            <label name="searchMethod">
              <input
                type="radio"
                id="name"
                name="searchMethod"
                value="by_name"
                checked={searchMethod === "by_name"}
                onChange={radioClick}
              />
              Name
            </label>

            <label name="searchMethod">
              <input
                type="radio"
                id="city"
                name="searchMethod"
                value="by_city"
                checked={searchMethod === "by_city"}
                onChange={radioClick}
              />
              City
            </label>

            <label name="searchMethod">
              <input
                type="radio"
                id="state"
                name="searchMethod"
                value="by_state"
                checked={searchMethod === "by_state"}
                onChange={radioClick}
              />
              State
            </label>

          </div>
          <div className="search-field-and-button">
            <input
              type="text"
              name="searchBar"
              placeholder="Enter text"
              className="search-bar"
              onChange={textInput}
              value={searchBar}
            />
            <button type="submit" className='button-3 submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search