import React from 'react';

const MoviesList = (props) => {

return (
    <>
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {props.movies.map((movie, index) => (
        <div className="p-8">
            <div key={index} className="grid-cols-2">
                <div className="h-96 w-64 max-w-screen-xl relative ">
                { movie.poster_path === null ? <div className="h-96 w-64 max-w-screen-xl shadow-2xl rounded-xl bg-gray-800 relative text-white"> Not available</div> :
                <div>
                    <img className="absolute inset-0 h-half w-half rounded-xl shadow-xl" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="image"/> 
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-0 text-transparent hover:bg-opacity-75 hover:text-white">
                        <div className="m-2">
                            <h1 className="items-start justify-center">Popularidad: {Math.ceil(movie.popularity)} / 100</h1>
                        </div>
                        <div className=" p-2 mx-2 my-16 h-72 overflow-y-auto scrollbar">
                        <h1 className="tracking-wider items-center text-sm text-justify">{movie.overview}</h1>
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