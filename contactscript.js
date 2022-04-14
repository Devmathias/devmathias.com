function proe(){
    if(document.querySelector(".pro").className=="pro hide"){
        document.querySelector(".pro").className="pro show";
    }
    else{
        document.querySelector(".pro").className="pro hide";
    }
}
function send(){
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
    var message=document.querySelector("#message").value;
    window.open(`mailto:${document.querySelector("#sendto").value}@devmathias.com?subject=${name}&body=${message}%0D%0A${email}`);
}
