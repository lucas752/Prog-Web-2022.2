import { Input } from "../../atomic/Input/Input";
export function SideFilter(){
    return(
        <div className="col-span-12 tablet:col-span-12  desktop:col-span-12">
            <p>Áreas</p>
            <div>
                <div className="flex flex row">
                    <Input type="radio" name="filter" value="all"/> 
                    <p className="ml-[5px]">Todos</p>
                </div>
                
            </div>
        </div>
    )
}