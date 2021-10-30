const router = require('express').Router();
const { Teacher } = require('../../models');
const argon2 = require('argon2');
const { validatePassword } = require('../../utils/helpers');

router.get('/', (req, res) => {
  Teacher.findAll({})
    .then(dbTeacherData => {
      res.json(dbTeacherData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// sign up
router.post('/', async (req, res) => {
  let hashedPassword = await argon2.hash(req.body.password, {
    type: argon2.argon2id,
    hashLength: 50
  });

  Teacher.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPassword
  })
    .then(dbTeacherData => {
      req.session.save(() => {
        req.session.id = dbTeacherData.id;
        req.session.first_name = dbTeacherData.first_name;
        req.session.loggedIn = true;
      })
      res.json({message: 'You are now logged in'})
    })
    .catch(err => {
      res.status(500).json({
        msg: `Something went wrong: ${err}`,
      });
    });
});

router.post('/login', (req, res) => {
  // proceed to find teacher via email address
  Teacher.findOne({
    where: {
      email: req.body.email
    }
  }).then(async dbTeacherData => {
    if (!dbTeacherData) {
      res.status(404).json({ message: 'No user with that email address!' });
      return;
    }
    // console.log(await dbTeacherData.checkPassword(req.body.password) + 'LOG 4 line 61');
    if (await dbTeacherData.checkPassword(req.body.password)) {
      res.json({ user: dbTeacherData, message: 'You are now logged in!' });
    } else {
      res.status(404).json({ message: 'Password incorrect!' });
      return;
    }
  })
    .catch(err => { console.log(err) });
});



//   const validPassword = dbTeacherData.checkPassword(req.body.password);

//   if (!validPassword) {
//     res.status(400).json({ message: 'Incorrect password!' });
//     return;
//   }

// req.session.save(() => {
//   req.session.user_id = dbUserData.id;
//   req.session.username = dbUserData.username;
//   req.session.loggedIn = true;

// });
// });
//   });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;