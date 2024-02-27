export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'xlug',
            title: 'Xlug',
            type: 'string'
        },
        {
            name: 'mantra',
            title: 'Mantra',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Your Potrait',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            title: 'Alt text',
            type: 'string',
            description: 'Alternative text for when image fails to load'
        },
    ]
}