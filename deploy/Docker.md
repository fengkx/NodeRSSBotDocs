# Docker

## Use autobuild docker image(Recommended)

After install docker

1. Run`docker pull fengkx/node_rssbot`
1. Run `docker run --name rssbot -d -v <directory to store database file>:/app/data/ -e RSSBOT_TOKEN=<YOUR_TGBOT_TOKEN> fengkx/node_rssbot`

for exmaple `docker run --name rssbot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=123456:abcdef123456-U fengkx/rssbot`

## Build docker locally

1. Install Docker
1. clone this repository `git clone https://github.com/fengkx/NodeRSSBot.git`
1. Run `docker build .` then you will get an image id
1. Run`docker run --name rssbot -d -e RSSBOT_TOKEN=<YOUR_TGBOT_TOKEN> <YOUR_IMAGE_ID>`

for example `docker run --name rssbot -d -e RSSBOT_TOKEN=123456:abcdef123456-U fd54321bff2`
