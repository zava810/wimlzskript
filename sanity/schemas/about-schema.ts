const aboutData = {
    name: 'About',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'aboutContent',
            title: 'About content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}
export default aboutData;