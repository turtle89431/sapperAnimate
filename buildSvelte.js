var cp = require("copyfiles")
cp(["flaGoesHere/flafiles/*.html", "src/routes/"], { follow: false, up: 2 }, e => console.log(e))
cp(["flaGoesHere/flafiles/images/*.*", "static"], { follow: false, up: 2 }, e => console.log(e))