const nav = [
    { text: '主页', link:'/'},
    { text: '帮助文档', link: '/maindocs/'},
    { text: '相关文档',
    ariaLabel: '文档',
    item: [
      {text: '1.8-1.16.5版本常见问题', link: '/subdocs/Minecraft_1.8-1.16.5_CRQA/'},
      {text: '如何提出一个合适的问题', link: '/subdocs/How_To_Asking_Question/'}
    ]
    },
    {text: '文档编写规则', link: '/subdocs/BakaXL_HelpDocs_WriteRules/'}
]
module.exports = {
  nav,
}
