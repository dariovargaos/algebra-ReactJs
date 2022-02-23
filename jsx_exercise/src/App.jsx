export default function App() {

  const name = "John";

  const user = {

    firstName: "Dario",
    lastName: "Varga",
    job: "Developer",
    age: 28,
    employed: true

  }

  const formatedUser = user => user.firstName + '' + user.lastName;

  let friendOrStranger;
  if(user.lastName == "Varga"){
    friendOrStranger = "Hello, friend.";
  } else{
    friendOrStranger = "Hello, stranger.";
  }

  const volim = "volim";
  const algebra = "Algebru";

  const num = 1;

  return (
    <div>
      <h1>Hello {name}. Welcome to React Module.</h1>
      <p>The details of the user are as follows: <br/>
        Name: {user.firstName} <br/>
        Lastname: {user.lastName} <br/>
        Age: {user.age} <br/>
      </p>

      <p>
        Hello, the formated user is: {formatedUser(user)}.
      </p>

      <h3>
        {friendOrStranger}
      </h3>

      <h2>Popis stvari koje volimo :')</h2>

      <p>Ja {volim + ' ' + algebra} </p>
      
      {/*react conditioners */}
      {num === 2 ? <p>The number is 1</p> : <p>The number is not 1.</p>}



    </div>
  );

}