# FriendFinder
 $.post("/apifriends", newfriend)
      .done(function(data){
$("#userMatch").html(data.matchName);
$("userMatchImage").attr("src",data.matchImage)
   $("#exampleModal").modal("open");

      });