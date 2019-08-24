require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const cartPods = require('./cart-pods');
// note: you will need to create the database!
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        // "Promise all" does a parallel execution of async tasks
        return Promise.all(
            cartPods.map(pod => {
                return client.query(`
                    INSERT INTO cart_pods (name, no_of_carts, seating, location)
                    VALUES ($1, $2, $3, $4);
                `,
                [pod.name, pod.noOfCarts, pod.seating, pod.location]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });