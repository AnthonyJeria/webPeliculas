import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"
import { Link } from "react-router-dom";

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie?language=es-MX").then((data) => {
            SetMovies(data.results);
            console.log(data);

        });
    }, []);

    return(
        <div>
            <h1 className="encabezado">Películas Populares</h1>
            <ul className="container">
                {movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>

                ))}
            </ul>
            <div className="botones">
                <Link to={"/Bibloteca/1"}><button className="boton" >Ver mas Peliculas</button></Link>
            </div>
            
        </div>
        
    );
}