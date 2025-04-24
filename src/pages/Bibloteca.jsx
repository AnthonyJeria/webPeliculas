import { MenuArriba } from "../components/MenuArriba"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import { useParams } from "react-router-dom"

export function Bibloteca(){
    const [movies, SetMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const { movieName } = useParams();

    if (movieName.length < 4) {
        useEffect(() => {
            setLoading(true);
            get("/discover/movie?page="+page+"?language=es-MX").then((data) => {
                SetMovies(data.results);
                setLoading(false);
                console.log(data);
            });
        }, [page]);
        
    }
    else{
        useEffect(() => {
            setLoading(true);
            get("/search/movie?query=" + movieName + "&include_adult=false&language=es-MX&page="+page).then((data) => {
                SetMovies(data.results);
                setLoading(false);
                console.log(data);    
            });
        }, [page]);

    }

    window.onscroll = () => {
        const btn = document.getElementById("scrollTopBtn");
        btn.style.display = (window.scrollY > 300) ? "block" : "none";
      };
    
      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    return(
        <div>
            <MenuArriba/>
            <div>
                <ul className="container">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie}/>

                    ))}
                </ul>
                <div className="botones">
                    <button className="boton" onClick={() => setPage((prev) => Math.max(prev - 1, 1)) & scrollToTop()} disabled={page === 1}>Anterior</button>
                    <button className="boton" onClick={() => setPage((prev) => prev + 1) & scrollToTop()}>Siguiente</button>
                </div>
                
                {loading && <p>Cargando...</p>}
            </div>
            <Footer/>
        </div>
    )
}