const db = require('../data/dbConfig')

function getProjects () {
  return db('projects')
}

function getProjectsById (id) {
  return db('resources')
    .where({ id })
    .first()
}

function getTasks () {
  return db('tasks')
}
function getProjectTasks (id) {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.description', 't.notes')
    .where('t.project_id', id)
}

function getTasksById (id) {
  return db('tasks')
    .where({ id })
    .first()
}

function getResources () {
  return db('resources')
}
function getProjectResources (id) {
  return db('resources as r')
    .join('project_resources as pr', 'pr.resource_id', 'r.id')
    .join('projects as p', 'p.id', 'pr.project_id')
    .select('r.name', 'r.description')
    .where('p.id', id)
}

function getResourcesById (id) {
  return db('resources')
    .where({ id })
    .first()
}


function addProjects (insert) {
  return db('projects')
    .insert(insert)
    .then(id => getProjectsById(id[0]))
}

function addTask (insert) {
  return db('tasks')
    .insert(insert)
    .then(id => getProjectsById(id[0]))
}

function addResources (insert) {
  return db('resources')
    .insert(insert)
    .then(id => getProjectsById(id[0]))
}

function remove (id) {
  return db('project')
    .where('resources', id)
    .del()
}

function removeResources (id) {
  return db('resources')
    .where('id', id)
    .del()
}
module.exports = {
  getProjects,
  getProjectsById,
  getProjectTasks,
  getTasks,
  getTasksById,
  getResources,
  getResourcesById,
  getProjectResources,
  addProjects,
  addTask,
  addResources,
  remove,
  removeResources
}
