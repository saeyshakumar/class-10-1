var weights = [35,38,40,45]
var sum 
function sum(){
sum= weights[0]+weights[1]+weights[3]+weights[2]  
console.log(sum)
var average = sum/weights.length
console.log(average)
}
function setup() 
{
  createCanvas(400,400);
  sum()
}

function draw() 
{
background(51);

}

