const path = require('path');
const sequelize = require('./config/connection');

const cookieParser = require('cookie-parser')
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cookieParser())
const sess = {
  secret: process.env.SECRET_WORD,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});

require('dotenv').config();

app.use(require('./controllers/'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log('Now listening')
    console.log("===========================")
  });
});
