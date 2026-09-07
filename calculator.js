let num1=Number(process.argv[2])
let num2=Number(process.argv[3])
let operation =process.argv[4]
if (operation ==='add'){
    console.log("Result:",num1+num2)
}else if (operation ==='sub'){
    console.log("Result:",num1-num2)
}else if (operation ==='multiply'){
    console.log("Result:",num1*num2)
}else if (operation ==='divide'){
    console.log("Result:",num1/num2)
}
