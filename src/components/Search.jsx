import React from 'react';
import find from '../find.svg';

const SearchBox = (props) => {
    return (
        <div className="bg-black m-0 p-2 grid-cols-2 flex"> 
            <input id="SearchBox" className= "border rounded-l-lg w-full py-2 px-3 focus:outline-none focus:border-4 focus:border-yellow-300  text-gray-700 leading-tight" 
                value={props.value}
                placeholder="Search Moovie" />
            <div className="bg-yellow-300 w-8 rounded-r-lg cursor-pointer hover:bg-yellow-400">
                <img src={find} onClick={(event) => props.setSearchValue(document.getElementById("SearchBox").value)} alt="image"/>
            </div>
        </div>
    )
}; export default SearchBox;