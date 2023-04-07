import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { SingUpArea } from "../../components/template/SingUpArea/SingUpArea";

export function SingUp(){
    return(
        <div className="flex flex-col justify-between h-screen">
            <Header/>
            <SingUpArea/>
            <Footer/>
        </div>
    )
}