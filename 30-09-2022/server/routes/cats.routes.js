const express = require('express')
const router = express.Router()
const catsController = require('../controllers/cats.controller')

// middleware that is specific to this router
router.use((req, res, next) => {
    const { name } = req.body

    if (name !== 'Kevin') throw new Error('Noup')

    req.user = {
        name: 'Kevin',
        role: 'Owner',
    }

    console.log('Time: ', Date.now())
    next()
  })

  const getMiddleWare = (req, res) => {
    console.log('Getting DB result for req.user')
    next()
  }

  router.get('/', getMiddleWare, catsController.read)
  // router.post('/:name', catsController.post) // tekib ERROR
  router.put('/:name', catsController.update)
  router.delete('/:name', catsController.delete)
  
  module.exports = router