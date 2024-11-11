import "./avatar.scss";

export function Avatar(props){
    return(
        <img className="avatar" src={props.src} />
    )
}