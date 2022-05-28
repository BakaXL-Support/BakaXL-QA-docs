<template><div><h1 id="有关版本隔离" tabindex="-1"><a class="header-anchor" href="#有关版本隔离" aria-hidden="true">#</a> 有关版本隔离</h1>
<h2 id="何为版本隔离" tabindex="-1"><a class="header-anchor" href="#何为版本隔离" aria-hidden="true">#</a> 何为版本隔离</h2>
<p>顾名思义，版本隔离即为将版本隔离为独立的个体</p>
<ul>
<li>版本隔离实际操作为指定游戏目录，是游戏本身所具有的功能，开启后不会对游戏产生影响。</li>
<li>开启版本隔离后会把除 <kbd><em>assets</em></kbd>和<kbd><em>libraries</em></kbd> 等文件夹之外的内容放到指定的目录。</li>
<li>不开启版本隔离时游戏本体存储在 <kbd><em>.minecraft</em></kbd> 目录中</li>
<li>开启版本隔离后游戏本体（其中包括<kbd><em>.minecraft</em></kbd> 目录下 <kbd><em>saves</em></kbd>（游戏存档），<kbd><em>mods</em></kbd>（模组），<kbd><em>resources</em></kbd>（资源包），<kbd><em>shaderpacks</em></kbd>（光影包）等文件夹）存储在 <kbd><em>.minecraft/version/</em></kbd> 目录中</li>
</ul>
<p>因此，开启版本隔离后，你可以<strong>启动多个含加载器的版本，且其模组，资源包，光影，存档，数据包等不影响其他版本</strong></p>
<p>当希望存在多个含加载器的不同版本时，通常较简单的做法是<strong>打开版本隔离</strong></p>
<h2 id="版本隔离的弊端" tabindex="-1"><a class="header-anchor" href="#版本隔离的弊端" aria-hidden="true">#</a> 版本隔离的弊端</h2>
<p>开启版本隔离后，同时安装同一版本多个mod加载器的玩家会发现资源包，光影，存档互相隔离似乎是不方便的</p>
<h3 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h3>
<p>这边推荐两种方法</p>
<ol>
<li>将文件夹中对应内容复制到需要的版本中（这种方法简便但经常操作略显繁琐，适合不经常改动上述内容的玩家）</li>
<li>使用软链接实现多个版本内容互通（仅需一次操作，一劳永逸，适合经常修改上述内容的玩家，下文将详细讲述）</li>
</ol>
<p>以下以Windows平台为例</p>
<p>假设有两个版本分别为A与B，希望将其存档互通</p>
<ol>
<li>找到两个版本的存档文件夹，目录分别为 <kbd><em>~/.minecraft/versions/A/saves</em></kbd> 与  <kbd><em>~/.minecraft/versions/B/saves</em></kbd></li>
<li>将B存档文件夹中内容（如果存在的话）全部移至A存档文件夹，并删除B存档文件夹</li>
<li>打开命令提示符（CMD）输入<code v-pre>mklink /J &quot;~/.minecraft/versions/B/saves&quot; &quot;~/.minecraft/versions/B/saves&quot;</code>这将建立一个由A存档目录指向B存档目录的软链接</li>
<li>输出<code v-pre>为 ~/.minecraft/versions/B/saves &lt;&lt;===&gt;&gt; ~/.minecraft/versions/B/saves 创建的联接</code>即成功创建软链接</li>
</ol>
<p>此时无论打开A还是B版本，都可看见互通的存档</p>
<p>材质光影mod文件夹的同步同上</p>
</div></template>
