function Avatar(props){
    return(
        <img className="Avatar" src = {props.author.avatarURL} alt={props.author.name} />
    );
}

function formatDate(date){
    return date.toLocaleDateString();
}

export default function Comment(props){
    return (
        <div className="Comment">
           
            <Avatar author={props.author}/>

            <div className="Author">
                {props.author.name}
            </div>

            <div className="text">
                {props.text}
            </div>

            <div className="date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}