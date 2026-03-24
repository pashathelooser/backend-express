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

<<<<<<< HEAD
/* GET user by id. */
router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const user = users.items.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
=======
router.post('/', function(req, res, next) {
  const {name} = req.body;
  const newUser = {id: curId++, name: name}
  users.items.push(newUser);
  
  res.status(201).json(newUser);
  res.send(newUser);
>>>>>>> c67d558b4140d8b4ae9ac7ee9cad5dc1bba2736a
});

module.exports = router;
