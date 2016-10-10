var fs = require('fs');


fs.readFile("best_things_ever.txt", "utf8", function(err, data) {

    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(', ');

    // We will then re-display the content with the split for aesthetics.
    console.log(dataArr);

    for (var i=0; i<dataArr.length; i++) {
        console.log(dataArr[i]);
    }

  // If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

});
