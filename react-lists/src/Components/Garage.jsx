function Car(props){
    return <li>Hello, my brand is: {props.brand}</li>
}

export default function Garage(){

    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'},
        {id: 4, brand: 'Tesla'},
        {id: 5, brand: 'Zastava'}
    ];

    return(
        <div>
            <h1>Lets list all the cars in our garage</h1>
            <ul>
                {cars.map(car => <Car key={car.id} brand={car.brand}/>)}
            </ul>
        </div>
    );
}