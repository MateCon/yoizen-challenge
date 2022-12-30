# Yoizen Challenge

Creado por Mateo Ziffer

## Setup

-   Clonar el repositorio
-   Correr `npm install` para instalar todas las dependencias
-   Correr `npm start` para iniciar la aplicación o `npm run dev` para iniciarla en modo desarrollo

## Posibles mejoras

Estas son algunas posibles mejoras que podría agregar a la aplicación si es necesario.

-   La información para saber si una computadora esta logueada se está guardado en una variable global en `/src/controllers/authController.ts`. Esto idealmente estaría guardado en una base de datos, ya que al reiniciar el servidor todos los datos de loguin se perderán.
-   Si se agrega una base de datos y eventualmente un frontend pueden surgir algunos inconvenientes que podrían ser resueltos manejando todos los servicios con docker y docker-compose.

## Docs

Esta es una pequeña documentación de los endpoints que se encuentran en la aplicación, y si se está ejecutando localmente, todas las urls comienzan por `https://localhost:8080`.

### POST /login

El body debería tener la siguiente forma: { email: string, password: string }

### GET /client/id/:id

El :id debe ser reemplazado por el string de id del usuario, por ejemplo: GET /client/id/364b59fa-ecfb-41cb-abbf-7b3f4b05bd93

### GET /client/name/:name

El :name debe ser reemplazado por el string de nombre del usuario, por ejemplo: GET /client/name/Robbie

### GET /policy/:name

El :name debe ser reemplazado por el string de nombre del usuario, por ejemplo: GET /policy/name/Ines
