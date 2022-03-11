let router = require('express').Router();
let controller = require('../controllers/PagesController');

router.get('/', controller.homepage)
router.get('/about', controller.about)

module.exports = router