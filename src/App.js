import './App.css';
import Navbar from './components/sections/Navbar';
import Aboutme from './components/sections/Aboutme';
import Presentation from './components/sections/Presentation';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Aboutme/>
      <Footer/>
    </div>
  );
}

export default App;
