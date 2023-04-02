import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"

export function Header(){
    return(
        <div className="bg-[#1C3C78] shadow-xl">
            <div className="flex flex-row justify-between w-screen" >
                <p className="text-[#fff] text-[16px] underline underline-offset-8 decoration-red-700 mx-[32px] mt-[24px]">SISTEMA DE EDITAIS</p>
                <Logo img={logoWhite} style="mx-[32px]"/>
            </div>
        </div>
    )
}