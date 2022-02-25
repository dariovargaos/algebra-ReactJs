import './App.css';
import {Header, Hero, Footer, 
  FunctionalComponent, 
  ClassComponent, 
  FuncKomponenta, 
  KlasaKomponenta,
  Comment } from './Components';

function App() {
  return (
    <div>
      <FunctionalComponent name="Jelena"/>
      <ClassComponent name="Dario"/>
      <Comment/>

      <FuncKomponenta name1="Dario" name2="Jelena"/>
      <KlasaKomponenta name3="Jelena" name4="Dario"/>
    </div>
  );
}

export default App;
