const express = require('express');
const bodyParser = require('body-parser;');
const ap =express();

//parser application json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});