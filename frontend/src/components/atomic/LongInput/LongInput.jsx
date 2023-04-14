export function LongInput({type, place, func}){
    return(
        <div>
            <textarea  className="resize-none rounded-[12px] p-[5px] text-[#000] w-[19rem]" cols="30" rows="3" type={type} placeholder={place} onChange={func}/>
        </div>
    )
}