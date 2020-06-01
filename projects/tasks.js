/* eslint-disable linebreak-style */
const express = require('express')

const router = express.Router()
const db = require('./project-model')

router.get('/', (req, res) => {
  db.getTasks()
    .then((get) => {
      res.status(200).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getTasksById(id)
    .then((get) => {
      res.status(201).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.remove(id)
    .then((get) => {
      res.status(201).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

module.exports = router
