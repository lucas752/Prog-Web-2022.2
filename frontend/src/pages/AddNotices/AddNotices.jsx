import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { AddNoticesArea } from "../../components/template/AddNoticesArea/AddNoticesArea"

export function AddNotices() {
    return(
        <div>
            <Header/>
            <div className="flex flex-row justify-center">
                <AddNoticesArea/>
            </div>
            <Footer/>
        </div>
    )
}