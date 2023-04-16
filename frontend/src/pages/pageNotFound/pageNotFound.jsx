import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { Link } from "react-router-dom";


export function PageNotFound(){
    return(
        <div className="flex flex-col justify-between h-screen">
            <Header/>
            <div className="flex flex-col justify-center items-center h-3/6 ">
                <h1 className="font-medium text-8xl justify-center mb-5">404</h1>
                <p>Pagina não encontrada</p>
                <Link to="/" className="text-[#EC2026]">Voltar</Link>
            </div>
            <Footer/>
        </div>
    )
}