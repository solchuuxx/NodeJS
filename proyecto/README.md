## Node

1) npm init o npm init -y

2) Instalar nodemon en desarrollo:
`npm install --save-dev nodemon`

3) Modificar package.json:
"scripts": {
"dev": "nodemon src/index.js",
"start": "node src/index.js",
}

4) Para importar de esta forma "import { node } from './objects';", agregar en package.json lo siguiente:
"type": "module",

5) Crear archivo .env, instalar e importar dotenv en un archivo js necesario.
import { config } from 'dotenv';
import env from 'env-var';

Herramientas:
Express: Proporciona una capa de abstracicon sobre el manejo de solicitudes HTTP y rutas, lo que permite a los desarrolladores definir facilmente rutas, manejar solicitudes y respuestas, configurar middlewares para agregar funcionalidades adicionales. Va de la mano con Node cuando se habla de una API REST.
MongoDB: Es una base de datos que almacena datos en formato de documentos JSON, permitiendo una alta flexibilidad y escalabilidad.
Mongoose: Biblioteca de modelado de datos para Node.js que se utiliza comunmente con MongoDB. Proporciona una forma sencilla y flexible de definir esquemas de datos, realizar validaciones y realizar operaciones de base de datos. Con Mongoose, los desarrolladores pueden interactuar con la base de datos MongoDB de manera intuitiva y escribir codigo mas limpio y legible al definir la estructura y las relaciones de los datos de la aplicación.
Railway: Plataforma en la nube que simplifica el proceso de implementacion y administracion de aplicaciones web y API desarrolladas en Node.js. Proporciona herramientas y servicios integrados, como alojamiento, bases de datos y gestion de entornos, permite a los desarrolladores centrarse en la creación de sus aplicaciones sin tener que preocuparse por la configuracion de la infraestructura.
Docker: Es una plataforma que permite empaquetar, distribuir y ejecutar aplicaciones en contenedores. La ejecución de MongoDB en Docker implica la descarga de una imagen de MongoDB desde el registro de Docker y luego la creación y ejecución de un contenedor basado en esa imagen. 
Body-Parcer: Middleware de Express.js que analiza los cuerpos de las solicitudes entrantes en middleware antes de que se manejen las solicitudes de sus manejadores. 
¿Que es un middleware? Es una funcion que se ejecuta entre la solicitud de un cliente y la respuesta del servidor, proporcionando una forma flexible de manejar diversas tareas y funcionalidades en una aplicacion web o API.

¿Que son codigos HTTP?
Conjunto de codigos de estado estandar que se utilizan para comunicar el resultado de una solicitud realizada por un cliente a un servidor web.



