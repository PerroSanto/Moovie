import React from 'react';

const MoviesList = (props) => {

return (
    <>
    <div className="p-8 grid grid-cols-4">
    {props.movies.map((movie, index) => (
        <div className="p-8">
            <div key={index} className="grid-cols-2">
                <div className="h-96 w-64 max-w-screen-xl rounded-sm shadow-2xl overflow-hidden relative ">
                { movie.poster_path === null ? <div className="h-96 w-64 max-w-screen-xl rounded-sm shadow-2xl overflow-hidden bg-gray-800 relative text-white"> Not available</div> :
                <div>
                    <img className="absolute inset-0 h-half w-half" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}/> 
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-0 text-transparent hover:bg-opacity-75 hover:text-white">
                        <div className="m-2">
                            <h1 className="items-start justify-center">Popularidad: {Math.ceil(movie.popularity)} / 100</h1>
                        </div>
                        <div className="mx-2 my-20 overscroll-contain">
                            <h1 className="tracking-wider  items-center text-sm text-justify">{movie.overview.split("." , 1)}...</h1>
                        </div>
                    </div>
                </div>
                }
                </div>
                <div className="text-left text-xl text-white p-3">
                    <h1>{movie.original_title}</h1>
                </div>
            </div>
        </div>
    ))}
    </div>
    </>
);
}; export default MoviesList;