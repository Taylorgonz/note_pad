let db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
// routing

module.exports = (app) => {



    app.get('/api/notes', (req, res) => res.json(db))

    app.post('/api/notes', (req, res) => {
        const noteInput = req.body;
        noteInput.id = uuidv4();
        db.push(noteInput);
        res.json(true);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;

       for (let i = 0; i<db.length; i ++) {
           if( db[i].id === id ) {
               db.splice(i,1);
           }
       }
        // const deleted = db.find(db.id === id)




        // code to clear out data
    })
}