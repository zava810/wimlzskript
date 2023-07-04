const experienceSchema = {
    name: 'Experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'designation',
        title: 'Designation',
        type: 'string'
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'start',
        title: 'Start',
        type: 'date',
        options: {
          dateFormat: 'MMMM YYYY'
        }
      },
      {
        name: 'present',
        title: 'Present',
        type: 'boolean',
      },
      {
        name: 'end',
        title: 'End',
        type: 'date',
        options: {
          dateFormat: 'MMMM YYYY'
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
}

export default experienceSchema;