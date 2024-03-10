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
            title: 'Coloured Part',
            type: 'string'
        },
        {
            name: 'mantra',
            title: 'Mantra',
            type: 'string'
        },
        {
            name: 'image1',
            title: 'Your Potrait1',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'alt1',
            title: 'Alt text1',
            type: 'string',
            description: 'Alternative text for when image fails to load'
        },
        {
            name: 'image2',
            title: 'Your Potrait2',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'alt2',
            title: 'Alt text2',
            type: 'string',
            description: 'Alternative text for when image fails to load'
        },
        {
            name: 'p1',
            title: 'First Paragraph',
            type: 'string',
            description: 'Paragraph will populate next to coloured part'
        }
    ]
}