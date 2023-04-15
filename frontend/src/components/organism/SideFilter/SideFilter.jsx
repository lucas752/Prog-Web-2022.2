import { Input } from "../../atomic/Input/Input";
import { Button } from '../../atomic/Button/Button'
export function SideFilter(){
    return(
        <div className="bg-[#F0F0F0] rounded-xl max-w-max  tablet:max-w-max desktop:max-w-max px-4 py-6 shadow-xl  mx-[15px] tablet:mx-[30px] desktop:mx-[30px] my-[15px] tablet:my-[0px] desktop:my-[0px]">
            <p>Áreas</p>
            <div className="flex flex-col items-center">
                <div className="flex flex-row tablet:flex-col desktop:flex-col">
                    <div className="flex flex-row mx-[6px] ">
                        <Input type="radio" name="filter" value="all"/> 
                        <p className="ml-[4px]">Todos</p>
                    </div>
                    <div className="flex flex-row mx-[6px]">
                        <Input type="radio" name="filter" value="all"/> 
                        <p className="ml-[5px]">Extensão</p>
                    </div>
                    <div className="flex flex-row mx-[6px]">
                        <Input type="radio" name="filter" value="all"/> 
                        <p className="ml-[4px]">Pesquisa</p>
                    </div>
                    <div className="flex flex-row mx-[6px]">
                        <Input type="radio" name="filter" value="all"/> 
                        <p className="ml-[4px]">Inovação</p>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <Button name="Filtrar" style="text-[#fff] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40 bg-[#1c3c78] duration-500 hover:bg-[#fff] hover:text-[#1c3c78] hover:shadow-inner"/>
                </div>
            </div>
        </div>
    )
}