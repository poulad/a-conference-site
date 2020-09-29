const express = require('express');
const { Conference } = require('../models/conference')
const router = express.Router();

async function queryConferences() {
  return Conference.findAll()
}

router.get('/', async (req, res, next) => {
  try {
    const confs = await queryConferences()
    res.type('json')
    res.send(confs);
  } catch (e) {
    res.send(JSON.stringify(e));
  }
});

module.exports = router;
