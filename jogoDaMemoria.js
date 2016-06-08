var arrayObjSorteado = [];

var arrayCompEndereco = [];
var arrayCompNomeObj = [];
var arrayNomeIcon = [];
var arrayCartasCertas = [];
var contCartasEncontradas=0;
var contadorCarta=0;
var contadorClica=0;
var count2=0;

function sorteia(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13,obj14,obj15,obj16){
  var carta1 = "fotos/sla.jpg";
  var carta2 = "fotos/caribe.jpg";
  var carta3 = "fotos/caozinho.jpg";
  var carta4 = "fotos/voadora.jpg";
  var carta5 = "fotos/pordosol.jpg";
  var carta6 = "fotos/cidade.jpg";
  var carta7 = "fotos/pessoas.jpg";
  var carta8 = "fotos/carrinhos.jpg";

  var arrayVerificador = [];
  var arraySorteado = [];
  var arrayNaoSorteado = [carta1,
                          carta2,
                          carta3,
                          carta4,
                          carta5,
                          carta6,
                          carta7,
                          carta8];

  var verif,count=0;

  for(var i=0; i<16; i++){
    var x = Math.floor(Math.random() * 15);
    if(arrayNaoSorteado[x]==null||verificaArray(arrayNaoSorteado[x],arrayVerificador)==false){
      if(verif==x){
        count++;
      }
      verif=x;
      i--;
      if(count>10){
        break;
      }
    }else{
      arrayVerificador[i] = arrayNaoSorteado[x];
      arraySorteado[i] = arrayNaoSorteado[x];
      arraySorteado[arraySorteado.length-i] = arrayNaoSorteado[x];
    }
  }

  arrayObjSorteado['carta1']=arraySorteado[0];
  arrayObjSorteado['carta2']=arraySorteado[1];
  arrayObjSorteado['carta3']=arraySorteado[2];
  arrayObjSorteado['carta4']=arraySorteado[3];
  arrayObjSorteado['carta5']=arraySorteado[4];
  arrayObjSorteado['carta6']=arraySorteado[5];
  arrayObjSorteado['carta7']=arraySorteado[6];
  arrayObjSorteado['carta8']=arraySorteado[7];
  arrayObjSorteado['carta9']=arraySorteado[8];
  arrayObjSorteado['carta10']=arraySorteado[9];
  arrayObjSorteado['carta11']=arraySorteado[10];
  arrayObjSorteado['carta12']=arraySorteado[11];
  arrayObjSorteado['carta13']=arraySorteado[12];
  arrayObjSorteado['carta14']=arraySorteado[13];
  arrayObjSorteado['carta15']=arraySorteado[14];
  arrayObjSorteado['carta16']=arraySorteado[15];
}

function verificaArray(carta,array){
  var count=0;
  for(var i = 0; i < array.length; i++)
    if(array[i]==carta){
      count++;
      if(count==2)
        return false;
    }
  return true;
}


