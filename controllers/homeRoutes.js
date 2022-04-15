const router = require('express').Router();
const { Employer, User, Job } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    console.log('profile')
    console.log(req.session)
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    console.log(userData)
    const user = userData.get({ plain: true });
    console.log(user)
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts', withAuth, async (req, res) => {
  try {
    console.log('posts')
    res.render('posts', {
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/listings', withAuth, (req, res) => {
  Job.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  })
  .then((results) => {
    console.log(results)
    const jobsData = results.map((job) => job.get({ plain: true }));
    console.log(jobsData)
    res.render('listings', {
      jobsData, 
      logged_in: true
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
