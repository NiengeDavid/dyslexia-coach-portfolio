export default {
    name: 'slider',
    title: 'Slider',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option: {
                hotspot: true,
            },
        },
        {
            name: 'hint',
            title: 'Hint',
            type: 'string'
        },
        {
            name: 'alt',
            title: 'Alt',
            type: 'string'
        },
        {
            name: 'solution',
            title: 'Solution',
            type: 'string'
        }
    ]
}