### Modelos en la base de datos
#### Menu
|ATRIBUTO 	| TIPO       | DESCRIPCION 			 |
|---------------|------------|-----------------------------------|			
| nombre    	| String     | nombre del platillo		 |  
| descripcion   | String     | info sobre el platillo            |  
| precio    	| Number     | Cuanto cuesta                     |
| url_img     	| String     | url de la imagen del platillo     |
| rating  	| Number     | calificacion            		 |
| tipo		| number     | tipo, 1 - bebida, 2 - tacos, etc. |

#### Orden
|ATRIBUTO 	| TIPO       | DESCRIPCION 			   	  |
|---------------|------------|--------------------------------------------|			
| estado   	| Number     | 1:nueva, 2:pagada, 3:entregada, etc        |  
| id_usuario    | Number     | id del usuario que hizo la orden           |  
| platillo      | [Platillo] | Arreglo de platillos que se ordenan        |  
| fecha    	| Number     | fecha y hora en la que se hizo el pedido   |
| total     	| Number     | cantidad a pagar por el usuario            |
| tipo  	| Number     | para llevar, entregar, por definir   	  |

#### Usuario
|ATRIBUTO 	| TIPO       | DESCRIPCION 			 |
|---------------|------------|-----------------------------------|			
| nombre    	| String     | nombre del usuario		 |  
| email 	| String     | correo del usaurio                |  
| tipo    	| Number     | tipo de cuenta                    |
| telefono     	| Number     | telefono de contacto              |
| fecha  	| Date       | fecha y hora de registro   	 |





### Información sobre las peticiones que se pueden hacer a la aplicacion
##### url base: http://localhost:3000  ,tomando en cuenta una url local


#### Sobre menu
|METODO | URL           | QUE HACE                                                  |
|-------|---------------|-----------------------------------------------------------|
| GET   | /menu   		| devuelve un objeto JSON con todos los platillos           |
| GET   | /platillo/:id | devuelve un objeto JSON con un platillo por id especifico |
| POST  | /platillo     | agrega un nuevo platillo a la base de datos               |
| PUT   | /platillo/:id | actualiza la información de un platillo mediante su id    |
| DELETE| /platillo/:id | elimina un platillo de la base de datos                   |
	
#### Sobre Ordenes
|METODO | URL           | QUE HACE                                                  |
|-------|---------------|-----------------------------------------------------------|
| GET   | /ordenes      | devuelve un objeto JSON con todas las ordenes             |
| GET   | /orden/:id    | devuelve un objeto JSON con una orden por id especifico   |
| POST  | /orden        | agrega una nueva orden a la base de datos                 |
| PUT   | /orden/:id    | actualiza la información de una orden mediante su id      |
| DELETE| /orden/:id    | elimina una orden de la base de datos                     |	

#### Sobre Usuarios
|METODO | URL           | QUE HACE                                                  |
|-------|---------------|-----------------------------------------------------------|
| GET   | /usuarios     | devuelve un objeto JSON con todos los usuarios            |
| GET   | /usuario/:id  | devuelve un objeto JSON con un usuario por id especifico  |
| POST  | /usuario      | agrega un nuevo usuario a la base de datos                |
| PUT   | /usuario/:id  | actualiza la información de un usuario mediante su id    |
| DELETE| /usuario/:id  | elimina un usuario de la base de datos                   |
