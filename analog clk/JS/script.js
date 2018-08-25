// function digitized(){
//     d=new Date();
//     h=d.getHours();
//     m=d.getMinutes();
//     s=d.getSeconds();
//     document.getElementById('hr').innerHTML=h;
//     function checktime(i){
//         if(i<0)(i="0"+i);
//         return i;
//     }
//     document.getElementById('min').innerHTML=m;
//     document.getElementById('sec').innerHTML=s;
//     setTimeout(digitized,1000)
// }
// window.onload = digitized;


// analog clock

function clock(){

    d=new Date();
    h=30*(d.getHours()%12)+(d.getMinutes()/60);
    m=d.getMinutes()*6;
    s=d.getSeconds()*6;
    // console.log(d,h,m,s);
    setAttr("h-hand",h);
    setAttr("m-hand",m);
    setAttr("s-hand",s);

    function setAttr(id,val){
        console.log(id,val);
        v = 'rotate('+val+',70,70)';
        document.getElementById(id).setAttribute('transform',v)
        // val=val<10? "0"+val:val;
        // document.getElementById(id).innerHTML=val;
    }
    setTimeout(clock,1000)
}
window.onload = clock;

