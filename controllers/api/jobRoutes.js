const router = require('express').Router();
const { Job, User } = require('../../models');

router.get('/', (req, res) => {
    Job.findAll()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get('/job/:id', async (req, res) => {
    try {
      const jobData = await Job.findByPk(req.params.id, {
      });
  
      const job = jobData.get({ plain: true });
  
      res.render('post-details', {
        ...job,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        job_title: "Developer",
        salary: 200.00,
        description: "Javascript Developer"
        Skills: "Javascript"
      }
    */
    Job.create(req.body)
      .then((job) => {
        res.status(200).json(job);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
});
 

router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Job.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((results) => {
        // if no results, set status to 404 and inform user no results for that ID
        if (!results) {
          res.status(404).json({
            message: `No results found with ID ${req.params.id} found. Please try again with a different ID.`,
          });
          return;
        }
        // else, respond with results
        res.json(results);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;