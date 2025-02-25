import "../estilos/FreeToPlayMain.css";
import React, { useState, useEffect } from 'react';

function FreeToPlayMain() {

  //Decalaracion de constantes
  const [videojuegos, setVideojuegos] = useState([]); //UseState estado inicial es un array vacío 
  const [categoria, setCategoria] = useState('');
  const [pagina, setPagina] = useState(1);
  const [error, setError] = useState(null);

  // Constante fija que mostrará 15 juegos
  const juegosPorPagina = 15;



  // Cuando la categoria cambie, restablecer la página a 1
  useEffect(() => {  // Hook de react -> gestiona dependencias
    setPagina(1);
  }, [categoria]);

  useEffect(() => {

    // fetch a la API
    async function fetchData() {
      const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
      const url = categoria ? `${baseUrl}?category=${categoria}` : baseUrl;


    // Identificación (llave de rapid API)
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'a4ae511986msh858b21edc89db55p14f1a0jsn4ff34ea86b36',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      
      try {
        // petición HTTP mediante la url y las credenciales
        const response = await fetch(url, options); 

        // comprobación de la respuesta recibida del servidor
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // transformación de la respuesta a json y almacenada en la constante data
        const data = await response.json();

  
        // si data no tiene tamñamo no se encuentran juegos
        if (data.length === 0) {
          setError("No se encontraron juegos.");
        } else {

          // videojuegos pasa a ser un Array de datos obtenidos de la Api
          setVideojuegos(data);
        }
      } catch (error) {
        console.error("Error al obtener los videojuegos:", error);
        setError("Hubo un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.");
      }
    }


    fetchData();


  }, [categoria]);
  
 // useEffect(() => {fetchData();} ,[categoria]);

  const totalPaginas = Math.ceil(videojuegos.length / juegosPorPagina);


// el método slice devuelve un array videojuegos.slice(inicio, final) (inico incluido, final excluido)
  const juegosPaginados = videojuegos.slice(
    (pagina - 1) * juegosPorPagina,
    pagina * juegosPorPagina
  );

  const anteriorPag = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
      window.scrollTo(0, 0); // Desplaza hacia el principio de la página
    }
  };

  const siguientePag = () => {
    if (pagina < totalPaginas) {
      setPagina(pagina + 1);
      window.scrollTo(0, 0); // Desplaza hacia el principio de la página
    }
  };

  return (
    <div className='ftp-main'>
      {/* Mostrar mensaje de error si ocurre un problema */}
      {error && <div className="ftp-error">{error}</div>}

      {/* Filtro de categorías */}
      <aside className='ftp-aside'>
        <h3 className='ftp-categorias-titulo'>Filtrar por categoría</h3>
        <div className="ftp-categorias">
          <button onClick={() => setCategoria('')} className="ftp-categoria-btn">Todas</button>
          <button onClick={() => setCategoria('shooter')} className="ftp-categoria-btn">Shooter</button>
          <button onClick={() => setCategoria('mmo')} className="ftp-categoria-btn">MMO</button>
          <button onClick={() => setCategoria('strategy')} className="ftp-categoria-btn">Estrategia</button>
          <button onClick={() => setCategoria('racing')} className="ftp-categoria-btn">Carreras</button>
          <button onClick={() => setCategoria('sports')} className="ftp-categoria-btn">Deportes</button>
          <button onClick={() => setCategoria('sandbox')} className="ftp-categoria-btn">Sandbox</button>
          <button onClick={() => setCategoria('open-world')} className="ftp-categoria-btn">Mundo Abierto</button>
          <button onClick={() => setCategoria('survival')} className="ftp-categoria-btn">Supervivencia</button>
          <button onClick={() => setCategoria('battle-royale')} className="ftp-categoria-btn">Battle Royale</button>
          <button onClick={() => setCategoria('card')} className="ftp-categoria-btn">Cartas</button>
          <button onClick={() => setCategoria('fighting')} className="ftp-categoria-btn">Peleas</button>
          <button onClick={() => setCategoria('social')} className="ftp-categoria-btn">Social</button>
        </div>
      </aside>

      {/* Tarjetas de videojuegos */}
      <main className='ftp-main-tarjetas'>
        {juegosPaginados.length > 0 ? ( // Si el tamaño del array que contiene elnúmero de juegos paginados es mayor que 0 dibuja el main
          juegosPaginados.map((videojuego) => (
            <article key={videojuego.id} className='ftp-card'>
              {/* Enlace para la imagen */}
              <a 
                href={videojuego.game_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={videojuego.thumbnail} alt={videojuego.title} className='ftp-card-img' />
              </a>
              {/* Enlace para el título */}
              <h2 className='ftp-card-title'>
                <a 
                  href={videojuego.game_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ftp-card-link"
                >
                  {videojuego.title}
                </a>
              </h2>
              <span className='ftp-card-genre'>{videojuego.genre}</span>
              <p className='ftp-card-description'>{videojuego.short_description}</p>
            </article>
          ))
        ) : (
          <p className='ftp-cargando'>No presentamos ningún título, pronto tendremos más</p>//Fin if
        )}
      </main>
      
      {/* Paginación */}
      <div className="ftp-paginacion">
        <button 
          onClick={anteriorPag}
          className="ftp-paginacion-btn"
          disabled={pagina === 1} // Si la página es 1 entonces el boton se desactiva
        >
          Anterior
        </button>
        <span className="ftp-paginacion-info">{`Página ${pagina} de ${totalPaginas}`}</span>
        <button 
          onClick={siguientePag}
          className="ftp-paginacion-btn"
          disabled={pagina === totalPaginas}// Si la página es igual al total de páginas entonces el boton se desactiva
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default FreeToPlayMain;
