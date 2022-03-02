import React, { useState } from "react"; // Import useState Hook from React

export default function Hooks(){

    // Declared a new state variable called "count"
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(28);
    const [fruit, setFruit] = useState('apple');

    /* Calling the useState declares a "state variable". We can pass to the useState an argument ->
    the initial value of the state.
    */

    /*
    * Rules:
    * 1. Do not call hooks inside loops, conditions, nested functions. Only call them at top level.
    * 2. Only call hooks from React function components. Dont  call them from regular JS functions
    */

    return(
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <hr />

            <p>User Dario is {age} years old.</p>
            <button onClick={() => setAge(age + 1)}>Click me</button>
            <hr />

            <p>Dario's favourite fruit is {fruit}.</p>
            <button onClick={() => setFruit('mango')}>Set to mango</button>

        </div>
        
    );
}