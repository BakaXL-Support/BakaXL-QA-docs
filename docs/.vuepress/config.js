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
    navbar: true, 
    nav:[
      {text: '\u4e3b\u9875', link:'/'}, 
      {text: '\u5e2e\u52a9\u6587\u6863', link: '/maindocs/'}, 
      {text: '\u76f8\u5173\u6587\u6863', 
      ariaLabel: '\u6587\u6863', 
      item: [
        {text: '1.8-1.16.5 \u7248\u672c\u5e38\u89c1\u95ee\u9898', link: '/subdocs/Minecraft_1.8-1.16.5_CRQA/'}, 
        {text: '\u5982\u4f55\u63d0\u51fa\u4e00\u4e2a\u5408\u9002\u7684\u95ee\u9898', link: '/subdocs/How_To_Asking_Question/'}
      ]
      }, 
      {text: '\u6587\u6863\u7f16\u5199\u89c4\u5219', link: '/subdocs/BakaXL_HelpDocs_WriteRules/'}
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