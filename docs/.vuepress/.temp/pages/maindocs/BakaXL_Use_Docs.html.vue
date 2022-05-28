<template><div><h1 id="bakaxl-使用手册" tabindex="-1"><a class="header-anchor" href="#bakaxl-使用手册" aria-hidden="true">#</a> BakaXL 使用手册</h1>
<p><RouterLink to="/maindocs/maindocs.html">&gt;&gt;&gt;BakaXL帮助文档</RouterLink></p>
<h2 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h2>
<p>要运行BakaXL 3.0 及以上版本，您必须使用 Windows 7 及以上操作系统（由于某些功能需要 Windows 10 或以上才能正常运行，我们推荐您升级至Windows 10）并安装 .Net Framework 4.5。</p>
<p>如果您正在使用 Windows XP 或 Windows Vista 以及更低的 Windows 版本，我们推荐您尽快升级至 Windows 10。</p>
<p><a href="https://www.microsoft.com/zh-cn/software-download/windows10" target="_blank" rel="noopener noreferrer">&gt;&gt;下载 Windows 10<ExternalLinkIcon/></a></p>
<blockquote>
<p>当然，您也可以使用LTS版本（2.2.8.6），使用时出现的问题依旧会上报但由于开发人员缺失原因将不会得到解决。</p>
</blockquote>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<p>您可以随时在 BakaXL 官网下载最新版本的 BakaXL：</p>
<p><a href="https://www.bakaxl.com" target="_blank" rel="noopener noreferrer">&gt;&gt;BakaXL官网<ExternalLinkIcon/></a></p>
<blockquote>
<p>『由于服务器需要费用，我们希望您可以对 BakaXL 进行<a href="https://afdian.net/@TT702" target="_blank" rel="noopener noreferrer">捐助<ExternalLinkIcon/></a>，请在捐助时留下您的 BakaXL Account 邮箱。我们将会给您的账号添加赞助者标识以及 Insider 预览体验计划成员标识，并且您将可以进入 Insiders 局内人内部交流群。』</p>
</blockquote>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<p>我们<strong>不推荐</strong>在桌面或分区根目录启动 BakaXL。您可以将游戏和启动器保存在其他专用的目录（例如D盘的 Minecraft 文件夹），然后右键 BakaXL，选择「发送到」，然后单击「桌面快捷方式」，即可很方便地从桌面打开BakaXL了！</p>
<h2 id="游戏档案" tabindex="-1"><a class="header-anchor" href="#游戏档案" aria-hidden="true">#</a> 游戏档案</h2>
<p>在 BakaXL 中您可以选择离线登录、Mojang 帐号登录、Microsoft 账户登录、第三方登录（Authlib-Injector）四种方法进行登录。</p>
<p>您可以前往:</p>
<p><code v-pre>本体设置</code> &gt;<code v-pre>账户与档案</code> &gt;<code v-pre>新增一个档案</code> 来创建新的档案。</p>
<p><img src="@source/maindocs/assets/userdocs/setGameProfile.gif" alt="设置游戏档案"></p>
<h2 id="安装后事项" tabindex="-1"><a class="header-anchor" href="#安装后事项" aria-hidden="true">#</a> 安装后事项</h2>
<p>我们推荐您安装 BakaXL 之后调整为「Parrot 鹦鹉通道」更新通道，您可以在此通道内体验最新版本的 BakaXL ，包括很多功能性更新，但可能会有未完成和未清理的功能。</p>
<p>找到<code v-pre>本体设置</code> &gt; <code v-pre>BakaXL预览计划</code> &gt;<code v-pre>切换为 Parrot 鹦鹉通道</code> &gt;<code v-pre>点击变更</code></p>
<p><img src="@source/maindocs/assets/userdocs/switchToParrotProxy.gif" alt="设置鹦鹉通道"></p>
<p>这样您就﻿可以随时更新到 BakaXL 的最新版本啦！</p>
<p>如果因某些原因，BakaXL 无法自动更新或无限更新失败，您也可以随时在 <a href="http://jk-insider.bakaxl.com:8888/job/BakaXL%20Insider%20Parrot/" target="_blank" rel="noopener noreferrer">Jenkins<ExternalLinkIcon/></a> 下载最后一次构建的结果。</p>
<h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2>
<p>当您连接至互联网时，BakaXL 会自动检查可用更新。在有可用更新的情况下，您必须更新才能继续使用 BakaXL。</p>
<p>您仍然可以通过断开您与互联网的连接等方式来绕开更新。（不推荐）</p>
<blockquote>
<p>BakaXL 若出现无限更新的 Bug 情况您可以前往 <a href="http://jk-insider.bakaxl.com:8888/job/BakaXL%20Insider%20Parrot/" target="_blank" rel="noopener noreferrer">Jenkins <ExternalLinkIcon/></a>下载最后一次构建的结果来手动更新 BakaXL。</p>
</blockquote>
<h2 id="java-环境配置" tabindex="-1"><a class="header-anchor" href="#java-环境配置" aria-hidden="true">#</a> Java 环境配置</h2>
<p>我们建议您直接打开设置内的「让BakaXL自动选择Java版本」，这样可免去手动设置。以下是手动教程。</p>
<h3 id="已安装-java" tabindex="-1"><a class="header-anchor" href="#已安装-java" aria-hidden="true">#</a> 已安装 Java</h3>
<p>如果您之前有安装过 Java，您可以在<code v-pre>本体设置</code> &gt;<code v-pre>Java虚拟机与内存</code> <code v-pre>&gt;Java高级设置</code>中以以下三种方式来指定Java路径：</p>
<p><img src="@source/maindocs/assets/userdocs/setJavaAutoSelect.gif" alt="设置自动选择Java版本"></p>
<ol>
<li>
<p>自动寻找 Java 位置</p>
</li>
<li>
<p>手动指定 Java 位置</p>
</li>
<li>
<p>更细致的自动寻找 Java 位置</p>
</li>
</ol>
<h3 id="未安装-java" tabindex="-1"><a class="header-anchor" href="#未安装-java" aria-hidden="true">#</a> 未安装 Java</h3>
<p>如果您从未安装过 Java，您可以直接启动游戏，BakaXL 会为您自动下载并安装 Java</p>
<p>如果您需要手动安装特定的 Java8 或 Java16 版本您可以打开<code v-pre>本体设置</code> &gt;<code v-pre>Java虚拟机与内存</code> 中找到<code v-pre>获取Java8</code>与<code v-pre>获取Java17</code>按钮来获取 Java</p>
<h3 id="_1-16-及之前的-minecraft" tabindex="-1"><a class="header-anchor" href="#_1-16-及之前的-minecraft" aria-hidden="true">#</a> 1.16 及之前的 Minecraft</h3>
<p>如果您的游戏版本是 1.16 及以前的版本，那么我们推荐使用 Java 8 来运行游戏。</p>
<p>您可以在 <code v-pre>本体设置</code> &gt;<code v-pre>Java虚拟机与内存</code> &gt;<code v-pre>获取Java 8</code> 来获取 Java 8（通过 MCBBS 提供的链接进行下载，这会打开你的下载工具或浏览器）</p>
<h3 id="_1-17-及之后的-minecraft" tabindex="-1"><a class="header-anchor" href="#_1-17-及之后的-minecraft" aria-hidden="true">#</a> 1.17 及之后的 Minecraft</h3>
<p>运行 Minecraft 1.17 或更高版本的 Minecraft 需要使用 Java 17.</p>
<p>您可以在 <code v-pre>本体设置</code>  &gt;<code v-pre> Java 虚拟机与内存</code>  &gt;<code v-pre>获取Java 17</code> 获取。单击该按钮后下载任务会自动开始，BakaXL将会自动下载Java 17至官方启动器目录，但这不需要您安装官方启动器。</p>
<h3 id="安装完成之后" tabindex="-1"><a class="header-anchor" href="#安装完成之后" aria-hidden="true">#</a> 安装完成之后</h3>
<p>一般来说，BakaXL 会自动选择 Minecraft 核心需要的 Java 环境，但在某种情况下这可能不起作用。这时您需要前往 <code v-pre>本体设置</code> &gt;<code v-pre>Java虚拟机与内存</code> 来手动选择Java环境。</p>
<h2 id="安装新的-minecraft-核心" tabindex="-1"><a class="header-anchor" href="#安装新的-minecraft-核心" aria-hidden="true">#</a> 安装新的 Minecraft 核心</h2>
<p>您可以从 BakaXL 内轻松地安装 Minecraft 核心。</p>
<p>注意：您可能需要先确保下载源设置最优。前往 <code v-pre>本体设置</code> &gt;<code v-pre>下载</code>  &gt;<code v-pre>中国大陆下载源加速</code> 设置为 <code v-pre>开</code>，而后镜像服务器选择 <code v-pre>传统</code>  ，线程数建议设置为 <code v-pre>512 个/不重连</code></p>
<p>单击主界面的「C+」 按钮，选择游戏版本，添加 Mod 加载器、OptiFine（可选），开始安装。</p>
<p><img src="@source/maindocs/assets/userdocs/installNewGameCore.gif" alt="安装新Minecraft核心"></p>
<h2 id="安装-mod" tabindex="-1"><a class="header-anchor" href="#安装-mod" aria-hidden="true">#</a> 安装 Mod</h2>
<p>BakaXL 支持通过笨蛋广场来安装 Fabirc Mod 、Forge Mod 等众多加载器所支持的 Mod。</p>
<p>您可以前往 <code v-pre>笨蛋广场</code> 点击右上角的搜索框可进行 Mod 的查找。</p>
<blockquote>
<p><strong>注意</strong></p>
<p>安装 Mod 需要安装对应的 Minecraft版本、对应的Mod加载器以及前置,否则 Mod 将无法启动或报错。</p>
</blockquote>
<h3 id="下载-mod" tabindex="-1"><a class="header-anchor" href="#下载-mod" aria-hidden="true">#</a> 下载 Mod</h3>
<p>单击进入 Mod 介绍界面，点击 <code v-pre>下载</code>  ，然后使用过滤器进行 Mod 版本的筛选。</p>
<p>点击需要的 Mod 版本（非右方箭头）时选择对应的 Minecraft核心 进行安装 Mod，BakaXL 会自动下载并放入Mod文件夹内，当点击右方箭头时，您可以自定义 Mod 下载后所保存的位置。</p>
<p><img src="@source/maindocs/assets/userdocs/addModToCore.gif" alt="添加Mod"></p>
<h2 id="添加已拥有的-minecraft-核心-或-整合包" tabindex="-1"><a class="header-anchor" href="#添加已拥有的-minecraft-核心-或-整合包" aria-hidden="true">#</a> 添加已拥有的 Minecraft 核心 或 整合包</h2>
<p>BakaXL支持通过安装 MCBBS(仅限v2版本) 整合包和 CurseForge 整合包来安装 Minecraft 整合包。</p>
<p>您可以向右拖拽  <code v-pre>启动游戏</code> 滑块 &gt;<code v-pre>添加新的 Minecraft 核心 或 整合包</code> &gt; <code v-pre>导入整合包</code> 来添加游戏核心</p>
<p><img src="@source/maindocs/assets/userdocs/addMinecraftCore.gif" alt="添加Minecraft核心"></p>
<blockquote>
<p><strong>注意</strong></p>
<p>最新版BakaXL仅支持了最新的MCBBS整合包规范安装（也就是v2.0）。</p>
<p>BakaXL将不再支持2021年8月18日之前通过HMCL等其它启动器导出的旧版MCBBS格式整合包。</p>
</blockquote>
<h2 id="开始游戏" tabindex="-1"><a class="header-anchor" href="#开始游戏" aria-hidden="true">#</a> 开始游戏</h2>
<p>当您已经安装好了Minecraft核心，您可以在主界面向右拖动 <code v-pre>启动游戏</code> 按钮来选择游戏核心：</p>
<p><img src="@source/maindocs/assets/userdocs/selectMinecraftCore.gif" alt="选择Minecraft核心"></p>
<p>在这之后，点击「启动游戏」按钮，选择一个档案（若您只有一个档案则不用选择），在这之后游戏将会自动启动。</p>
<h2 id="使用-bakaskin文件来个性化您的bakaxl-主题包" tabindex="-1"><a class="header-anchor" href="#使用-bakaskin文件来个性化您的bakaxl-主题包" aria-hidden="true">#</a> 使用.BakaSkin文件来个性化您的BakaXL(主题包)</h2>
<p>转到<code v-pre>本体设置</code>  &gt;<code v-pre>个性化</code>，翻到底部点击 <code v-pre>打开皮肤文件夹</code>  按钮，将在外部获取到的 .BakaSkin 文件复制进文件夹内，之后再在BakaXL内即可查看皮肤列表。</p>
<h2 id="bakaxl-network" tabindex="-1"><a class="header-anchor" href="#bakaxl-network" aria-hidden="true">#</a> BakaXL Network</h2>
<p>BakaXL 内置有 BakaXL Network 功能，该功能能够可以实现一些社交操作</p>
<h3 id="登录-注册账户" tabindex="-1"><a class="header-anchor" href="#登录-注册账户" aria-hidden="true">#</a> 登录/注册账户</h3>
<p>前往<code v-pre>本体设置</code> &gt;<code v-pre>账户与档案</code> &gt;<code v-pre>登录至现有的BakaXL账户</code> 或 <code v-pre>注册一个新的账户</code>。</p>
<h3 id="修改账户头像或资料" tabindex="-1"><a class="header-anchor" href="#修改账户头像或资料" aria-hidden="true">#</a> 修改账户头像或资料</h3>
<p>前往 <code v-pre>领域</code> &gt;<code v-pre>用户设置</code>。</p>
<h3 id="bakaverse-领域" tabindex="-1"><a class="header-anchor" href="#bakaverse-领域" aria-hidden="true">#</a> Bakaverse（领域）</h3>
<p>点击 Home 主界面左下角的用户头像即可进入 Bakaverse。</p>
<h3 id="添加好友" tabindex="-1"><a class="header-anchor" href="#添加好友" aria-hidden="true">#</a> 添加好友</h3>
<p>点击左侧的 <code v-pre>添加好友</code> 菜单栏，在右侧的输入框中输入好友的 BakaXL Account 账户名称以及数字标签即可发送好友申请。</p>
<p>若您收到了申请，他们也将会显示在输入框的上方。您可以选择同意或拒绝。</p>
<p>在好友申请被通过以后，您将可以在好友列表里找到他们。</p>
<h3 id="大厅-联机功能" tabindex="-1"><a class="header-anchor" href="#大厅-联机功能" aria-hidden="true">#</a> 大厅（联机功能）</h3>
<p>选择 <code v-pre>大厅</code> 菜单栏，您可以 创建/加入一个大厅。</p>
<p>首先确认和您的好友的 Minecraft 都已启动，然后由房主（存档拥有者）进入「单人游戏」，打开一个世界，按下 <code v-pre>Esc</code> 然后在暂停菜单中选择「对局域网开放」，而后回到 BakaXL 选择<code v-pre>创建一个大厅</code>，其他玩家使用大厅的8位数字ID加入。</p>
<p>加入方和创建方请务必打开<code v-pre>在无法直接连接时使用中继连接</code> 选项以确保能够正常联机游玩，关于使用 BakaXL Relay 的隐私协议您可以参考</p>
<p><a href="https://www.bakaxl.com/Privacy/Policy/" target="_blank" rel="noopener noreferrer">&gt;&gt;&gt;BakaXL隐私政策<ExternalLinkIcon/></a></p>
<p>加入大厅之后，前往「多人游戏」，该大厅将会自动显示在列表里。若您无法加入游玩，BakaXL将会在大厅的玩家列表内显示您的状态，而BakaXL本次的运行日志也是未来诊断问题所在的手段。</p>
<h3 id="皮肤妙享-离线皮肤共享" tabindex="-1"><a class="header-anchor" href="#皮肤妙享-离线皮肤共享" aria-hidden="true">#</a> 皮肤妙享（离线皮肤共享）</h3>
<p>该功能同时在大厅和第三方服务器中生效</p>
<p>这意味着只要多人游戏的玩家使用BakaXL作为启动器并开启本功能时，就可互相看到对方的皮肤而无需其他mod或插件。</p>
<p>只需要在<code v-pre>「本体设置」</code>- <code v-pre>「账户与档案」</code> 点击你的离线档案，设置皮肤</p>
<p>之后前往<code v-pre>「领域/联机大厅」</code>-<code v-pre>「用户设置」</code>，确保<code v-pre>「BakaXL Network SkinShare 皮肤妙享」</code>为开启状态</p>
<p>注：请尽量<RouterLink to="/maindocs/maindocs.html#%E5%9C%A8-bakaxl-%E5%A4%A7%E5%8E%85%E8%81%94%E6%9C%BA%E4%B8%AD%E7%8E%A9%E5%AE%B6%E4%B9%8B%E9%97%B4%E6%97%A0%E6%B3%95%E6%98%BE%E7%A4%BA%E5%AF%B9%E6%96%B9%E7%9A%84%E7%9A%AE%E8%82%A4">在离线登录下使用此功能</RouterLink></p>
<blockquote>
<p>如果﻿您阅读了此使用手册和<RouterLink to="/maindocs/maindocs.html">帮助文档</RouterLink>后仍未解决您的问题，可以在BakaXL Outsider QQ群（480455628）来寻求帮助。</p>
</blockquote>
</div></template>
