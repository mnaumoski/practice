var fs = require(‘fs’);

var textile = process.argv[2];

fs.appendFile(textFile, “hello Kitty”, function(err) {

    if (err) {
        console.log(err);
    } else {
        console.log(“content added”);
    }
});
