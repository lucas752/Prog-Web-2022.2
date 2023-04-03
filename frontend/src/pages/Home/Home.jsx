import { Footer } from "../../components/organism/Footer/Footer";
import { Header } from "../../components/organism/Header/Header";
import { NoticeCard } from "../../components/organism/NoticeCard/NoticeCard";

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
    ]

    return(
        <div>
            <Header></Header>
            <span>Página inicial</span>
            <div className="flex flex-wrap justify-evenly">
                { card?.length ? card.map((data, index) =>
                    <NoticeCard 
                        term={data.term} 
                        domain={data.domain} 
                        requirements={data.requirements} 
                        title={data.title} 
                        description={data.description} 
                        criteria={data.criteria} 
                    />
                ) : <div></div>
                }
            </div>

            <Footer></Footer>
        </div>
    )
}