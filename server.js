// Dependencies

const express = require('express');
const path = require('path');
const db = require('./db/db.json')
// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
    console.log(db);
})



