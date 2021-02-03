import './App.css';
import Landing from './components/Landing/Landing'
import ReactGA from 'react-ga';
function initializeReactGA() {
  ReactGA.initialize('G-T4V19VQYFE');
  ReactGA.pageview('/index');
}
function App() {
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
