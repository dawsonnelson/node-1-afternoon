const express = require('express');
const bodyParser = require('body-parser');
const messg = require('messages_controller')

const app = express();


app.use( bodyParser.json() );


app.post('/api/messages', mg.create);

app.get('/api/messages', mg.read);

app.put('/api/messages/:id', mg.update);

app.delete('/api/messages/:id', mg.delete);

const port = 3000;
app.listen( port, () => {
    { console.log(`Server listening on port ${port}`)}
})