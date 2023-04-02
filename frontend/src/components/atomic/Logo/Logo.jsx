export function Logo({img,alt,style}){
    return(
        <div>
            <img className={style} src={img} alt={alt} />
        </div>
    )
}