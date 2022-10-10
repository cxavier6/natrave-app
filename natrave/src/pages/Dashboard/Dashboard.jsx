import logo from '../../assets/imgs/logo/logo-fundo-vermelho.svg'
import { Icon } from '../../components/Icon'

export const Dashboard = () => {
  return (
    <div>
        <header className='bg-red-500 text-white p-4 px-20'>
            <div className='container max-w-7xl flex justify-between'>
                <img src={logo} className='w-28 md:w-40'/>
                <a href="/profile">
                    <Icon name="profile" className='w-9'/>
                </a>
                
            </div>
        </header>

        <main>
            <section id='header' className='bg-red-500 text-white p-4 px-20'>
                <div className='container max-w-3xl space-y-2'>
                    <span>Olá, Camila</span>
                    <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                </div>
            </section>

            <section id='content'>

            </section>
        </main>
    </div>
  )
}
