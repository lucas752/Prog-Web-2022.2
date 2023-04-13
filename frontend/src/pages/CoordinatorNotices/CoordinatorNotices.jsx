import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { MenuCoordinator } from "../../components/template/MenuCoordinator/MenuCoordinator";
import { MenuUser } from "../../components/template/MenuUser/MenuUser";

export function CoordinatorNotices(){

    

    return(
        <div className="flex flex-col justify-between h-screen">
            <div>
                <Header/>
                <MenuCoordinator/>
            </div>
            
            <Footer/>
        </div>
    )
}