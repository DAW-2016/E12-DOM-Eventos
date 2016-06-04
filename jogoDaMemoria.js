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

  var objC1 = document.getElementById(obj1);
  var objC2 = document.getElementById(obj2);
  var objC3 = document.getElementById(obj3);
  var objC4 = document.getElementById(obj4);
  var objC5 = document.getElementById(obj5);
  var objC6 = document.getElementById(obj6);
  var objC7 = document.getElementById(obj7);
  var objC8 = document.getElementById(obj8);
  var objC9 = document.getElementById(obj9);
  var objC10 = document.getElementById(obj10);
  var objC11 = document.getElementById(obj11);
  var objC12 = document.getElementById(obj12);
  var objC13 = document.getElementById(obj13);
  var objC14 = document.getElementById(obj14);
  var objC15 = document.getElementById(obj15);
  var objC16 = document.getElementById(obj16);

  objC1.childNodes[1].setAttribute("src",arraySorteado[0]);
  objC2.childNodes[1].setAttribute("src",arraySorteado[1]);
  objC3.childNodes[1].setAttribute("src",arraySorteado[2]);
  objC4.childNodes[1].setAttribute("src",arraySorteado[3]);
  objC5.childNodes[1].setAttribute("src",arraySorteado[4]);
  objC6.childNodes[1].setAttribute("src",arraySorteado[5]);
  objC7.childNodes[1].setAttribute("src",arraySorteado[6]);
  objC8.childNodes[1].setAttribute("src",arraySorteado[7]);
  objC9.childNodes[1].setAttribute("src",arraySorteado[8]);
  objC10.childNodes[1].setAttribute("src",arraySorteado[9]);
  objC11.childNodes[1].setAttribute("src",arraySorteado[10]);
  objC12.childNodes[1].setAttribute("src",arraySorteado[11]);
  objC13.childNodes[1].setAttribute("src",arraySorteado[12]);
  objC14.childNodes[1].setAttribute("src",arraySorteado[13]);
  objC15.childNodes[1].setAttribute("src",arraySorteado[14]);
  objC16.childNodes[1].setAttribute("src",arraySorteado[15]);

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


function roda(nomeObj){
  var obj = document.getElementById(nomeObj);
  objFilho = obj.childNodes[0];
}
