import { MenuArriba } from "../components/MenuArriba"
import { Footer } from "../components/Footer"
import "../pages/Otros.css"

export function Otros(){
    return(
        <div>
            <MenuArriba/>
            <div className="texto">
                <h1>Información del proyecto:</h1>
                <p>Este es mi primer proyecto utilizando el framework de recat, por lo cual quise realizar algo sencillo como una página de películas. La verdad es que me gusta mucho trabajar con react, lo he encontrado muy útil e intuitivo de utilizar. No pude agregar todas las funciones que me hubiera gustado debido a falta de tiempo y querer comenzar con otros proyectos. En cuanto a las películas, toda la información es conseguida utilizando la API de themoviedb.org, la documentación de la api está en su página web.</p>
                <h1>Acerca de mi:</h1>
                <p>Mi nombre es Anthony Jeria y soy programador egresado del instituto Duoc Uc con el título de Analista Programador Computacional y actualmente me encuentro en la búsqueda de empleo. por mientras he decidido comenzar pequeños proyectos como este para ir mejorando mis habilidades y conocimientos además de que sirva como demostración de mis capacidades</p>
                <h2>Si desea comunicarse conmigo, aqui abajo dejo mis contactos:</h2>
                <p>Email:       anth.jeria@gmail.com</p>
                <p>Numero:      +56983348107</p>
                <p>Linkedin:    <a href="https://www.linkedin.com/in/anthony-jeria-letelier-5409a7251/" target='_blank'>https://www.linkedin.com/in/anthony-jeria-letelier-5409a7251/</a></p>
                <p>Github: <a href="https://github.com/AnthonyJeria" target='_blank'>https://github.com/AnthonyJeria</a></p>
                <p>Github del proyecto: <a href="https://github.com/AnthonyJeria/webPeliculas" target='_blank'>https://github.com/AnthonyJeria/webPeliculas</a></p>
            </div>
            <Footer/>
        </div>
    )
}