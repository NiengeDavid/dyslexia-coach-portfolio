export default {
    name: 'featured',
    title: 'Featured on',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Company logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Logo of the company you were feartured on'
        },
        {
            name: 'alt',
            title: 'Organisation Name',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link to Mention',
            type: 'string'
        }
    ]
}