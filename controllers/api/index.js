const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/users', userRoutes);
router.use('/posts', jobRoutes);

module.exports = router;