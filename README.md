# API REST
## Sistema para compartir datos de Tienda Perú

**Requerimientos**
1. Instalación NodeJS (V20 o superior)
2. Acceso a Internet (Instalar dependencias)
3. Clone el repositorio, y ejecute ```npm install```
4. Requerimos el archivo ```.env```

```
PORT=3000
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_CONNECTION_LIMIT=10
```
5. Necesitamos la tabla _productos_

```sql
create table if not exists productos
(
	id 			INT unsigned NOT NULL auto_increment primary KEY,
    marca		varchar (100) 	not null,
    descripcion varchar (200)	not null,
    precio		decimal (10,2)	not null,
    stock		int unsigned 	not null default 0,
    create_at	datetime 		not null default now(),
    update_at	datetime		null
)engine = INNODB;
```
6. Ejecutar el proyecto escribiendo: ```node src/server```
7. utilice **Postman** o cualquier software similar para
realizar el TEST

[Descargar Postman](https://WWW.postman.com/product/api-client/)
