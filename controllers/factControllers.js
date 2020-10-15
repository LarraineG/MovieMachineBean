const db = require("../models");

module.exports = {
  findAll: function (req,res)
    {db.Funfact.find()
    .then (data=>{res.json(data)})
    }
  }