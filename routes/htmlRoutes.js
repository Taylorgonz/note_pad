const path = require('path');

// routing

module.exports= (app) => {
    // => HTML GET requests
    // below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    })

// if no matching route is found default to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
};