// CRUD

let hellos = ['Greetings']

exports.create = (req, res) => {
    const { name } = req.params

    hellos.push(name)
    res.send(hellos)
}
exports.read = (req, res) => {
    console.log(req.user)
    res.send('read')
}
exports.update = (req, res) => {
    const { name } = req.params

    hellos = hellos.map((hello) => {
        if (hello === name) {
            return hello + '_updated'
        }
        return hello
    })
    res.send(hellos)
}
exports.delete = (req, res) => {
    // siia teha ise kustutamine

    
    res.send('delete')
}
