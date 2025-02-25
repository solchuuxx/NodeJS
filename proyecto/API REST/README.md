# API REST

Luego de realizar lo primordial para tener un servidor inicial en NODE, hacer lo siguiente para docker:

1) crear archivo docker-compose.yml con los siguientes datos:
version: '3.8'

services:
 mongo-db:
    image: mongo:6.0.13
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
    volumes:
      - ./mongo:/data/db
    ports:
      - 27017:27017

2) Abrir docker desktop y en la terminal del servidor ejecutar el siguiente comando:
docker compose up -d

3) En MongoDB compass, agregar una nueva conexión con la uri puesta en .env, ejemplo: mongodb://pepe:1234@localhost:27017

4) Poner a correr el servidor node y estará listo para agregar datos desde postman.

