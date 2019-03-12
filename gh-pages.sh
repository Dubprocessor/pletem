#!/bin/bash
set -e
timestamp() {
  date +"%Y-%m-%d [%H:%M:%S]"
}
git push
git checkout gh-pages
git checkout master ./public
git commit -am "stage"
cp -r ./public/* ./
rm -rf ./public
git add .
git commit --amend --allow-empty -m "$(timestamp) - release"
git push
git checkout master
