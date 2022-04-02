## USUARIOS
_Hay dos tipos de usuarios, ADMIN_ROLE Y USER_ROL_
Las rutas de las apis estan protegidas mediante middelewares que piden un JTW y que seas admin, a continuacion dejo los usuarios para que logear:
_
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
 
```
4. POSTMAN
```
 Dejo la publicacion de la collection de Postman:

```
- _El secret normalmente es un parametro unico que se va modificando para que no capturen nuestra session_
- _El saveUninitialized es un parametro para que la sessión se guarde a pesar de no estar inicializada, conviene dejarla en false para que no ocupe espacio en la memoria de sessiones y sirve para casos de inicio de session_
- _El resave guarda sessiones que no fueron modificadas para mantenerlas vivas ya que estas sessiones cuentan con un tiempo de expiración_
4. Tenemos que usar también **cookie-parser** para poder implementar cookies en el sitio
```
npm i cookie-parser
```
5. Debemos implementarlo en el app.js como normalmente usamos middlewares
```
const cookieParser = require('cookieParser');

app.use(cookieParser());
```
6. Instalamos el modulo **bcryptjs** para poder encriptar la contraseña del usuario
_link a este modulo [acá](https://www.npmjs.com/package/bcryptjs)_
```
npm i bcryptjs
```
_Tené en cuenta que el modulo es bcryptjs y no bcrypt. El segundo es un modulo deprecado_
7. Tenemos que requerirlo en el lugar que lo vamos a implementar
_Ya que el punto en el que recibimos los datos ya filtrados es el controller, ahí mismo lo requerimos e implementamos_
```
const bcrypt = require('bcryptjs');
```
8. Normalmente los metodos que mas vamos a utilizar son los siguientes
```
let hash = bcrypt.hashSync("frase a hashear", 8) //hashea el dato que le pasemos
bcrypt.compareSync("frase a hashear", hash) // compara el dato que tenemos con el dato hasheado y devuelve true o false
```