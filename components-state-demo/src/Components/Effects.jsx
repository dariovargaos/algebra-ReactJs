import React, {useState, useEffect} from "react";

export default function Effect(){
    const [count, setCount] = useState(0);

    // Will happen AFTER EVERY SINGLE RENDER
    useEffect(() => {
        document.title = `You have clicked ${count} times :)`;
    });

    return(
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}