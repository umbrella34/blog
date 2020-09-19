// 导航栏配置
module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'HTML-CSS', link: '/pages/b53a25/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'JavaScript', link: '/pages/4e526b/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'Vue', link: '/pages/a6ec29/'},
        {text: 'Node', link: '/pages/61d973/'}
      ]}
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: 'Python', link: '/pages/529679/'},
      {text: 'Git', link: ''},
      {text: '其他', link: '/pages/7c9d0d/'},
    ]
  },
  { text: '设计', link: '/design/'},
  {
    text: '更多', 
    link: '/more/',
    items: [
      // {text: '学习', link: '/pages/f2a556/'},
      // {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      // {text: '收藏', link: '/pages/f2a556/'},
      // {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]