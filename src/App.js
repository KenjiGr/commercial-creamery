import './App.css';
import NavBar from './components/navBar-component';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <Home />
    </div>
  );
}

export default App;
