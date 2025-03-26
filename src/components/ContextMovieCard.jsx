import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        get("/discover/movie?page="+page+"?language=es-MX").then((data) => {
            SetMovies(data.results);
            setLoading(false);
            console.log(data);

        });
    }, [page]);

    return(
        <div>
            <h1 className="encabezado">Películas Populares</h1>
            <ul className="container">
                {movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>

                ))}
            </ul>
            <div className="botones">
                <button className="boton" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>Anterior</button>
                <button className="boton" onClick={() => setPage((prev) => prev + 1)}>Siguiente</button>
            </div>
            
            {loading && <p>Cargando...</p>}
        </div>
        
    );
}