const express = require('express');
const router = express.Router();
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

/* GET user by id. */
router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const user = users.items.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

module.exports = router;
