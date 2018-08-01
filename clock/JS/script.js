function time(){
var d=new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
m=checkTime(m);
s=checkTime(s);
// document.getElementById('hr').innerHTML=h+":"+m+":"+s;
document.getElementById('hr').innerHTML=h;
       setTimeout(time);
       document.getElementById('min').innerHTML=m;
       document.getElementById('sec').innerHTML=s;
}
function checkTime(i){
    if(i<10){i="0"+i};
    return i;
}   