import './App.css';
import NavBar from './components/navBar-component';
import Home from './pages/home';
import Footer from './components/footer-component';

function App() {
  return (
    <div className="App">
      <div className='main-cont'>
        <header>
          <NavBar />
        </header>
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
