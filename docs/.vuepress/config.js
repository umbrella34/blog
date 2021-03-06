const themeConfig = require('./config/themeConfig');
const plugins = require('./config/plugins');

module.exports = {
  title: "伞仙博客",
  description: 'web前端技术博客,简洁至上,专注前端技术栈分享。JavaScript,js,ES6,TypeScript,vue,python3,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/', // '/<github仓库名>/'， 默认'/'
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,大前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python3,css3,html5,Node,git,github,markdown' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-iMEaQHggkz' }],// 百度统计的站点拥有者验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },
  theme: 'vdoing', // 使用依赖包主题
  themeConfig, plugins
}