# Heroku

## 一键部署

<p>
<a href="https://www.heroku.com/deploy?template=https://github.com/fengkx/NodeRSSBot/tree/master">
  <img width=180 src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
</p>

## Heroku 中的限制和数据持久化

Heroku dyno 中自带的文件系统会在每次重启时重置，所以 Bot 的数据库通过 [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql) 持久化，[Free Plan](https://elements.heroku.com/addons/heroku-postgresql) 有 10000 行的总行数限制，对于单用户来说一般够用。同时因为 RSSBot 使用 [Worker Dynos](https://devcenter.heroku.com/articles/background-jobs-queueing)，需注意 [免费时长](https://devcenter.heroku.com/articles/free-dyno-hours) 的限制。建议绑定信用卡以获得 30 天以上的免费时长。
