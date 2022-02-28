import './App.css';
import MyComponent from './Components/MyComponents';
import StateExercise from './Components/StateExercise';
import Car from './Components/Car';
import SendsState from './Components/Counter';
import ReceivesState from './Components/Counter';



import Yoda from './Components/Yoda';
import Homer from './Components/Simpsons';

function App() {
  return (
    <div>
      <MyComponent />
      {<hr></hr>}

      <StateExercise />
      {<hr></hr>}

      <Car />
      {<hr></hr>}

      <SendsState />
      {<hr></hr>}

      <Yoda />
      {<hr></hr>}

      <Homer />
    </div>
  );
}

export default App;
