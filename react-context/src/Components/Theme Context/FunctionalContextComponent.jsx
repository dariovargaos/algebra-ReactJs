import React, {useContext} from "react";
import {ThemeContext} from './Theme';

export default function FunctionalContextComponent(){
    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#333" : "#CCC",
        padding: "2rem",
        margin: "2rem"
    }

    return(
        <div style={themeStyles}>Function Component Theme</div>
    );
}