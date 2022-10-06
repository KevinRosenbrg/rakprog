const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

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

  router.get('/', getMiddleWare, todoController.read)
  // router.post('/:name', todoController.post) // tekib ERROR
  router.put('/:name', todoController.update)
  router.delete('/:name', todoController.delete)
  
  module.exports = router