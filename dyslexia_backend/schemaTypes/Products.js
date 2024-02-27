export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Product Image',
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
            type: 'string',
            description: 'Make it short and atmost one sentence.'
        },
        {
            name: 'url',
            title: 'Buy Link',
            type: 'string'
        },
        {
            name: 'btn',
            title: 'Button content',
            type: 'string'
        }
    ]
}