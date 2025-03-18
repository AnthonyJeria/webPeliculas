import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useState, useEffect } from "react"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails(){

    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get("/movie/" + movieId + "?language=es-MX").then((data) => {
            setMovie(data);
            setGeneros(data.genres)
            console.log(data);
            
        });
    }, [movieId]);
    
    const imageUrl = getMovieImg(movie.poster_path, 500);

    return(
        <div className="detailsContainer">
            <img className="col movieImage" src={imageUrl} alt={movie.title}/>
            
            <div className="col movieDetails">
                <h2 className="title">
                    {movie.title}
                </h2>
                <p className="original_title">{movie.original_title} {movie.release_date}</p>



                <ul className="listaGeneros">
                    {generos.map((genero)=>(
                        <p key={genero.id} className="genero">{genero.name} </p>
                    ))}
                </ul>

                <p>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}