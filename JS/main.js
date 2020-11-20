 document.write(typeof 56); //displaying the typeof(data types)

 document.write(10 == "1"); //Boolean False
 document.write(5 == 5); //Boolean true

 console.log(7 * 77); //using console.log

 document.write("10" + 7); //returning 107

 console.log(10 > 100); //returning false in console.log

 function notTrue() {
     document.getElementById("dino1").innerHTML = !(40 > 5);
     document.getElementById("dino2").innerHTML = !(40 > 50);
 }

 notTrue(); // using Not operator


 function toInfinity() {

     document.getElementById("infinite").innerHTML = 3E308;

 }

 toInfinity(); //returning Infinity

 function toNegativeInfinity() {


     document.getElementById("negativeInfinite").innerHTML = -3E308;
 }
 toNegativeInfinity(); //returning -Infinity







 function greatOrLess() {
     document.getElementById("trueFalse").innerHTML = 10 == 5;
 }
 greatOrLess(); //returning false

 function theTruth() {
     document.getElementById("theTruth").innerHTML = 10 == 10;

 }
 theTruth(); //returning true



 function dataTypes() {
     x = 10;
     a = "string";
     b = 11.3;
     c = "10";
     document.getElementById("demo1").innerHTML = (x === x);
     document.getElementById("demo2").innerHTML = (x === a);
     document.getElementById("demo3").innerHTML = (x === c);
     document.getElementById("demo4").innerHTML = (a === c);
 }

 dataTypes(); //returning true or false depending on if the
 //data types match 


 function andOrNot() {
     document.getElementById("difference").innerHTML = (5 < 10 && 6 > 5);
     document.getElementById("difference1").innerHTML = (5 > 10 && 6 < 5);
     document.getElementById("difference2").innerHTML = (4 < 5 || 4 > 5);
     document.getElementById("difference3").innerHTML = (4 > 5 || 5 < 4);
 }

 andOrNot(); //returning true or false with the && and || operator
