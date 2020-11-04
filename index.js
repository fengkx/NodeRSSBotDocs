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
  sourcePath: "/",
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  editLinkBase: "https://github.com/NodeRSSBot/site/blob/master",
  components: { ConfigItem },
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} Developed by <a href="https://gihub.com/fengkx" rel="noreferrer noopener" target="_blank">fengkx</a>. Released under MIT license.
  </div>
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
      nva: [
        {
          title: "首页",
          link: "/zh/",
        },
        {
          title: "GitHub",
          link: "https://github.com/fengkx/NodeRSSBot",
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
