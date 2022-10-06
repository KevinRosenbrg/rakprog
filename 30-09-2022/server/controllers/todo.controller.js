const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: String,
    date: String,
    importance: String, // peaks olema number
    complited: String
});

const Todo = mongoose.model('Todo', todoSchema);


exports.create = async (req, res) => {
   const { name } = req.params

   const todo = await Todo.create({ name })

   res.send(todo)
}
exports.read = async (req, res) => {
    const todo = await Todo.find({}, { _id:0, _v:0 })
    res.send(todo)
}
exports.update = (req, res) => {
   
}
exports.delete = (req, res) => {
    
    res.send('delete')
}