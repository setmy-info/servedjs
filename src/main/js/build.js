var fs = require('fs');
var uglify = require("uglify-js");

fs.writeFileSync("dist/servedjs.min.js", uglify.minify({
    "servedjs.js": fs.readFileSync("src/main/webapp/js/servedjs.js", "utf8")
}, {}).code, "utf8");

fs.createReadStream('src/main/webapp/js/servedjs.js').pipe(fs.createWriteStream('dist/servedjs.js'));

fs.createReadStream('dist/servedjs.min.js').pipe(fs.createWriteStream('src/main/webapp/js/servedjs.min.js'));
