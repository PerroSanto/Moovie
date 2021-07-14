import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import LHeader from './components/LHeader';
import SearchBox from './components/Search'
import RHeader from './components/RHeader';

function App() {

  const [ movies, setMovies ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  const getMovieRequest = async (searchValue) => {
    const apiKey = '99a9f00b989a22d5530bdc3521bdc1de'
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-AR&query=${searchValue}&page=1&include_adult=false`
    const response = await fetch(api);
    const responseJson = await response.json();
    // Esto lo pongo para que cuando inicia la pagina no traiga un array vacio y de error el map.
    if (responseJson.results) {
      setMovies(responseJson.results)
    }
  };
  //Al tipear se le pasa el searchValue al hook, el hook pasa el valor a la funcion getMovieRequest
  useEffect(() => {
  getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App text-center">
      <div className="grid grid-cols-3 gap-0">
        <LHeader />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <RHeader />
      </div>
      <div >
        <MovieList movies={movies} />
      </div>
    </div>
  );
} export default App;

