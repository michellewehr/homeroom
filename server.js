const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const exphbs = require('express-handlebars');
const { mainModule } = require('process');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({  });

app.use(require('./controllers/'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
