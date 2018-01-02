CREATE TABLE burgers_db.burgers(
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    burger_name     VARCHAR(255) NOT NULL,
    devoured        BOOLEAN NOT NULL DEFAULT false,
    ordered         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATE_TS       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);