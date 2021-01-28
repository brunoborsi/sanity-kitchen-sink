export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601296cd201382d2457850ae',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g76dh36i',
                  apiId: '3a3ffaac-a3ca-4263-8b9a-6a89e844fabc'
                },
                {
                  buildHookId: '601296ce118a51c8f279cff5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-djsmmthh',
                  apiId: '48f099c5-05f9-4b78-99f6-de4e4e5bec30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brunoborsi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-djsmmthh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
