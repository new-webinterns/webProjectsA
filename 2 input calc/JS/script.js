
// var res= add(a,b);
// console.log(b);
// var result=a+b;
// console.log(document.getElementById(result));
var addButton= document.getElementById('add');
addButton.addEventListener("click", function(){
    // alert("Button clicked");
    // console.log(document.getElementById('val1'));
var a= document.getElementById('val1').value;
// console.log(document.getElementById('val2'));
var b= document.getElementById('val2').value;
var c = Number(a)+Number(b)
document.getElementById('res').value = c;
});
var subButton= document.getElementById('sub');
subButton.addEventListener("click", function(){
     //alert("Button clicked");
     //console.log(document.getElementById('val1'));
var a= document.getElementById('val1').value;
//console.log(document.getElementById('val2'));
var b= document.getElementById('val2').value;
var c = Number(a)-Number(b)
document.getElementById('res').value = c;
});
var mulButton= document.getElementById('mul');
mulButton.addEventListener("click", function(){
     //alert("Button clicked");
    //console.log(document.getElementById('val1'));
var a= document.getElementById('val1').value;
 //console.log(document.getElementById('val2'));
var b= document.getElementById('val2').value;
var c = Number(a)*Number(b)
document.getElementById('res').value = c;
});
var divButton= document.getElementById('div');
divButton.addEventListener("click", function(){
    //alert("Button clicked");
    //console.log(document.getElementById('val1'));
var a= document.getElementById('val1').value;
//console.log(document.getElementById('val2'));
var b= document.getElementById('val2').value;
var c = Number(a)/Number(b)
document.getElementById('res').value = c;
});

