const express = require('express')

const server = express()
const projects = require('../projects/projects')
const tasks = require('../projects/tasks')
const resources = require('../projects/resources')

server.use(express.json())
server.use('/api/projects', projects)
server.use('/api/tasks', tasks)
server.use('/api/resources', resources)

module.exports = server
