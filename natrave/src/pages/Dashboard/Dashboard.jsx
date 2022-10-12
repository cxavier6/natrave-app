import { Icon } from '../../components/Icon'
import logo from '../../assets/imgs/logo/logo-fundo-vermelho.svg'
import sui from '../../assets/imgs/bandeiras/sui.png'
import cam from '../../assets/imgs/bandeiras/cam.png'

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

            <section id='content' className='container max-w-3xl p-4 m-auto'>
                <div className='rounded-xl border border-gray-300 text-center p-4 space-y-4'>
                    <span className='text-sm md:text-base text-gray-700 font-bold'>7:00</span>
                    
                    <div className='flex space-x-4 justify-center items-center'>
                        <span className='uppercase'>sui</span>
                        <img src={sui}/>
                        
                        <input max={10} type="number" className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center'/>
                        <span className='text-red-500 text-bold'>X</span>
                        <input max={10} type="number" className='bg-red-300/[0.2] w-[55px] h-[55px] font-red-700 text-xl text-center'/>

                        <img src={cam}/>
                        <span className='uppercase'>cam</span>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
