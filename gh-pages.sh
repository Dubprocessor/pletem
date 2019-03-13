#!/bin/bash
set -e
MESSAGE=$1
timestamp() {
  date +"%Y-%m-%d [%H:%M:%S]"
}
git commit -m"$MESSAGE"
git push
git checkout gh-pages
git checkout master ./public
git commit -am "stage"
cp -r ./public/* ./
rm -rf ./public
git add .
git commit --amend --allow-empty -m "$(timestamp) - $MESSAGE"
git push
git checkout master
