const router = require('express').Router();
const { Teacher } = require('../../models');


router.get('/', (req, res) => {
    Teacher.findAll({})
        .then(dbTeacherData => {
            console.log(dbTeacherData)
            res.json(dbTeacherData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



// sign up
router.post('/', (req, res) => {
    Teacher.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbTeacherData => {
        req.session.save(() => {
          req.session.id = dbTeacherData.id;
          req.session.first_name = dbTeacherData.first_name;
          req.session.loggedIn = true;
    
          res.json(dbTeacherData)
        })
      })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Teacher.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbTeacherData => {
      if (!dbTeacherData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
    //   const validPassword = dbTeacherData.checkPassword(req.body.password);
  
    //   if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect password!' });
    //     return;
    //   }
  
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
    
        res.json({ user: dbTeacherData, message: 'You are now logged in!' });
      });
    });
//   });


// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   }
//   else {
//     res.status(404).end();
//   }
// });

module.exports = router;