var string = document.body.getElementsByTagName("input")[0].value
for (var i = 0; i < string.length; i++) {
    if(((string.charCodeAt(i) >= 65) && (string.charCodeAt(i) <= 90)) || ((string.charCodeAt(i) >= 97) && (string.charCodeAt(i) <= 122))) {
        console.log("letra");
    }
    else{
        console.log("nao");
    }
}
