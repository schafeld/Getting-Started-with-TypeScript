# Getting-Started-with-TypeScript

Companion repository for "Getting Started with TypeScript", https://www.coursera.org/learn/getting-started-with-typescript/

## Install Typescript

check if installed/ which version: `npx tsc -v`

Install: `npm install typescript`

Set up Typescript configuration (`tsconfig.json`): `npx tsc --init`

## Use Typescript

Compile Typescript: `npx tsc` (finds files in / writes files to configured locations)

Run compiled script: `node dist/index.js`

Rund Typescript snippet directly, e.g.: `npx ts-node multiply.ts`
