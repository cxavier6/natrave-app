import { Link } from "react-router-dom";

import { Icon } from '../../components/Icon'
import { Card } from '../../components/Card'

export const Dashboard = () => {
  return (
    <>
        <header className='bg-red-500 text-white p-4 px-20'>
            <div className='container max-w-7xl flex justify-between'>
                
                <Link to="/">
                    <img src="../../../public/imgs/logo/logo-fundo-vermelho.svg" className='w-28 md:w-40'/>
                </Link>
                <a href="/profile">
                    <Icon name="profile" className='w-9'/>
                </a>
                
            </div>
        </header>

        <main className="space-y-2">
            <section id='header' className='bg-red-500 text-white p-4 px-20'>
                <div className='container max-w-3xl space-y-2'>
                    <span>Olá, Camila</span>
                    <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                </div>
            </section>

            <section id='content' className='container max-w-3xl p-4 m-auto space-y-4'>

                <div className='flex space-x-4 p-4 items-center justify-center font-bold'>
                    <Icon name="arrowLeft" className="w-6 text-red-500"/>
                    <span>24 de novembro</span>
                    <Icon name="arrowRight" className="w-6 text-red-500"/>
                </div>
                
                <div className='space-y-4'>
                    <Card
                        timeA={{ slug: 'sui' }}
                        timeB={{ slug: 'cam' }}
                        match={{ time: '7:00' }}
                    />

                    <Card
                        timeA={{ slug: 'uru' }}
                        timeB={{ slug: 'cor' }}
                        match={{ time: '7:00' }}
                    />

                    <Card
                        timeA={{ slug: 'por' }}
                        timeB={{ slug: 'gan' }}
                        match={{ time: '7:00' }}
                    />
                </div>
                
            </section>
        </main>
    </> 
  )}