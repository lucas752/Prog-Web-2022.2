export function Button({name, type, func, style}){
    return(
        <div>
            <button className={style} onClick={func} type={type}>{name}</button>
        </div>
    )
}