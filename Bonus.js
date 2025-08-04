/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var increasePerYear = 5;
increasePerYear /= 100;

var eknSalary = startingSalary; 

for (var i = 0; i < experience; i++) {

  eknSalary = eknSalary + (eknSalary * increasePerYear);
}

var finalSalary = eknSalary.toFixed(2);

console.log(finalSalary);