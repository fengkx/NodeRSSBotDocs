# Setting

<style>
    .page-content h2 {
        margin-top: 2rem;
    }
</style>

**All setting can be set by either environment variable or in `config.ts`. You need to build again after changing ts file**

## token

<ConfigItem required="true" setting="token" env="RSSBOT_TOKEN" lang="zh">
    <a href=https://core.telegram.org/bots#3-how-do-i-create-a-bot rel="noreffer noopener" >telegram bot token</a>
</ConfigItem>

## db_path

<ConfigItem setting="db_path" env="RSSBOT_DB_PATH" defaultValue="data/database.db" lang="zh">
    SQLite 数据库文件路径或者其他 `C/S DBMS`的 Connection String
</ConfigItem>

## lang

<ConfigItem setting="lang" env="RSSBOT_LANG" defaultValue="zh-CN" lang="zh">
    新用户默认语言或无对应翻译字符串的回退语言
</ConfigItem>

## item_num

<ConfigItem setting="item_num" env="RSSBOT_ITEM_NUM" defaultValue="10" lang="zh">
    每个 feed 一次最多发 `item_num` 项
</ConfigItem>

## fetch_gap

<ConfigItem setting="item_num" env="RSSBOT_FETCH_GAP" defaultValue="5m" lang="zh">
    时间间隔可设置为每多少分钟或多少小时。
    <code>m</code> 表示分钟， <code>h</code> 表示小时。例如 <code>5m</code> 表示每 5 分钟, <code>1h</code> 表示每 1 小时
</ConfigItem>

## strict_ttl

<ConfigItem setting="strict_ttl" env="RSSBOT_STRICT_TTL" defaultValue="true">
    是否严格执行 RSS 中的 ttl 值。 如果 RSS 中没有 ttl 值则使用 <code>fetch_gap</code> 不改变原有行为
</ConfigItem>

## http_cache

<ConfigItem setting="http_cache" env="RSSBOT_HTTP_CACHE" defaultValue="true">
    是否开启 HTTP Cache
</ConfigItem>

## notify_error_count

<ConfigItem setting="notify_error_count" env="NOTIFY_ERR_COUNT" defaultValue="5" lang="zh">
    一个 feed 多少次连续错误会发出警告
</ConfigItem>

## view_all

<ConfigItem setting="view_all" env="RSSBOT_VIEW_ALL" defaultValue="false" lang="zh">
    是否开启 `/viewall` 命令
</ConfigItem>

## UA

<ConfigItem setting="UA" env="RSSBOT_UA" defaultValue="Mozilla/5.0  NodeRSSBot v${version}(https://github.com/fengkx/NodeRSSBot)" lang="zh">
    请求的 user-agent  , 默认值中的 version 是来自 package.json
</ConfigItem>

## conurrency

<ConfigItem setting="concurrency" env="RSSBOT_CONCURRENCY" defaultValue="200" lang="zh">
    一次会同时发出多少个并发请求
</ConfigItem>

## proxy.protocol

<ConfigItem setting="proxy.protocol" env="PROXY_PROTOCOL" defaultValue="null" lang="zh">
    proxy protocol <code>http/https/socks</code>
</ConfigItem>

## proxy.host

<ConfigItem setting="proxy.host" env="PROXY_HOST" defaultValue="null" lang="zh">
    proxy host
</ConfigItem>

## proxy.port

<ConfigItem setting="proxy.port" env="PROXY_PORT" defaultValue="null" lang="zh">
    proxy port
</ConfigItem>

## resptimeout

<ConfigItem setting="resptimeout" env="RSSBOT_RESP_TIMEOUT" defaultValue="40(s)" lang="zh">
    请求超时时间
</ConfigItem>

## allow_list

<ConfigItem setting="allow_list" env="RSSBOT_ALLOW_LIST" defaultValue="null" lang="zh">
    白名单，逗号分隔的用户id。 用户 id 可以从 <a href="https://t.me/userinfobot" rel="nofollow">@userinfobot</a> 或 <a href="https://t.me/getidsbot" rel="nofollow">@getidsbot</a> 获取
</ConfigItem>
