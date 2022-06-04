import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-61bd7594","/maindocs/about_version_seperation.html",{"title":"有关版本隔离"},["/maindocs/about_version_seperation","/maindocs/about_version_seperation.md"]],
  ["v-158474dc","/maindocs/BakaXL_HelpDocs_WriteRules.html",{"title":"BakaXL 帮助文档编写规范"},["/maindocs/BakaXL_HelpDocs_WriteRules","/maindocs/BakaXL_HelpDocs_WriteRules.md"]],
  ["v-f063e85c","/maindocs/BakaXL_Use_Docs.html",{"title":"BakaXL 使用手册"},["/maindocs/BakaXL_Use_Docs","/maindocs/BakaXL_Use_Docs.md"]],
  ["v-1b0b1830","/maindocs/How_To_Asking_Question.html",{"title":"如何正确地请求别人的帮助？"},["/maindocs/How_To_Asking_Question","/maindocs/How_To_Asking_Question.md"]],
  ["v-1e6bb4c3","/maindocs/maindocs.html",{"title":"BakaXL 启动器常见问题解决方案文档"},["/maindocs/maindocs","/maindocs/maindocs.md"]],
  ["v-7e03f12a","/maindocs/Minecraft_1.8-1.16.5_CRQA.html",{"title":"Minecraft 1.8-1.16.5 版本常见游戏崩溃问题"},["/maindocs/Minecraft_1.8-1.16.5_CRQA","/maindocs/Minecraft_1.8-1.16.5_CRQA.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
