## ServedJS

This is ServiceJS extension library to add some basic services for systems.

### Why?

It is tools collections into services.

### Setup

npm install && bower install

### Run server for examples

npm run start

or

npm start

or

mvn jetty:run

http://localhost:3000/

### Unit testing

npm run unit

### Run example program

npm run program

### Usage

TODO : write guides.

### Example code

TODO : write guides.

### Publishing npm

https://docs.npmjs.com/getting-started/publishing-npm-packages

### Bower registration

nano bower.json

https://bower.io/docs/creating-packages/

bower register servicejs https://github.com/Krabi/servedjs.git

### Release current project

Simply:

    release.sh
or

git checkout develop

Remove -SNAPSHOT from pom.xml, package.json and release.sh and commit change

git add pom.xml package.json release.sh package-lock.json

git commit -m 'version-X.Y.Z'

git push

git checkout master

git merge develop

git tag -a version-X.Y.Z -m "version-X.Y.Z" && git push origin version-X.Y.Z && git push && npm publish

### Github site

https://krabi.github.io/servedjs/

### NPM stie

https://www.npmjs.com/package/servedjs

### License

MIT
