function clock(){
  var d=new Date();
  var h=30*((d.getHours()%12)+d.getMinutes()/60);
  var m=d.getMinutes()*6;                                           //1second=6degree
  var s=d.getSeconds()*6;

   //move hands
   setAttr('h-hand', h);
   setAttr('m-hand', m);
   setAttr('s-hand', s);

   //display time
   h = d.getHours();
   m = d.getMinutes();
   s = d.getSeconds();
   
   if(h >= 12){
       setText('suffix', 'PM');
   }else{
       setText('suffix', 'AM');
   }
   
   if(h != 12){
       h %= 12;
   }
   
   setText('sec', s);
   setText('min', m);
   setText('hr', h);
   
   //call every second
   setTimeout(clock, 1000);
   
};

function setAttr(id,val){
   var v = 'rotate(' + val + ', 70, 70)';
   document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
   if(val < 10){
       val = '0' + val;
   }
   document.getElementById(id).innerHTML = val;
};
window.onload=clock;