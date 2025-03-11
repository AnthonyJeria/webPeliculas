import logo from '../img/logo.png'
import '../components/Footer.css'
import linkedin from '../img/linkedin.png'
import facebook from '../img/facebook.png'
import youtube from '../img/youtube.png'
import twitter from '../img/twitter.png'

export function Footer(){

    return(
        <footer>
            <h5><img className='logoF' src={logo} alt="logo" />MoviePlay</h5>
            <div>
                <p className='aclaracion'>Ningún vídeo se encuentra alojado en esta web.</p>
                <p className='aclaracion'>Toda la información es obtenida a través de la API de themoviedb.org.</p>
            </div>
            
            <div className='socials'>
                <a className='fa-brands' target='_blank' href="https://www.linkedin.com/in/anthony-jeria-letelier-5409a7251/"><img src={linkedin} alt="linkedin" /></a>
                <a className='fa-brands' target='_blank' href="https://www.facebook.com"><img src={facebook} alt="facebook" /></a>
                <a className='fa-brands' target='_blank' href="https://www.youtube.com"><img src={youtube} alt="youtube" /></a>
                <a className='fa-brands' target='_blank' href="https://x.com"><img src={twitter} alt="twitter" /></a>
            </div>
            {/*
            <div className='links'>
                <ul>
                    <li>
                        <h2>Services</h2>
                        <h2>perro</h2>
                    </li>

                    <li>
                        <a href="#">Staking</a>
                    </li>
                </ul>
            </div>
            */}
        </footer>
    )
}