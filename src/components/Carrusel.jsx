import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import "../components/Carrusel.css"
import { Link } from "react-router-dom";

export function Carrusel() {
    const [movies, SetMovies] = useState([]);
    const imageUrl = "https://image.tmdb.org/t/p/w300"

    useEffect(() => {
        get("/movie/top_rated?language=es-MX").then((data) => {
            SetMovies(data.results);

        });
    }, []);

    return(
        <div className="cuerpoC">
            <h1>Mejor Calificadas</h1>
            <section className="carrusel">
                <ol className="carrusel_viewport">
                    {movies.map((movie)=>(
                        <li className="carrusel_slide" key={movie.id}>
                            <Link className="nombrePeli" to={"/movies/"+movie.id}>
                                <img className="portada" width={230} height={345} src={imageUrl+movie.poster_path} alt={movie.title} />
                                <p>{movie.title}</p>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
        
    )
}