import './App.css';
import {Header, Hero, Footer, 
  FunctionalComponent, 
  ClassComponent, 
  FuncKomponenta, 
  KlasaKomponenta,
  Comment, 
  MultiplePropsComponent,
  MultiplePropsClassComponent} from './Components';

  const comment = {
    date: new Date(),
    text: "I love learning React",
    author:{
      name: "Dario Varga",
      avatarURL: "https://miro.medium.com/max/1000/0*5bjkLBf1VvAiMwhp"
    }
  }

function App() {
  return (
    <div>
      {/*<FunctionalComponent name="Jelena"/>
      <ClassComponent name="Dario"/>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
      <MultiplePropsComponent
      
      />

      <MultiplePropsClassComponent
      name="Dragana"
      age="63" />

      {/*<FuncKomponenta name1="Dario" name2="Jelena"/>
      <KlasaKomponenta name3="Jelena" name4="Dario"/> */}
    </div>
  );
}

export default App;
