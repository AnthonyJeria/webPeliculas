import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MovieDetails } from "../pages/MovieDetails"
import { Bibloteca } from "../pages/Bibloteca"
import { Otros } from "../pages/Otros"

export function MyRoutes(){
    return(<Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
            <Route path="/Bibloteca/:movieName" element={<Bibloteca/>}/>
            <Route path="/Otros/" element={<Otros/>}/>
            
        </Routes>
    </Router>)
}