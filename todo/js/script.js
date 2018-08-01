var itemListUl=document.getElementById("list");
var count=itemListUl.childElementCount;
// alert(count);
var inputBox=document.getElementById('inputBox');
// console.log(inputBox);
inputBox.addEventListener("keydown",keyDown);

// function keyDown(){
//     alert('key pressed');
// }
function keyDown(){
    if(event.keyCode=== 13){
        alert('enter key pressed');
    }
   
 }
    