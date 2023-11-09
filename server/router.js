const router = require('express').Router();
const mockData = require('./models/db');


router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/album', (req, res) => {
  res.sendFile(mockData[0].cover)
})

module.exports = router;