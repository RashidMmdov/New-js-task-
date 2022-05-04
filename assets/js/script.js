//Task - 1
//  let str="Hello AP204";

//  function ReverseString(str){
//     let result="";
//     for (let i = str.length-1; i>=0; i--) {
//          result += str[i];
//     }
//     return result
// }
// console.log(ReverseString(str));

//Task - 5

// function NumChange(num) {
    
// let temp=num/10;

// let rem=num%10;
// num/=10;

// while(num>1){
//     rem*=10;
//     num/=10;
// }
// let result =rem+temp;
// return result
// }
// console.log(NumChange(479));


//1st Task



// // Task - 6
// function MN(M,N) {
//     return M**N;
// }
// console.log(MN(2,6));

// Task - 7
// function FindIndex() {
//     let arr=[10,15,25,45,66,77,34];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==45) {
//             return i;
//         }
        
//     }
//     return "Not Find";
// }
// console.log(FindIndex());

//4th Task

// var username = prompt("Enter username please: ");
// console.log(username);
// var password = prompt("Enter password please: ");
// console.log(password);

// if(confirm(username) && confirm(password)){
//     console.log("Correct!");
// }
// else if(username == null || password == null){
//     console.log("Incorrect!");
// }

//2nd Task

// class MathOperate{
  
//      plus(val,b){
//          return b + val;
//      }

//      minus(val,b){
//          return val - b;
//      }

//      multiply(val,b){
//          return val * b;
//      }

//      divide(val,b){
//          return val / b;
//      }
// }

// var numb = new MathOperate().plus(50,6);
// var minus = new MathOperate().minus(numb,30);
// var multiples = new MathOperate().multiply(minus,3);
// var divides = new MathOperate().divide(multiples,2);

// console.log(divides);
