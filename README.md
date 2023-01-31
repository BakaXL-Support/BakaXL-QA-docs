# BakaXL 用户帮助文档

[![last update in main](https://img.shields.io/github/last-commit/BakaXL-Support/BakaXL-QA-docs)](https://github.com/BakaXL-Support/BakaXL-QA-docs/commits/main)  [![issues](https://img.shields.io/github/issues/BakaXL-Support/BakaXL-QA-docs)](https://github.com/BakaXL-Support/BakaXL-QA-docs/issues)  [![pullrequest](https://img.shields.io/github/issues-pr/BakaXL-Support/BakaXL-QA-docs)](https://github.com/BakaXL-Support/BakaXL-QA-docs/pulls)  [![last vuepress CI](https://img.shields.io/github/actions/workflow/status/BakaXL-Support/BakaXL-QA-docs/sync-website.yml)](https://github.com/BakaXL-Support/BakaXL-QA-docs/actions)

**为新一代Minecraft崩坏启动器用户编写的使用文档**

欢迎来到BakaXL 用户帮助文档仓库，您来到这里肯定<del>不是吃素的</del>，对吧(xD)

当然，如果您迷路了也可以通过这里的以下索引到达我们不同的位面

> [>>前往帮助文档](https://bakaxl.ml) 		 [>>前往提议寻求协助](https://github.com/BakaXL-Support/BakaXL-QA-docs/issues) 		[>>前往讨论区](https://github.com/BakaXL-Support/BakaXL-QA-docs/discussions)

您可以在以上位面寻求帮助，当然，在用户交流群中询问也可以，但是我们依旧建议在以上地方(提议与讨论区)发起提问，因为`QA(你问我答)`机制在这里发挥的作用非常大，我们可以实时追踪您的状态与回复，而不会被即时通讯中的信息流淹没而难以找到您提供的有效信息以及我们给您的回答

> 您也可以添加我们的帮助文档人员交流群: [830707321](https://jq.qq.com/?_wv=1027&k=G8opTejz) 来获取帮助
>
> 同时也推荐您添加BakaXL 官方交流群: 480455628 (由于群设置限制，请自行搜索加群)



### 关于协同编写文档

如果您遇到了访问速度缓慢等问题我们强烈建议您使用 [Steam++](https://steampp.net/) 或其他科学上网的方式来访问Github以获得最佳体验

#### 关于Github

> 如果您有使用Github的经验可以跳过这里

为了更好的管理文档的版本以及避免可能出现的熊孩子破坏，我们使用了Git来控制文档的版本，这是一种用于控制代码版本的管理系统，

在这里我们快速让您熟悉一下Github

[>>Github简介(BakaXL Wiki)](https://github.com/BakaXL-Support/BakaXL-QA-docs/wiki/%E5%85%B3%E4%BA%8EGithub)



#### 如何更新我们的文档

我们分为两个分支`main`与`dev`分支，在文档上的更新可以通过Pull request至我们仓库的`main`分支来更新内容

而触碰到前端代码的所有内容则是先必须推送至`dev`分支经测试后才能合并至`main`分支

您可以参考这篇文章来详细了解我们仓库的基本编写规则

[>>如何在BakaXL QA Docs仓库提交您的更改](https://github.com/BakaXL-Support/BakaXL-QA-docs/wiki/%E5%A6%82%E4%BD%95%E5%9C%A8BakaXL-QA-Docs%E4%BB%93%E5%BA%93%E6%8F%90%E4%BA%A4%E6%82%A8%E7%9A%84%E6%9B%B4%E6%94%B9)

您也可以参考我们的编写规范进行修改

[>>BakaXL帮助文档写作规范](http://192.168.1.10:8080/maindocs/BakaXL_HelpDocs_WriteRules.html)



[>>点击这里立刻fork我们的仓库](https://github.com/BakaXL-Support/BakaXL-QA-docs/fork)

##### 部署/测试帮助

> 运行要求: node
> 请确保 node 与 npm 已配置在您的计算机环境变量重
> 诊断方法为在 Powershell 或 CMD 中输入 `node -v` 与 `npm -v` 为您安装的 node 版本号

fork 仓库后您的账户下应该能看到我们的仓库，您可以使用 git 来克隆您的仓库分支
```bash
git clone https://github.com/您的用户名/BakaXL-QA-docs
```

在这里我们推荐使用 yarn 来安装依赖包，因此打开您的终端工具并安装 yarn

```bash
npm install -g yarn
```

而后打开您本地的仓库文件夹，在里面打开终端，输入

```bash
yarn -i
```

在安装完成后您输入

```bash
npm run dev
```

即可在您本地上查看文档，在浏览器中输入 vite 在 Local 行给出的 ip 即可访问您的测试环境


That's all,祝您生活愉快



# 贡献者

<!-- 图片更新需要时间，没有出来稍安勿躁 -->

感谢这些老伙计的辛勤付出

[![](https://contrib.rocks/image?repo=BakaXL-Support/BakaXL-QA-docs)](https://github.com/BakaXL-Support/BakaXL-QA-docs/graphs/contributors)

Made with [contrib.rocks](https://contrib.rocks).
