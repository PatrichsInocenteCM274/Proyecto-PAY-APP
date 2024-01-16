const dbConnection = require('../../config/dbConnection');
const cors = require('cors');
require('../../config/dbConnection');

require('dotenv').config()
const express = require("express");
const { json } = require('body-parser');

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const endpointSecret = process.env.ENDPOINT_SECRET

module.exports = app => {

    app.use(cors());

    const connection = dbConnection();
    
    // The next get method show all transactions:
    app.get('/get_transactions', (req, res) => {
        connection.query('SELECT * FROM transactions', (err, result) => {
            console.log(result);
            res.json(result);
        });
    });


    // The next post method search the history of a especific transaction:
    // BODY PARAMETERS:
    //       Key      |    Value
    // --------------------------------
    // id_transaction |  <varchar>
    app.post('/history_transaction', (req,res) => {
        const {id_transaction} = req.body;
        connection.query('SELECT * FROM transactions WHERE id_transaction=?',
        id_transaction, 
         (err, result) => {
            if(err)
                console.log(err);
            if(result.length!==0){
                res.json(result);
            }
            else
            res.json("transaction not found");
        });
    });

    // The next post method create a transaction:
    // BODY PARAMETERS:
    //       Key      |    Value
    // --------------------------------
    //      amount    |  <int>
    //      currency  |  <string>
    app.post("/create-checkout-session", async (req, res) => {
    try {
        const {amount,currency} = req.body;
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
                price_data: {
                    currency: currency,
                    unit_amount: amount*100, // Here, I converted the amount in the correct scale (USD * 100)
                    product_data: {
                        name: "Producto",
                    }
                },
                quantity: 1
            }
        ],
        success_url: `http://192.168.1.36:8080/confirmed`,
        cancel_url: `http://192.168.1.36:8080/canceled`,
        })

        // Don't forget register this created session in the clever cloud database,
        // the following code does that:
        connection.query('INSERT INTO transactions SET?', {
            id_transaction:session.id,
            state_transaction:"created",
            time: new Date()
        }, (err, result)=>{});

        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
    })

    // The next get method show details about especific session transactions:
    app.post('/info_transaction',async (req, res) => {
        const {id_transaction} = req.body;
        try {  
        const session = await stripe.checkout.sessions.retrieve(id_transaction);
        res.json(session);
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    });


    // The next post method save a paid transaction in the clever cloud database 
    // stripe send a webhook to this route.
    app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
        const sig = request.headers['stripe-signature'];

        let event;

        try {
            event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        } catch (err) {
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
            const checkoutSessionCompleted = event.data.object;
            const sessionId = checkoutSessionCompleted.id;
            const paymentStatus = checkoutSessionCompleted.payment_status;
            if (paymentStatus === 'paid') {
                connection.query('INSERT INTO transactions SET?', {
                    id_transaction:sessionId,
                    state_transaction:paymentStatus,
                    time: new Date()
                }, (err, result)=>{});
            } 
            
            break;
            // ... handle other event types
            default:
            console.log(`Unhandled event type ${event.type}`);
        }

        // Return a 200 response to acknowledge receipt of the event
        response.send();
    });



}
