import "./css/head.css";
import piscinaLogo from "../img/piscinaLogo.png";
function Head() {
  return (
    <header className="cabeca">
      <div className="segundo">
        <ul className="comeco">
          <li className="comecoum">
            <h1 className="titulo">
             TRADIÇÃO, CONFIANÇA E <br /> COMPETÊNCIA NA <br /> CONSTRUÇÃO
              CIVIL   
            </h1>
            <a className="conhecer" href="#">Conhecer agora!</a>
            <p></p>
          </li>
          <li className="comecoum">
            <img className="comecoimg" src={piscinaLogo} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Head;
