function clock(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    setClock("hr",h);
    setClock("min",m);
    setClock("sec",s);
    function setClock(id,val)
    {
        val=val<10? "0"+val:val;
        document.getElementById(id).innerHTML=val;
    }
    setTimeout(clock,1000);
}
window.onload=clock;