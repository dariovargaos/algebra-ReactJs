import React, { useState } from "react";
import FunctionalContextComponent from './FunctionalContextComponent';
import ClassContextComponent from "./ClassContextComponent";
import Button from "react-bootstrap/Button";

export const ThemeContext = React.createContext();

export default function Theme(){

    //Stateful variable
    const [darkTheme, setDarkTheme] = useState(true); //toggle for our theme

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <Button variant="success" onClick={toggleTheme}>Change theme</Button>
            <FunctionalContextComponent />
            <ClassContextComponent />

        </ThemeContext.Provider>
    );
}