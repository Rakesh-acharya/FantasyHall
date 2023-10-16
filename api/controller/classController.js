// controllers/classController.js
const express = require('express');
const router = express.Router();
const ClassService = require('../services/classService.js');

router.get('/:class_id', (req, res) => {
  const classId = req.params.class_id;
  ClassService.getClassById(classId, (err, cls) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(cls);
    }
  });
});

module.exports = router;
