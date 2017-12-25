#!/bin/sh

# MIT License
# Copyright (c) 2017 Imre Tabur <imre.tabur@eesti.ee>

RELEASE=1.0.7
VERSION_TAG=version-${RELEASE}

npm install && bower install && npm run build && npm run unit
git add pom.xml package.json release.sh package-lock.json
git commit -m "${VERSION_TAG}"
git push
git checkout master
git merge develop
git tag -a ${VERSION_TAG} -m "${VERSION_TAG}" && git push origin ${VERSION_TAG} && git push && npm publish

exit 0
