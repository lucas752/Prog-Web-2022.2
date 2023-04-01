import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";
import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"
import { Link } from "react-router-dom";

export function LoginArea(){
    return(
        <div className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-center bg-[#1C3C78] max-w-max  p-[40px]  rounded-[12px] text-[#fff] shadow-2xl shadow-indigo-500/40">

                
                <div>
                    <Logo img={logoWhite} />
                </div>

                <div className="mt-[50px] mb-[20px]">
                    <p className="my-[4px]">Email</p>
                    <Input type="text" place="Digite seu email:" />
                </div>
                <div className="mb-[50px]">
                    <p className="my-[4px]">Senha</p>
                    <Input type="password" place="Digite seu senha:" />
                </div>
                
                <div className="">
                    <Button name="Login" style="text-[#1C3C78] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#fff] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner"/>
                </div>

                <div>
                    <p>Não possui conta? <Link to="/singup"> Cadastrar</Link> </p>
                </div>

                </div>
        </div>
    )
}