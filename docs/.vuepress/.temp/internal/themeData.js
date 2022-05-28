export const themeData = {
  "logo": "/favicon.png",
  "sidebar": "auto",
  "nav": [
    {
      "text": "主页",
      "link": "/"
    },
    {
      "text": "使用文档",
      "link": "/maindocs/BakaXL_Use_Docs/"
    },
    {
      "text": "帮助文档",
      "link": "/maindocs/maindocs/"
    },
    {
      "text": "相关文档",
      "children": [
        {
          "text": "1.8-1.16.5 版本常见问题",
          "link": "/maindocs/Minecraft_1.8-1.16.5_CRQA/"
        },
        {
          "text": "BakaXL 文档编写规则",
          "link": "/maindocs/BakaXL_HelpDocs_WriteRules/"
        },
        {
          "text": "如何提出一个合适的问题",
          "link": "/maindocs/How_To_Asking_Question/"
        }
      ]
    }
  ],
  "displayAllHeaders": true,
  "sidebarDepth": 2,
  "lastUpdated": "最后更新于",
  "smoothScroll": true,
  "repo": "https://github.com/BakaXL-Support/BakaXL-QA-docs",
  "repoLabel": "Github",
  "docsRepo": "BakaXL-Support/BakaXL-QA-docs",
  "docsDir": "docs",
  "docsBranch": "main",
  "editLinks": true,
  "editLinkText": "帮助我们改善此页面！",
  "nextLinks": true,
  "prevLinks": true,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
