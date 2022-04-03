## PRUEBA TECNICA ANDRES MURGO

_Api que se conecta con una Mongo, tiene un servicio de login que hace uso de JWT, y tambien expone data de dos Apis publicas, y tiene implementada una paginacion en el endpoint de photos_


## USUARIOS
_Hay dos tipos de usuarios, ADMIN_ROLE Y USER_ROL_
Las rutas de las apis estan protegidas mediante middelewares que piden un JTW y que seas admin, a continuacion dejo los usuarios para logear:
1.  ADMINISTRADOR
```
"correo":"andresmurgo@gmail.com",
"password":"123456"
```
2. USUARIO NORMAL
```
"correo":"gabrielmurgo@gmail.com",
"password":"123456"
```
3. SWAGGER
```
 Cualquier duda esta documentada la api por un Swagger:
 https://back-adres-murgo-conexa.herokuapp.com/swagger

```
4. POSTMAN
```
 Dejo la publicacion de la collection de Postman para que puedan probar la API:
 https://documenter.getpostman.com/view/16618387/UVyswaso

```
4. HEROKU
```
 La api se encuentra subida a heroku, en la collection de postman encontraran los Curls correspondientes

```