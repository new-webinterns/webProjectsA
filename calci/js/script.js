document.getElementById("wrapper").addEventListener("click",function(){
    var disp=document.getElementById("disp");
    var Odisp=document.getElementById("Odisp");

    if(event.target.classList.contains("inputs")){ 
        var inputValue = event.target.value;
        disp.value+=inputValue;
        // alert("inputValue");s
    }
    else if(event.target.value==="="){
        disp.value=disp.value.replace("×","*");
        disp.value=disp.value.replace("÷","/");
        Odisp.value=eval(disp.value);
        disp.value=disp.value.replace("*","×");
        disp.value=disp.value.replace("/","÷");
          // alert("calculate");
    }
    else if(event.target.value==="C"){
        Odisp.value=null;
        disp.value=null;
       // alert("clear screen");
    }
    else{
        return null;
    }
    // alert('hj')
});

