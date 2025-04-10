import '../components/MenuArriba.css'
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

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

  const buscar = (e) =>{
    e.preventDefault();
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
                  <button className='boton'>buscar</button>
                </form>
                
              </li>
              <li className='elemento'><Link className='links' to={"/"}>Inicio</Link></li>
              <li className='elemento'><Link className='links' to={"/Bibloteca/1"}>Bibloteca</Link></li>
              <li className='elemento'><Link className='links' to={"/Otros"}>Otros</Link></li>
            </ul>
          </nav>
        </nav>
        
        <nav className='secondMenu'>
        <Link className='item' to={"/"}>Inicio</Link>
          <div className='item'>
            <form onSubmit={buscar}>
                  <input className='buscador_pequeno' value={valorInput} onChange={manejarCambio} type="search" placeholder='Buscar Pelicula'/>
                  <button className='boton'>buscar</button>
            </form>
          </div>
          <Link className='item' to={"/Otros"}>Otros</Link>
          <div className='underline'></div>
        </nav>

      </header>
    );
}