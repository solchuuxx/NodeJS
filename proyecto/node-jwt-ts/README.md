## Proyecto Node en Typescript

1) instalar dependencias
npm i ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt @types/node rimraf prisma --save-dev

npm i express jsonwebtoken bcrypt @prisma/client dotenv typescript

2) iniciar proyecto typescript 

npx tsc --init --outDir dist/ --rootDir src

configurar lo siguiente en el archivo de ts:
  "exclude": ["node_modules", "dist"],
  "include": ["src"],

3) cambiar lo siguiente del packagejson para levantar el servidor sin hacer la transcripcion:
  "scripts": {
    "dev": "tsnd --respawn --clear src/server.ts"
  }

