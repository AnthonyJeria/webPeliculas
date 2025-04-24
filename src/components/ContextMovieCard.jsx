import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"
import { Link } from "react-router-dom";
import { Carrusel } from "../components/Carrusel"

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie?language=es-MX").then((data) => {
            SetMovies(data.results);
            console.log(data);

        });
    }, []);

    window.onscroll = () => {
        const btn = document.getElementById("scrollTopBtn");
        btn.style.display = (window.scrollY > 300) ? "block" : "none";
      };
    
      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    return(
        <div>
            <div class="slogan-section">
                <h1>Movie Play</h1>
                <p>Miles de películas  a un play</p>
            </div>
            <Carrusel/>
            <h1 className="encabezado">Películas Populares</h1>
            <ul className="container">
                {movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>

                ))}
            </ul>
            <div className="botones">
                <Link to={"/Bibloteca/1"}><button className="boton" onClick={scrollToTop()} >Ver mas Peliculas</button></Link>
            </div>
            
        </div>
        
    );
}