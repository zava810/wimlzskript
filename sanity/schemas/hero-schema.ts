const heroSchema = {
    name: 'Hero', 
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'designation',
            title: 'Designation',
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
        },
        {
            name: 'headerDescription',
            title: 'Header Description',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'avatarImage',
            title: 'Avatar Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }
    ]
    
}

export default heroSchema;