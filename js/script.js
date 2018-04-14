$(document).ready(function(){

  //pagina index.html por defecto
//  location.href="index.html";
  $(this).load("index.html");
  $("#principal").load("html/indexcontex.html");
  $("nav ul li a").click(function(){
    var url=$(this).attr("alt");
    var loc=window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
//    alert(loc);
    $("#principal").load(url);
  });
});
