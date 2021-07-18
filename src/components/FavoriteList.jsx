import React from 'react';

/*
Aca armo la lista de favoritos, si veo que no hay nada guardado de la info que traigo del 
Local storage, devuelvo un cuadro con formato de igagen de la pelicula con un texto
Agrega tus favoritas para que el usuario se de cuenta. Si hay peliculas guardadas
Las muestro.
*/
const FavoriteList = (props) => {
    //pasamos el componente desde app y lo ubicamos en el div correspondiente
    const FavoriteComponent = props.favoriteComponent;
return (
    <>
    <h1 className="my-8 text-2xl text-yellow-300">Mis favoritas</h1>
    { props.movies.length === 0 ? 

    <div className="flex grid-cols-7 overflow-x-auto scrollbar">
        <div className="p-8">
            <div className="h-72 w-48 max-w-screen-xl shadow-2xl rounded-xl bg-gray-800  text-white text-sm p-2">Agrega tus favoritas</div> 
        </div>
    </div>

    :
    <div className=" flex overflow-x-auto scrollbar">
    {props.movies.map((movie, index) => (
        <div className="p-8">
            <div key={movie.id}>
                <div className="h-72 w-48 max-w-screen-xl relative">
                <div>
                    <img className="absolute inset-0 h-half w-half rounded-xl shadow-xl" 
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="image"/> 

                    <div className="absolute inset-0 bg-gray-900 bg-opacity-0 text-transparent duration-300 hover:bg-opacity-75 hover:text-white">
                        <div className="m-2 pl-36">
                            <div onClick={() => props.favoriteClick(movie)}>
                            <FavoriteComponent />
                            </div>

                        </div>
                    </div>
                </div>

                </div>
                <div className="text-left text-sm text-white p-2">
                    <h1>{movie.original_title}</h1>
                    { !movie.release_date ? <div></div> :
                        <h1 className="text-yellow-300 text-xs text-opacity-70">{movie.release_date.split("-" , 1)}</h1>
                    }
                </div>
            </div>
        </div>
    ))}
    </div>
}
    </>
);
}; export default FavoriteList;