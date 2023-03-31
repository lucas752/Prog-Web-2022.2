import { Input } from "../../atomic/Input/Input";

export function LoginArea(){
    return(
        <div>
            
                <div>logo</div>

                <div>
                    <Input type="text" place="Email:" />
                </div>
                <div>
                    <Input type="password" place="Senha:" />
                </div>
                
                <div>botao</div>
                <div>cadastro</div>
        </div>
    )
}