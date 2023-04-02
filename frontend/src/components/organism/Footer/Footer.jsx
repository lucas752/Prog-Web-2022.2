import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"

export function Footer(){
    return(
        <div>
            <div className="bg-[#1C3C78]  w-screen flex flex-row justify-end">
                <Logo img={logoWhite}/>
            </div>
            <div>

            </div>
        </div>
    )
}