
import React, { useState } from "react";
import  { useNavigate, Routes, Route } from "react-router-dom";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import Welcome from "../components/Welcome";

const Home = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    searchBar: "",
    searchMethod: "by_name",
    searchMethodName: "name"
  });

  const handleTextInput = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  const handleRadioClick = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value, searchMethodName: event.target.id,});
  }

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (formState.searchBar !== "") {
      navigate(`/breweries/${formState.searchMethod}=${formState.searchBar}`);
    }
  }

  return (
    <div >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                textInput={handleTextInput}
                radioClick={handleRadioClick}
                submitClick={handleSubmitClick}
                form={formState}
              />
              <Welcome />
            </>
          }
        />
        <Route
          path="/breweries/:userQueryBy=:userQuery"
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
}

export default Home