let db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();

// routing




    router.get('/notes', (req, res) => res.json(db))

    router.post('/notes', (req, res) => {
        const noteInput = req.body;
        noteInput.id = uuidv4();
        db.push(noteInput);
        res.json(true);
    });


    router.delete('/notes/:id', (req, res) => {
        const id = req.params.id;

       for (let i = 0; i<db.length; i ++) {
           if( db[i].id === id ) {
               db.splice(i,1);
           }
       }

       res.json(db);
       
    })

module.exports = router;