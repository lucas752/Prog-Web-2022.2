import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"

export function Footer(){
    return(
        <div>
            <div className="bg-[#1C3C78]  flex flex-row justify-end ">
                <Logo img={logoWhite} style="mx-[32px] my-[12px]"/>
            </div>
            <div className="bg-[#EC2026] w-screen h-[10px]">
               
            </div>
        </div>
    )
}