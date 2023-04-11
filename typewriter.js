const sentence = "hello there from mot.thetechsis";
let animatedSentence = 0;

for (const char of sentence) {
setTimeout(() => {
  process.stdout.write(char);
}, animatedSentence);
animatedSentence +=50;
  // console.log(char);
  // process.stout.write allows for all characters to be printed on a single line in node. 
} 

setTimeout(() => {
  console.log("\n")}, animatedSentence)

// console.log(finalOutput);
 
