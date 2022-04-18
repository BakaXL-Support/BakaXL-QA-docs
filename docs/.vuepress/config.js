module.exports = {
  title: 'BakaXL 启动器帮助文档',
  description: '提供启动器的帮助文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo: './favicon.png',
    navbar: true,
    nav:[
      {text: '主页', link:'/'},
      {text: '帮助文档', link: '/maindocs.md'},
      {text: '相关文档', 
      ariaLabel: '文档',
      item: [
        {text: '1.8-1.16.5版本常见问题', link: '/subdocs/Minecraft_1.8-1.16.5_CRQA.md'},
        {text: '如何提出一个合适的问题', link: '/subdocs/How_To_Asking_Question.md'}
      ]
      },
      {text: '文档编写规则', link: '/subdocs/BakaXL_HelpDocs_WriteRules.md'}
    ],
    sidebar: 'auto',
    lastUpdated: '最后更新于',
    smoothScroll: true,
    repo: 'https://github.com/BakaXL-Support/BakaXL-QA-docs',
    repoLabel: '查看文档源',
    docsRepo: 'BakaXL-Support/BakaXL-QA-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  }
}