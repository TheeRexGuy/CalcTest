let v=document.getElementsByClassName("val");
let s="", ent="";
let i=0;
for(;i<20;i++){
    v[i].addEventListener("click", (function(e){
        ent=e.target.textContent;
            if(ent=='C'){
                document.getElementById("disp").value=String(document.getElementById("disp").value).substring(0,s.length-1);
                s=s.substring(0,s.length-1);
            }
            else if(ent=='x'){
                s+='*';
                document.getElementById("disp").value+=ent;
            }
            else if(ent=='%'){
                s+="/100";
                document.getElementById("disp").value+=ent;
            }
            else if(ent=='(' && s!=""){
                s+="*(";
                document.getElementById("disp").value+=ent;
            }
            else if(ent=='='){
                s=String(eval(s));
                document.getElementById("disp").value=s;
            }
            else{
                if(s.endsWith("/100") || s.endsWith(')'))
                    s+='*'+ent;
                else
                    s+=ent;
                document.getElementById("disp").value+=ent;
                console.log(s);
            }
    }))
}