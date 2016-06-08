////Seção de erros padrões///////////////////////////////////////////////
//* Erros do tipo 100 são para entrada de caracteres inválidos */
var error101 = 101;

//* Erros do tipo 200 são para estouro de limites */
/*/ Quando o valor é muito baixo /*/ var error201 = 201;
/*/ Quando o valor é muito alto /*/ var error202 = 202;

//* Erros do tipo 300 são para falta de caracteres especiais mínimos necessários */
var error301 = 301;

//* Erros do tipo 400 são para nulidade do campo verificado */
var error401 = 401;

/////////////////////////////////////////////////////////////////////////


function cresce(name1,name2){
    var input1 = document.getElementById(name1);
    var input2 = document.getElementById(name2);

    input1.value = input1.value.toUpperCase();

    input2.setAttribute("type","text");
    input2.value = input2.value.toUpperCase();
}

function roda(objectID){
  var obj = document.getElementById(objectID);
  obj.setAttribute("class", "fa fa-spinner fa-2x fa-spin");
}

function verificaUserName(objectID,objectFatherID){
  var obj = document.getElementById(objectID);
  var objPai = document.getElementById(objectFatherID);
  if(verificaSeEhNome(objPai.value)==101||verificaSeEhNome(objPai.value)==401){
    obj.setAttribute("class", "fa fa-2x fa-ban texto-vermelho");
    if(verificaSeEhNome(objPai.value)==101){
      document.getElementById("info_error_username").innerHTML = "Apenas letras por favor!";
    }else{
      document.getElementById("info_error_username").innerHTML = "Não se esqueça do nome de usuário!";
    }
  }else{
    obj.setAttribute("class","fa fa-2x fa-check-circle-o texto-verde");
    document.getElementById("info_error_username").innerHTML = "";
  }
}

function verificaSenha(objectID,objectFatherID){
  var obj = document.getElementById(objectID);
  var objPai = document.getElementById(objectFatherID);
  if(verificaTamanho(objPai.value)==202||verificaTamanho(objPai.value)==201){
    obj.setAttribute("class", "fa fa-2x fa-ban texto-vermelho");
    if(verificaTamanho(objPai.value)==202){
    document.getElementById("info_error_password").innerHTML = "Senha está grande demais!";
    }else{
    document.getElementById("info_error_password").innerHTML = "Senha está pequena demais!";
    }
  }else{
    obj.setAttribute("class","fa fa-2x fa-check-circle-o texto-verde");
    document.getElementById("info_error_password").innerHTML = "";
  }
}

function verificaTamanho(value){
  if(value.length<8){
    return error201;
  }
  if(value.length>20){
    return error202;
  }
  return 1;
}

function verificaSeEhNome(value){
  if(value=="")
    return error401;
  for(var i=0; i<value.length; i++){
    if(!isLetter(value[i]))
      return error101;
  }
  return true;
}

function isLetter(str) {
  return str.match(/[a-z]/i);
}
