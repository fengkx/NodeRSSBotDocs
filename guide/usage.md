# Usage

## Comands

```
/rss       - show subscriptions，add raw to show links
/sub       - subscribe a RSS: /sub http://example.com/feed.xml automatically detecting RSS feed is supported
/unsub     - unsubscribe a RSS: /unsub http://example.com/feed.xml or by keyboard
/unsubthis - reply a message from a RSS feed to unsubscribe it
/allunsub  - unsubscribe all feeds
/export    - export subscriptions to opml file
/viewall   - view all subscriptions and number of subscribers need to enable in settings
/import    - reply this message a opml file to import(in group)
/lang      - change language
/heath     - show the heath of actively subscribed feed
```

## Detail Use guide

`/sub` commands can automatically detecting RSS feed, you can use `/sub https://www.fengkx.top` instead of `/sub https://www.fengkx.top/atom.xml`.

You can send multi feeds directly to subscribe in private chat(split by line).

`/viewall` can only be used in private chat.

You can send a opml file directly to import feed in private chat, or reply to the bot in group chat.

### Channel Usage

You can add channel id to subscribe a feed for a channel in private chat after adding the bot as administrator
for example `/sub <channel id > <feed url>` (channel id is start with @).

for channel, import send a opml file name by channel id with a opml suffix name in private chat for example `@myChannel.opml`.
