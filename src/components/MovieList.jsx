import React from 'react';


/* 
Aca armo la lista de peliculas del resultado de la busqueda del usuario
Recorro el array con un map y formamteo los diferentes campos a mi gusto.
Si la pelicula no trae imagen le agrego el comentario "No disponible", 
En un principio era Not available pero para no mezclar idiomas de cara al
usuario puse todo en castellano, Mas alla de que el las variables del codigo
esten en ingles. Escuche hace poco a un desarrollador que recomendaba utilizas
las variables en ingles para generar codigo mas "globalizados".

Si la info de la pelicula no trae la fecha no la intento formatear.
*/
const MoviesList = (props) => {
    //pasamos el componente desde app y lo ubicamos en el div correspondiente
    const FavoriteComponent = props.favoriteComponent;
return (
    <>
    <h1 className="my-8 text-3xl text-yellow-300">Peliculas</h1>
    <div className="p-8 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {props.movies.map((movie) => (
        <div className="p-8">
            <div key={movie.id} className="grid-cols-2">
                <div className="h-96 w-64 max-w-screen-xl relative ">
                { movie.poster_path === null ? <div className="h-96 w-64 max-w-screen-xl shadow-2xl rounded-xl bg-gray-800 relative text-white"> No disponible</div> :
                <div>
                    <img className="absolute inset-0 h-half w-half rounded-xl shadow-xl" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="image"/> 
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-0 text-transparent duration-300 hover:bg-opacity-75 hover:text-white">
                        <div className="m-2 grid grid-cols-5">
                            <h1 className="text-left tracking-wider text-sm col-span-4" >Popularidad: {Math.ceil(movie.popularity)} / 100</h1>
                            
                            <div onClick={() => props.favoriteClick(movie)}>
                            <FavoriteComponent />
                            </div>

                        </div>
                        <div className=" p-2 mx-2 my-8 h-72">
                        <h1 className="tracking-wider items-center text-sm text-justify">{movie.overview.substring(0, 350)}...</h1>
                        <div className="p-2">
                        <button onClick={() => props.moreInfo(movie)}>Mas info</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
                }
                </div>
                <div className="text-left text-md text-white p-2">
                    <h1>{movie.original_title}</h1>
                    { !movie.release_date ? <div></div> :
                        <h1 className="text-yellow-300 text-sm text-opacity-70">{movie.release_date.split("-" , 1)}</h1>
                    }
                </div>
            </div>
        </div>
    ))}
    </div>
    </>
);
}; export default MoviesList;