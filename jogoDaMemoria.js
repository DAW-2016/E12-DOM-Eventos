var arrayObjSorteado = [];

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

  for(var i = 0; i < arraySorteado.length; i++){
    console.log(arraySorteado[i]);
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


function vira(nomeObj){
  var obj = document.getElementById(nomeObj);
  var objFilho=obj.childNodes[1];
  if(objFilho.getAttribute('src')=="http://2.bp.blogspot.com/-KIou3WR4baU/UPMH8fJIqjI/AAAAAAAAA8M/PZttE_AKE9Q/s1600/Paus.jpg"){
    obj.setAttribute("class","thumbnail viraCartaPraFrente1");
    setTimeout(function(){obj.setAttribute("class","thumbnail viraCartaPraFrente2");},
                          500);
    setTimeout(function(){objFilho.setAttribute("src",arrayObjSorteado[nomeObj])},
                          500);
  }else{
    obj.setAttribute("class","thumbnail viraCartaPraFrente1");
    setTimeout(function(){obj.setAttribute("class","thumbnail viraCartaPraTras1");},
                          500);
    setTimeout(function(){objFilho.setAttribute("src","http://2.bp.blogspot.com/-KIou3WR4baU/UPMH8fJIqjI/AAAAAAAAA8M/PZttE_AKE9Q/s1600/Paus.jpg")},
                          500);
  }

  }
