import React from 'react';

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.Title)}>
            <img src={result.Poster} alt="movie" />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result; 