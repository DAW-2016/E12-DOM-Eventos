function toupzera(){
  var t1 = document.getElementById("nome");
  var letters = /^[A-Za-z]+$/;
  var p = document.createElement("p");
  var c = document.createAttribute("class");
  c.value = "text-color-white";
  p.setAttributeNode(c);

  p.textContent = "ONLY LETTERS";
  p.id = "ezdel";

  console.log(t1);
  console.log(t1.parentNode.childNodes);

  if((!t1.value.match(letters))&&(document.getElementById("ezdel") == null)){
    t1.parentNode.insertBefore(p,t1);
  }  else if((t1.value.match(letters))&&(document.getElementById("ezdel") != null)){
    t2=document.getElementById("ezdel");
    t1.parentNode.removeChild(t2);
  }

}
