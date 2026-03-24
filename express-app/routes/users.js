const express = require('express');
const router = express.Router();

let curId = 2;
const users = {
  items: [
    { id: 1, name: "Лиза" },
    { id: 2, name: "Паша" },
  ]
};

router.get('/', function(req, res) {
  res.json({ items: users.items });
});

router.get('/:id', function(req, res) {
  const id = Number(req.params.id);
  const user = users.items.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

router.post('/', function(req, res) {
  const { name } = req.body;

  const newUser = { id: ++curId, name };
  users.items.push(newUser);

  res.status(201).json(newUser);
});

module.exports = router;
