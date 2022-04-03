const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();

// POST to send feedback object to server:
router.post('/', (req, res) => {
  console.log('In feedback POST with', req.body);

    const feedback = req.body.reflection;

    const queryText =
    `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    
    const values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];
    
    pool.query(queryText, values)
        .then((result) => {
            console.log(`Added feedback to the database`, feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query for post`, error);
            res.sendStatus(500); // Good server always responds
        });
}); 

// GET all the feedback
router.get('/', (req, res) => {
  res.send(result.rows);
}); // END GET Route

module.exports = router;