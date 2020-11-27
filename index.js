const ConfigItem = Vue.component("ConfigItem", {
  template: `
    <div class="config-item">
        <header class="config-item-header">
            <p class="config-item-setting">{{conf}}: <code>{{setting}}<span></code><Badge type="tip" v-if="required">Required</Badge></p>
            <p>{{envVar}}: <code>{{env}}</span></code></p>
        </header>
        <div class="config-item-desc">
            <p>
                <div style="white-space:pre;" v-if="defaultValue">Default: <code>{{defaultValue}}</code></div>
                <p style="line-height:1.5"><slot></slot></p>
            </p>
        </div>
    </div>
    `,
  props: ["setting", "env", "required", "description", "defaultValue", "lang"],
  computed: {
    conf: function conf() {
      console.log(this);
      return this.lang === "zh" ? "配置项" : "Setting";
    },
    envVar: function envVar() {
      return this.lang === "zh" ? "环境变量" : "Environment Var";
    },
  },
});

new Docute({
  target: "#docute",
  router: {
    mode: "history",
  },
  logo:
    '<a style="display:flex;" href="/"><img style="margin-right:.5em;" src="https://cdn.jsdelivr.net/npm/noderssbot-logo@0.0.2/pngs/logox32.png" alt="NodeRSSBot logo">NodeRSSBot</a>',
  sourcePath: "/",
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  editLinkBase: "https://github.com/NodeRSSBot/site/blob/master",
  components: { ConfigItem },
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} Developed by&nbsp;<a href="https://gihub.com/fengkx" rel="noreferrer noopener" target="_blank">fengkx</a>. Released under MIT license.
  </div>
  <div style="color: rgb(153, 153, 153);display: flex;font-size: 0.9rem;align-items: center;vertical-align: middle;white-space: pre;">This site is powered by <a style="display:flex;align-items:center" href="https://vercel.com?utm_source=NodeRSSBot&utm_campaign=oss" target="_blank" rel="noreferrer noopener">Vercel&nbsp;<svg width="16" height="16" viewBox="0 0 116 100" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M57.5 0L115 100H0L57.5 0z"/></svg></a></div>
  `,
  nav: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "GitHub",
      link: "https://github.com/fengkx/NodeRSSBot",
    },
    {
      title: "Channel",
      link: "https://t.me/NodeRSSBotStatus",
    },
    {
      title: "Public Demo",
      link: "https://t.me/NodeRSS_bot",
    },
  ],
  sidebar: [
    {
      title: "User Guide",
      children: [
        { title: "Introdution", link: "/" },
        { title: "Usage", link: "/guide/usage" },
        { title: "Configurations", link: "/guide/configurations" },
      ],
    },
    {
      title: "Deployment Guide",
      children: [
        { title: "Docker", link: "/deploy/Docker" },
        { title: "Heroku", link: "/deploy/heroku" },
        { title: "Manual Deployment", link: "/deploy/manual-deployment" },
      ],
    },
  ],
  overrides: {
    "/": {
      language: "English", // Used by the language dropdown menu in the sidebar
    },
    "/zh/": {
      language: "简体中文",
      editLinkText: "在 GitHub 上编辑此页",
      nav: [
        {
          title: "首页",
          link: "/zh/",
        },
        {
          title: "GitHub",
          link: "https://github.com/fengkx/NodeRSSBot",
        },
        {
          title: "频道",
          link: "https://t.me/NodeRSSBotStatus",
        },
        {
          title: "公共 Demo",
          link: "https://t.me/NodeRSS_bot",
        },
      ],
      // Override the default sidebar
      sidebar: [
        {
          title: "使用指南",
          children: [
            { title: "介绍", link: "/zh/" },
            { title: "使用方式", link: "/zh/guide/usage" },
            { title: "配置项", link: "/zh/guide/configurations" },
          ],
        },
        {
          title: "部署指南",
          children: [
            { title: "Docker", link: "/zh/deploy/Docker" },
            { title: "Heroku", link: "/zh/deploy/heroku" },
            { title: "手动部署", link: "/zh/deploy/manual-deployment" },
          ],
        },
      ],
    },
  },
});
