import React from 'react';

let SearchBox=({input})=>{
    return(
        <div>
            <input 
            className="searchbox" 
            type="search" 
            placeholder="Search jobs...."
            onChange={input}
            ></input>
            <button className="searchbox">search</button>
        </div>
    );
}

export default SearchBox;