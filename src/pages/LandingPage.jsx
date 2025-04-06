import {ContextMovieCard} from "../components/ContextMovieCard"
import { Carrusel } from "../components/Carrusel"
import { MenuArriba } from "../components/MenuArriba"
import { Footer } from "../components/Footer"

export function LandingPage(){
    return(
        <div>
            <MenuArriba/>
            <Carrusel/>
            <ContextMovieCard/>
            <Footer/>
        </div>
    )
}