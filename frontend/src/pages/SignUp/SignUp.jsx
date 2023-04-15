import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { SignUpArea } from "../../components/template/SignUpArea/SignUpArea";

export function SignUp(){
    return(
        <div className="flex flex-col justify-between h-screen">
            <Header/>
            <SignUpArea/>
            <Footer/>
        </div>
    )
}