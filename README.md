# BDNR - Analytics - Junio 2024

## Integrantes
- Farid Hanna (262622)
- Mateo Saravia (255917)

## Descripción
Este repositorio contiene la implementación del subsistema de analytics para la plataforma Steam. El subsistema permite
ingresar, almanecenar y consultar datos sobre el comportamiento de los usuarios, tendencias de juegos, popularidad de géneros, entre otros.

## Guía de Instalación

### Requisitos
- Docker
- Docker Compose
- Node.js

### Pasos para configurar el proyecto

1. Clonar el repositorio
    ```
    git clone https://github.com/mateosaravia/analytics_255917_262622.git
    ```

2. Ubicarse en la carpeta `backend`
    ```
    cd backend
    ```

3. Crear y ejecutar los contenedores de Docker
    ```
    docker-compose up --build
    ```

Espere a que los contenedores se creen y ejecuten correctamente (principalmente el contenedor de vertica)

4. La API estará disponible en `http://localhost:3000`

5. Ubicarse en la carpeta `frontend`
    ```
    cd ..
    cd frontend
    ```

6. Instalar las dependencias
    ```
    npm install
    ```

7. Iniciar la aplicación
    ```
    npm start
    ```

8. La aplicación estará disponible en `http://localhost:3001`

## Pasos para interactuar con vertica

1. Ingresar a la consola del contenedor de vertica
    ```
    docker exec -it {idContenedor} bash
    ```

2. Ingresar a la consola de vertica
    ```
    vsql -U dbadmin -w password -h vertica-ce -p 5433
    ```

3. Interactuar con los distintos scrpits de creación de tablas, inserción de datos, etc.
    ````
    \i /scripts/schema.sql
    \i /scripts/users.sql
    ...
    