import './App.css';
import Persona from './Person';
import { sum } from './Sum';
import { num1, num2 } from './Sum';

function App() {
  return (
    <div>
      <p>Imam {Persona.age} godina.</p>
      <p>Ime mi je {Persona.name}</p>
      <p>Želim biti {Persona.job}</p>
      <p>Suma iz sum.js je: {sum(10,5)}</p>
      <p>Suma konstanti iz sum.js je {sum(num1,num2)}</p>
    </div>
  );
}

export default App;
