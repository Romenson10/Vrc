import  "./css/NavBar.css";
import logovrc2 from "../img/logovrc2.png";

function NavBar() {
  return (
    <>
      <header className="primeiro">
        <ul className="list">
          <li>
            <img className="logopng" src={logovrc2} alt="" />
          </li>
          <li><a  className="item" href="#">Home</a></li>
          <li><a  className="item" href="#">Contato</a></li>
          <li ><a className="item" href="#">Orçamentos</a></li>
          <li><a className="buttonum" href="#">Contato</a></li>
          <li><a className="buttondois" href="#">Entrar</a></li>
        </ul>
      </header>
    </>
  );
}

export default NavBar;
