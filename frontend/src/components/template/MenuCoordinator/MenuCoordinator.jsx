import { Menu } from "../../organism/Menu/Menu"

export function MenuCoordinator() {
    
    const options = [
        {'text' : 'INICIO', 'link' : '/home'},
        {'text' : 'MEUS EDITAIS', 'link' : '/carandiru'},
    ]

    return (
        <div>
            <Menu options={options}/>
        </div>
    )
}