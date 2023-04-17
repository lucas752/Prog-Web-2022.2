import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { NameAndType } from "../../components/atomic/NameAndType/NameAndType";
import { NoticeCard } from "../../components/organism/NoticeCard/NoticeCard";
import { MenuCoordinator } from "../../components/template/MenuCoordinator/MenuCoordinator"
import { MenuUser } from "../../components/template/MenuUser/MenuUser"
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../../components/atomic/Button/Button'


export function Home(){

    const data = JSON.parse(localStorage.getItem("editaisupe"));
    const decode = jwt(data.token);
    const email = decode.sub;

    const [domain, setDomain] = useState("all");

    const getCards = async() => {
        try {
            const card = await axios.get("http://localhost:8080/notices", {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                }
            });
            setCard(card.data);
        } catch (error) {
            console.log(error)
        }
    }

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

    const getByDomain = async() => {
        try {
            const card = await axios.get(`http://localhost:8080/notices/domain/${encodeURI(domain)}`, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                }
            });
            setCard(card.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleFilter = () => {
        if (domain == "all") {
            getCards();
        } else {
            getByDomain();
        }
    }

    const [card, setCard] = useState({});
    const [user, setUser] = useState({});

    const userType = user.permission == 'COORDENADOR' ? user.permission + ' DE ' + user.coordinatorType : user.permission + " GERAL"

    useEffect(() => {
        getUser();
        getCards();
    }, []);

    return(
        <div className="flex flex-col justify-between h-screen">
            {console.log(user)}
            <div>
                <Header/>
                { 
                    user.permission == 'COORDENADOR' ? <MenuCoordinator/> : <MenuUser/>
                }
            </div>
            <NameAndType coordinatorType={userType} userName={user.name}/>
            <div className="flex flex-col-reverse tablet:flex-row desktop:flex-row m-[10px] ">
                <div className="grid grid-cols-12 gap-4 ">
                    { card?.length ? card.map((data, index) =>
                        <NoticeCard 
                            term={data.term} 
                            domain={data.domain} 
                            requirements={data.requirements} 
                            title={data.title} 
                            description={data.description} 
                            criteria={data.criteria} 
                        />
                    ) : <div> <p>Recarregue a página</p> </div>
                    }
                </div>
                <div className="bg-[#F0F0F0] rounded-xl max-w-max  tablet:max-w-max desktop:max-w-max px-4 py-6 shadow-xl  mx-[15px] tablet:mx-[30px] desktop:mx-[30px] my-[15px] tablet:my-[0px] desktop:my-[0px]">
            <p>Áreas</p>
            <div className="flex flex-col items-center">
                <select name="" value={domain} onChange={ev => setDomain(ev.target.value)}>
                    <option value="all">Todos</option>
                    <option value="EXTENSÃO">Extensão</option>
                    <option value="PESQUISA">Pesquisa</option>
                    <option value="INOVAÇÃO">Inovação</option>
                </select>
                <div className="mt-[20px]">
                    <Button func={handleFilter} name="Filtrar" style="text-[#fff] text-[16px] font-bold border-none rounded-[12px]  w-[100px] h-[30px] shadow-2xl shadow-indigo-500/40 bg-[#1c3c78] duration-500 hover:bg-[#fff] hover:text-[#1c3c78] hover:shadow-inner"/>
                </div>
            </div>
        </div>
            </div>

            <Footer/>
        </div>
    )
}