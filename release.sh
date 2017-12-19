#!/bin/sh

# MIT License
# Copyright (c) 2017 Imre Tabur <imre.tabur@eesti.ee>

RELEASE=1.0.0-SNAPSHOT
VERSION_TAG=version-${RELEASE}

git add pom.xml package.json release.sh
git commit -m "${VERSION_TAG}"
git push
git checkout master
git merge develop
git tag -a ${VERSION_TAG} -m "${VERSION_TAG}" && git push origin ${VERSION_TAG} && git push && npm publish

exit 0
