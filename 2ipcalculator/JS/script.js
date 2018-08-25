
    var addButton=document.getElementById("add");
    addButton.addEventListener("click",function(){
        var a=document.getElementById("val1");
       var b=a.value;
       var c=document.getElementById("val2");
       var d=c.value;
       var  e=Number(b)+Number(d);
       var  res=document.getElementById("res");
        res.value=e; 
        alert("Button clicked");
    });