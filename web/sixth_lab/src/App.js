
import './App.css';
import Nav from './components/nav/nav'
import './components/nav/nav.css'
import Footer from './components/footer/footer'
import './components/footer/footer.css'
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
