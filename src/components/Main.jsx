import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/main-inicio.css" /*Importancia en el orden de importación no puedo importar antes desde mi css ya que el estilo de bootstrap pisa a mi estilo*/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TarjetasInicio() {
  return (
    <div className='contenedor-tarjeta'>
      <Card className='tarjetas-inicio'>
        <Card.Header as="h5">Feel free to play</Card.Header>
        <Card.Body>
          <Card.Title>Nuestro objetivo</Card.Title>
          <Card.Text>
            El objetivo de la página web es mostrar y facilitar el acceso a todos los juegos gratis que se encuentren en el mercado. De este modo, los jugadores podremos disfrutar de los títulos
            free to play.
            <br />
            <br />
          </Card.Text>
          <Button variant="primary" className="boton-personalizado" href='https://free-games-beta.vercel.app/FreeToPlay'>Free to Play</Button>
        </Card.Body>
        <p className='p-img'><img src="./Objetivo.jpg" alt="diversion" /></p>
      </Card>

      <Card className='tarjetas-inicio'>
        <Card.Header as="h5">Equipo</Card.Header>
        <Card.Body>
          <Card.Title>Contactanos</Card.Title>
          <Card.Text>
            Desarrollado por el estudiante Marius Cosmnin Costea del IES Juan Bosco durante las prácticas realizadas en empresa. Este proyecto se ha utilizado para aprender React, implementar Bootstrap
            y aprender a conectarnos a una api. Feel free to play utiliza la API de <Link to="/FreeToPlay">FreeToGame</Link>
          </Card.Text>
          <Button variant="primary" className="boton-personalizado" href='https://www.iesjuanbosco.es/' target='_blank'>Conocenos</Button>
        </Card.Body>
        <p className='p-img'><img src="./Bosco.jpg" alt="centro" /></p>
      </Card>
      <Card className='tarjetas-inicio'>
        <Card.Header as="h5">Tecnologías</Card.Header>
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text >
            React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
            <br />
            <br />
          </Card.Text>
          <Button variant="primary" className="boton-personalizado" href='https://es.react.dev/' target='_blank'>React</Button>
        </Card.Body>
        <p className='png-react-p'><img src="./React.svg.png" alt="centro" className='png-react' /></p>
      </Card>
    </div>
  );
}

export default TarjetasInicio;