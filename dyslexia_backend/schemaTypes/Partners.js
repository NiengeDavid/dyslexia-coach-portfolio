export default {
    name: 'partners',
    title: 'Partners',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Partner Logo',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
        {
            name: 'alt',
            title: 'Partner Name',
            type: 'string'
        }
    ]
}