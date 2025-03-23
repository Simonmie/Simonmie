// 引入shelljs
const shell = require('shelljs')

// 使用curl 进入掘金对应页面获取页面内容

const url = 'https://juejin.cn/user/1489178757445003/posts?sort=popular'
let htmlString = ''
