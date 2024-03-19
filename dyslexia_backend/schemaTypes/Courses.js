export default {
    name: 'courses',
    title: 'Courses',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'url',
            title: 'Link',
            type: 'string'
        },
    ]
}