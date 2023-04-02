export function Input({type, place, func}){
    return(
        <div>
            <input className="rounded-[12px] p-[5px] text-[#000]" type={type} placeholder={place} onChange={func} />
        </div>
    )
}