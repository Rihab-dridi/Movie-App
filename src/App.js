import React,{useState} from 'react';
import './App.css';
import NavBarParent from './NavBar/navBarParent';
import Search from './components/Search/search';
import MovieList from './components/MovieList/MovieList';
import Add from './components/Add/Add';
import Rate from './components/rate';


function App() {
  const [movies,setMovies]=useState( [
    {
      id:Math.random(),
      title:"Captain America",
      rate: 3,
      img:"https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_.jpg",
      Description:"Action || Science Fiction"
    },
    {
      id:Math.random(),
      title:"Captain Marvel",
      rate: 2,
      img:"https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg",
      Description:"Action || Science Fiction"
    },
    { 
      id:Math.random(),
      title:"T H O R ",
      rate: 4,
      img:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
      Description:"Action || Fantasy"
    },
    {
      id:Math.random(),
      title:"Iron Man 3 ",
      rate: 5,
      img:"https://static.posters.cz/image/750/affiches/avengers-endgame-i-am-iron-man-i76482.jpg",
      Description:"Action || Science Fiction"
    }
  ])
  
  const addMovieHandler = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
  
  const [search,setSearch]= useState('')
  const [rating,setRating ]=useState('')
  

  return (
    <div className="App">
                  <NavBarParent/>
                  <Search setSearch={setSearch}
                  search={search}
                  setRating={setRating}
                  />
              
                  <MovieList 
                  movies={movies}
                  search={search}
                  rating={rating}
                  />
                  <Add setMovies={setMovies}
                   addMovieHandler={addMovieHandler}
                   />
                  
              

    </div>
  );
}

export default App;
