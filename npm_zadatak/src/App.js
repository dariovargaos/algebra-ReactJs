import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

var randomstring = require ("random-string-gen");

console.log(randomstring());

var moment = require ("moment");

console.log(moment().format());

/*var giveMeAJoke = require ("give-me-a-joke");

giveMeAJoke.getRandomDadJoke (function(joke){
  console.log(joke);
}); */

export default App;
