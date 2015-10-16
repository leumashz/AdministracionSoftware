## Administracion Software (Movil)
### Integrantes
  + Beltran Anaya Luis Alberto
  + Garcia Zarate Samuel
  + Ibarra Quirarte Cesar Alejandro
  + Mondragon Robledo Diego Armando


### Instrucciones
  + Es necesario tener instalado nodejs(funciona tanto con la version antigua como con la mas ultima) y asegúrese de descargar e instalar Git para su sistema operativo.
  + Es necesario tener agregadas a las variables de entorno tanto nodejs como Git.
    + nodejs: agrega una variable de entorno, aunque es mejor verificar ejecutando node -v en una consola de windows .
  + Por medio de Node Package Manager (npm, que en muchos casos viene instalado por defecto cuando instalamos nodejs) instalamos Cordova.
    '''
      $ sudo npm install -g cordova
    '''
  + Clonar el respositorio.
  + Situarse por medio de la consola en la carpeta del repositorio, o abrir la carpeta del repositorio y presionar shift + clic derecho y seleccionar abrir consola desde aqui (open cmd here).
  + ejecutar npm install (esperar a que se terminen de instalar los modulos)
  + abrir otra consola y ejecutar: mongod
  + ahora en otra consola ejecutar: node app.js

El comando: mongod inicia el servicio de mongodb, debe estar corriendo en una consola independiente.

El comando: node app.js inicia la aplicación en http://localhost:3000
