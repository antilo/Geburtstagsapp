function check_mindestlaenge() {

    inhalt=document.getElementById("lehrer").value;
    laenge=inhalt.length;

    document.getElementById("lehrerbutton").disabled=(laenge<3);

}

function check_phone() {

    inhalt=document.getElementById("phone").value;
    laenge=inhalt.length;

    document.getElementById("phonespeichern").disabled=(laenge<4);

}

function check_lehrerin() {

    lehrer=document.getElementById("lehrer").value;

    var r=new XMLHttpRequest();
    r.onreadystatechange=function() {
        if ( r.readyState == 4 ) {
            
            daten=JSON.parse(r.responseText);
            if (! daten.lehrerstimmt ) {
                document.getElementById("falsch").style.display="";
                document.getElementById("lehrer").focus();
            } else {
                document.getElementById("inhalt").style.display="none";
                document.getElementById("einladung").style.display="";
                document.getElementById("name").innerHTML=daten.name;
                document.getElementById("phone").value=daten.handy;
            }
        }
    }
    
    r.open("GET","https://2022.nelly-emilia.de/app/check?qr="+qr+"&lehrer="+lehrer,true);
    r.send();
}






function send_answer(e) {

    var i=new XMLHttpRequest();
    
    i.open("GET","https://2022.nelly-emilia.de/app/answer?qr="+qr+"&answer="+e,true);
    i.send();

    document.getElementById("einladung").style.display="none";

    if ( e == 0 ) {
        document.getElementById("schade").style.display="";
    } else {
        document.getElementById("details").style.display="";
    }

}



function update_phone() {

    nr=document.getElementById("phone").value;

    var i=new XMLHttpRequest();
    
    i.open("GET","https://2022.nelly-emilia.de/app/updphone?qr="+qr+"&nr="+nr,true);
    i.send();

    document.getElementById("eingabenr").style.display="none";
    document.getElementById("gespeichert").style.display="";

}


url=window.location.href;
qr=url.slice(url.length - 10);

document.getElementById("inhalt").style.display="";



