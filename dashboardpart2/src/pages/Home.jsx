import React, { useState } from "react";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";

import { useNavigate, Routes, Route } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    searchBar: "",
    searchMethod: "by_name",
    searchMethodName: "name",
  });

  const handleTextInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleRadioClick = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      searchMethod: e.target.id,
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (formState.searchBar !== "") {
      navigate(
        `/breweries/${formState.searchMethod}=${formState.searchBar}&sort=name:asc&per_page=20&page=1`
      );
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Search
                textInput={handleTextInput}
                radioClick={handleRadioClick}
                submitClick={handleSubmitClick}
                form={formState}
              />
              <SearchResults />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
