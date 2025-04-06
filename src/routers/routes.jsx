import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MovieDetails } from "../pages/movieDetails"
import { Bibloteca } from "../pages/Bibloteca"

export function MyRoutes(){
    return(<Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
            <Route path="/bibloteca/:movieName" element={<Bibloteca/>}/>
            
        </Routes>
    </Router>)
}