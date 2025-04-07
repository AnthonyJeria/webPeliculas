import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useState, useEffect } from "react"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"
import { MenuArriba } from "../components/MenuArriba"
import { Footer } from "../components/Footer"

export function MovieDetails(){

    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        get("/movie/" + movieId + "?language=es-MX").then((data) => {
            setMovie(data);
            setGeneros(data.genres)
            console.log(data);
            
        });
    }, [movieId]);

    useEffect(() => {
        get("/movie/"+movieId+"/videos?language=es-MX").then((data) => {
            setVideos(data.results);
            console.log(data);
        });
    }, []);
    
    const imageUrl = getMovieImg(movie.poster_path, 500);

    return(
        <div>
            <MenuArriba/>
            <div className="detailsContainer">
                <img className="col movieImage" src={imageUrl} alt={movie.title}/>
                
                <div className="col movieDetails">
                    <h2 className="title">
                        {movie.title}
                    </h2>
                    <p className="original_title">{movie.original_title}</p>
                    <p>Lanzamiento: {movie.release_date}</p>
                    <p>Presupuesto: ${movie.budget}</p>
                    <p>Ganancia: ${movie.revenue}</p>
                    <p>Pais de Origen: {movie.origin_country}</p>

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
            <ul className="listavideos">
                {videos.map((video)=>(
                    <iframe key={video.id} className="video" width="560" height="315" src={"https://www.youtube.com/embed/"+video.key}></iframe>
                ))}
            </ul>
            <Footer/>
        </div>
    );
}