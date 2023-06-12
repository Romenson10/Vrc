import "./css/main.css";
import um from "../img/um.png";
import tinta from "../img/tinta.png";
import predio from "../img/predio.png";

function Main() {
  return (
    <main>
      <div>
        <h2 className="tituloterceiro">Nossos serviços</h2>
        <p>REALIZAMOS OBRAS RESIDENCIAIS, COMERCIAS E REFORMAS EM GERAL</p>
      </div>
      <div className="list">
        <ul className="coisas">
          <li className="caixa">
            <img className="um" src={um} alt="" />
            
            <h3> Construção de casas</h3>
            <p>
              Personalizamos o seu sonho exatamente como está no projeto. Conte
              conosco para concretizar a sua obra.
            </p>
          </li>
          <li className="caixa">
          <img className="um" src={tinta} alt="" />
            <h3> Reformas em Geral </h3>
            <p>
              Contamos com um time altamente qualificado para executar uma
              reforma na sua casa ou na sua empresa de forma rápida e segura.
            </p>
          </li>
          <li className="caixa">
            <img className="um" src={predio} alt="" />
            <h3> Construção de Prédios Comerciais</h3>
            <p>
              Queremos contribuir para o sucesso do seu negócio. Ajudamos você a
              entregar a melhor experiencia para seus clientes.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
