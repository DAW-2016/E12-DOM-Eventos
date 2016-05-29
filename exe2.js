function checkNameContent() {
  var string = document.body.getElementsByTagName("input")[0].value;
  for (var i = 0; i < string.length; i++) {
      if(((string.charCodeAt(i) >= 65) && (string.charCodeAt(i) <= 90)) || ((string.charCodeAt(i) >= 97) && (string.charCodeAt(i) <= 122))) {
          console.log("letra");
          document.getElementsByClassName("form-group")[0].setAttribute("class", "form-group has-success");
          document.getElementsByClassName("form-group")[1].setAttribute("class", "form-group has-success");
          document.getElementsByClassName("form-group")[2].setAttribute("class", "form-group has-success");
      }
      else{
          console.log("nao");
          document.getElementsByClassName("form-group")[0].setAttribute("class", "form-group has-error");
          document.getElementsByClassName("form-group")[1].setAttribute("class", "form-group has-success");
          document.getElementsByClassName("form-group")[2].setAttribute("class", "form-group has-success");
          document.getElementsByTagName("input")[0].value = "SOMENTE LETRAS";
      }
  }
}
