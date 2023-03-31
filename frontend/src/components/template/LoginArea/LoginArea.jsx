import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";

export function LoginArea(){
    return(
        <div>

                <div>logo</div>

                <div>
                    <p>Email</p>
                    <Input type="text" place="Digite seu email:" />
                </div>
                <div>
                    <p>Senha</p>
                    <Input type="password" place="Digite seu senha:" />
                </div>
                
                <div>
                    <Button name="Login" style="text-[#1C3C78] border rounded-[12px] p-[10px] w-[140px] h-[42px] "/>
                </div>

                <div>cadastro</div>
        </div>
    )
}