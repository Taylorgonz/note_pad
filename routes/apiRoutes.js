let db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const id = uuidv4()
// routing

module.exports = (app) => {



    app.get('/api/notes', (req, res) => res.json(db) )

    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        res.json(true);
        console.log(req.body)
    });

    app.delete('/api/notes/:id', (req, res) => {
        res.json(db)
    }
    )

    // code to clear out data


};