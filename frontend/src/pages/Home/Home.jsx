import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { NameAndType } from "../../components/atomic/NameAndType/NameAndType";
import { NoticeCard } from "../../components/organism/NoticeCard/NoticeCard";
import { SideFilter } from "../../components/organism/SideFilter/SideFilter";
import { MenuCoordinator } from "../../components/template/MenuCoordinator/MenuCoordinator"
import { MenuUser } from "../../components/template/MenuUser/MenuUser"
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react';


export function Home(){
    /*const card = [
        {
            'title': 'EDITAL XXXX1',
            'domain': 'Extensão',
            'requirements': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur felis justo, vitae sagittis nulla maximus eu. Ut ultrices sit.',
            'term' : '24/04/2023',
            'criteria': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.'
        },
        {
            'title': 'EDITAL XXXX2',
            'domain': 'Pesquisa',
            'requirements': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur felis justo, vitae sagittis nulla maximus eu. Ut ultrices sit.',
            'term' : '24/04/2023',
            'criteria': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.'
        },

        {
            'title': 'EDITAL XXXX3',
            'domain': 'Pesquisa',
            'requirements': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur felis justo, vitae sagittis nulla maximus eu. Ut ultrices sit.',
            'term' : '24/04/2023',
            'criteria': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.'
        },

        {
            'title': 'EDITAL XXXX4',
            'domain': 'Pesquisa',
            'requirements': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur felis justo, vitae sagittis nulla maximus eu. Ut ultrices sit.',
            'term' : '24/04/2023',
            'criteria': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac.'
        },
    ] */

    const data = JSON.parse(localStorage.getItem("editaisupe"));
    const decode = jwt(data.token);
    const email = decode.sub;

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



    const [card, setCard] = useState({});
    const [user, setUser] = useState({});

    const typeUser = 'coordenador'
    const userType = user.permission == 'COORDENADOR' ? user.permission + ' DE ' + user.coordinatorType : user.permission + " GERAL"
    const userName = 'Jamuelton'

    useEffect(() => {
        getCards();
        getUser();
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
                <SideFilter/>
            </div>

            <Footer/>
        </div>
    )
}