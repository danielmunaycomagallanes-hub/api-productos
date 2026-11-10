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

insert into productos 
(marca, descripcion, precio, stock)
values
('Samsung', 'TV 55', 2500, 10),
('LG', 'Lavadora', 1200, 3),
('Sony', 'Playstation 5', 3200, 2);

select * from productos 