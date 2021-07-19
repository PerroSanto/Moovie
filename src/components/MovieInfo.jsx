import React from 'react'

//Aca armo la ventana de movie info popup, le paso los valores desde la otra ventana.
//cuando carga el programa apartece oculta y se hace visible al elegir mas info de una pelicula.
function MovieInfo(props) {
    return (props.trigger) ? (
        <div className="fixed top-0 left-0 w-full h-full bg-transparent flex justify-center items-center">
        <div className="relative p-16 w-full max-w-2xl bg-black rounded-xl bg-opacity-80">
        <div className="text-left text-xl text-white p-2">
                    <h1>{props.info.original_title}</h1>
                    { !props.info.release_date ? <div></div> :
                        <h1 className="text-yellow-300 text-sm text-opacity-70">{props.info.release_date.split("-" , 1)}</h1>
                    }
                </div>
                <div>
                <img className="relative inset-2 h-72 w-48 rounded-xl shadow-xl" 
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.info.poster_path}`} alt="image"/>
                <div className="my-6">
                <h1 className="p-2 text-md text-yellow-300 text-justify">Sinopsis</h1>
                <h1 className="p-2 text-md text-white text-justify">{props.info.overview}</h1>
                </div>
                </div>

                <button className="absolute top-4 right-4 bg-yellow-300 rounded-md w-20 h-8 text-md" onClick={() => props.setTrigger(false)}>Cerrar</button>
                { props.children }
            </div>
            </div>
    ) : "";
}

export default MovieInfo