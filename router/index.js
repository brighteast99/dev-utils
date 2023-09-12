const router = require('express').Router()

router.get('/api', (req, res) => res.render('api'))
router.get('/unicode', (req, res) => res.render('unicode'))

module.exports = router
