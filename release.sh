#!/bin/sh

# MIT License
# Copyright (c) 2017-2019 Imre Tabur <imre.tabur@eesti.ee>

RELEASE=1.3.2
VERSION_TAG=version-${RELEASE}

npm install && npm run build && npm run test
git add ./dist package.json package-lock.json release.sh
git commit -m "${VERSION_TAG}"
git push
git checkout master
git merge develop
git tag -a ${VERSION_TAG} -m "${VERSION_TAG}" && git push origin ${VERSION_TAG} && git push && npm publish

exit 0
