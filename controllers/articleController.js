//dependencies
const db = require("../models");

//Defining the various methods for articleController
module.exports = {
    findAll: function(req, res){
        db.Article
        .find(req.query)
        .sort({ date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
    },
    findById: function(req,res){
        db.Article
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    update: function(req,res) {
        db.Article
        .findOneAndUpdate({_id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
    },
    remove: function(req,res) {
        db.Article
        .findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch( err => res.json(err))
    },
    create: function(req,res){
      db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))
    }
};
