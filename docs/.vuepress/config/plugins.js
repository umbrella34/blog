//  插件配置
module.exports = [ // 插件
  'vuepress-plugin-cat', //撸猫插件
  ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    thirdparty: [ // 可选，默认 []
      {
        title: '在MDN中搜索',
        frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
      },
      {
        title: '在Runoob中搜索',
        frontUrl: 'https://www.runoob.com/?s=',
      },
      {
        title: '在Vue API中搜索',
        frontUrl: 'https://cn.vuejs.org/v2/api/#',
      },
      {
        title: '在Bing中搜索',
        frontUrl: 'https://cn.bing.com/search?q='
      },
      {
        title: '通过百度搜索本站的',
        frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20'
      }
    ]
  }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  ['one-click-copy', { // 代码块复制按钮
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
    duration: 1000, // prompt message display time.
    showInMobile: false // whether to display on the mobile side, default: false.
  }],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '4e8e7d9d8a2862a8d6e3539d7279562e'
    }
  ],
  [
    'vuepress-plugin-comment', // 评论
    // {
    //   choosen: 'valine',
    //   options: {
    //     el: '#valine-vuepress-comment',
    //     appId: 'qnS1jobNF7CROIQ0XYWBnVOH-gzGzoHsz',
    //     appKey: 'LIKa0ePqFMkglQfOkN0JNK6c',
    //     avatar: 'monsterid'
    //   }
    // },
    {
      choosen: 'gitalk',
      options: {
        clientID: 'f77c0ceb88bcc0517cb1',
        clientSecret: 'b493c8e8d35c4a6ecaecfcd32be0119f0989b3d1',
        repo: 'blog', // GitHub 仓库
        owner: 'umbrella34', // GitHub仓库所有者
        admin: 'umbrella34', // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
        title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
        labels: ["Gitalk", "Comment"], // GitHub issue 的标签
        body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
      }
    }
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment') // https://momentjs.com/
        return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
      }
    }
  ]
]