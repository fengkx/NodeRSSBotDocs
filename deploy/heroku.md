# Heroku

## Deploy at the click of a button

<p>
<a href="https://www.heroku.com/deploy?template=https://github.com/fengkx/NodeRSSBot/tree/master">
  <img width=180 src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
</p>

## Restrictions and Data Persistence in Heroku

The file system that comes with the Heroku dynos is reset on each reboot, so the database need to be persisted via [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql), Its [Free Plan](https://elements.heroku.com/addons/heroku-postgresql) has a limit of 10,000 lines, which is generally sufficient for a single user. Also, since RSSBot uses [Worker Dynos](https://devcenter.heroku.com/articles/background-jobs-queueing), you should be aware of the limitation of [free-dyno-hours](https://devcenter.heroku.com/articles/free-dyno-hours). It is recommended to verify a credit card to get more than 30 days of free hours.
