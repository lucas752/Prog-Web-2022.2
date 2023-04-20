import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";
import { Logo } from "../../atomic/Logo/Logo";
import logoWhite from "../../../assets/image 5 1.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export function SignUpArea(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("")
    const [cpf, setCpf] = useState("")
    const [permission, setPermission] = useState("USUARIO")
    const [coordinatorType, setCoordinatorType] = useState("")

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
    const handleCpfChange = (e) => {
        setCpf(e.target.value)
        
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

    const dataCoordinator = {
        name: name,
        cpf: cpf,
        email: email,
        password : password,
        permission: permission,
        coordinatorType: coordinatorType,
        isCoordinator: true
    }

    const dataUser = {
        name: name,
        cpf: cpf,
        email: email,
        password : password,
        permission: permission,
        isCoordinator: false
    }

    const save = async (ev) => {
        console.log(dataUser)
        try {
            permission == "COORDENADOR" ? await axios.post("http://localhost:8080/auth/register", dataCoordinator) : await axios.post("http://localhost:8080/auth/register", dataUser)
            alert("Conta criada com sucesso, realize o login")
            navigate("/")
        } catch (error) {
            alert(error)
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
                            <p className="my-[4px] text-sm">CPF</p>
                            <Input type="text" place="Digite seu cpf:" func={handleCpfChange} />
                            {!emailValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione um CPF válido</p>} 
                    
                        </div>

                        <div className="mt-[20px] mb-[20px]">
                            <p className="my-[4px] text-sm ">Senha</p>
                            <Input type="password" place="Digite seu senha:" func={handlePasswordChange} />
                            {!passwordValidad &&  <p className="text-[#EC2026] text-[10px] m-[5px]">Adicione uma senha com mais de 6 caracteres</p>}
                    
                        </div>
                        
                        <div className="mt-[20px] mb-[20px]">
                            <p className="my-[4px] text-sm">Tipo de usuário</p>
                            <form className="text-[#000]">
                                <select value={permission} className="rounded-[12px] p-[5px]" name="tipoUsuario" required="required" onChange={ev => setPermission(ev.target.value)}>
                                <option value="USUARIO">Usuario geral</option>
                                <option value="COORDENADOR">Coordenador</option>
                                </select>
                            </form>
                        </div>
                        
                        {permission == 'COORDENADOR' ? 
                            <div className="mt-[20px] mb-[50px]">
                                <p className="my-[4px] text-sm">Tipo de coordenador</p>
                                <form className="text-[#000] ">
                                    <select name="tipoCoordenador" required="required" className="rounded-[12px] p-[5px]" onChange={ev => setCoordinatorType(ev.target.value)}>
                                    <option value="">Tipo de coordenador</option>
                                        <option value="PESQUISA">Coordenador de pesquisa</option>    
                                        <option value="EXTENSÃO">Coordenador de extensão</option>
                                        <option value="INOVAÇÃO">Coordenador de inovação</option>
                                    </select>
                                </form>
                            </div>
                            : <div className="mb-[50px]"></div>
                        }
                    </div>

                    <div className="">
                        <Button name="Cadastrar" func={save} style="text-[#1C3C78] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#fff] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner"/>
                    </div>

                    <div className="mt-[20px]">
                        <p className="text-sm ">Já possui cadastro? <Link to="/" className="text-[#EC2026]"> Login</Link> </p>
                    </div>

                </div>
        </div>
    )
}