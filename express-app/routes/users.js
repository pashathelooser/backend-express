const express = require('express');
const router = express.Router();
let curId = 2;
const users = {
  items: [
    { id: 1, name: "Лиза" },
    { id: 2, name: "Паша" },
  ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users.items.map(item => item.name));
});

router.post('/', function(req, res, next) {
  const {name} = req.body;
  const newUser = {id: curId++, name: name}
  users.items.push(newUser);
  
  res.status(201).json(newUser);
  res.send(newUser);
});

module.exports = router;
