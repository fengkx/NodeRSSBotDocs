# Setting

<style>
    .page-content h2 {
        margin-top: 2rem;
    }
</style>

**All setting can be set by either environment variable or in `config.ts`. You need to build again after changing ts file**

## token

<ConfigItem required="true" setting="token" env="RSSBOT_TOKEN">
    <a href=https://core.telegram.org/bots#3-how-do-i-create-a-bot rel="noreffer noopener" >telegram bot token</a> required to run a bot
</ConfigItem>

## db_path

<ConfigItem setting="db_path" env="RSSBOT_DB_PATH" defaultValue="data/database.db">
    path to store sqlite db file or connection string of other c/s dbms
</ConfigItem>

## lang

<ConfigItem setting="lang" env="RSSBOT_LANG" defaultValue="zh-CN">
    default language for new user, fall back language for string without a corresponding translation
</ConfigItem>

## item_num

<ConfigItem setting="item_num" env="RSSBOT_ITEM_NUM" defaultValue="10">
    Send up to `item_num` messages at a time
</ConfigItem>

## fetch_gap

<ConfigItem setting="item_num" env="RSSBOT_FETCH_GAP" defaultValue="5m">
    fetch_gap can be set in how many minutes or hours.
    <code>m</code> for minute, <code>h</code> for hour for example, <code>5m</code> means every 5 minutes, <code>1h</code> means every 1 hour.
</ConfigItem>

## strict_ttl

<ConfigItem setting="strict_ttl" env="RSSBOT_STRICT_TTL" defaultValue="true">
    whether treat RSS ttl value in RSS seriously. It will fallback to <code>fetch_gap</code>, if there is not ttl value.
</ConfigItem>

## http_cache

<ConfigItem setting="http_cache" env="RSSBOT_HTTP_CACHE" defaultValue="false">
    whether enable HTTP Cache
</ConfigItem>

## notify_error_count

<ConfigItem setting="notify_error_count" env="NOTIFY_ERR_COUNT" defaultValue="5">
    How many consecutive errors in one feed will a warning be issued
</ConfigItem>

## view_all

<ConfigItem setting="view_all" env="RSSBOT_VIEW_ALL" defaultValue="false">
    whether enable `/viewall` command
</ConfigItem>

## UA

<ConfigItem setting="UA" env="RSSBOT_UA" defaultValue="Mozilla/5.0  NodeRSSBot v${version}(https://github.com/fengkx/NodeRSSBot)">
    user-agent header of the bot , version in default value is fetch from pacakge.json
</ConfigItem>

## conurrency

<ConfigItem setting="concurrency" env="RSSBOT_CONCURRENCY" defaultValue="200">
    how many concurrency requests will be send in a batch
</ConfigItem>

## proxy.protocol

<ConfigItem setting="proxy.protocol" env="PROXY_PROTOCOL" defaultValue="null">
    proxy protocol <code>http/https/socks</code>
</ConfigItem>

## proxy.host

<ConfigItem setting="proxy.host" env="PROXY_HOST" defaultValue="null">
    proxy host
</ConfigItem>

## proxy.port

<ConfigItem setting="proxy.port" env="PROXY_PORT" defaultValue="null">
    proxy port
</ConfigItem>

## resptimeout

<ConfigItem setting="resp_timeout" env="RSSBOT_RESP_TIMEOUT" defaultValue="40(s)">
    request response timeout. <a href="https://www.npmjs.com/package/got#timeout" target="_blank" rel="noreferrer" >resp timeout</a>
</ConfigItem>

## before_resp_timeout

<ConfigItem setting="before_resp_timeout" env="RSSBOT_BEFORE_RESP_TIMEOUT" defaultValue="3(s)">
    request request timeout before response
</ConfigItem>

## allow_list

<ConfigItem setting="allow_list" env="RSSBOT_ALLOW_LIST" defaultValue="null">
    allow list by user id splited by comma. You can get your userid by <a href="https://t.me/userinfobot" rel="nofollow">@userinfobot</a> or <a href="https://t.me/getidsbot" rel="nofollow">@getidsbot</a>
</ConfigItem>
