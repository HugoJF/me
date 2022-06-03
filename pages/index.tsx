import type {NextPage} from 'next'
import TimelineItem from "../components/timeline-item";

const Home: NextPage = () => {
    return <>
        <section className="text-gray-100 bg-gray-900">
            <div className="container mx-auto">
                <nav className="flex justify-between py-8">
                    <h2 className="text-lg font-medium">Hugo Jeller</h2>
                    <ul className="flex gap-8">
                        <li className="font-medium uppercase">Home</li>
                        <li className="font-medium uppercase">Projetos</li>
                        <li className="font-medium uppercase">Contato</li>
                        <li className="font-medium uppercase">GitHub</li>
                    </ul>
                </nav>
                <div className="flex py-8">
                    <div className="w-1/2">
                        <h1 className="text-3xl font-medium">Olá 👋</h1>
                        <p className="mt-4 text-xl text-gray-200">Meu nome é Hugo, estudante de Engenharia da Computação
                            pela UFMS. Estou desenvolvendo diversos projetos pessoais envolvendo jogos eletrônicos,
                            tecnologias web e automação de servidores Linux.</p>
                        <p className="mt-4 text-xl text-gray-200">Meu objetivo é criar uma fundação sólida de
                            tecnologias frontend e backend para transformar ideias em soluções.</p>
                    </div>
                    <div className="flex justify-center w-1/2">
                        <div className="w-64 h-64 bg-white rounded-full">

                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section>
            <div className="container mx-auto py-8">
                <h2 className="text-3xl">Experiência profissional</h2>
                <ul>
                    <TimelineItem
                        from="2021"
                        to="Hoje"
                        title="Tokenlab - Desenvolvedor de software"
                    >
                        Atuei como desenvolvedor frontend utilizando Angular e React, desenvolvedor backend utilizando
                        NestJS e Serverless Framework e também foi responsável pela infraestrutura cloud de projetos
                        internos.
                    </TimelineItem>
                    <TimelineItem
                        from="2017"
                        to="2021"
                        title="Empresa de desenvolvimento de software"
                    >
                        Atuei como desenvolvedor frontend utilizando Angular e React, desenvolvedor backend utilizando
                    </TimelineItem>
                </ul>
            </div>
        </section>
    </>
}

export default Home
