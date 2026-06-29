const fs = require('fs');
const buffer = fs.readFileSync('public/robot_playground_opt.glb');
// just check if it contains the string "pDisc1_holo1_0"
const text = buffer.toString('utf8', 0, Math.min(buffer.length, 1000000));
console.log("Original has pDisc1:", fs.readFileSync('public/robot_playground.glb').toString('utf8', 0, 1000000).includes("pDisc1_holo1_0"));
console.log("Opt has pDisc1:", text.includes("pDisc1_holo1_0"));
