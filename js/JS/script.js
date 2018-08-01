// console.log('HELLO WORLD!!!');
// console.log(2+3);
// 
// var str="manju"
// console.log(str.length);
// var str="manju";
// var res =[];
// var res=str.split("");
// console.log(res);
// var n=str.length;
// for(i=0;i<n;i++){
//     res[i]=str[i];
    
// }
// console.log(res);
// var n=5;
// var fact=1;
// for(i=1;i<=n;i++){
//       fact=fact*i;
// }
// console.log(fact); 
// var str="HAHa"
// var str1='';
// var n=str.length;

// for(i=n-1;0<=i;i--){
//       str1[i]=str[i];
// }
// for(i=n-1;i>=0;i--){
// str1 +=str[i];
// }
// console.log(str1);
// // for(i=0;i<n;i++){
//     if(str1==str){
//         console.log("palindrome");
//     }
//     else{
//         console.log("not a palindrome");
//     }
// }

// var a=window.prompt("Enter first value");
// window.alert(a);

// var b=window.prompt("Enter second value");
// window.alert(b);
// var res=add(a,b);
// function add(x,y){
//     z=x+y;
//     return z;
// }
// console.log(res);


// var n=5;
// var fact=1;
// var facti=fa(n);
// function fa(n1){
// for(i=1;i<=n1;i++){
//      fact=fact*i;
//      }
//      return fact;
     
// }
// console.log(facti);
// var a=10;
// var b=22;
// // var res="";
// odd(a,b);
// function odd(x,y){
// for(i=x;i<=y;i++){
//      if(i%2!=0){
//         console.log(i); 
//      }
// }
// }
// var a=11;
// var b=21;
// var res=[];
// var j=0;
// for(i=a;i<b;i++){
//      if(i%2===0){
//         j++;
     
//          }
//  }
//  for(i=0;i<j;i++){
//      for(k=11;k<21;k++){
//     if(k%2===0){
//        res[i++]=k;;
//         }
// }
//  }
// console.log(res);

// var a=['a','b','c','d'];
// console.log(a.slice(1,3));
// console.log(a);

//console.log(a.splice(2,2))//returns org string
//a.substring(2,5); 
//a.reverse();
//a.join('');
//a.trim();//space removal
//a.indexOf("PHP");
//a.toUpperCase();
//a.charAt(0));
//a.join('').toString();
//a.toPrecision(3));
//a='5' Number(a)
//a.push("A");
//a.pop(0);
// var d=new Date();
// console.log(d);
//d.getFullYear();
//console.log(Math.floor(Math.random()*10)+1);
// 

// var a=[3,2,-6,4,5];
// var l=a.length;
// var f=[];
// var g;
// console.log(l);
// for(i=0;i<l-1;i++){
//      f[i]=a[i]*a[i+1];
// }
// console.log(f);
// var m=f.length;

// console.log(Math.max(...f));

// console.log(reg('answer is 22'));
// function reg(a){
// var l=a.length;
// var str=a.split('');
// for(i=0;i<l;i++){
//     if(str[i].match(/[0-9]/g)){
//         str[i]='#';
//     }
// }
// s=str.join('');
// return s;
// }

// for(i=1;i<=100;i++){
//     if(i%15==0){
//         console.log('FizzBuzz');
//     }
//     else if(i%3==0){
//      console.log('Fizz');
//     }
//     else if(i%5==0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(i);
//     }
// }

// var passcode='1111';
// var attemps=["4321","2222","3333","4444","5555","1111","8888","9999","1234","3456","5555","1111"];
// var l=attemps.length;
// var count=0;
// console.log(Pas());
// function Pas(){
// for(i=0;i<attemps.length;i++){
//     if(passcode!=attemps[i]){
//         count++;
//     }else{
//         count=0;
//     }
//     if(count===10){
//         var flag=1;
//     }
// }

// return (flag===1 ? true : false)
// }
// var str='a#b=c';
// var l=str.length;
// var str1=str.split('');
// for(var i=0;i<l;i++){
//     if(str1[i].match(/['#']/g)){
//         str1[i]='+';
//     }
// }
// s=str1.join('');
// console.log(s);

// var a=4;
// var b=5;
// var c=9;
// var str='a#b=c';
// var l=str.length;
// var str1=str.split('');
// var test=prompt('Enter a operator');
// for(var i=0;i<l;i++){
//     if(str1[i].match(/['#']/g)){
//         str1[i]=test;
//     }
// }
// s=str1.join('');
// console.log(s);
// if(test=='+'){
//     z=a+b;
//     if(z==c){
//         console.log('true');
//     }
//     else{
//         console.log('false');
// }
// }
// console.log(f());
// function f(){
// var str='a#b=c';
// var l=str.clength;
// var str1=str.split('');
// var test=prompt('Enter a operator');
// for(var i=0;i<l;i++){
//     if(str1[i].match(/['#']/g)){
//         str1[i]=test;
//     }
// }
// s=str1.join('');
// console.log(s);
// if(test=='+'|'-'|'*'|'/'){
//     z=a+b;
//     if(z==c){
//         console.log('true');
//     }
//     else{
//         console.log('false');
// }
// }
// }


// var a=1
console.log(f(5,5,1));
function f(a,b,c){
if(b==c){
      return a;
}
else if(a==b){
    return c;
   
}
else if(a==c){
    return b;
}
}