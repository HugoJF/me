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

export const icons = {
    'insomnia': {light: Insomnia},
    'github-actions': {light: GitHubActions},
    'docker': {light: Docker},
    'react': {light: React},
    'nextjs': {light: NextJSLight, dark: NextJSDark},
    'laravel': {light: Laravel},
    'php': {light: PHP},
    'nestjs': {light: Nestjs},
    'typescript': {light: Typescript},
    'tailwindcss': {light: TailwindCSS},
    'angular': {light: Angular},
    'aws': {light: AWSLight, dark: AWSDark},
    'bootstrap': {light: Bootstrap},
    'git': {light: Git},
    'mysql': {light: MySQL},
    'mariadb': {light: MariaDB},
    'dynamodb': {light: DynamoDB},
    'jest': {light: Jest},
    'serverless': {light: Serverless},
}

export type IconName = keyof typeof icons;
