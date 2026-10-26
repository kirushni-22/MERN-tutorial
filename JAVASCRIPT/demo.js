var a=10
console.log(a)

function abc()
{
    console.log("Hello")
}
abc()

function myname(){
    console.log("My name is John")
}
myname()

function samsung(){
    console.log("This is samsung phone")
}
samsung()

function add(a,b){
    console.log(a+b)
}
add(5,10)

var factor = "sk"
var fplayer = "dhoni"
var fmovie = "Baanumathi"

function favourite(){
    console.log("My favourite factor is " + factor)
    console.log("My favourite player is " + fplayer)
    console.log("My favourite movie is " + fmovie)
}
favourite()

function add(a,b){
    console.log(a+b)
}
add(5,10)

function area(length,breadth){
    console.log(length*breadth)

}
area(5,10)

function myname(){
    return "john"
}
console.log(myname())

function add(a,b){
    return a+b
}
var result = add(5,10)
console.log(result)

if(true){
    console.log("This is true")
}

if(false){
    console.log("This is true")
}
else{
    console.log("This is false")
}


var rain = true
if(rain){
    console.log("Take an umbrella")
}
else{
    console.log("No need to take an umbrella")
}

var Homework = "yes"
if(Homework == "yes"){
    console.log("I will do my homework")
}
else{
    console.log("I will not do my homework")
}

var cookies = "Yes"
if(cookies == "Yes"){
    console.log("I will eat cookies")
}
else{
    console.log("I will not eat cookies")
}

var brush = "No"
if(brush == "Yes"){
    console.log("I will brush my teeth")
}
else{
    console.log("I will not brush my teeth")
}

var Birthday = "No"
if(Birthday == "Yes"){
    console.log("I will celebrate my birthday")
}
else{
    console.log("I will not celebrate my birthday")
}

console.log(false && true)
console.log(true && true)
console.log(false && false)
console.log(true && false)
console.log(false && true && false)
console.log(false || true)
console.log(true || true)
console.log(false || false)
console.log(true || false)
console.log(false || true || false)

console.log(!true)
console.log(!false)

var trafficlight = "red"
if(trafficlight == "red"){
    console.log("Stop")
}
else if(trafficlight == "yellow"){
    console.log("Get ready")
}
else if(trafficlight == "green"){
    console.log("Go")
}
else{
    console.log("Invalid traffic light color")
}

var season = "summer"
if(season == "summer"){
    console.log("It's summer!")
}
else if(season == "winter"){
    console.log("It's winter!")
}
else if(season == "spring"){
    console.log("It's spring!")
}
else if(season == "autumn"){
    console.log("It's autumn!")
}
else{
    console.log("Invalid season")
}

var score = 85
if(score >= 90){
    console.log("Grade: A")
}
else if(score >= 80){
    console.log("Grade: B")
}
else{
    console.log("Grade: C")
}

var number = "15"
if(number % 2 == 0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}

var vowel = ["a", "e", "i", "o", "u"]
var letter = "e"
if(vowel.includes(letter)){
    console.log(letter + " is a vowel")
}
else{
    console.log(letter + " is not a vowel")
}

console.log("john")

for (i=1; i<=5; i++){
    console.log("john")
}

for(i=1; i<=10; i++){
    console.log(i)
}

for(i=1; i<=10; i=i+2){
    console.log(i)
}

for(i=10; i>=1; i--){
    console.log(i)
}

for(i=1; i<=10; i++){
    if(i%2==0){
        console.log(i )
    }
}