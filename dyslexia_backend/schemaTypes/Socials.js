export default {
    name: 'socails',
    title: 'Socials',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            title: 'Media name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'Link',
            type: 'string'
        }
    ]
}