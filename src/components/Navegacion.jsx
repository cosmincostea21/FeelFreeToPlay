//Barra de navegación                 
import { Link } from 'react-router-dom';
import "../estilos/navegacion.css"
import React from 'react'

function Navegacion() {
    return (


        <div className='contenedor-Nav'>

            <section className='nav'>
                <p><a className='a-img' href="/FreeToPlay"><img src="/FreeLogo.png" alt="" href /></a></p>
                <p className='p-navegacion'><Link to="/">Inicio</Link></p>
                <p className='p-navegacion'><Link to="/FreeToPlay">Free to Play</Link></p>
                <p>
                    <input type="text" pattern='Buscar' placeholder='Buscar Juegos' />
                </p>
            </section>
        </div>
    )
}

export default Navegacion;