function clicou(nomeObj,icon){
    var obj = document.getElementById(nomeObj);
    var objFilho=obj.childNodes[1];
    if(objFilho.getAttribute('src')=="http://2.bp.blogspot.com/-KIou3WR4baU/UPMH8fJIqjI/AAAAAAAAA8M/PZttE_AKE9Q/s1600/Paus.jpg"){
      obj.setAttribute("class","thumbnail viraCarta1");
      setTimeout(function(){obj.setAttribute("class","thumbnail viraCarta2");},300);
      setTimeout(function(){objFilho.setAttribute("src",arrayObjSorteado[nomeObj])},300);

      if(count2<2){
          arrayCompEndereco[count2] = arrayObjSorteado[nomeObj];
          arrayCompNomeObj[count2] = nomeObj;
          arrayNomeIcon[count2] = icon;
          console.log(icon);
          count2++;
      }
      if(count2==2){
        count2=0;
        if(arrayCompEndereco[0]==arrayCompEndereco[1]){
          arrayCartasCertas[contCartasEncontradas]=arrayCompEndereco[0];
          contCartasEncontradas++;

          var cartaCerta1 = document.getElementById(arrayCompNomeObj[0]);
          var iconeCerto1 = document.getElementById(arrayNomeIcon[0]);
          var cartaCerta2 = document.getElementById(arrayCompNomeObj[1]);
          var iconeCerto2 = document.getElementById(arrayNomeIcon[1]);

          setTimeout(function(){iconeCerto1.setAttribute("class","fa fa-check-square-o fa-5x texto-verde someBloco");},1350);
          setTimeout(function(){iconeCerto2.setAttribute("class","fa fa-check-square-o fa-5x texto-verde someBloco");},1350);

          setTimeout(function(){cartaCerta1.setAttribute("class","thumbnail someBloco");},1350);
          setTimeout(function(){cartaCerta2.setAttribute("class","thumbnail someBloco");},1350);
          setTimeout(function(){cartaCerta1.setAttribute("class","thumbnail desaparece");},1700);
          setTimeout(function(){cartaCerta2.setAttribute("class","thumbnail desaparece");},1700);

          setTimeout(function(){iconeCerto1.setAttribute("class","fa fa-check-square-o fa-5x texto-verde voltaBloco aparece");},1750);
          setTimeout(function(){iconeCerto2.setAttribute("class","fa fa-check-square-o fa-5x texto-verde voltaBloco aparece");},1750);
        }else{
          setTimeout(function(){treme(arrayCompNomeObj[0])},650);
          setTimeout(function(){treme(arrayCompNomeObj[1])},650);

          var cartaErrada1 = document.getElementById(arrayCompNomeObj[0]);
          var cartaImgErrada1 = cartaErrada1.childNodes[1];
          var cartaErrada2 = document.getElementById(arrayCompNomeObj[1]);
          var cartaImgErrada2 = cartaErrada2.childNodes[1];

          setTimeout(function(){cartaErrada1.setAttribute("class","thumbnail viraCarta1");},1550);
          setTimeout(function(){cartaImgErrada1.setAttribute("src","http://2.bp.blogspot.com/-KIou3WR4baU/UPMH8fJIqjI/AAAAAAAAA8M/PZttE_AKE9Q/s1600/Paus.jpg")},1850);
          setTimeout(function(){cartaErrada1.setAttribute("class","thumbnail viraCarta2");},1850);

          setTimeout(function(){cartaErrada2.setAttribute("class","thumbnail viraCarta1");},1550);
          setTimeout(function(){cartaImgErrada2.setAttribute("src","http://2.bp.blogspot.com/-KIou3WR4baU/UPMH8fJIqjI/AAAAAAAAA8M/PZttE_AKE9Q/s1600/Paus.jpg")},1850);
          setTimeout(function(){cartaErrada2.setAttribute("class","thumbnail viraCarta2");},1850);
        }
      }
    }
  }

function treme(nomeObj){
  var obj = document.getElementById(nomeObj);
  obj.setAttribute("class","thumbnail tremeDireita");
  setTimeout(function(){obj.setAttribute("class","thumbnail tremeEsquerda");},50);
  setTimeout(function(){obj.setAttribute("class","thumbnail tremeDireita");},100);
  setTimeout(function(){obj.setAttribute("class","thumbnail tremeEsquerda");},150);
  setTimeout(function(){obj.setAttribute("class","thumbnail tremeDireita");},200);
  setTimeout(function(){obj.setAttribute("class","thumbnail tremeEsquerda");},250);
  setTimeout(function(){obj.setAttribute("class","thumbnail tremeDireita");},300);
  setTimeout(function(){obj.setAttribute("class","thumbnail naoTreme");},350);
  setTimeout(function(){obj.setAttribute("class","thumbnail viraCarta2");},400);
}
