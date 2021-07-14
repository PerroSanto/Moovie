import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="bg-black m-0 p-2"> 
            <input className= "border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent text-gray-700 leading-tight" 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Search Moovie"/>
        </div>
    )
}; export default SearchBox;