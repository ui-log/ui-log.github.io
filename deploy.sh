#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd .vuepress/dist

# gh-pages clone
git clone -b gh-pages https://github.com/ui-log/ui-log.github.io/
cp -rf ui-log.github.io/.git ./.git
rm -rf ui-log.github.io

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add .
git commit -m "$*"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:ui-log/ui-log.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push origin gh-pages

cd -
