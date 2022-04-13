<<<<<<< HEAD
const router = require('express').Router();
const { Job, Employer, User } = require('../../models');

router.get('/', (req, res) => {
    Job.findAll({
      include: [{Employer: employer_name}],
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.get('/search/:posting', (req, res) => {
  // Job.findByPk
  Job.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((results) => {
      if (!results) {
        res.status(404).json({
          message: `No match for ${req.params.id}. Please try again with different ID.`,
        });
        return;
      }
      
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Add route

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
      .then((employer_id) => res.status(200).json(employer_id))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
 
//Delete

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
  
=======
const router = require('express').Router();
const { Job, Employer, User } = require('../../models');

router.get('/', (req, res) => {
    Job.findAll({
      include: [{Employer: employer_name}],
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.get('/search/:posting', (req, res) => {
  // Job.findByPk
  Job.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((results) => {
      if (!results) {
        res.status(404).json({
          message: `No match for ${req.params.id}. Please try again with different ID.`,
        });
        return;
      }
      
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Add route

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
      .then((employer_id) => res.status(200).json(employer_id))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
 
//Delete

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
  
>>>>>>> 21eb5abb5356b5d813fc3cade4be207933c448c5
  module.exports = router;