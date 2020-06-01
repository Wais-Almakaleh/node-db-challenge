const express = require('express')

const router = express.Router()
const db = require('./project-model')

router.get('/', (req, res) => {
  db.getProjects()
    .then(get => {
      res.status(200).json(get)
    }).catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getProjectsById(id)
    .then(proj => {
      res.status(201).json(proj)
    }).catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params
  db.getProjectTasks(id)
    .then((get) => {
      res.status(201).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  const { body } = req
  db.addProjects(body)
    .then((post) => {
      res.status(204).json(post)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.post('/:id/tasks', (req, res) => {
  const { body } = req
  const { id } = req.params
  db.addTask({ ...body, project_id: id })
    .then((get) => {
      res.status(201).json(get)
    }).catch((err) => {
      res.status(500).json(err)
    })
})

router.get('/:id/resources', (req, res) => {
  const { id } = req.params
  db.getProjectResources(id)
    .then((get) => {
      res.status(200).json(get)
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
