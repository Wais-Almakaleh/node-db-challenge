exports.seed = function (knex, Promise) {
  return knex('projects').insert([
    { name: 'new set-up', description: 'Install a new computer set-up', completed: false },
    { name: 'deep cleaning', description: 'deep clean the house', completed: true },
    { name: 'repair the car', description: 'fix the car up and get it running', completed: false }

  ])
}
