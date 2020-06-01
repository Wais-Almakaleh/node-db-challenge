/* eslint-disable linebreak-style */
const express = require('express')

const router = express.Router()
const db = require('./project-model')

router.get('/', (req, res) => {
  db.getResources()
    .then((get) => {
      res.status(200).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getResourcesById(id)
    .then((get) => {
      res.status(200).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.post('/:id/resources', (req, res) => {
  const { body } = req
  db.addResources(body)
    .then((get) => {
      res.status(200).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.removeResources(id)
    .then((get) => {
      res.status(200).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

// create a resource that is linked to multiple projects

module.exports = router
