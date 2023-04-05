export function NoticeCard({term, domain, requirements, title, description, criteria}) {
    return(
        <div className="col-span-12 tablet:col-span-12  desktop:col-span-12  bg-[#F0F0F0] rounded-xl min-w-[24rem] w-[24rem] min-h-[27rem] px-4 py-6 shadow-xl mr-4 mb-2.5">
            <h2 className="font-medium text-2xl flex justify-center mb-2">{title}</h2>
            <p className="font-medium text-base mb-2">{description}.</p>
            <div className="text-base mb-2">
                <span className="font-semibold">PRAZO: </span>
                <span>{term}</span>
            </div>
            <div className="text-base mb-2">
                <span className="font-semibold">TIPO: </span>
                <span>{domain}</span>
            </div>
            <div className="text-base mb-2">
                <span className="font-semibold">CRITÉRIOS DE SELEÇÃO: </span>
                <span>{requirements}</span>
            </div>
            <div className="text-base mb-2">
                <span className="font-semibold">REQUISITOS: </span>
                <span>{criteria}</span>
            </div>
            <span></span>
        </div>
    )
}