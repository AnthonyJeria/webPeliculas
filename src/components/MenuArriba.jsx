import '../components/MenuArriba.css'
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export function MenuArriba(){
  const [valorInput, setValorInput] = useState('');
  let movieName = ""
  const navigate = useNavigate();
  
  if (valorInput < 2) {
    movieName = "1";
  }
  else{
    movieName = valorInput;
  }

  const manejarCambio = (e) => {
    setValorInput(e.target.value);
  };

  const buscar = () =>{
    navigate("/bibloteca/"+movieName);
  }

    return(
      <header>
        <nav className='headerMenu'>
          <nav className='nav-container'>
            <a className='logo' href="/"><h1><img src={logo} alt="logo"/>Movie Play</h1></a>

            <ul id='nav-links'>
              <li >

                <form onSubmit={buscar}>
                  <input className='buscador' value={valorInput} onChange={manejarCambio} type="search" placeholder='Buscar Pelicula'/>
                  <button>buscar</button>
                </form>
                
              </li>
              <li className='elemento'><a href="/" className='links'>Inicio</a></li>
              <li className='elemento'><a href="/Bibloteca/1" className='links'>Bibloteca</a></li>
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