const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('Hola inge karen'))

app.listen(3000);

