var addButton=document.getElementById('add');
addButton.addEventListener("click",function(){
    var val1=document.getElementById('val1').value;
    var val2=document.getElementById('val2').value;
    var res=Number(val1)+Number(val2);
    var resfield=document.getElementById('res');
    resfield.value=res;
    alert('Button clicked');
});

var subButton=document.getElementById('sub');
subButton.addEventListener("click",function(){
    var val1=document.getElementById('val1').value;
    var val2=document.getElementById('val2').value;
    var res=Number(val1)-Number(val2);
    var resfield=document.getElementById('res');
    resfield.value=res;
    alert('Button clicked');
});
var mulButton=document.getElementById('mul');
mulButton.addEventListener("click",function(){
    var val1=document.getElementById('val1').value;
    var val2=document.getElementById('val2').value;
    var res=Number(val1)*Number(val2);
    var resfield=document.getElementById('res');
    resfield.value=res;
    alert('Button clicked');
});

var divButton=document.getElementById('div');
divButton.addEventListener("click",function(){
    var val1=document.getElementById('val1').value;
    var val2=document.getElementById('val2').value;
    var res=Number(val1)/Number(val2);
    var resfield=document.getElementById('res');
    resfield.value=res;
    alert('Button clicked');
});
