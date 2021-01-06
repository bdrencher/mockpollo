const express = require('express');
let app = express();

app.use(express.static('./dist/mockpollo'));
app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/mockpollo/'});
});

app.listen(process.env.PORT || 4201);