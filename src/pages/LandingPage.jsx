import {ContextMovieCard} from "../components/ContextMovieCard"
import { MenuArriba } from "../components/MenuArriba"
import { Footer } from "../components/Footer"

export function LandingPage(){
    return(
        <div>
            <MenuArriba/>
            <ContextMovieCard/>
            <Footer/>
        </div>
    )
}