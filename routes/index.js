const router = require('express').Router();
const apiRoutes = require('./api');
// const htmlRoutes = require('./html');

router.use('/api', apiRoutes);
// router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = router;