# Next.js Task Management App

Para correr localmente, se necesita la base de datos ejecutar el script en db para crearla.

Yo use pgadmin para correr la DB y esta enlazada a un contenedor de Docker en el puerto 5432

# Docker

Es necesario instalar Docker y en windows tener activada la virtualizacion ir a

Programs and Features --> Turn Windows features on or off --> tildar Hiper-V

Si esto no funciona fijarse si la mother permite virtualizacion y si es asi
activarla via bios

docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env** de ser necesario
caso contrario revisar si las variables de entorno apuntan al back

- Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```
