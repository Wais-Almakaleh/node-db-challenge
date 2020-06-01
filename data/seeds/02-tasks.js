exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      description: 'get the money', notes: 'find a good job', completed: false, project_id: 1
    },
    {
      description: 'buy the computer stuff', notes: '', completed: false, project_id: 1
    },
    {
      description: 'set it up', notes: 'have fun', completed: false, project_id: 2
    },
    {
      description: 'buy cleaning supplies', notes: 'sprays and wipes', completed: false, project_id: 2
    },
    {
      description: 'start sweeping', notes: '', completed: false, project_id: 2
    },
    {
      description: 'clean the entire house', notes: 'have fun', completed: false, project_id: 2
    },
    {
      description: 'clean the car out first', notes: '', completed: false, project_id: 3
    },
    {
      description: 'find out the issues', notes: '', completed: false, project_id: 3
    },
    {
      description: 'fix it up', notes: 'have fun', completed: false, project_id: 3
    }

  ])
}
