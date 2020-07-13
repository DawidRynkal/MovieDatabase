import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results'
import Popup from './components/Popup'

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

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => ({
      ...prevState,
      s: s,
    }))

  }


  const openPopup = title => {
    axios(apiurl + "&t=" + title).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return {
          ...prevState, selected: result
        }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {
        ...prevState, selected: {}
      }
    })

  }


  return (
    <div className="App">
      <header>
        <h1>movie's </h1>
      </header>
      <main>
        <Search
          handleInput={handleInput}
          search={search}

        />
        <Results
          results={state.result}
          openPopup={openPopup}
        />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}

      </main>
    </div>
  );
}

export default App;
