var fs = require('fs');
var uglify = require("uglify-js");

var code = {
    "servicejs.js": fs.readFileSync("./src/frontend/public/js/servedjs.js", "utf8")
};

var options = {
    output: {
        comments: /^!/
    }
};

fs.writeFileSync("./src/frontend/public/js/servedjs.min.js", uglify.minify(code, options).code, "utf8");

fs.createReadStream("./src/frontend/public/js/servedjs.js").pipe(fs.createWriteStream("./dist/servedjs.js"));
fs.createReadStream("./src/frontend/public/js/servedjs.min.js").pipe(fs.createWriteStream("./dist/servedjs.min.js"));
