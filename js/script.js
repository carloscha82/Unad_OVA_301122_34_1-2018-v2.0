$(document).ready(function(){

  //pagina index.html por defecto
  //location.href="index.html";
  $(this).load("index.html");
  $("#principal").load("html/indexcontex.html");

  //Por defecto la pagina carga en la pagina de inicio, por lo tanto se selecciona el primer elemento de la lista
  //que correspondie al li que contiene el link de Inicio
  $("#lista-ppal li:first").addClass('linkSeleccion');

  //Funcion que detecta el link seleccionado, lee el atributo alt y carga la pagina correspondiente en el section principal
  $("nav a").click(function(){
    var url=$(this).attr("alt");
    var loc=window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);

    //carga el html correspndiente en el section principal del index.html
    $("#principal").load(url);

    //busca todas las etiquetas li precedidas del id lista-ppal (ul) y remueve la clase de linkSeleccion
    $("#lista-ppal>li").each(function() {
      $(this).removeClass('linkSeleccion');
    });

    //de acuerdo a link seleccionado del menu #lista-ppal, adiere la clase del li que esta precedido de #lista-ppal
    $(this).closest('#lista-ppal>li').addClass('linkSeleccion');
  });
});
