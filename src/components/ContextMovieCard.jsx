import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie?language=es-MX").then((data) => {
            SetMovies(data.results);
            console.log(data);
            

        });
    }, []);

    return(
        <ul className="container">
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>

            ))}
        </ul>
    );
}