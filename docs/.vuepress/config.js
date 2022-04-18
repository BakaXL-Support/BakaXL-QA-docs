module.exports = {
  theme: '@vuepress/theme-default',
  title: 'BakaXL 启动器帮助文档',
  description: '提供启动器的帮助文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo: './favicon.png',
    
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