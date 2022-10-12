import { ReactComponent as back} from '../../public/imgs/icones/back.svg'
import { ReactComponent as arrowLeft} from '../../public/imgs/icones/arrow-left.svg'
import { ReactComponent as arrowRight} from '../../public/imgs/icones//arrow-right.svg'
import { ReactComponent as profile} from '../../public/imgs/icones/profile.svg'

const icons = {
    back, 
    arrowLeft,
    arrowRight,
    profile
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props}/>
  
}
