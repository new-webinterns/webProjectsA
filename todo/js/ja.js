
//  var hello=document.getElementById('buton'); 
//  hello.addEventListener("keydown",keyDown);

// // function keyDown(){
// //     alert('key pressed');
// // }
// function keyDown(){
//     if(event.keyCode === 13){
//         alert('enter key pressed');
//     }
   
//  }
function clicked(){
    var li=document.createElement('li');
  
    var label=document.createElement('label');
    // console.log(li,label);
    var textbox=document.getElementById("text").value;
    var a=document.createTextNode(textbox);
    console.log(a);
    var ul=document.getElementById("ulid");
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(a);

}