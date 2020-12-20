import React,{component} from 'react';
import Rate from '../rate';
const MovieCard = ({movie,rating})=>{
    const array=[]
    const array2=[]
    array.length= movie.rate
    array2.length= 5 -movie.rate

    return (
        <div  >
            <h3>I'm the MovieCard </h3>
            <div className="MovieCard">
                <button >
            <img className="poster" src={movie.img} alt="poster"/>
            <h6 className="title" >{movie.title}</h6>

            <span>{ array.fill(<i className="fas fa-star"></i>).concat(array2.fill(<i className="far fa-star"></i>))}</span>
            <p>{movie.Description}</p>
                </button>
            </div> 
        </div>
    
    
    )}

export default MovieCard 