import "./css/footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="rodape">
      <h3 className="rodape__texto">Redes sociais</h3>
      <ul className="list__logo">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <ul className="list__descricao">
        <li className="doisdois">
          <a className="ancora" href="#">
            Quem somos
          </a>
        </li>
        <li className="doisdois">
          <a className="ancora" href="#">
            Serviços Domésticos
          </a>
        </li>
        <li className="doisdois">
          <a className="ancora" href="#">
            Trabalhe Conosco{" "}
          </a>
        </li>
      </ul>
      <p class="copyright">
          &copy; Desenvolvimento por Romenson Cleiton - 2023
        </p>
    </footer>
  );
}

export default Footer;
