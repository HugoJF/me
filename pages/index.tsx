import type {NextPage} from 'next'
import TimelineItem from "../components/timeline-item";
import Section from "../components/section";
import SectionHeading from "../components/section-heading";
import Icon from "../components/icon";
import Image, {StaticImageData} from "next/image";
import Insomnia from "../public/insomnia.png";
import GitHubActions from "../public/github-actions.svg";
import Docker from "../public/docker.svg";
import React from "../public/react.svg";
import NextJS from "../public/nextjs-light.svg";
import NextJSDark from "../public/nextjs-dark.svg";
import Laravel from "../public/laravel.svg";
import PHP from "../public/php.svg";
import Nestjs from "../public/nestjs.svg";
import Typescript from "../public/typescript.svg";
import TailwindCSS from "../public/tailwindcss.svg";
import Angular from "../public/angular.svg";
import AWS from "../public/aws-light.svg";
import AWSDark from "../public/aws-dark.svg";
import Bootstrap from "../public/bootstrap.svg";
import Git from "../public/git.svg";
import MySQL from "../public/mysql.svg";
import MariaDB from "../public/mariadb.svg";
import DynamoDB from "../public/dynamodb.svg";
import Jest from "../public/jest.svg";
import Serverless from "../public/serverless.svg";
import GameHostingPanel1 from "../public/game-hosting-panel/1.png";
import Me from "../public/me.jpg";
import ProjectSummary from "../components/project-summary";
import Head from "next/head";

interface AdaptiveImage {
    light: StaticImageData;
    dark: StaticImageData;
}

type SrcType = AdaptiveImage | StaticImageData;

interface TechnologyIcon {
    name: string;
    src: SrcType;
}

interface Skill {
    icons: TechnologyIcon[];
    name: string;
    description: string;
}

const skills: Skill[] = [{
    name: 'Laravel & PHP',
    description: 'Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web.',
    icons: [{
        name: 'Laravel', src: Laravel
    }, {
        name: 'PHP', src: PHP
    }],
}, {
    name: 'React & Next.js',
    description: 'React é uma biblioteca JavaScript que permite criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: [{
        name: 'React', src: React
    }, {
        name: 'Next.js', src: {light: NextJS, dark: NextJSDark},
    }],
}, {
    name: 'TailwindCSS',
    description: 'TailwindCSS é uma biblioteca de CSS que permite a você criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: [{
        name: 'TailwindCSS', src: TailwindCSS
    }],
}, {
    name: 'Nest.js & Typescript',
    description: 'Next.js é uma biblioteca JavaScript que permite criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: [{
        name: 'Nest.js', src: Nestjs
    }, {
        name: 'Typescript', src: Typescript
    }],
}, {
    name: 'Angular',
    description: 'Angular é uma biblioteca JavaScript que permite criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: [{
        name: 'Angular', src: Angular
    }],
}, {
    name: 'Amazon Web Services',
    description: 'AWS é uma plataforma de serviços de cloud computing, que oferece acesso a serviços de cloud computing.',
    icons: [{
        name: 'AWS', src: {light: AWS, dark: AWSDark}
    }],
}];

const others: TechnologyIcon[] = [
    {name: 'Serverless Framework', src: Serverless},
    {name: 'GitHub Actions', src: GitHubActions},
    {name: 'DynamoDB', src: DynamoDB},
    {name: 'Docker', src: Docker},
    {name: 'MySQL', src: MySQL},
    {name: 'Git', src: Git},
    {name: 'MariaDB', src: MariaDB},
    {name: 'Bootstrap', src: Bootstrap},
    {name: 'Jest', src: Jest},
    {name: 'Insomnia', src: Insomnia}
];

