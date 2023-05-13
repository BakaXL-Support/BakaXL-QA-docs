# 常见游戏崩溃问题

- 本文适用的游戏：Minecraft；
- 本文适用系统版本：Windows 7 及以上；
- 使用计算机阅读效果更佳。

:::tip 提示
使用左侧的侧边栏目录来快速寻找您的问题。

![目录](./assets/Minecraft_CRQA/catalogue.png)
:::

## Java 配置错误

::: warning 警告
如果您游玩 1.17 及之后的 Minecraft (自 1.18-pre2 开始) ，请务必使用 Java 17 运行游戏。
:::

::: tip
当然您也不必过于惊慌，如果您打开了 `自动选择合适的 Java 版本` 功能， BakaXL 会为您自动选择合适的 Java 并且在缺少适合的运行环境时为您自动安装。

您也可以手动选择 Java 版本，但是这一般适用于高级用户，当您手动选择 Java 版本时请铭记上方警告。
:::

### 使用 Forge 时

由于 `Forge` 的兼容性问题，**请务必使用与该版本对应的 Java 来运行你的 Minecraft** ，若仍然崩溃，请检查您使用的 Java 版本是否是 `Java 8u321` 或以上。（我们推荐使用：[__Java 8u312__](https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jre8.0.312-win_x64.msi) 来运行 1.16.5 及以下版本的 Minecraft) 

### 原版 & Fabric

虽然 Minecraft 原版 以及 Fabric 支持高版本的 Java，但是我们仍然推荐您使用 Java 8。

::: warning 警告
请避免使用 Java 8u321，你可以替换为 Java 8u312 或者最新版本的 Java 8。
:::

## Mod 冲突

请按照自己的选择来禁用冲突的 Mod，若您不知道哪些 Mod 冲突，请前往 [__BakaXL 官方群聊__](https://jq.qq.com/?_wv=1027&k=TwvkLgkB)寻求帮助，或按照教程自查。

![BakaXL Mod 管理界面](./assets/Minecraft_CRQA/gameModSetting.png)

## 显卡驱动过旧 / 未安装

在这之前，您需要了解您电脑所使用显卡的厂商。

::: tip 提示
笔记本用户通常可以直接跳过此节。
:::

1. 按下 `Win` + `R` 调出 `运行` 窗口；

2. 在运行窗口中输入 `dxdiag` ，并点击 `确定` ；

3. 在弹出的窗口中点击 `显示` ，在 `制造商` 一列将会显示您的显卡制造商。

![dx诊断工具](./assets/Minecraft_CRQA/directXtools.png)

### 笔记本用户

请前往您的笔记本制造商的官方网站获取对应的驱动程序软件。

### Intel 核芯显卡

请下载 [__英特尔™驱动程序和支持助理__](https://dsadata.intel.com/installer) 来更新显卡驱动。

### AMD 显卡 / 处理器

前往 [__AMD 驱动程序与支持__](https://www.amd.com/zh-hans/support) 页面根据您的显卡 / 处理器型号下载最新的驱动程序 。

![AMD 驱动下载页面](./assets/Minecraft_CRQA/amdDriver.png)

### NVIDIA 显卡

请前往 [__NVIDIA 驱动程序__](https://www.nvidia.cn/geforce/drivers/) 页面根据显卡型号和需要下载最新的显卡驱动。

![NVIDIA 驱动下载页面](./assets/Minecraft_CRQA/nvidiaDriver.png)

## 分配内存过大 (过小)

1. 前往 `本体设置` 并选择 `Java 虚拟机与内存`；
2. 点击 `内存设置`；
3. 确保 `自动设置内存` 为 `开`。

::: warning 警告
当您选择手动分配内存时，请确保分配的内存没有超过您目前可用的最大内存。
:::

![系统内存](./assets/Minecraft_CRQA/systemMemory.png)

::: tip 提示
Mod 越多（或材质包分辨率更大，能见度更远）时你需要分配更多的内存，但是不要超出你的可用内存。
:::

## 无法解决问题 / 其他

请寻求 BakaXL 官方群聊中的开发者 / 群员的帮助，或在其它例如 MCBBS 等交流论坛询问以及利用搜索引擎查询解决方案。

[如何正确地请求别人的帮助？](./How_To_Asking_Question.md)

