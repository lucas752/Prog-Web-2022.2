export function Input({type, place, func}){
    return(
        <div>
            <input type={type} placeholder={place} onChange={func} />
        </div>
    )
}