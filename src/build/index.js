var fs = require('fs');
var uglify = require("uglify-js");

fs.writeFileSync("./src/frontend/public/js/servedjs.min.js", uglify.minify({
    "servicejs.js": fs.readFileSync("./src/frontend/public/js/servedjs.js", "utf8")
}, {}).code, "utf8");

fs.createReadStream("./src/frontend/public/js/servedjs.js").pipe(fs.createWriteStream("./dist/servedjs.js"));
fs.createReadStream("./src/frontend/public/js/servedjs.min.js").pipe(fs.createWriteStream("./dist/servedjs.min.js"));
