function proe(){
    if(document.querySelector(".pro").className=="pro hide"){
        document.querySelector(".pro").className="pro show";
    }
    else{
        document.querySelector(".pro").className="pro hide";
    }
}

window.onload = function() {
    var Descriptions = {}
Descriptions['SB'] = '<p>Incomplete</p>';
Descriptions['DB'] = '<p>Incomplete</p>';
Descriptions['CE'] = '<p><i>Content Editable is</i> a extention for google chrome. The extentions allows a user to edit the plain text on a website (client side only). The applications of this extention is as follows: Easily see how websites adapt to different. <br> It can also be used for <del>Pranking</del> <ins>changing the content with the intent to show someone</ins>. <br><br> The extention is free to use, but is currently not avalible from the chrome webstore. The files can be found at github <a href="">Here</a> or through my github page. (Devmuathias) </p>';
var t = {}
t['SB'] = 'W.I.P';
t['DB'] = 'Inactive';
t['CE'] = 'Complete';
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
    document.getElementById("ProjectName").innerHTML = `Project:<br> ${p}`;
    document.getElementById("innerDescription").innerHTML = "Description:"+"<p>"+Descriptions[keyss['project']]+"</p>";
    document.getElementById("status").innerHTML = 'Status: &nbsp&nbsp&nbsp' + t[keyss['project']];
}
