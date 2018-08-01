// window.onload = function(){
//     for(i = 0 ; i < 10 ; i++){
//         var input = document.createElement("INPUT");
//         input.type = "button";
//         input.value = i;
//         input.classList.add("inputs");
//         var numbers = document.getElementById('numbers');
//         numbers.appendChild(input);
//         var breakLine = document.createElement("BR");
//         numbers.appendChild(breakLine);
        
//     }
// }


document.getElementById('wrapper').addEventListener("click",function(){
    var disp = document.getElementById('disp');
    var odisp = document.getElementById('Odisp');
    if(event.target.classList.contains('inputs')){
        var inputValue=event.target.value;
        disp.value+= inputValue;
    }else if(event.target.value === "="){
        disp.value = disp.value.replace("×","*");
        disp.value = disp.value.replace("÷","/");
        odisp.value = (eval(disp.value));
        disp.value = disp.value.replace("*","×");
        disp.value = disp.value.replace("/","÷");
    }else if(event.target.value = "C"){
        disp.value = null;
        odisp.value = null;
    }else{
        return null;
    }
})