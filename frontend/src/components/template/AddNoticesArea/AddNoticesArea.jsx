import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";
import { LongInput } from '../../atomic/LongInput/LongInput'

export function AddNoticesArea() {
    return(
        <div className="bg-[#f0f0f0] flex flex-col rounded-xl w-[26rem] items-center justify-center my-10 py-10 px-10 max-w-max">
            <div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Título</p>
                    <Input place={'Insira o título'}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Prazo</p>
                    <Input type={'date'}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm" >Descrição</p>
                    <LongInput place={"Insira a descrição"}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Requisitos</p>
                    <LongInput place={"Insira os requisitos"}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Critérios de Avaliação</p>
                    <LongInput place={'Insira os critérios para avaliação'}/>
                </div>
            </div>

            <div>
                <Button name="Salvar" style="text-[#fff] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#1C3C78] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner"/>
            </div>
        </div>
    )
}