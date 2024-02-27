export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'yourname',
      title: 'Yourname',
      type: 'string',
    },
    {
        name: 'button',
        title: 'Button',
        type: 'string',
      },
  ],
}
