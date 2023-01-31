const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  theme: defaultTheme({
    logo: '/favicon.png',
    sidebar: 'auto', // 自动生成侧边栏
    // sidebar: 'structuring',
    navbar: [
      { text: '主页', link: '/', },
      { text: '使用文档', link: '/maindocs/BakaXL_Use_Docs/', },
      { text: '帮助文档', link: '/maindocs/maindocs/', },
      {
        text: '相关文档',
        children: [
          { text: '游戏常见问题', link: '/maindocs/Minecraft_CRQA/',},
          { text: '关于版本隔离', link: '/maindocs/About_Version_Seperation/', },
          { text: 'BakaXL 文档编写规则', link: '/maindocs/BakaXL_HelpDocs_WriteRules/', },
          { text: '如何提出一个合适的问题', link: '/maindocs/How_To_Asking_Question/', },
          { text: '在线更新整合包制作', link: '/maindocs/AutoUpdate_Modpack_Tutorial/', },
        ],
      } 
    ], // 顶部栏配置
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 2,
    lastUpdated: '最后更新于',
    smoothScroll: true,
    repo: 'https://github.com/BakaXL-Support/BakaXL-QA-docs',
    repoLabel: 'GitHub',
    docsRepo: 'BakaXL-Support/BakaXL-QA-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nextLinks: true,
    prevLinks: true
  }),
  title: 'BakaXL 启动器用户文档',
  lang: 'zh-CN',
  description: '提供 BakaXL 启动器在使用时疑难解答服务，同时也提供了一些其他的技术文档',  
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    docsearchPlugin({
      appId: 'null',
      apiKey: 'null',
      indexName: 'null',
      locales: {
        '/': {
          placeholder: '想要搜些什么？',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除搜索框',
                resetButtonAriaLabel: '清除搜索框',
                cancelButtonText: '关闭',
                cancelButtonAriaLabel: '关闭',
              },
              startScreen: {
                recentSearchesTitle: '最近搜索',
                noRecentSearchesText: '没有最近搜索过的项目',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查网络连接',
              },
              footer: {
                selectText: '选择',
                selectKeyAriaLabel: '打开',
                navigateText: '浏览',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '找不到结果',
                suggestedQueryText: '尝试搜索',
                reportMissingResultsText: '认为该关键词应该返回结果？',
                reportMissingResultsLinkText: '报告给我们',
              },
            },
          },
        },
      },
    }),
  ],
}
