# BakaXL 在线更新整合包制作教程

:::danger 提请注意
请注意！制作此类整合包的下载流量费用并不完全免费，请根据你的实际情况来斟酌是否使用该方案。
:::

通过 MCBBS 整合包协议，你可以制作自己的整合包，将适用于大部分启动器，并且可以控制更新。以下将会讲解如何创建属于自己的更新整合包。

## 1. 先选择能够直链下载文件的服务

我们推荐你使用类似于腾讯云 COS、阿里云 OSS、又拍云 USS 等对象存储服务，此类对象存储服务都将提供免费额度（注意！使用此类对象存储服务请务必搭配 CDN，否则可能产生天价的流量费用！），或者支持直链以及能够自定义下载路径的网盘。百度网盘、微云、阿里云盘等公开网盘不支持！

简单来说，假设你的整合包里有个文件在 `config` 目录下，叫 `test.ini`，那么他的下载地址的格式必须是这样的：
```
https://你的网盘域名/整合包路径/overrides/config/test.ini
```
而不能是这样的：
```
https://你的网盘域名/xxxxx/test.ini
```
对象存储与 CDN 的使用请参阅各云厂商的官网，这里就不再赘叙了。

## 2. 导出整合包

首先，打开整合包的详情页，点击对应的信息，对本整合包的信息先进行修改：

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FF8C5BEF-F16C-11ED-B30F-3C91809A0E42.png)

然后往下滚动左边的菜单，选择导出，然后选择核心导出向导：

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/0095166E-F16D-11ED-9D3E-3C91809A0E42.png)

然后填写版本号等信息，版本号建议使用以下格式：
```
1.0.1
```
![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/00BA3D35-F16D-11ED-9A60-3C91809A0E42.png)

然后填写更新 API 根地址，如你在你的对象存储/网盘上面新建了一个 `games` 的路径，那么下方就可以这么填写：
```
http://你的网盘域名/games
```
然后根据你的需求，来开启“始终将整合包保持最新版本”选项。我们推荐服务器用户开启该选项，整合包作者根据需要开启该选项。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/00E61523-F16D-11ED-82C2-3C91809A0E42.png)

然后导出你的整合包，我们就快完成了！

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/010C0C4C-F16D-11ED-B374-3C91809A0E42.png)

## 3. 上传文件

将导出的整合包压缩包文件解压至任意路径，他大概是这种样子的：

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/0125EB4A-F16D-11ED-9D42-3C91809A0E42.png)

然后将 `overrides` 文件夹和 `mcbbs.packmeta` 上传到你的网盘的同一个目录下即可。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/01385F93-F16D-11ED-8F52-3C91809A0E42.png)

至此，你已经完成了全部的配置操作了。接下来我们会教你如何来实验一下更新。

## 4. 更新配置的修改

用编辑器打开 `mcbbs.packmeta` 文件（推荐使用 Visual Studio Code），然后他的画风大概是下面这样的：

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/016221F4-F16D-11ED-B086-3C91809A0E42.png)

看起来很乱？没关系，我们可以使用bejson等工具网站来将Json格式化，如下：

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/019C6B32-F16D-11ED-BE97-3C91809A0E42.png)

然后再将格式化后的Json信息覆盖回编辑器里即可。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFB1FF90-F16C-11ED-897C-3C91809A0E42.png)

接下来，我将教你如何添加和删除 Mod。

所有的版本文件在 `files` 分类下方，`files` 是一个数组类型，每个参数的定义如下：

- `type`: 此处固定为 `addon`；
- `path`: 该文件在版本目录下的相对的路径与文件名；
- `hash`: 文件的哈希值，使用 sha1 来计算；
- `force`: 是否必须有该文件，如果值为 `true`，在没有或者文件哈希值不一致的情况下，将会从服务器上重新下载该文件。

那么，如何添加一个新的文件呢？

按照下图，添加一个空的信息：

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFD24B6E-F16C-11ED-88F8-3C91809A0E42.png)
:::warning 请注意！
Json 的 `{}` 和 `,` 均为英文符号，请不要用成中文符号了！请务必仔细仔细再仔细。任何的格式和符号错误，将会导致配置文件错误，将无法生效！
:::
比如你要添加一个 Mod，那么它的 `path` 路径就填写 `mods/Mod 名.jar`
`hash` 怎么获取呢？如果你是 Windows 7 和以上系统，你可以使用以下方法来获取文件的 SHA1 值：
打开 PowerShell，然后使用 `Get-FileHash '文件路径/文件名.jar' -Algorithm SHA1` 指令，即可获取到该文件的 hash 值。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFE5EB5A-F16C-11ED-A678-3C91809A0E42.png)

然后再将获取到的 hash 值，转换为小写，填写至上方的 hash 即可。可以百度搜索“在线大小写转换”来使用工具网站来对大小写进行转换。

注意！一定要是小写！一定要是小写！一定要是小写！

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFF9AFA1-F16C-11ED-9DED-3C91809A0E42.png)

顺带注意这几个逗号，什么时候该加，什么时候不该加。

想必你也了解了该如何删除某一条信息了，只需要把对应的文件外的 `{}`，连同内容删掉即可，和添加是相反的操作。

然后找到上方 `version` 选项，修改其中的值，比如你上一次版本是 `1.0.1`，这次的版本就可以是 `1.0.2` 了，只要版本和上一次不一致即可。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/000F93A5-F16D-11ED-B273-3C91809A0E42.png)

填写完成后，然后将该文本内容再到 bejson 进行验证一遍，确定验证通过后，再使用下图两个按钮，对 Json 进行压缩。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/002B8473-F16D-11ED-A391-3C91809A0E42.png)

然后回到编辑器，保存刚才压缩过后的配置信息文本。

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/005FB8FB-F16D-11ED-AB64-3C91809A0E42.png)

然后将 `mcbbs.packmeta` 上传至之前的网盘路径，覆盖掉之前的文件即可。

:::warning 注意
如果你**使用了 CDN**，请记得刷新该文件的缓存！否则可能不生效！

同时，如果是**新增或者修改文件**，也请将该文件放置 `overrides/对应的目录` 下方。

再次提示，文件的 hash 值一定要对应！如果是 Mod 需要更新，建议修改 Mod 文件名与 Hash。
:::

## 5.其他信息

如果你需要技术支持，欢迎联系我们，我们将为你提供收费的支持服务。
