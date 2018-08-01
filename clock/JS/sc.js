function time(){
    var d=new Date();
    // h=30*((d.getHours()%12)+(d.getMinutes()/60));
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    // document.getElementById('hr').innerHTML=h+":"+m+":"+s;
    document.getElementById('hr').innerHTML=h;
           setTimeout(time,500);
           document.getElementById('min').innerHTML=m;
           document.getElementById('sec').innerHTML=s;
    }
    function checkTime(i){
        if(i<10){i="0"+i};
        return i;
    }      
    function clock(){
        var d=new Date();
        h=30*((d.getHours()%12)+(d.getMinutes()/60));
         m=d.getMinutes()*6;
        s=d.getSeconds()*6;
        m=checkTime(m);
        s=checkTime(s);
        // document.getElementById('hr').innerHTML=h+":"+m+":"+s;
        document.getElementById('h-hand').innerHTML=h;
               setTimeout(time,500);
               document.getElementById('m-hand').innerHTML=m;
               document.getElementById('s-hand').innerHTML=s;
        }
        function checkTime(i){
            if(i<10){i="0"+i};
            return i;
        }      
 window.onload(clock);
