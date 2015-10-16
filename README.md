## AdministracionSoftware
### Integrantes
  + Beltran Anaya Luis Alberto
  + Garcia Zarate Samuel
  + Ibarra Quirarte Cesar Alejandro
  + Mondragon Robledo Diego Armando


### Instrucciones
  + Es necesario tener instalado nodejs(funciona tanto con la version antigua como con la mas ultima) y mongodb (version 3 en adelante)
  + Es necesario tener agregadas a las variables de entorno tanto nodejs como mongodb.
    + mongo: http://funnyfrontend.com/instalar-mongodb-y-uso-de-comandos-basicos/
    + nodejs: agrega una variable de entorno, aunque es mejor verificar ejecutando node -v en una consola de windows .
  + Clonar el respositorio.
  + Situarse por medio de la consola en la carpeta del repositorio, o abrir la carpeta del repositorio y presionar shift + clic derecho y seleccionar abrir consola desde aqui (open cmd here).
  + ejecutar npm install (esperar a que se terminen de instalar los modulos)
  + abrir otra consola y ejecutar: mongod 
  + ahora en otra consola ejecutar: node app.js

El comando: mongod inicia el servicio de mongodb, debe estar corriendo en una consola independiente.

El comando: node app.js inicia la aplicación en http://localhost:3000

[Ver información sobre las peticiones a la base de datos](https://github.com/samuelgz/AdministracionSoftware/blob/master/API.md)
