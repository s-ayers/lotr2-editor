var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var items = line.split(/\s+/),
        file_location = '';

    var offset = parseInt(items[0], 10);
    if (offset < 84864 ) {
        file_location = 'Unknown - header';
    } else if (offset < 84892) {
        file_location = 'Store House';
        if (offset === 84864) {
            file_location = 'Crowns'
            items[1] = '$' + parseInt(items[1], 16);
            items[2] = '$' + parseInt(items[2], 16);
        }
    } else if (offset < 84928 ) {
        file_location = 'Armory';
    } else if (offset < 99760) {
        var shire = 16 - Math.floor((99760-offset)/768);
        file_location = 'Shire ' +  shire;



    } else if (offset < 147658) {

        var army = 115 - Math.floor((147658-offset)/420);

        file_location = 'Army ' + army;




    } else {
        file_location = 'Unknown - footer';
    }
    


    console.log(`${items[0]} ${file_location} ${items[1]} ${items[2]}`);
})