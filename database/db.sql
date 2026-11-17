create database tiendaperu;
use tiendaperu;
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


-- TABLA CLIENTES
CREATE TABLE IF NOT EXISTS clientes
(
id				INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
apellidos		VARCHAR(100) NOT NULL,
nombres			VARCHAR(100) NOT NULL,
telefono		char(9) NOT NULL,
direccion		VARCHAR(200) NOT NULL,
email			VARCHAR(150) NOT NULL,
create_at	DATETIME			NOT NULL DEFAULT NOW(),
update_at	DATETIME			NULL
)ENGINE = INNODB;



-- TABLA PROVEEDORES
CREATE TABLE IF NOT EXISTS proveedores
(
id				INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
razonsocial		VARCHAR(200) NOT NULL,
contacto		VARCHAR(100) NOT NULL,
ruc				CHAR(11) NOT NULL,
direccion		VARCHAR(200) NOT NULL,
create_at	DATETIME			NOT NULL DEFAULT NOW(),
update_at	DATETIME			NULL
)ENGINE = INNODB;



insert into productos 
(marca, descripcion, precio, stock)
values
('Samsung', 'TV 55', 2500, 10),
('LG', 'Lavadora', 1200, 3),
('Sony', 'Playstation 5', 3200, 2);

select * from productos 


-- INSERT CLIENTES

INSERT INTO clientes 
    (apellidos, nombres, telefono, direccion, email) 
VALUES 
    ('Suarez Moreno', 'Samuel Alejandro', '908765243', 'Av. America 111, chincha','suarezmsa@gmail.com'),
    ('Medrano Cueto', 'Jesus Antonio', '987123274', 'Calle el roble 301, El carmen','jesusmda@gmail.com'),
    ('Munayco Magallanes', 'Daniel Jose', '908673211', 'Al lado de cofte taurino, Grocio prado','munaycomd@gmail.com');

SELECT * FROM clientes;



-- INSERT PROVEEDORES

INSERT INTO proveedores 
    (razonsocial, contacto, ruc, direccion) 
VALUES 
    ('Distribuidora Andina S.A.C', 'Jorge Luna', '20509945678', 'Av. Industrial 999, Lima'),
    ('Importaciones DTI E.I.R.L', 'Elver Jose', '20498765432','Av, Argentina 888, Lima'),
    ('TecnoServis S.A', 'Eva Ramos', '20556677889', 'Jr. Lima 444, Chincha');

SELECT * FROM proveedores;
