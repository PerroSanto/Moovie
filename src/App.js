import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import LHeader from './components/LHeader';
import SearchBox from './components/Search'
import RHeader from './components/RHeader';
import AddFavorites from './components/AddFavorites';
import DelFavorites from './components/DelFavorites';
import FavoriteList from './components/FavoriteList';
import MovieInfo from './components/MovieInfo';
import FindMovie from './components/FindMovie';

function App() {

  //Hook para actualizar el listado de peliculas.
  const [ movies, setMovies ] = useState([]);

  //Agrego el hook para el manejo de los favoritos.
  const [ favorites, setFavorites ] = useState([]);

  //Hook para el manejo de valores de busqueda.
  const [ searchValue, setSearchValue ] = useState('');

  //Hook para el manejo de valor de la ventana de MovieInfo.
  const [ buttonInfo, setButtonInfo ] = useState(false);

  //Con esta funcion me traigo las peliculas de la api y las convierto al formato JSON.
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

    const existInFavorites = favorites.find(
      (favorite) => favorite.id === movie.id)
    //agrego un condicional para que no se dupliquen los favoritos
    if (!existInFavorites) {
      const newFavoriteList = [...favorites, movie]
      setFavorites(newFavoriteList)
      saveLocalStorage(newFavoriteList)
    } else {
      //excepcion por pelicula duplicada en favoritos.
      window.alert("Esta pelicula ya esta en tus favoritos");
    }
  };

  //muestro mas info sobre la pelicula
  const ShowMoreInfo = (movie) => {
    window.alert(movie.overview);
  };

  //Borramos una pelicula del array favorites
  //Como vimos en clase usamos un filtro para crear un nuevo array que no contenga la pelicula que queremos sacar de la lista
  //la guardo en el localStorage
  const DelFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    )
      setFavorites(newFavoriteList)
      saveLocalStorage(newFavoriteList)
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
        setSearchValue={setSearchValue}
        searchComponent={FindMovie} />
        <RHeader />
      </div>

            <div >
        <FavoriteList movies={favorites} 
        favoriteClick={DelFavoriteMovie} 
        favoriteComponent={DelFavorites} />
      </div>

      <div >
      
        <MovieList movies={movies} 
        favoriteClick={AddFavoriteMovie} 
        favoriteComponent={AddFavorites} 
        moreInfo={ShowMoreInfo}/>
        <MovieInfo />
      </div>
    </div>
  );
} export default App;
