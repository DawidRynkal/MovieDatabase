import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results'

function App() {
  const [state, setState] = useState({
    s: "",
    result: [],
    selected: {},
  })

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=e0f1a238";

  const search = e => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return {
            ...prevState, result: results,
          }

        })
      })
    }
  }

  console.log(state.result)

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => ({
      ...prevState,
      s: s,
    }))

  }

  return (
    <div className="App">
      <header>
        <h1>movie's </h1>
        <Search
          handleInput={handleInput}
          search={search}

        />
        <Results
          results={state.result}
        />
      </header>
    </div>
  );
}

export default App;
