exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { name: 'screw driver', description: '' },
    { name: 'mop', description: '' },
    { name: 'resume', description: '' },
    { name: 'jack', description: '' },
    { name: 'vacuum', description: '' },
    { name: 'safety boots', description: '' },
    { name: 'toolkit', description: '' }
  ])
}
