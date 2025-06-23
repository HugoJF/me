import Insomnia from "../public/insomnia.png";
import GitHubActions from "../public/github-actions.svg";
import Docker from "../public/docker.svg";
import React from "../public/react.svg";
import NextJSLight from "../public/nextjs-light.svg";
import NextJSDark from "../public/nextjs-dark.svg";
import Laravel from "../public/laravel.svg";
import PHP from "../public/php.svg";
import Nestjs from "../public/nestjs.svg";
import Typescript from "../public/typescript.svg";
import TailwindCSS from "../public/tailwindcss.svg";
import Angular from "../public/angular.svg";
import AWSLight from "../public/aws-light.svg";
import AWSDark from "../public/aws-dark.svg";
import Bootstrap from "../public/bootstrap.svg";
import Git from "../public/git.svg";
import MySQL from "../public/mysql.svg";
import MariaDB from "../public/mariadb.svg";
import DynamoDB from "../public/dynamodb.svg";
import Jest from "../public/jest.svg";
import Serverless from "../public/serverless.svg";
import MongoDb from "../public/mongodb.svg";
import Python from '../public/python.svg';
import Ansible from '../public/ansible.svg';
import Terraform from '../public/terraform.svg';
import Postgresql from '../public/postgresql.svg';
import Libsql from '../public/libsql.svg';
import Antd from '../public/antd.svg';
import Redis from '../public/redis.svg';
import Vite from '../public/vite.svg';
import Cypress from '../public/cypress.svg';
import Golang from '../public/golang.svg';

export const icons = {
    'insomnia': {alt: 'Insomnia', light: Insomnia},
    'github-actions': {alt: 'Github Actions', light: GitHubActions},
    'docker': {alt: 'Docker', light: Docker},
    'react': {alt: 'React', light: React},
    'nextjs': {alt: 'NextJS', light: NextJSLight, dark: NextJSDark},
    'laravel': {alt: 'Laravel', light: Laravel},
    'php': {alt: 'PHP', light: PHP},
    'nestjs': {alt: 'NestJS', light: Nestjs},
    'typescript': {alt: 'Typescript', light: Typescript},
    'tailwindcss': {alt: 'TailwindCSS', light: TailwindCSS},
    'angular': {alt: 'Angular', light: Angular},
    'aws': {alt: 'AWS', light: AWSLight, dark: AWSDark},
    'bootstrap': {alt: 'Bootstrap', light: Bootstrap},
    'git': {alt: 'Git', light: Git},
    'mysql': {alt: 'MySQL', light: MySQL},
    'mariadb': {alt: 'MariaDB', light: MariaDB},
    'dynamodb': {alt: 'DynamoDB', light: DynamoDB},
    'jest': {alt: 'Jest', light: Jest},
    'serverless': {alt: 'Serverless', light: Serverless},
    'mongodb': {alt: 'MongoDB', light: MongoDb},
    'python': {alt: 'Python', light: Python},
    'ansible': {alt: 'Ansible', light: Ansible},
    'terraform': {alt: 'Terraform', light: Terraform},
    'postgresql': {alt: 'PostgreSQL', light: Postgresql},
    'libsql': {alt: 'libSQL', light: Libsql},
    'antd': {alt: 'Ant Design', light: Antd},
    'redis': {alt: 'Redis', light: Redis},
    'vite': {alt: 'Vite', light: Vite},
    'cypress': {alt: 'Cypress', light: Cypress},
    'golang': {alt: 'Golang', light: Golang},
}

export const getIconsByKeys = (keys: IconName[]) => {
    return keys.map(key => icons[key])
}

export type IconName = keyof typeof icons;
