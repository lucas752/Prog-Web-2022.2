import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";
import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"
import { Link } from "react-router-dom";
import { useState } from "react";

export function LoginArea(){

    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("")
    const [emailValidad, setEmailValidad] = useState()
    const [passwordValidad, setPassawordValidad] = useState()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        
    }

    const handlePasswordChange = (e) => {
        setPassaword(e.target.value)
        
    }

    function formTest(){ // falta instanciar, mas está funcionando 
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailValidad(regex.test(email))
        if(password.length < 6){
            setPassawordValidad(false);
        }else{
            setPassawordValidad(true);
        }
    }

    

    return(
        <div className="flex justify-center items-center my-[50px] ">
                <div className="flex flex-col items-center justify-center bg-[#1C3C78] max-w-max p-[40px]  rounded-[12px] text-[#fff] shadow-2xl shadow-indigo-500/40">

                    <div className="max-w-max">
                    <Logo img={logoWhite} />
                    </div>

                    <div>
                        <div className="mt-[50px] mb-[20px]">
                            <p className="my-[4px] text-sm">Email</p>
                            <Input type="email" place="Digite seu email:" func={handleEmailChange} />
                            {!emailValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione um email válido</p>} 
                    
                        </div>
                        <div className="mb-[50px]">
                            <p className="my-[4px] text-sm ">Senha</p>
                            <Input type="password" place="Digite seu senha:" func={handlePasswordChange} />
                            {!passwordValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione uma senha com mais de 6 caracteres</p>}
                    
                        </div>
                    </div>

                    <div className="">
                        <Button name="Login" func={formTest} style="text-[#1C3C78] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#fff] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner"/>
                    </div>

                    <div className="mt-[20px]">
                        <p className="text-sm ">Não possui conta? <Link to="/singup" className="text-[#EC2026]"> Cadastrar</Link> </p>
                    </div>

                </div>
        </div>
    )
}