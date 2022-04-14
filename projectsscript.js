function proe(){
    if(document.querySelector(".pro").className=="pro hide"){
        document.querySelector(".pro").className="pro show";
    }
    else{
        document.querySelector(".pro").className="pro hide";
    }
}
var Descriptions = {}
Descriptions['SB'] = '<p>Incomplete</p>';
Descriptions['DB'] = '<p>Incomplete</p>';
Descriptions['CE'] = '<p>Awaiting description</p>';//Content Editable is a chrome extention that allowes you to easily change the content of a website (client side only).
var t = {}
t['SB'] = 'W.I.P';
t['DB'] = 'Inactive';
t['CE'] = 'Complete';
window.onload = function() {
    var keyss=new Array;
    ss=document.location.search.split('?')[1];
    ss.split('&').forEach(function(part){
        const key = part.split('=')[0];
        const value = part.split('=')[1];
        keyss[`${key}`] = value;
    });
    if (keyss['project']=='SB'){
        var p= "Devmathias.com"
    }
    else if(keyss['project']=='DB'){
        var p="DeadBox"
    }
    else if(keyss['project']=='CE'){
        var p="Content Editable"        
    }
    document.getElementById("a").innerHTML = `Project:<br> ${p}`;
    document.getElementById("t").innerHTML = 'Status: &nbsp&nbsp&nbsp' + t[keyss['project']];
    document.getElementById("description").innerHTML = Descriptions[keyss['project']];
}
