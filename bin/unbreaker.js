#!/usr/bin/env node
/*eslint no-console: 0*/

if(process.argv.length <= 2) {
  console.log("Usage: unbreaker str [str...]");
  process.exit(1);
}

var unbreaker = require('../lib/unbreaker');
process.argv.slice(2).forEach(function(s){
  console.log(unbreaker(s));
});
