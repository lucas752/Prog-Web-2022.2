import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";
import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"
import { Link } from "react-router-dom";
import { useState } from "react";

export function SingUpArea(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("")

    const [nameValidad, setNameValidad] = useState()
    const [emailValidad, setEmailValidad] = useState()
    const [passwordValidad, setPassawordValidad] = useState()

    const handleNameChange = (e) => {
        setName(e.target.value)
        
    }
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

        if(name.length > 15 || name != "1234567890"){
            setNameValidad(false);
        }else{
            setNameValidad(true);
        }
    }

    

    return(
        <div className="flex justify-center items-center  my-[20px] ">
                <div className="flex flex-col items-center justify-center bg-[#1C3C78] max-w-max p-[40px]  rounded-[12px] text-[#fff] shadow-2xl shadow-indigo-500/40">

                    <div className="max-w-max">
                    <Logo img={logoWhite} />
                    </div>

                    <div>
                        <div className="mt-[50px] mb-[20px]">
                            <p className="my-[4px] text-sm">Nome</p>
                            <Input type="email" place="Digite seu nome:" func={handleNameChange} />
                            {!nameValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione um nome válido</p>} 
                    
                        </div>

                        <div className="mt-[20px] mb-[20px]">
                            <p className="my-[4px] text-sm">Email</p>
                            <Input type="email" place="Digite seu email:" func={handleEmailChange} />
                            {!emailValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione um email válido</p>} 
                    
                        </div>
                        <div className="mt-[20px] mb-[20px]">
                            <p className="my-[4px] text-sm ">Senha</p>
                            <Input type="password" place="Digite seu senha:" func={handlePasswordChange} />
                            {!passwordValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione uma senha com mais de 6 caracteres</p>}
                    
                        </div>
                        
                        <div className="mt-[20px] mb-[20px]">
                            <p className="my-[4px] text-sm">Tipode de usuario</p>
                            <form className="text-[#000]">
                                <select name="tipoUsuario" required="required">
                                <option value="">Tipo de usuario</option>
                                <option value="usuarioGeral">Usuario geral</option>
                                    <option value="Coordenador">Coordenador</option>
                                </select>
                            </form>
                        </div>

                        <div className="mt-[20px] mb-[50px]">
                            <p className="my-[4px] text-sm">Tipo de coordenador</p>
                            <form className="text-[#000] ">
                                <select name="tipoCoordenador" required="required">
                                <option value="">Tipo de coordenador</option>
                                    <option value="coordenadorPesquisa">Coordenador de pesquisa</option>    
                                    <option value="coordenadorExtensao">Coordenador de extensão</option>
                                    <option value="CoordenadorInovacao">Coordenador de inovação</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="">
                        <Button name="Cadastrar" func={formTest} style="text-[#1C3C78] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#fff] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner"/>
                    </div>

                    <div className="mt-[20px]">
                        <p className="text-sm ">Já possui cadastro? <Link to="/" className="text-[#EC2026]"> Login</Link> </p>
                    </div>

                </div>
        </div>
    )
}