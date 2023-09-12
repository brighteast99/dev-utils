const router = require('express').Router()

router.get('/api', (req, res) => res.render('api'))

module.exports = router
