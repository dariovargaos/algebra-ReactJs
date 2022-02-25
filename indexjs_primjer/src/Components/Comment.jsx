export default function Comment(props){
    return (
        <div class="Comment">
            <img src = {props.author.avatarURL} alt={props.author.name} />
            
            <div class="Author">
                {props.author.name}
            </div>

            <div class="text">
                {props.text}
            </div>

            <div class="date">
                {props.date}
            </div>
        </div>
    );
}