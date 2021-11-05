const router = require('express').Router();
const { Teacher } = require('../../models');
const argon2 = require('argon2');
// const { passValidate, passSchema, passConstraintsFunction } = require('../../utils/password');


router.get('/', (req, res) => {
  Teacher.findAll({

  })
    .then(dbTeacherData => {
      res.json(dbTeacherData);
    })
    .catch(err => {
      res.status(500).json({
        msg: `Sorry, this one's on our end. Try again? Error: ${err}`
      });
    });
});

// sign up
router.post('/', async (req, res) => {
  if (req.session.loggedIn) {
    return res.status(400).json({ msg: 'Already logged in.' })
  }

  const userPassword = req.body.password;

  // if (!await checkPasswordConstraints(userPassword)) {
  //   res.status(400).json({
  //     msg: `Password must be 8 characters, with one uppercase, one lowercase, one number, and one symbol.`
  //   });
  //   // return alert(`Password must be 8 characters, with one uppercase, one lowercase, one number, and one symbol.`);
  // }

  const hashedPassword = await argon2.hash(userPassword, {
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
        req.session.teacher_id = dbTeacherData.id;
        req.session.email = dbTeacherData.email;
        req.session.loggedIn = true;

        res.json(dbTeacherData);
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: `Sorry, this one's on our end. Try again? Error: ${err}`
      });
    });
});

router.post('/login', (req, res) => {
  if (req.session.loggedIn) {
    return res.status(400).json({ msg: 'Already logged in.' })
  }
  // proceed to find teacher via email address
  Teacher.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbTeacherData => {

    if (!dbTeacherData) {
      res.status(404).json({ message: 'No user with that email address!' });
      return;
    }

    const passwordIsCorrect = dbTeacherData.checkPassword(req.body.password)

    if (!passwordIsCorrect) {
      res.status(404).json({ message: 'Password incorrect!' });
      return;
    }

    req.session.save(() => {
      req.session.teacher_id = dbTeacherData.id;
      req.session.email = dbTeacherData.email;
      req.session.loggedIn = true;

      res.json(dbTeacherData);
    })

    if (req.session.views) {
      req.session.views++
    } else {
      req.session.views = 1
    }

  })
    .catch(err => {
      res.status(500).json({
        msg: `Sorry, this one's on our end. Try again? Error: ${err}`
      });
    });
});

router.post('/logout', (req, res) => {
  if (req.session.id) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;