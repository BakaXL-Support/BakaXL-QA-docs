module.exports = {
  theme: '@vuepress/theme-default',
  title: 'BakaXL 启动器帮助文档',
  description: '提供启动器的帮助文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo: './favicon.png',
    lang: 'zh-CN',
    sidebar: 'auto', // 自动生成侧边栏
    // sidebar: 'structuring',
    nav: [
      { text: '主页', link: '/' },
      { text: '帮助文档', link: '/maindocs/maindocs/' },
      {
        text: '相关文档',
        items: [
          { text: '1.8-1.16.5版本常见问题', link: '/maindocs/Minecraft_1.8-1.16.5_CRQA/'},
          { text: '如何提出一个合适的问题', link: '/maindocs/How_To_Asking_Question/' }
        ]
      },
      { text: '文档编写规则', link: '/maindocs/BakaXL_HelpDocs_WriteRules/' },
    ], // 顶部栏配置
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 2,
    lastUpdated: '最后更新于',
    smoothScroll: true,
    repo: 'https://github.com/BakaXL-Support/BakaXL-QA-docs',
    repoLabel: 'Github',
    docsRepo: 'BakaXL-Support/BakaXL-QA-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nextLinks: true,
    prevLinks: true,
  }
}
