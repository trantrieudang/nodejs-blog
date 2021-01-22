const express = require('express');
const app = express();
const port = 3500;
//routes
app.get('/', (req, res) => res.send('Hello World!'));

//127.0.0.1 (dns)- ánh xạ localhost 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));