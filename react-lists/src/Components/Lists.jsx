export default function Lists(){

    const fruits = ["apple", "banana", "orange"];
    const list = fruits.map(fruit => <li>{fruit}</li>)

    const numbers = [1, 2, 4, 6, 8, 10, 20, 30, 893213890];
    const numbersList = numbers.map(number => <li>{number}</li>)

    return(
        <div>
            <ol>{list}</ol>
            <ul>{numbersList}</ul>
        </div>
    );
}