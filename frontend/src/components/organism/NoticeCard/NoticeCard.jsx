import { Button } from "../../atomic/Button/Button";

export function NoticeCard({term, domain, requirements, title, description, criteria, showBut}) {
    const res = showBut
    return(
        <div className="col-span-12 tablet:col-span-6  desktop:col-span-4  bg-[#F0F0F0] rounded-xl  max-w-max max-h-max px-4 py-6 shadow-xl  mx-[15px] tablet:mx-[20px] desktop:mx-[30px]">
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
            {res && (
                <div className="flex flex-row justify-around my-[20px]">
                    <Button style="bg-[#1C3C78] text-[#fff] w-[100px] rounded-[12px] p-[2px] font-bold duration-500 hover:bg-[#fff] hover:text-[#1C3C78] " name="Editar"/>
                    <Button style="bg-[#EC2026] text-[#fff] w-[100px] rounded-[12px] p-[2px] font-bold duration-500 hover:bg-[#fff] hover:text-[#EC2026] " name="Excluir"/>
                </div>
            )}
            <span></span>
        </div>
    )
}