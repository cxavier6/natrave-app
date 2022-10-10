import { ReactComponent as back} from '../assets/imgs/icones/back.svg'
import { ReactComponent as arrowLeft} from '../assets/imgs/icones/arrow-left.svg'
import { ReactComponent as arrowRight} from '../assets/imgs/icones/arrow-right.svg'
import { ReactComponent as profile} from '../assets/imgs/icones/profile.svg'

const icons = {
    back, 
    arrowLeft,
    arrowRight,
    back,
    profile
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props}/>
  
}
