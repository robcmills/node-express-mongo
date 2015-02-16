
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('users', {
      "users" : docs
    });
  });
});

router.get('/new', function(req, res) {
  res.render('new');
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  var 
    db = req.db,
    userName = req.body.username,
    userEmail = req.body.useremail,
    collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database.");
    } else {
      res.location("/users");
      res.redirect("/users");
    }
  });
});

module.exports = router;
