export default {
  name: 'folio',
  title: 'Folio',
  type: 'document',
  icon: () => '🎨',
  fields: [
    {
      name: 'selected_projects',
      title: 'Selected Projects',
      type: 'array',
      of: [
        { 
          type: 'reference', 
          to: [{ type: 'project' }],
        }
      ]
    },
  ],
}