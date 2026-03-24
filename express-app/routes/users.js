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

module.exports = router;