const Home: NextPage = () => {
    return <>
        <Head>
            <title>Hugo Jeller Ferreira</title>
        </Head>
        <Section dark>
            <nav className="flex justify-between">
                <SectionHeading title="Hugo Jeller Ferreira"/>
                <ul className="flex gap-8">
                    {/*<li className="font-medium uppercase">Home</li>*/}
                    {/*<li className="font-medium uppercase">Projetos</li>*/}
                    {/*<li className="font-medium uppercase">Contato</li>*/}
                    {/*<li className="font-medium uppercase">GitHub</li>*/}
                </ul>
            </nav>
        </Section>
        <Section dark className="flex flex-col md:flex-row items-center">
            <div className="flex justify-center md:w-1/2 rounded-full overflow-hidden">
                <Image
                    alt="Hugo Jeller"
                    width={300}
                    height={300}
                    src={Me}
                    className="flex-shrink-0 w-64 h-64 bg-white rounded-full shadow-lg"
                />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-3xl font-medium">Olá 👋</h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">Meu nome é Hugo, estudante de Engenharia da
                    Computação
                    pela UFMS. Estou desenvolvendo diversos projetos pessoais envolvendo jogos eletrônicos,
                    tecnologias web e automação de servidores Linux.</p>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">Meu objetivo é criar uma fundação sólida de
                    tecnologias frontend e backend para transformar ideias em soluções.</p>
            </div>
        </Section>
        <Section>
            <SectionHeading title="Tecnologias">
                Principais tecnologias que utilizo nos meus projetos
            </SectionHeading>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {skills.map(skill => (
                    <li key={skill.name}>
                        <a className="duration-150 flex flex-col gap-1 h-full p-4 rounded-lg">
                            <ul className="flex gap-2">
                                {skill.icons.map(icon => <Icon
                                    key={icon.name}
                                    src={icon.src}
                                    alt={icon.name}
                                />)}
                            </ul>
                            <h2 className="text-lg font-medium">{skill.name}</h2>
                            <p className="dark:text-gray-300 text-gray-700">{skill.description}</p>
                        </a>
                    </li>
                ))}
            </ul>

            <SectionHeading title="Eu também uso" className="mt-8">
                Outras ferramentas e tecnologias que considero indispensáveis
            </SectionHeading>
            <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2 mt-8">
                {others.map(other => <li
                    key={other.name}
                    className="duration-150 rounded-lg"
                >
                    <a className="flex flex-col items-center gap-2 p-4">
                        <Icon
                            key={other.name}
                            src={other.src}
                            alt={other.name}
                        />
                        <h2 className="text-center text-lg font-medium">{other.name}</h2>
                    </a>
                </li>)}
            </ul>
        </Section>
        <Section dark className="flex-col">
            <SectionHeading title="Experiência profissional"/>
            <ul className="mt-8">
                <TimelineItem
                    from="2021"
                    to="Hoje"
                    title="Desenvolvedor web fullstack - Tokenlab"
                >
                    Atuei como desenvolvedor frontend utilizando Angular e React, desenvolvedor backend utilizando
                    NestJS e Serverless Framework e também foi responsável pela infraestrutura cloud de projetos
                    internos.
                </TimelineItem>
                <TimelineItem
                    from="2017"
                    to="2021"
                    title="Desenvolvedor web fullstack"
                >
                    Atuei como desenvolvedor frontend utilizando Angular e React, desenvolvedor backend utilizando
                </TimelineItem>
            </ul>
        </Section>
        <Section className="flex-col">
            <SectionHeading title="Formação"/>
            <ul className="mt-8">
                <TimelineItem
                    from="2016"
                    to="2021"
                    title="Engenharia de Computação - UFMS"
                >
                    Graduação em Engenharia de Computação pela Universidade Federal do Mato Grosso do Sul. Participei de
                    um projeto de extensão, onde desenvolvi o sistema administrativo para o Mercado Escola.
                </TimelineItem>
                <TimelineItem
                    from="2014"
                    to="2015"
                    title="Engenharia de Computação - UCDB"
                >
                    Graduação em Engenharia de Computação pela Universidade Católica Dom Bosco, interrompida pela
                    transferência para a UFMS. Durante esse período desenvolvi meu PIBIC, publicando o <a
                    className="underline font-medium"
                    href="http://www.gpec.ucdb.br/pistori/orientacoes/planos/hugo2014.pdf">Histogramas de Palavras
                    Visuais com Atributos de Cor, Forma e Textura para Contagem de Polens</a>
                </TimelineItem>
            </ul>
        </Section>
        <Section dark>
            <SectionHeading title="Projetos"/>

            <ul className="mt-8">
                <ProjectSummary
                    name="Game Hosting Panel"
                    image={GameHostingPanel1}
                    repository="https://github.com/HugoJF/game-hosting-panel"
                    hasDetails={false}
                >
                    <p>
                        Desenvolvido em Laravel, React, Bootstrap, TailwindCSS, e NodeJS, tem objetivo automatizar
                        todo ambiente necessário para clientes poderem hospedar diversos servidores de jogos em
                        questão de segundos.</p>
                    <p>
                        Um dos seus maiores desafios sendo reduzir o tempo de instalação para (fazendo uso de um
                        cache HTTP local), maximizar densidade de servidores que podem ser armazenados em um dado
                        momento (utilizando sistemas de arquivos que permitem deduplicação) e garantir
                        escalabilidade vertical e horizontal (expansão de discos sem downtime, migração de nodes com
                        downtime mínimo, capacidade de operar em múltiplos nodes, migração de servidores entre
                        nodes, etc).
                    </p>
                </ProjectSummary>
            </ul>
        </Section>
    </>
}

export default Home
