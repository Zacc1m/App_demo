
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || '3000';


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {

    const { portfolio } = req.params;
    res.render('portfolio', {portfolio});

});

app.get('/portfolio/photography', (req, res) => {
    const { photography } = req.params;
    // const data = photoData[photography];
    if(data) {
        res.render('photography', { ...data })
    }

});

app.get('/portfolio/photo', (req, res) => {
    res.render('photo')


});


app.set("port", PORT);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
