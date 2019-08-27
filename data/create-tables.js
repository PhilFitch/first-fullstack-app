require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// note: you will need to create the database!

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE cart_pods (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL,
                no_of_carts VARCHAR(256) NOT NULL,
                seating BOOLEAN NOT NULL,
                location VARCHAR(256) NOT NULL
            );
    `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });