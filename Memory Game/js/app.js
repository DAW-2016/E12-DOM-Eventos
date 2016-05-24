
var endGame = function(){
  var date = new Date();
  var endTime = date.getTime();
  var cards = $(".found");
  var points = $("#points");
  var totalTime = (endTime - $(points).attr("time"))/1000;

  $("#final").html("<h3>Tempo</h3>Você demorou<br>" + totalTime + " segundos, <br>seu daw</p>");

  for (var i = 0; i < cards.length; i++){
    $(cards[i]).css("display", "none");
  }

  $("#pontuation").css("display", "block");
}


var checkCards = function(){
  var cards = $(".cards");
  var points = $("#points");
  var TwoCards = [];
  var val = 0;
  for (var i = 0; i < cards.length; i++) {
    var img = $(cards[i]).children();

    if($(img[0]).css("opacity") == 1){
      TwoCards[TwoCards.length] = i;
    }

  }

  if(TwoCards.length == 2){
    var imgCheck1 = $(cards[TwoCards[0]]).children();
    var imgCheck2 = $(cards[TwoCards[1]]).children();


    if($(imgCheck1[0]).attr("src") == $(imgCheck2[0]).attr("src")){
      $(cards[TwoCards[0]]).removeClass("cards");
      $(cards[TwoCards[0]]).addClass("found");
      $(cards[TwoCards[0]]).unbind("click");

      $(cards[TwoCards[1]]).removeClass("cards");
      $(cards[TwoCards[1]]).addClass("found");
      $(cards[TwoCards[1]]).unbind("click");

      val = $(points).attr("value");
      console.log(val);
      val++;
      $(points).attr("value", val);
      $(points).html(val);
    }
    else{
      $(imgCheck1[0]).css("opacity", 0);
      $(imgCheck2[0]).css("opacity", 0);

    }
  }

  if(val == 10){
    endGame();
  }
}

var start = function(){

  $("#init").css("display", "none");
  $("#pontuation").css("display", "none");

  var date = new Date();
  var nomes = ["alão.jpg", "augusto.jpg", "carneiro.jpg", "celim.jpg", "henzo.jpg", "ilms.jpg", "jao.jpg", "please.jpg", "sereio.jpg", "wander.jpg", "alão.jpg", "augusto.jpg", "carneiro.jpg", "celim.jpg", "henzo.jpg", "ilms.jpg", "jao.jpg", "please.jpg", "sereio.jpg", "wander.jpg"];

  var cards = $(".cards");

  $("#points").attr("time", date.getTime());

  for (var i = 0; i < cards.length; i++) {
    var img = $(cards[i]).children();
    var random;

    do{
      random = Math.floor((Math.random() * 20) + 0);
    }while(nomes[random] == null);

    $(img[0]).attr("src", "photos/" + nomes[random]);
    nomes[random] = null;

    $(cards[i]).css("display", "block");


  }

}

$(".BtnInit").click(start);

$(".cards").click(function(){

  var img = $(this).children();

  $(img[0]).css("opacity", 1);

  checkCards();
});
