export default {
  name: 'audio',
  title: 'Audio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'song',
      title: 'Song',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}