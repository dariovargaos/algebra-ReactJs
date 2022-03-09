import React, {useState, useEffect} from "react";

export default function NasaApi(){

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    if(!data){
        return <h1>Loading data...</h1>;
    }

    const { title, url, explanation} = data;

    return(
        <div>
            <h1>Nasa Image of the day</h1>
            <h3>{title}</h3>
            <img src={url} alt={title} width={500} />
            <p>{explanation}</p>
        </div>
    );
}