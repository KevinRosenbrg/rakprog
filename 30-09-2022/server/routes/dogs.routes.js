const express = require('express')
const router = express.Router()
const dogsController = require('../controllers/dogs.controller')

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

  router.get('/', getMiddleWare, dogsController.read)
  // router.post('/:name', dogsController.post) // tekib ERROR
  router.put('/:name', dogsController.update)
  router.delete('/:name', dogsController.delete)
  
  module.exports = router