var itemListUl= document.getElementById("list");
var count= itemListUl.childElementCount;
//alert(count);
var inputBox=document.getElementById('inputBox');
//console.log(inputBox);
inputBox.addEventListener("keydown",keyDown);
function keyDown(){
    //alert('KEY PRESSED')
    if(event.keyCode===13){
        alert('ENTER KEY PRESSED')
    }
}