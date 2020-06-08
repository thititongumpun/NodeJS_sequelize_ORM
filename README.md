
ORM use sequelize and MySQL


Create MySQL database

::

    $ create table task ( _id int(11) NOT NULL AUTO_INCREMENT,
    $ task varchar(255) NOT NULL, 
    $ date date NOT NULL,
    $ PRIMARY KEY (_id) )
    $ ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8

::

    $ create utils env.js
    $ const env = {
    database: 'databasename',
    username: 'username'
    password: 'password',
    host: 'host',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;



Follow the instructions:

::

    $ npm/yarn test connect db ?
    $ npm/yarn dev

:: 

    $ build image
    docker build -t <yourname/nodeapp> .
    $ run image
    docker run -d port/port <yourname/nodeapp>
