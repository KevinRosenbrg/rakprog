const mongoose = require('mongoose')

const doggieSchema = new mongoose.Schema({
    name: String
});

const Doggie = mongoose.model('Doggie', doggieSchema);


exports.create = async (req, res) => {
   const { name } = req.params

   const doggie = await Doggie.create({ name })

   res.send(doggie)
}
exports.read = async (req, res) => {
    const doggie = await Doggie.find({}, { _id:0, _v:0 })
    res.send(doggie)
}
exports.update = (req, res) => {
   
}
exports.delete = (req, res) => {
    
    res.send('delete')
}