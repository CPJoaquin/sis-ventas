USE db_tienda;
CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY key,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL

);