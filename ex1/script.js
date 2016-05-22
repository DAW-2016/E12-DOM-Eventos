function toupzera(){
  var t1 = document.getElementById("touper1");
  var t2 = document.getElementById("touper2");

  if(t1.value !== null)
    t1.value = t1.value.toUpperCase();
  if(t2.value !== null)
    t2.value = t2.value.toUpperCase();
}
