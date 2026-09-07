const crypto=require('crypto')
const rolls=process.argv[2]

console.log("Dice programe started")
console.log("Number of rolls:",rolls)

for (let i=0;i<rolls;i++){
    const dice=crypto.randomInt(1,7)
    console.log('Dice is Rolled:',dice)
}
console.log("Dice Program has been run")