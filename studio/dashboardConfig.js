export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5d7977230024cfa035a213c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-uvdmz1f8',
                  apiId: '69037775-f8a5-4fc6-92f2-408249ccb5a0'
                },
                {
                  buildHookId: '5d7977230024cf2041a2138d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-1hvdaqf3',
                  apiId: '6aaca0e9-c00d-4cdc-96bb-06e11e89f2a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomtev/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-1hvdaqf3.netlify.com', category: 'apps'}
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
