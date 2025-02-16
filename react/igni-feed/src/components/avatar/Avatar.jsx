import "./avatar.scss";

export function Avatar({ hasBorder = true, src }){
    return(
        <img className={hasBorder ? "avatarWithBorder" : "avatar"} src={src} />
    )
}
