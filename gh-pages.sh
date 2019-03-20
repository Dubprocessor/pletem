#!/bin/bash
set -e
BRANCH=$1
MESSAGE=$2
timestamp() {
  date +"%Y-%m-%d [%H:%M:%S]"
}
git commit -m "$MESSAGE"
git checkout gh-pages
git checkout $BRANCH ./public
git commit --allow-empty -am "stage"
cp -r ./public/* ./
rm -rf ./public
git add .
git commit --amend -m "$(timestamp) - $MESSAGE"
git push
git checkout $BRANCH
git merge -s ours master -m "$MESSAGE"
git checkout master
git merge $BRANCH
git branch -d $BRANCH
git push
git branch
 