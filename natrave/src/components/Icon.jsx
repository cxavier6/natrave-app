import { ReactComponent as back} from '../assets/imgs/icones/back.svg'

const icons = {
    back
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props}/>
  
}
