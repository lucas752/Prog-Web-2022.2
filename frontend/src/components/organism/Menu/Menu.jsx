import { Button } from "../../atomic/Button/Button";
import { Link } from "react-router-dom";

export function Menu({options}) {
    return(
        <div className="bg-[#EC2026] flex flex-row pl-[1.9rem] pr-8 items-center justify-between">
            <div>
                {options.map ((option) => <Link to={option.link} className="text-[#FFF] mr-2 font-bold align-middle hover:text-[#d9d9d9]">{option.text}</Link>)}
            </div>
            <div>
                <Button name="SAIR" style="text-[#1c3c78] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#FFF] duration-500 hover:bg-[#ec2026] hover:text-[#fff] hover:shadow-inner mt-1.5 mb-1.5"></Button>
            </div>
        </div>
    )
}