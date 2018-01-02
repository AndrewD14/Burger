create user 'burger_user'@'localhost' IDENTIFIED BY 'burgers';

GRANT UPDATE, DELETE, SELECT, INSERT ON BURGERS_DB.* to 'burger_user'@'localhost';