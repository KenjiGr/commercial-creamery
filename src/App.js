import './App.css';
import NavBar from './components/navBar-component';
import Home from './pages/home';
import Footer from './components/footer-component';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
