var contador = 0;

var modalActivado = function(){
    $('.modal').modal();
    $("#contacto").submit(agregarContacto);
};

var agregarContacto = function(e){
    e.preventDefault();
    contador++;
    $("span").text(contador);
    console.log("contacto");
    //Creación de elementos
    var $pNombre = $("<p />", { "class": "card-title center-align" });
    var $pNumero = $("<p />", { "class": "center-align flow-text" });
    var $iTelefono = $("<i />", { "class": "material-icons" });
    $iTelefono.text("phone");
    var $imagen = $("<img>", { "src": "http://www.fly-top.de/images/contact/User.png" });
    var $colImagen = $("<div />", { "class": "col s4" });
    var $colDatos = $("<div />", { "class": "col s8" });
    var $contenido = $("<div />", { "class": "row valign-wrapper" });
    var $color = $("<div />", { "class": "purple lighten-5 card-content" });
    var $tarjeta = $("<div />", { "class": "row card" });
    //Obtención de Datos
    $pNombre.text($("#datoNombre").val());    
    $pNumero.append($iTelefono);
    $pNumero.text($("#datoTelefono").val());
    //Creación de tarjeta
    
};

$(document).ready(modalActivado);