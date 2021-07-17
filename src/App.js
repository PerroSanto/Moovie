import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import LHeader from './components/LHeader';
import SearchBox from './components/Search'
import RHeader from './components/RHeader';
import AddFavorites from './components/AddFavorites';
import DelFavorites from './components/DelFavorites';
import FavoriteList from './components/FavoriteList';

function App() {

  const [ movies, setMovies ] = useState([]);

  //Agrego el hook para el manejo de los favoritos
  const [ favorites, setFavorites ] = useState([]);

  const [ searchValue, setSearchValue ] = useState('');

  const getMovieRequest = async (searchValue) => {
    const apiKey = '99a9f00b989a22d5530bdc3521bdc1de'
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-AR&query=${searchValue}&page=1&include_adult=false`
    const response = await fetch(api);
    const responseJson = await response.json();
    console.log(responseJson)
    // Esto lo pongo para que cuando inicia la pagina no traiga un array vacio y de error el map.
    if (responseJson.results) {
      setMovies(responseJson.results)
    } 
  };
  
  //Al tipear se le pasa el searchValue al hook, el hook pasa el valor a la funcion getMovieRequest
  useEffect(() => {
  getMovieRequest(searchValue);
  }, [searchValue]);

  //Este hook permite que los favoritos se cargen desde el localStorage al iniciar la pagina
  //lo convertimos de string a objeto nuevamente con parse
  useEffect(() => {
    const movieList = JSON.parse(localStorage.getItem('moovie-favorites'));
    //Agrego este condicional para evitar un error al cargar la app cuando no existe una lista de favoritos.
    if (movieList) {
    setFavorites(movieList)
    }
  }, []);

  //agregamos una pelicula al array favorites
  //llamamos a la funcion setFavorites y le pasamos una nueva lista que incluye el array anterior
  const AddFavoriteMovie = (movie) => {
    //agrego un condicional para que no se dupliquen los favoritos
    const existInFavorites = favorites.find(
      (favorite) => favorite.id === movie.id)

    if (!existInFavorites) {
      const newFavoriteList = [...favorites, movie]
      setFavorites(newFavoriteList)
      saveLocalStorage(newFavoriteList)
    } else {
      //agregar exepcion!
      window.alert("Esta pelicula ya esta en tus favoritos");
    }
  };

  //Borramos una pelicula del array favorites
  //Como vimos en clase usamos un filtro para crear un nuevo array que no contenga la pelicula que queremos sacar de la lista
  const DelFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    )
      setFavorites(newFavoriteList)
  };

  //agrego funcionalidad para local storage
  const saveLocalStorage = (movieList) => {
    localStorage.setItem('moovie-favorites', JSON.stringify(movieList))
  }

  return (
    <div className="App text-center">
      <div className="grid grid-cols-3 gap-0">
        <LHeader/>
        <SearchBox searchValue={searchValue} 
        setSearchValue={setSearchValue}/>
        <RHeader />
      </div>

            <div >
        <h1 className="text-3xl text-white">Favorites</h1>
        <FavoriteList movies={favorites} 
        favoriteClick={DelFavoriteMovie} 
        favoriteComponent={DelFavorites} />
      </div>

      <div >
      <h1 className="text-3xl text-white">Moovies</h1>
        <MovieList movies={movies} 
        favoriteClick={AddFavoriteMovie} 
        favoriteComponent={AddFavorites} />
      </div>
    </div>
  );
} export default App;

//Si el buscador es null popup
//cambiar favoritesComponent
//cambiar AddFavorites
//agregar exepciones con popup
//agregar respuesta cuando no se encuentra la pelicula deseada 
//agregar proteccion para que no se pueda seleccionar varias veces la misma pelicula
//agrepar popup si existe pelicula en favoritos.