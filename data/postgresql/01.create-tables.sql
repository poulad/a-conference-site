DROP TABLE IF EXISTS conference CASCADE;

CREATE TABLE conference ( 
   conf_id SMALLINT GENERATED ALWAYS AS IDENTITY,
   display_id VARCHAR(36) UNIQUE NOT NULL,
   name VARCHAR(100) NOT NULL,
   website VARCHAR(200),
   logo_url VARCHAR(1000),
   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
