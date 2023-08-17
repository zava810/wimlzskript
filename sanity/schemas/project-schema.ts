const project = {
    name: 'Projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'technologies',
            title: 'Technologies used',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}

export default project;