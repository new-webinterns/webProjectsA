//1. WAP to generate random numbers between 1 to 10
//console.log(Math.floor(Math.random()*10)+1);

/*2. WAP to find the area of polygon shown (each square has side length of 1 unit

console.log(shapeArea(3))
function shapeArea(n){
    return ((n*n)+((n-1)*(n-1)));
}*/

/*3. Given an array of integer, find the pair of adjacent elements that has the largest product and return that product
console.log(adjElementProduct([3, 6, -2,-5, 7,3]))
function adjElementProduct(inputArray){
    var outputArray=[];
    for(var i=0 ; i < inputArray.length - 1 ; i++){
        var product = inputArray[i] * inputArray[i+1];
        outputArray[i] = product;

    }
    for(i = 0 ; i < outputArray.length ;i++){
        if(outputArray[i] > outputArray[i+1]){
            outputArray[i+1]=outputArray[i];
        }
    }
    return outputArray[ outputArray.length-1];
}*/

                  //OR

/*console.log(adjElementProduct([3, 6, -2,-5, 7,3]))
function adjElementProduct(inputArray){
    var outputArray=[];
    for(var i=0 ; i < inputArray.length - 1 ; i++){
        var product = inputArray[i] * inputArray[i+1];
        outputArray[i] = product;

    }
    return Math.max(...outputArray);
}*/

/*4. Implement a function that replaces each digit in the given string with a '#' character.*/
/*var inputString='answer is 22';
function replaceAllDigitsRegExp(inputString){
return re.sub(r,'\d','#',inputString);
}
console.log(inputString.replace(22,'##'));

//OR

console.log(replaceAllDigitsRegExp('answer is 22'))
function replaceAllDigitsRegExp(input){
    test = /[0-9]/g;
    var s = input.split('');
    for(i=0;i<s.length;i++){
        if(s[i].match(test)){
            s[i]='#';
        }
    }
    return s.join('');
}*/

/*5. write a program that prints the number from 1 to 100. But for multiples of three, print "Fizz" instead of the numbers
and for the multiplies of five, print "Buzz". for numbers which are multiples of both three and five, print "FizzBuzz".

for (var i=1; i<100; i++){
if(i%15==0){
    console.log("FizzBuzz");
}
else if(i%3==0)
    console.log("Fizz")
else if(i%5==0)
 console.log("Buzz");
 else
 console.log(i);

}*/

/*6. logging in required a 4 digit passcode. 
To ensure the security of the account, the account is locked after 10 consecutive failed passcode
attempts.
We need to implement a function that given an array of attempts made throughout the day and the correct passcode checks 
to see if the account should be locked, i.e., 10 or more consecutive failed passcode attempts were made.


console.log(passcodeAttempts(1111,["1234","4567","6789","2223","3468","5780","6534","6902","4567","7809","1249"]));
function passcodeAttempts(passcode,attempts){
    var count = 0;
    var flag = 0;
    for(i = 0; i< attempts.length ; i++)
    {
        if(passcode != attempts[i]){
            count++;
        }
        else{
            count = 0;
        }
        if(count===10){
            var flag = 1;
        }
    }
    return (flag===1 ? true : false);

}*/


/*6. Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four 
signs: +,-,* or / to obtain a correct expression

console.log(arithmeticExpression(4,5,9));
console.log(arithmeticExpression(4,5,1));
console.log(arithmeticExpression(4,5,20));
console.log(arithmeticExpression(40,5,8));
console.log(arithmeticExpression(4,5,90));
function arithmeticExpression(a,b,c){
    if(a+b===c || a-b===c || a*b===c || a/b===c){
        return true;
    }else{
        return false;

    }
}*/

/*7.  Consider you have three integers. It is guaranteed that two of these integers are equal to each other. What is the 
value of the third integrs?

console.log(extraNumber(2,7,2));
console.log(extraNumber(3,2,2));

function extraNumber(a,b,c){
        if(a===b){
            return c;
        }
        else if(a===c)
        return b;
        else
        return a;

}

    //OR

    console.log(extraNumber(2,7,2));
    function extraNumber(a,b,c){
        return(a===b ? c : a===c ? b : a);
    }*/

    /*8. Consider integer numbers from 0 to n-1 written down along the circle in such a way that the distance between
    any two neighbouring numbers is equal (note that 0 and n-1 are neighboring, too).
                           //OR
     Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

    console.log(circleOfNumbers(10,2));
    function circleOfNumbers(n,firstNumber){
        return (firstNumber + n / 2)%n;
        //OR  return firstNumber >=(n/2) ? (firstNumber - (n/7)) : ((n/2)+firstNumber)
    }*/

    /*9. You are playing a game, currently your experience points (XP) total is equal to "experience".
    To reach the next level your XP should be at least at "threshold".
    If you kill the enemy in front of you.
    You will gain more experience points in the amount of the "reward".
    Given values experience, threshold and reward, check if you reach the next level after killing the enemy.*/

    console.log(reachNextLevel(10,30,10));
    console.log(reachNextLevel(10,20,20));
    console.log(reachNextLevel(10,20,10));
    function reachNextLevel(experience, threshold, reward){
        var value = reward + experience;
        if(value < threshold){
            return false;
        }else{
            return true;
        }
        }
    






        
    










