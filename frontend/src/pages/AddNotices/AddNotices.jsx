import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { AddNoticesArea } from "../../components/template/AddNoticesArea/AddNoticesArea"
import { MenuCoordinator } from '../../components/template/MenuCoordinator/MenuCoordinator'
import { MenuUser } from '../../components/template/MenuUser/MenuUser'

export function AddNotices() {
    const user = 'coordenador'
    return(
        <div>
            <div>
                <Header/>
                { 
                    user == 'coordenador' ? <MenuCoordinator/> : <MenuUser/>
                }
            </div>
            <div className="flex flex-row justify-center">
                <AddNoticesArea/>
            </div>
            <Footer/>
        </div>
    )
}