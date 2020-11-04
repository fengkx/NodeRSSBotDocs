# Usage

## 命令

```
/rss       - 显示订阅列表，加 `raw`显示链接
/sub       - 订阅 RSS: /sub http://example.com/feed.xml 支持自动检测 RSS feed
/unsub     - 退订 RSS: /unsub http://example.com/feed.xml 或者通过键盘
/unsubthis - 回复一个 RSS 发来的消息退订该 RSS
/allunsub  - 退订所有源
/export    - 导出订阅到opml文件
/viewall   - 查看所有订阅和订阅人数 需要在设置中打开
/import    - 回复此消息 opml 文件导入订阅(群组)
/lang      - 更改语言
/heath      - 展示活跃订阅源的健康程度
```

## 详细使用指南

`/sub` 可以自动检测 RSS feed，可以直接 `/sub https://www.fengkx.top` 而不用 `/sub https://www.fengkx.top/atom.xml`

私聊可以直接发送 feed 地址订阅，支持同时发送多个地址按行分割

`/viewall` 只能在私聊中使用

在私聊中可以直接发送 opml 文件，导入 RSS 源， 在群聊中则将文件回复给 bot

### 频道使用

把 bot 设为频道管理员并正确配置权限后，可通过私聊在`/sub`后加上频道 id 来在频道中订阅 feed
例如 `/sub <频道 id > <feed url>` (频道 id 是@打头的)

频道导入需要将文件名改成频道 id 并且以 opml 作为后缀在私聊中发送 例如 `@myChannel.opml`
