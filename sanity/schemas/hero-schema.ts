const heroSchema = {
    name: 'Hero', 
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'destination',
            title: 'Destination',
            type: 'string'
        },
        {
            name: 'organization',
            title: 'Organization',
            type: 'string'
        },
        {
            name: 'companyUrl',
            title: 'Company Url',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'resume',
            title: 'resume',
            type: 'file'
        }
    ]
    
}

export default heroSchema;