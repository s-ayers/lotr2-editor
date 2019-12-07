#!/usr/bin/env node

const fs = require('fs');
const yargs = require("yargs");
var printf = require('printf');

const options = yargs
  .usage("Usage: stragey <file1> <file2>")
  .option("d", { alias: "diff", describe: "diff the two files (default)", type: "boolean" })
  .option("j", { alias: "join", describe: "join the two files; show where same", type: "boolean" })
  .argv;

console.log(options);

if (options._.length > 2) {
  throw Error('Too many parameters');
} else if (options._.length < 2) {
  throw Error('Too few parameters');
}

var buf1, buf2;



readFiles = () => {

  var count = 2;
  function readCallback() {
    count -= 1;

    if (count === 0) {

      bufferisValid(buf1);
      bufferisValid(buf2);

      if (options.j) {
        joinBuffers(buf1, buf2);
      } else {
        diffBuffers(buf1, buf2);
      }

    }
  }

  fs.readFile(options._[0], (error, content) => {
    if (error) throw error;

    buf1 = content;
    readCallback();
  });

  fs.readFile(options._[1], (error, content) => {
    if (error) throw error;

    buf2 = content;
    readCallback();
  });
}

joinBuffers = (buf1, buf2) => {
  for (var i = 0; i < buf1.length; i += 1) {
    var val1 = buf1.readUInt8(i),
      val2 = buf2.readUInt8(i);

    if (val1 === val2) {
      var location = byteLocation(i);
      var msg = printf('%08d \t %03d \t %03d \t %s\n', i, val1, val2, location);
      process.stdout.write(msg);
    }
  }
}

diffBuffers = (buf1, buf2) => {


  for (var i = 0; i < buf1.length; i += 1) {
    var val1 = buf1.readUInt8(i),
      val2 = buf2.readUInt8(i);

    if (val1 !== val2) {
      var location = byteLocation(i);
      var msg = printf('%08d \t %03d \t %03d \t %s\n', i, val1, val2, location);
      process.stdout.write(msg);
    }
  }
}

bufferisValid = (buf) => {
  if (buf.length !== 471828) {
    throw Error("File (buffer) is the wrong fix");
  }
}


byteLocation = (offset) => {

  var location = "Unkown:Unkown";

  if (offset < 84864) {
    location = headerLocation(offset);
  } else if (offset < 84892) {
    location = inventoryLocation(offset);
  } else if (offset < 84928) {
    location = armyLocation(offset);
  } else if (offset < 99760) {
    location = countyLocation(offset);
  } else if (offset < 147658) {
    location = armyLocation(offset);
  } else {
    location = footLocation(offset);
  }

  return location;
}


headerLocation = (offset) => {
  return 'Header:Unknown';
}

inventoryLocation = (offset) => {
  return 'Inventory';
}

armoryLocation = (offset) => {
  return 'Armory';
}

countyLocation = (offset) => {
  var shire = 16 - Math.floor((99760 - offset) / 768);
  location = printf('County:%02d', shire);

  return location;
}

armyLocation = (offset) => {
  var army = 115 - Math.floor((147658 - offset) / 420);

  return printf('Army:%03d', army);
}

footLocation = (offset) => {
  return 'Footer:Unknown';
}

readFiles();