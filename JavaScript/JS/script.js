// console.log('HELLO WORLD!!!');
//var c;
//c=4+5;
//console.log(c);

//1.Program to print number from 1-10;
//for(i=1;i<=10;i++)
//{
  //  console.log(i);
//}
//for(i=11;i<=21;i++)
//{
  //  if(i%2==0)
//console.log(i);

//}

//for(i=10;i<=22;i++)
//{
  //  if(i%2!=0)
    //console.log(i);
//}

//3.write a js program to find legth of given string
//var str='Hello world';
//console.log('length='+str.length);

//4.write a js program to store letters of a string as elements
//of an array
//var array="hpe".split("");
//console.log(array);

//var array=[];
//var str="hpe";
//for(var i=0;i<str.length;i++)
//{
//  array[i]=str[i];
//}
  //console.log(array)

 // 5.to print the factorial of a number
 //var num=4;
 //var fact=1;
 //for( var i=1;i<=num;i++)
 //{
   //fact=fact*i;
 //}
 //console.log(fact)

 //reverse of a string
 //var revstr=" ";
 //var str="MALAYALAM";
//for( var i=str.length-1;i<=0;i--)
//{
  //revstr+=str[i];
//}
//if(revstr[i]===str[i])
 //{
   //console.log(revstr);
 //}


//19)
//var n=5;
//var s=1;
//var res=n*n+((n-1)*(n-1));
//console.log(res);


//20)given an array of integer,find the pair of adjacent elments 
//that has the largest product and return that product.
//  var array=[3,2,-6,4,5];
//  var res=[];
//  for(var i=0;i<array.length-1;i++)
//  {
//    res[i]=array[i]*array[i+1];
//  }
//  console.log(res);
//  console.log(Math.max(...res));      //...researches
 
//21) Implement a function that replaces each digit in the given
//string with a '#' character
// console.log(replaceAllDigitsRegExp('answer is 22'))
// function replaceAllDigitsRegExp(input){
//   test = /[0-9]/g;        //global occurance
//   var s=input.split('');
//   for(i=0;i<s.length;i++){
//     if(s[i].match(test)){
//       s[i]='#';

//     }
//   }
//   return s.join('');
// }


//22 wap that prints the no from 1-100 but for multiples of three print "Fizz" nd for multiples of five print "Buzz" nd for number
//that multiplies with both 3 nd 5 print "fizzbuzz"
//for (var i=1;i<=100;i++)
//{
  //if(i%3==0 && i%5==0)
  //{
    //console.log("Fizz buzz");
  //}
  //else if(i%3===0){
  //console.log("Fizz");
  //}
  //else if(i%5===0){
  //console.log("Buzz");
  //}
  //else
  //console.log(i);
//}


//23 logging in requires a four digit password.
//to ensure the security of the account the account is locked after 10 consecutive failed passcode attempts.
//we need to implement a function that given an array of attempts made throughout the day and the correct password
//checks to see if the account should be locked
//i.e. 10 or more consecutive failed passcode attempts were made.

// console.log(passcodeAttempts(1111,["1111","4444","9999","3333","8888","2222","7777","0000","6666","7285","5555","1111"]));
// function passcodeAttempts(passcode,attempts){
//   var count=0;
//   var flag=0;
//   for(i=0;i< attempts.length;i++){
//     if(passcode !=attempts[i]){
//       count++;
//     }else{
//       count=0;
//     }
//     if(count === 10){
//       var flag =1;
//     }
//   }
//   return (flag ===1 ? true :false)
// }


//24 consider an arithmetic expression of the form a#b=c.
//check whether it is possible to replace # with one of the four sign :+,-,* or / to obtain a correct expression
// console.log(arithmeticExpression(4,5,9));//T
// console.log(arithmeticExpression(4,3,1));//T
// console.log(arithmeticExpression(4,5,20));//T
// console.log(arithmeticExpression(40,5,8));//T
// console.log(arithmeticExpression(4,5,90));//F
// function arithmeticExpression(a,b,c){
//     if(a+b==c)
//     {
//       return true;
//     }
//     else if(a-b==c)
//      {
//        return true;
//      }
//      else if(a/b==c)
//      {
//        return true;
//      }
//      else if(a*b==c)
//      {
//        return true;
//      }
//     else 
//     return false;
// }


//25consider you have three integers .It is guranteed that two of these integers are equal to each other .what is the value of the third integer?
// console.log(arithmeticExpression(5,5,1));
// console.log(arithmeticExpression(6,5,5));
// console.log(arithmeticExpression(5,9,5));
// console.log(arithmeticExpression(5,6,7));
// console.log(arithmeticExpression(5,5,5));
//  function arithmeticExpression(a,b,c){
//    if(a==b)                                            //return(a==b?c:a==c?b:a);
//    {
//    return c;                                            
//  }
//  else if(b==c)
//  {
//    return a;
//  }
//  else  if(a==c) 
//  {
//    return b;
//  }
//  else 
//  return false;
//  }


//26 consider integer number from 0 to n-1 written down along the circle in such a way that the distance between any two neighboring numbers
//is equal (note  that 0 and n-1 are neighboring,too) given n and first number, find the number which is written in the radially opposite 
//position to first number.
//  console.log(circleofnumber(10,7));
//  function circleofnumber(n,firstnumber){
//    return firstnumber>=(n/2)?(firstnumber-(n/2)):((n/2)+firstnumber)
//  }




//27 you are playing a game.currently your experience points (XP) total is equal to "experience",to reach the next level tour xp atleast at 
//"threshold" . if you kill your enemy infront of you u vil gain more xp,in the amount of the "reward ".even value experience, threshold and reward
//check if u reach the next level fter killing the enemy.
console.log(reachNetlevel(10,30,10));//f
console.log(reachNetlevel(10,20,10));//t
console.log(reachNetlevel(10,20,10));//t
function reachNetlevel(experience,threshold,reward){
  var value =reward+experience;
  if(value<threshold)
  {
    return false;

  }else{
    return true;
  }
  
}














































