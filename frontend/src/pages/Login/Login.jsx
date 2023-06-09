import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { LoginArea } from "../../components/template/LoginArea/LoginArea";

export function Login(){
    return(
        <div className="flex flex-col justify-between h-screen">
            <Header/>
            <LoginArea/>
            <Footer/>
        </div>
    )
}