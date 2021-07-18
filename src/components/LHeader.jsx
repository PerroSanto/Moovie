import React from 'react';

//Parte izquierda de la barra superior donde se encuentra el logo armado con css Tailwind.
const LHeader = (props) => {
    return (
        <div className="bg-black m-0 p-2">
          <div className="bg-yellow-300 m-0 p-1 rounded-lg container mx-1 w-24">
            <h1 className= "font-mono text-2xl text-black font-extrabold tracking-tighter antialiased">Moovie</h1>
          </div>
        </div>
    )
}; export default LHeader;