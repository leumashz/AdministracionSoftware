### Información sobre las peticiones que se pueden hacer a la aplicacion
##### url base: http://localhost:3000  ,tomando en cuenta una url local

#### Sobre platillos  
|METODO | URL           | QUE HACE                                                  |
|-------|---------------|-----------------------------------------------------------|
| GET   | /platillos    | devuelve un objeto JSON con todos los platillos           |
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
