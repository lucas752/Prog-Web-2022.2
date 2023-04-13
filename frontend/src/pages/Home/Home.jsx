import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { NoticeCard } from "../../components/organism/NoticeCard/NoticeCard";
import { SideFilter } from "../../components/organism/SideFilter/SideFilter";
import { MenuCoordinator } from "../../components/template/MenuCoordinator/MenuCoordinator"
import { MenuUser } from "../../components/template/MenuUser/MenuUser"


export function Home(){
    const card = [
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
    ]

    const typeUser = 'coordenador'
    const coordinatorType = 'Coordenador de extensão'
    const userName = 'Jamuelton'

    return(
        <div className="flex flex-col justify-between h-screen">
            <div>
                <Header/>
                { 
                    typeUser == 'coordenador' ? <MenuCoordinator/> : <MenuUser/>
                }
            </div>
            <div className="mx-[42px] flex flex-row justify-between font-bold my-6 text-[16px]">
                <span>Olá {userName}</span>
                <span>{coordinatorType}</span>
            </div>
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