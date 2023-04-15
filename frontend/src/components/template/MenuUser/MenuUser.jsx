import { Menu } from "../../organism/Menu/Menu"

export function MenuUser() {
    
    const options = [
        {'text' : 'INICIO', 'link' : '/home'},
    ]

    return (
        <div>
            <Menu options={options}/>
        </div>
    )
}