import './App.css';
import Reggi from '../images/icons/reggi27.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Reggi} className="App-logo" alt="logo" />
        <p>
        This is now my App Muahahaha.
        </p>
        <a
          className="App-link"
          href="https://github.com/Cheez0id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Github Knave!!
        </a>
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      </header>
    </div>
  );
}

export default App;
