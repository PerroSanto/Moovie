import React from 'react';

/*
Parte central de la barra de busqueda.
Aca se lee el input que escribio el usuario para la busqueda y
con un evento devuelvo el valor con un getElementById cuando 
se hace click sobre un div formateado como boton.
*/
const SearchBox = (props) => {
    //pasamos el componente desde app y lo ubicamos en el div correspondiente
    const SearchComponent = props.searchComponent;
    return (
        <div className="bg-black m-0 p-2 grid-cols-2 flex"> 
            <input id="SearchBox" className= "border rounded-l-lg w-full py-2 px-4 focus:outline-none focus:border-yellow-300 text-gray-700 leading-tight" 
                value={props.value}
                placeholder="Search Moovie" />
            <div className="bg-yellow-300 w-9 rounded-r-lg cursor-pointer hover:bg-yellow-400">
                <div onClick={(event) => props.setSearchValue(document.getElementById("SearchBox").value)}>
                <SearchComponent />
                </div>
            </div>
        </div>
    )
}; export default SearchBox;