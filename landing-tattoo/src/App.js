import './App.css';
import Header  from './components/Header.jsx';
import Hero  from './components/Hero.jsx';
import MovableElement  from './components/MovableElement.jsx';

function App() {
  return (
    <div className="App">
      <Header />        
      <Hero />
      <MovableElement />
    </div>
  );
}

export default App;
