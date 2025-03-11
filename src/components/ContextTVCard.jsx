import { useEffect } from "react"
import { useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"

export function ContextTVCard() {
    const [series, Setseries] = useState([]);

    useEffect(() => {
        get("/discover/person").then((data) => {
            Setseries(data.results);
            console.log(data);
            

        });
    }, []);


}