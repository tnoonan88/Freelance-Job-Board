const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/users', userRoutes);
<<<<<<< HEAD

module.exports = router;
=======
router.use('/jobs', jobRoutes);

module.exports = router;
>>>>>>> dfb7f1138ddbeaad445c2585186eceac0912b42b
