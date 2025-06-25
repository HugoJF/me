import type {NextPage} from 'next'
import TimelineItem from "../components/timeline-item";
import Section from "../components/section";
import SectionHeading from "../components/section-heading";
import Icon from "../components/icon";
import Image from "next/image";
import GameHostingPanel1 from "../public/game-hosting-panel/1.png";
import MercadoEscola1 from "../public/mercado-escola/1.png";
import CacheSimulator1 from '../public/cache-simulator/1.png';
import Me from "../public/me.jpg";
import ProjectSummary from "../components/project-summary";
import Head from "next/head";
import {IconName} from "../utils/icons";
import {ProjectDescription} from "../components/project-description";

interface TechnologyIcon {
    name: string;
    icon: IconName;
}

interface Skill {
    name: string;
    description: string;
    icons: IconName[];
}

interface MainSkill {
    name: string;
    icon: IconName;
    description: string;
}

const mainSkills: MainSkill[] = [{
    name: 'Laravel',
    icon: 'laravel',
    description: 'Tenho 7 anos de experiência com Laravel, desenvolvendo APIs RESTful e aplicações web completas. Implementei sistemas de autenticação, integração com serviços de terceiros e otimização de consultas SQL. Trabalhei em projetos de e-commerce e sistemas de gestão empresarial.'
}, {
    name: 'React',
    icon: 'react',
    description: 'Desenvolvo com React há 6 anos, criando interfaces modernas e responsivas. Tenho experiência com hooks, context API, Redux e React Query. Implementei dashboards interativos, sistemas de autenticação e integração com APIs. Também trabalhei com Next.js em projetos que exigiam SSR e otimização SEO.'
}, {
    name: 'AWS',
    icon: 'aws',
    description: 'Utilizo AWS há 4 anos para deploy e infraestrutura de aplicações. Tenho experiência com EC2, S3, RDS, Lambda e CloudFront. Implementei pipelines de CI/CD com AWS CodePipeline e gerenciei recursos com CloudFormation. Também trabalhei com monitoramento usando CloudWatch e configuração de segurança com IAM.',
}]

const skills: Skill[] = [{
    name: 'PHP', // 7 anos
    description: 'PHP é uma linguagem de script de código aberto de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.',
    icons: ['php'],
}, {
    name: 'Next.js', // 2 anos
    description: 'Next.js é uma biblioteca JavaScript que permite criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: ['nextjs'],
}, {
    name: 'TailwindCSS', // 3 anos
    description: 'TailwindCSS é uma biblioteca de CSS que permite a você criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: ['tailwindcss'],
}, {
    name: 'Typescript', // 4 anos
    description: 'Typescript é uma linguagem de programação que adiciona tipagem estática e alguns outros recursos a JavaScript.',
    icons: ['typescript'],
}, {
    name: 'Nest.js', // 2 anos
    description: 'Nest.js é um framework Node.js que permite criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: ['nestjs'],
}, {
    name: 'Angular', // 2 anos
    description: 'Angular é uma biblioteca JavaScript que permite criar interfaces de usuário de forma declarativa, flexível e escalável.',
    icons: ['angular'],
}];

