import '../components/MenuArriba.css'
import logo from '../img/logo.png'

export function MenuArriba(){
    return(
      <header>
        <nav className='headerMenu'>
          <nav className='nav-container'>
            <a className='logo' href="/"><h1><img src={logo} alt="logo"/>Movie Play</h1></a>

            <div className='hamburger'>
              <span className='lines'></span>
              <span className='lines'></span>
              <span className='lines'></span>
            </div>

            <ul id='nav-links'>
              <li ><input className='buscador' type="search" placeholder='Buscar Pelicula'/></li>
              <li className='elemento'><a href="/" className='links'>Inicio</a></li>
              <li className='elemento'><a href="#" className='links'>Películas</a></li>
              <li className='elemento'><a href="#" className='links'>Actores</a></li>
              <li className='elemento'><a href="#" className='links'>Otros</a></li>
            </ul>
          </nav>
        </nav>

        
        <nav className='secondMenu'>
          <a className='item' href="#">Inicio</a>
          <a className='item' href="#">Bibloteca</a>
          <div className='item'>
            Cartelera
            <div className='dropdown'>
              <div>
                <a href="#">Películas</a>
                <a href="#">Series</a>
                <a href="#">Actores</a>
              </div>
            </div>
          </div>
          <a className='item' href="#">Otros</a>
          <div className='underline'></div>
        </nav>

      </header>
    );
}