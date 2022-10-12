import { Link } from "react-router-dom";

import { Icon } from '../../components/Icon'
import { Input } from '../../components/Input'

export const Singup = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <header className="w-full flex justify-center p-4 border-b border-red-300">
                <Link to="/">
                    <img src="../../../public/imgs/logo/logo-fundo-branco.svg" className="w-32 md:w-40" />
                </Link>  
        </header>

        <main className="container max-w-xl p-4">
            <div className="p-4 flex space-x-4 items-center">
                <a href="/">
                    <Icon name="back"/>
                </a>
                <h2 className="text-xl font-bold">Crie sua conta</h2>
            </div>

            <form className="p-4 space-y-6">
                <Input
                    type="text"
                    name="name"
                    label="Nome"
                    placeholder="Digite seu nome"
                />

                <Input
                    type="text"
                    name="username"
                    label="Usuário"
                    placeholder="Digite seu nome de usuário"
                />

                <Input
                    type="text"
                    name="email"
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                />

                <Input
                    type="password"
                    name="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                />

                <Input
                    type="password"
                    name="password"
                    label="Confirme a senha"
                    placeholder="Digite sua senha novamente"
                />

                <a href='/dashboard' className="w-full block text-center text-white bg-red-500 px-6 py-3 rounded-xl">Criar minha conta</a>
            </form>
        </main>
    </div>
  )
}