const others: TechnologyIcon[] = [
    {name: 'Serverless Framework', icon: 'serverless'},
    {name: 'GitHub Actions', icon: 'github-actions'},
    {name: 'DynamoDB', icon: 'dynamodb'},
    {name: 'Docker', icon: 'docker'},
    {name: 'MySQL', icon: 'mysql'},
    {name: 'Git', icon: 'git'},
    {name: 'MariaDB', icon: 'mariadb'},
    {name: 'Bootstrap', icon: 'bootstrap'},
    {name: 'Jest', icon: 'jest'},
    {name: 'Insomnia', icon: 'insomnia'},
    {name: 'MongoDB', icon: 'mongodb'},
    {name: 'Python', icon: 'python'},
    {name: 'Ansible', icon: 'ansible'},
    {name: 'Terraform', icon: 'terraform'},
    {name: 'PostgreSQL', icon: 'postgresql'},
    {name: 'libSQL', icon: 'libsql'},
    {name: 'Ant Design', icon: 'antd'},
    {name: 'Redis', icon: 'redis'},
    {name: 'Vite', icon: 'vite'},
    {name: 'Cypress', icon: 'cypress'},
    {name: 'Golang', icon: 'golang'},
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
                    <li className="font-medium uppercase">
                        <a href="https://www.linkedin.com/in/hugo-jeller-ferreira/">LinkedIn</a>
                    </li>
                    <li className="font-medium uppercase">
                        <a href="https://github.com/HugoJF">GitHub</a>
                    </li>
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
            <SectionHeading title="Minha stack">
                Minha atual stack favorita, com a qual tenho mais experiência.
            </SectionHeading>

            <ul className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
                {mainSkills.map((skill) => (
                    <li key={skill.name}>
                        <Icon iconName={skill.icon}/>
                        <h1 className="pb-2 text-xl">
                            {skill.name}
                        </h1>
                        <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
        </Section>

        <Section dark>
            <SectionHeading title="Tecnologias">
                Principais tecnologias que utilizo nos meus projetos
            </SectionHeading>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {skills.map(skill => (
                    <li key={skill.name}>
                        <a className="duration-150 flex flex-col gap-1 h-full p-4 rounded-lg">
                            <ul className="flex gap-2">
                                {skill.icons.map(icon => <Icon key={icon} iconName={icon}/>)}
                            </ul>
                            <h2 className="text-lg font-medium">{skill.name}</h2>
                            <p className="dark:text-gray-300 text-gray-700">{skill.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </Section>

        <Section>
            <SectionHeading title="Eu também uso" className="mt-8">
                Outras ferramentas e tecnologias que considero indispensáveis
            </SectionHeading>
            <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2 mt-8">
                {others.map(other => <li
                    key={other.name}
                    className="duration-150 rounded-lg"
                >
                    <a className="flex flex-col items-center gap-2 p-4">
                        <Icon size={50} iconName={other.icon}/>
                        <h2 className="text-center text-lg ">{other.name}</h2>
                    </a>
                </li>)}
            </ul>
        </Section>

        <Section dark className="flex-col">
            <SectionHeading title="Experiência profissional"/>
            <ul className="mt-8">
                <TimelineItem
                    from="2022"
                    to="Hoje"
                    title="Engenheiro de Software — CESAR"
                >
                    Atuei como desenvolvedor fullstack com as stacks Ember.js com Ruby on Rails e React com Java.
                </TimelineItem>
                <TimelineItem
                    from="2021"
                    to="2022"
                    title="Desenvolvedor web fullstack — Tokenlab"
                >
                    Atuei como desenvolvedor frontend utilizando Angular e React, desenvolvedor backend utilizando
                    NestJS e Serverless Framework e também foi responsável pela infraestrutura cloud de projetos
                    internos.
                </TimelineItem>
                <TimelineItem
                    from="2021"
                    to="2021"
                    title="Estagiário web — Tokenlab"
                >
                    Atuei exclusivamente como desenvolvedor frontend utilizando Angular, com foco nos estudos e ramp-up
                    dos processos de agilidade e tecnologias (AWS e Nest.js) que eram utilizados na empresa .
                </TimelineItem>
                <TimelineItem
                    from="2017"
                    to="2021"
                    title="Desenvolvedor web fullstack"
                >
                    Responsável pela gestão de 3 servidores bare-metal utilizados na hospedagem de servidores públicos
                    de Counter-Strike: Global Offensive.
                    Desenvolvi sistemas de monitoramento de rede, assinatura e pagamento, gestão de configurações e
                    deploy, broker de eventos customizado, estatística de jogadores, automação de denúncias e outros
                    sistemas de suporte.
                    Atuei utilizando Laravel e React como stack principal, mas também utilizei Node.js, SourcePawn e
                    Python. Também tive responsabilidades de atendimento aos usuários, design, DevOps, e gestão
                    financeira.
                </TimelineItem>
            </ul>
        </Section>
        <Section className="flex-col">
            <SectionHeading title="Formação"/>
            <ul className="mt-8">
                <TimelineItem
                    from="2016"
                    to="2024"
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

            <ul className="grid grid-cols-2 gap-8 mt-8">
                <ProjectSummary
                    name="Game Hosting Panel"
                    image={GameHostingPanel1}
                    icons={['laravel', 'react', 'docker', 'github-actions', 'tailwindcss', 'mariadb']}
                    repository="https://github.com/HugoJF/game-hosting-panel"
                    hasDetails={false}
                    odd
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
                <ProjectSummary
                    name="Mercado Escola"
                    image={MercadoEscola1}
                    icons={['laravel', 'react', 'aws', 'serverless', 'github-actions', 'tailwindcss', 'mysql']}
                    repository="https://github.com/HugoJF/mercado-escola-frontend"
                    hasDetails={false}
                >
                    <p>
                        Desenvolvido em Laravel, React e TailwindCSS, hospedado com CapRover e com sistema storage
                        Minio, tenta imitar a experiência de um aplicativo nativo com um design único, com objetivo de
                        fornecer um sistema para automação da logística do projeto Mercado Escola com uma interface
                        fácil e intuitiva.</p>
                    <p>
                        O sistema permite que qualquer usuário cadastre um endereço e realize pedidos (entrega ou
                        retirada) dos produtos disponíveis pela plataforma, esses pedidos são então compilados em uma
                        lista bruta de projetos para que os coordenadores do projeto possam entrar em contato com
                        fornecedores e no final do período de vendas, realizar as entregas.
                    </p>
                </ProjectSummary>
                <ProjectSummary
                    name="Cache Simulator"
                    image={CacheSimulator1}
                    icons={['react', "docker", 'github-actions', 'vite']}
                    repository="https://github.com/HugoJF/cache-simulator"
                    hasDetails={false}
                    odd
                >
                    <p>Simulador funcional de memórias caches para ser utilizado como ferramenta de apoio ao ensino de
                        Arquitetura de Computadores e disciplinas afins nos cursos de Computação. Desenvolvido em React
                        com objetivo de facilitar utilização por alunos novos, eliminando problemas de incompatibilidade
                        e configuração.</p>
                    <p>Desenvolvimento juntamente com ferramentas auxiliares baseadas em Valgrind para <i>tracing</i> de
                        aplicações reais para servirem como entrada para o simulador.</p>
                    <p>Trabalho publicado e aceito na IEEE Frontiers in Education Conference 2025.</p>
                </ProjectSummary>
                <ProjectDescription
                    name="twitch-clip-downloader"
                    icons={['typescript']}
                    repository="https://github.com/HugoJF/twitch-clip-downloader"
                >
                    Biblioteca Node.JS completa para automação de downloads de <i>clips</i> da Twitch. Desenvolvido para
                    backup em grande escala, incluindo suporte para metadados e dados analíticos disponíveis via API
                    interna.
                </ProjectDescription>
                <ProjectDescription
                    name="AWS Spot Gaming"
                    icons={['aws']}
                    repository="https://github.com/HugoJF/aws-spot-gaming"
                >
                    Stack em AWS CDK para deploy via CloudFormation de servidores de jogos utilizando EC2 Spot
                    Instances. Baseado em ECS com storage em EFS e backups em S3 utilizando DataSync.
                </ProjectDescription>
                <ProjectDescription
                    name="CHIP-8"
                    icons={['react', 'typescript']}
                    repository="https://github.com/HugoJF/chip-8"
                >
                    Emulador de CHIP-8 utilizando Javascript e interpretação de instruções via expressões regulares.
                </ProjectDescription>
                <ProjectDescription
                    name="csgo-pipeline"
                    icons={['redis', 'laravel', 'bootstrap']}
                    repository="https://github.com/HugoJF/csgo-pipeline"
                >
                    Sistema de ingestão de alta performance de eventos de servidores de CS:GO/CS2 utilizando Redis.
                    Implementa diversos filtros e filas para integração com outros sistemas.
                </ProjectDescription>
            </ul>
        </Section>
        {/*<Section>*/}
        {/*    <FinalCta/>*/}
        {/*</Section>*/}
    </>
}

export default Home
