let number = ()=>{
for (i=1; i<=20; i++) {
if (i%3){
    console.log("Fizz");
}
else if (i%5){
    console.log("Buzz");
}
else if (i%3 || i%5){
    console.log("FizzBuzz");
}}}
return number;