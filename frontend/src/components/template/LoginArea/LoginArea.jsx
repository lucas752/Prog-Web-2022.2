import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";

export function LoginArea(){
    return(
        <div className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-center bg-[#1C3C78] max-w-max p-[40px] shadow-2xl rounded-[12px] text-[#fff]">

                
                <div>logo</div>

                <div className="mt-[50px] mb-[20px]">
                    <p>Email</p>
                    <Input type="text" place="Digite seu email:" />
                </div>
                <div className="mb-[50px]">
                    <p>Senha</p>
                    <Input type="password" place="Digite seu senha:" />
                </div>
                
                <div className="">
                    <Button name="Login" style="text-[#1C3C78] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#fff] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner"/>
                </div>

                <div>cadastro</div>

                </div>
        </div>
    )
}