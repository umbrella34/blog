#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'ux34.cn' > CNAME
git init
git add -A
git commit -m 'deploy'

cd - # 退回开始所在目录
# rm -rf docs/.vuepress/dist