#!/usr/bin/env node

//expected result:
// $ ./global.js
// Node.js version: v6.3.1
// V8 version: 5.0.71.57

console.log(`Node.js version: ${process.version}`);
console.log (`V8 version: ${process.versions.v8}`);
