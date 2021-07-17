import React from 'react';

const MovieInfo = () => {
    return (
        <>
            <div className="bg-white bg-opacity-50 absolute inset-0 flex justify-center items-center hidden" id="overlay">
                <div className="bg-gray-200 ">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold"> this is modal</h1>
                    </div>
                   
                </div>    

            </div>
        </>
    );



}; export default MovieInfo;