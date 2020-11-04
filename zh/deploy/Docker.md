# Docker

## 使用自动构建的 docker image(推荐）

安装好了 docker 之后

1. 运行`docker pull fengkx/node_rssbot`
1. 运行 `docker run --name rssbot -d -v <directory to store database file>:/app/data/ -e RSSBOT_TOKEN=<YOUR_TGBOT_TOKEN> fengkx/node_rssbot`

例如 `docker run --name rssbot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=123456:abcdef123456-U fengkx/rssbot`

## 本地构建

1. 安装 Docker
1. 克隆仓库 `git clone https://github.com/fengkx/NodeRSSBot.git`
1. 构建 docker image `docker build .` then you will get a image id
1. 运行 `docker run --name rssbot -d -e RSSBOT_TOKEN=<YOUR_TGBOT_TOKEN> <YOUR_IMAGE_ID>`

例如 `docker run --name rssbot -d -e RSSBOT_TOKEN=123456:abcdef123456-U fd54321bff2`
