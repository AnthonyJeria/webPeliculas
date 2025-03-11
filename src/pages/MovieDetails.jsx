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
                <p className="title">
                    <strong>Titulo: </strong>
                    {movie.title}
                </p>


                <p><strong>Generos:</strong></p>
                <ul className="listaGeneros">
                    {generos.map((genero)=>(
                        <p key={genero.id}>{genero.name} </p>
                    ))}
                </ul>

                <p>
                    <strong>Descripcion: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}