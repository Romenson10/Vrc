import "./App.css";
import Footer from "./componets/footer";
import Head from "./componets/head";
import Main from "./componets/main";
import NavBar from "./componets/navBar";

function App() {
  return (
    <section className="principal">
      <nav>
        <NavBar />
      </nav>
      <header>
        <Head />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
