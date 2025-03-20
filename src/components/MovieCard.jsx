import "../components/MovieCard.css"
import { Link } from "react-router-dom";
import placeholder from "../img/placeholder.png"

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <li className="movieCard">
            <Link className="nombrePeli" to={"/movies/"+movie.id}>
                <img width={230} height={345} src={imageUrl} alt={movie.title} onError={(e) => e.target.src = placeholder} className="movieImage"/>
                <div>
                    <p className="nombreP">{movie.title}</p>
                </div>
            </Link>
        </li>
    )
}