import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { NameAndType } from "../../components/atomic/NameAndType/NameAndType";
import { MenuCoordinator } from "../../components/template/MenuCoordinator/MenuCoordinator";
import { NoticeCard } from "../../components/organism/NoticeCard/NoticeCard";
import { Button } from "../../components/atomic/Button/Button";
import { Link } from "react-router-dom";


export function CoordinatorNotices(){

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

    const coordinatorType = 'Coordenador de extensão'
    const userName = 'Jamuelton'
    const but = true

    return(
        <div className="flex flex-col justify-between h-screen">
            <div>
                <Header/>
                <MenuCoordinator/>
            </div>
            <NameAndType coordinatorType={coordinatorType} userName={userName}/>
            <div className="flex flex-row justify-center my-[20px]">
                <Link to="/add-notices">
                    <Button style="bg-[#1C3C78] text-[#fff] w-[150px] tablet:w-[200px] desktop:w-[300px] tablet:h-[34px] desktop:h-[40px] rounded-[16px] text-[20px] shadow-2xl hover:shadow-none" name="Novo Edital"/>
                </Link>
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
                            showBut={but} 
                        />
                    ) : <div> <p>Recarregue a página</p> </div>
                    }
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}