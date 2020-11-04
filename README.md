# NodeRSSBot

[![Node CI](https://github.com/fengkx/NodeRSSBot/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/fengkx/NodeRSSBot/actions?query=workflow%3A%22Node+CI%22)
[![Publish Docker](https://github.com/fengkx/NodeRSSBot/workflows/Publish%20Docker/badge.svg?branch=master)](https://github.com/fengkx/NodeRSSBot/actions?query=workflow%3A%22Publish+Docker%22)
[![Docker pulls](https://badgen.net/docker/pulls/fengkx/node_rssbot)](https://hub.docker.com/repository/docker/fengkx/node_rssbot)
[![Docker image size](https://badgen.net/docker/size/fengkx/node_rssbot/latest/amd64)](https://hub.docker.com/repository/docker/fengkx/node_rssbot)

<p>
<a href="https://www.heroku.com/deploy?template=https://github.com/fengkx/NodeRSSBot/tree/master">
  <img width=180 src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
</p>

Another telegram RSSBot in Node.js. But this time in Node.js.
## Hightlights

1. Import and export an opml file
1. [Various configuration](https://github.com/fengkx/NodeRSSBot/wiki/English-Document)
1. Pagination on command that list feeds
1. Automaticlly extract feed from page (from link tag with type such as `type="application/atom+xml"`)
1. I18N

## Commands

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

## Deploy with docker

Once you got a [telegram bot token](https://core.telegram.org/bots#3-how-do-i-create-a-bot) and docker installed

```sh
docker run --name rssbot -d -v <directory to store database file>:/app/data/ -e RSSBOT_TOKEN=<YOUR_TGBOT_TOKEN> fengkx/node_rssbot
```

For more information on deployment and usage, configuration items, see the [Wiki](https://github.com/fengkx/NodeRSSBot/wiki)
