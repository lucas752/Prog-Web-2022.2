import { Button } from "../../atomic/Button/Button";
import { Input } from "../../atomic/Input/Input";
import { LongInput } from '../../atomic/LongInput/LongInput'
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';

export function AddNoticesArea() {
    const data = JSON.parse(localStorage.getItem("editaisupe"));
    const decode = jwt(data.token);
    const email = decode.sub;

    const getUser = async() => {
        try {
            const user = await axios.get(`http://localhost:8080/users/email/${email}`, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                }
            });
            setUser(user.data)
        } catch (error) {
            console.log(error)
        }
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [term, setTerm] = useState("")
    const [criteria, setCriteria] = useState("")
    const [requirements, setRequirements] = useState("")

    const [user, setUser] = useState({});

    const dataNotices = {
        title: title,
        description: description,
        term: term,
        domain: user.coordinatorType,
        requirements: requirements,
        criteria: criteria
    }

    const save = async (ev) => {
        try {
          await axios.post("http://localhost:8080/notices", dataNotices, {
            headers: {
                Authorization: `Bearer ${data.token}`,
            }
        })
          alert("Edital Cadastrado com sucesso")
        } catch(e) {
          console.log(e)
        }
      }

    useEffect(() => {
        getUser();
    }, []);

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
        
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value)
        
    }

    const handleCriteriaChange = (e) => {
        setCriteria(e.target.value)

    }

    const handleRequirementsChange = (e) => {
        setRequirements(e.target.value)

    }
    
    return(
        <div className="bg-[#f0f0f0] flex flex-col rounded-xl w-[26rem] items-center justify-center my-10 py-10 px-[1.5rem] max-w-max shadow-xl">
            <div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Título</p>
                    <Input place={'Insira o título'} func={handleTitleChange}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Prazo</p>
                    <Input type={'date'} func={handleTermChange}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm" >Descrição</p>
                    <LongInput place={"Insira a descrição"} func={handleDescriptionChange}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Requisitos</p>
                    <LongInput place={"Insira os requisitos"} func={handleRequirementsChange}/>
                </div>
                <div className="mb-[20px]">
                    <p className="my-[4px] text-sm">Critérios de Avaliação</p>
                    <LongInput place={'Insira os critérios para avaliação'} func={handleCriteriaChange}/>
                </div>
            </div>

            <div>
                <Button name="Salvar" style="text-[#fff] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40  bg-[#1C3C78] duration-500 hover:bg-[#EC2026] hover:text-[#fff] hover:shadow-inner" func={save}/>
            </div>
        </div>
    )
}