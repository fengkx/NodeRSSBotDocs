# Manual Deployment

**Note that NODE_PRODUTION environment should be set**

1. Node.js and npm installed
1. clone this repository `git clone https://github.com/fengkx/NodeRSSBot.git`
1. Set the `RSSBOT_TOKEN` environment variable or set it in config.ts
1. Install dependencies run `npm i` in the root directory of the repository
1. Build it `npm run build`
1. If you want to save some space, you can choose to run `npm prune --production` to remove devDependencies
1. Run `pm2 start npm --name node_rssbot -- start` (recommend) or `npm start`
