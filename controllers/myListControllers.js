const db = require("../models");

module.exports = {
    findById: function (req, res) {
        db.ListMovie.find({ movieId: req.params.id })
            .then(data => { res.json(data) })
            .catch(error => res.json(error))
    },

<<<<<<< HEAD
    create: function (req,res)
    {db.ListMovie.create(req.body)
    // .then(({ _id }) => db.User.findOneAndUpdate({_id:req.params.id}, { $push: { movies: _id } }, { new: true }))
    .then (data=>{res.json(data)})
    .catch(error=>res.json(error))
    },

    findAll: function (req,res)
    {db.ListMovie.find()
    .then (data=>{res.json(data)})
    .catch(error=>res.json(error))
    }

=======
    create: function (req, res) {
        db.ListMovie.create(req.body)
            // .then(({ _id }) => db.User.findOneAndUpdate({_id:req.params.id}, { $push: { movies: _id } }, { new: true }))
            .then(data => { res.json(data) })
            .catch(error => res.json(error))
    },

    // findAll: function (req,res)
    // {db.ListMovie.find({user:req.params.user})
    // .then (data=>{res.json(data)})
    // .catch(error=>res.json(error))
    // },
    findAll: function (req, res) {
        db.ListMovie.find()
            .then(data => { res.json(data) })
            .catch(error => res.json(error))
    }
>>>>>>> d8bc6150a096ac5d89ded65b3fb88406e94e3fd2
}