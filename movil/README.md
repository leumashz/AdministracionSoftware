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
      ```
        $ sudo npm install -g cordova
      ```
  + Instale el más reciente de [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) (no sólo el JRE). A continuación, cree una variable de entorno de **JAVA_HOME** apuntando a la carpeta raíz donde se instaló el JDK de Java. Por lo tanto, si ha instalado el JDK en **C: \ Archivos de programa \ Java \ JDK7**, establezca **JAVA_HOME** ser este camino. Después de eso, agregar el directorio bin del JDK a la variable PATH también. Siguiendo el supuesto anterior, esto debe ser **% JAVA_HOME% \ bin** o la ruta completa **C: \ Archivos de programa \ Java \ JDK7 \ bin**.
  + Tenemos que instalar Apache Ant, podemos  descargar un zip de [aquí](http://ant.apache.org/bindownload.cgi), extraerlo, mueva la primera carpeta en el zip a un lugar seguro, y actualizar su PATH para incluir la carpeta **bin** en esa carpeta. Por ejemplo, si ha movido la carpeta Hormiga en **c: /**, te gustaría añadir esto a su PATH: **C: \ apache-ant-1.9.2 \ bin**.
  + Instalación del [SDK](http://developer.android.com/sdk/index.html) de Android también es necesaria. El SDK de Android proporciona las bibliotecas API y herramientas de desarrollo necesarias para construir, probar y depurar aplicaciones para Android. Córdoba requiere la variable de entorno ANDROID_HOME a establecer. Esto debería apuntar a la **[ANDROID_SDK_DIR] \android-sdk** (por ejemplo **c: \ android \ android-sdk**). A continuación, actualizar su PATH para incluir las **tools/** y  **platform-tools/**  en esa carpeta. Así, utilizando ANDROID_HOME, deberá añadir ambos **% ANDROID_HOME%\tools** y **%ANDROID_HOME%\platform-tools**.
  + Instalar Ionic
  ```
  $ sudo npm install -g ionic
  ```
  + Clonar el respositorio.
  + Situarse por medio de la consola en la carpeta del repositorio, o abrir la carpeta del repositorio y presionar shift + clic derecho y seleccionar abrir consola desde aqui (open cmd here).
  + Ejecutar
  ```
  ionic serve
  ```
  + Podremos ya ver como va quedando la aplicacion Movil.
