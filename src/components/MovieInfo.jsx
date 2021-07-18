import React from 'react'

function MovieInfo(props) {
    return (props.trigger) ? (
        <div className="fixed top-0 left-0 w-full h-full bg-transparent flex justify-center items-center">
        <div className="relative p-32 w-full max-w-2xl bg-black rounded-xl bg-opacity-80">
        <h1 className="text-md text-white">{props.info}</h1>
                <button className="absolute top-4 right-4 bg-yellow-300 rounded-md w-20 h-8 text-md" onClick={() => props.setTrigger(false)}>Cerrar</button>
                { props.children }
            </div>
            </div>
    ) : "";
}

export default MovieInfo