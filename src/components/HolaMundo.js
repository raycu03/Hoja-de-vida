import React from "react";
import "../styles/Hola.css";
import 'bootstrap/dist/css/bootstrap.css';
import yo from "../img/yo.jpg"
import anime from "../img/anime.jpg"
import cc from "../img/c++.png"
import drupal from "../img/drupal.png"
import face from "../img/face.png"
import fondo1 from "../img/fondo1.jpg"
import html5 from "../img/html5.png"
import lol from "../img/lol.jpg"
import python from "../img/python.png"
import tw from "../img/tw.png"

class Hola extends React.Component {


  render() {
    return (
<div id="body">
    <div id="todo">
      <div id="yo">
        <div id="foto">
          <img id="f" alt="some value" src={yo}></img>
        </div>
        <div id="nombre">
          <div id="A"><p className="letras">Ray Narvaez</p></div>
          <div id="Y"><p className="letras">Tabares</p></div>
        </div>
      </div>
        <div id="soy">
          <div id="caja_soy">
          <p className="quien_soy">¿QUIEN SOY?</p>
          </div>
          <div className="caja_texto">
            <p className="datos">Soy un estudiante de ingenieria de sistemas nacido en colombia que en la actualidad estudia en la universidad tecnologica de bolivar </p>
          </div>
        </div>
        <div className="raya"></div>

        <div id="info">
     
          <div id="caja_info">
          <p className="quien_soy">INFORMACION</p>
          </div>
          <div className="caja_texto">   
            <p className="data">Numero: </p><p className="inft">300 8075188</p>
            <p className="data">Correo: </p><p className="inft">raynarvaez1998@gmail.com</p>
            <p className="data">Edad: </p><p className="inft">20</p>
            <p className="data">Ciudad: </p><p className="inft">Cartagena</p>
          </div>
        </div>
        <div className="raya"></div>
        <div id="contenido2">
          <div id="titulo_caja">
            <p className="titulo">CONOCIMIENTO</p>
          </div>
          <div id="caja_logos">
            <div className="img1">
              <a href="a" ><img className="logo"  alt="some value" src={python}></img></a>
            </div>
            <div className="img1">
              <a href="a" ><img className="logo" alt="some value"  src={cc}></img></a>
            </div>
            <div className="img1">
              <a href="a" ><img className="logo" alt="some value"  src={drupal}></img></a>
            </div>
            <div className="img1">
              <a href="a" ><img className="logo" alt="some value"  src={html5}></img></a>
            </div>
          </div>
        </div>
        <div className="raya"></div>
      <div id="contenido3">
            <div id="titulo_caja2">
            <p className="titulo">PASATIEMPOS</p>
          </div>
          <div id="caja_pasa">
            <div id="pas1">
              <a href="https://lan.leagueoflegends.com/es/" ><img className="lol" alt="some value"  src={lol}></img></a>
            </div>
            <div id="pas2">
              <a href="https://lan.leagueoflegends.com/es/" ><img className="lol" alt="some value"  src={anime}></img></a>
            </div>
            <div id="pas3">
              <a href="https://lan.leagueoflegends.com/es/" ><img className="lol" alt="some value"  src={fondo1}></img></a>
            </div>
          </div>
      </div>
            <div id="caja6">
      <div id="redes">
      <div id="red1">
      <a href="https://www.facebook.com/rayantonio.narvaez" ><img className="face1" alt="some value"  src={face}></img></a>
      </div>
      <div id="red2">
      <a href="https://twitter.com/ray_narvaez" ><img className="face1" alt="some value"  src={tw} ></img></a>
      </div>
      </div>
  	</div>
    </div>

  </div>
    );
  }
}
export default Hola;
