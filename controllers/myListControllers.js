const db = require("../models");

module.exports = {
    findById: function (req,res)
    {db.ListMovie.find({movieId:req.params.id})
    .then (data=>{res.json(data)})
    .catch(error=>res.json(error))
    },

    create: function (req,res)
    {db.ListMovie.create(req.body)
    .then (data=>{res.json(data)})
    .catch(error=>res.json(error))
    }

    }