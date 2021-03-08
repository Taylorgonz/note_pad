const path = require('path');
const express = require('express');
const router = express.Router();

// routing

    // => HTML GET requests
    // below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    })


    // if no matching route is found default to home
    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

module.exports = router;