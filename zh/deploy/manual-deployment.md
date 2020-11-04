## PM2

**注意生产环境下要设置 NODE_PRODUTION 环境变量**

1. 首先要有 Node.js 和 npm 或 yarn
1. 克隆仓库 `git clone https://github.com/fengkx/NodeRSSBot.git`
1. 设置 `RSSBOT_TOKEN` 环境变量，或者直接在 `config.ts` 中修改
1. 安装依赖 在仓库根目录运行`npm i`
1. 编译 `npm run build`
1. 如果你想节省些空间，你可以运行`npm prune --production`把 build 所需的依赖清掉
1. 推荐用 `pm2` 守护进程 `pm2 start npm --name node_rssbot -- start` 如果没有安装`pm2` 就先安装 `npm i -g pm2` 或者直接 `npm start`
