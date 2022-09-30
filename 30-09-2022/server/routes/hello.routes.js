const express = require('express')
const router = express.Router()
const helloController = require('../controllers/hello.controller')

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

  router.get('/', getMiddleWare, helloController.read)
  // router.post('/:name', helloController.post) // tekib ERROR
  router.put('/:name', helloController.update)
  router.delete('/:name', helloController.delete)
  
  module.exports = router