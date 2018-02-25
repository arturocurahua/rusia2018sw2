
var BASE_URL = "https://appeventmongo.herokuapp.com/eventos/";
var BASE_URL2 = "https://appeventmongo.herokuapp.com/eventos2/";
//var BASE_URL = "http://"+window.location.hostname+":8000/eventos/";

var meses = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
var dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]


function eventoingresar(tipo){

	var nombreUsuario = localStorage.getItem("nomUsuario");
	var d = new Date();
    var diahora = d.getHours()+":"+d.getMinutes()+"//"+d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear()+"//"+d.getDay();;
    
        var evento = {
            usuario: nombreUsuario,
            tipoevento: tipo,
            hora: d.getHours(),
            minuto: d.getMinutes(),
            dia: d.getDate(),
            mes: (d.getMonth()+1),
            año: d.getFullYear(),
            diasemana: d.getDay()
        };
        console.log(evento)
        $.ajax({
            type: "POST",
            url: BASE_URL + "validar/",
            data: "data=" + JSON.stringify(evento),
            async: false,
            success: function (data) {
            	console.log("Conexion exitosa");
            },
            error: function (xhr, ajaxOptions, thrownError) {
        		alert(xhr.status);
        		alert(thrownError);
      		}
        });

}

function filtro(){


	x=$( "#sel1 option:selected" ).text();
	y=$( "#sel2 option:selected" ).text();
	z=$( "#sel3 option:selected" ).text();
	console.log(x)
	console.log(y)
	console.log(z)
  var contdia = [0,0,0,0,0,0,0]
  for (var k = 0; k < contdia.length; k++) {
      $("."+dias[k]+"").css({"width": "0%"});
      $("."+dias[k]+"").html("# Eventos: 0 - 0%")
  }
	$.ajax({
       url: BASE_URL2,       
       async: false,
       success: function(data) {

      	console.log("hola")
        console.log(typeof(data))
        console.log(data)
        contmes = 0
        console.log("total de todo:"+data.length)    
    if (2018 == z) {
        for (var i = 0; i < data.length; i++) {          
          var mes = data[i]["mes"]
          var eventito = data[i]["tipoevento"]
          console.log(String(eventito).toUpperCase())          
          console.log(String(x).toUpperCase())
          if(String(eventito).toUpperCase() == String(x).toUpperCase() || x=="Todos"){
            if (String(meses[mes]) == String(y)) {
              contmes = contmes + 1;
              console.log(y+" total: "+contmes)
              var indexdia = data[i]["diasemana"]
              contdia[indexdia] = contdia[indexdia] + 1;
            }
          }

        }
        console.log(contdia)
        for (var j = 0; j < contdia.length; j++) {
          //$(".lunes").css({"width": "100%"});    
          var porcentaje = (contdia[j]/contmes)*100
          if (contmes==0) {
            porcentaje=0
          }
          console.log(porcentaje)
          var n = porcentaje.toFixed(2)
          $("."+dias[j]+"").css({"width": ""+porcentaje+"%"});
          $("."+dias[j]+"").html("# Eventos: "+contdia[j]+" - "+n+"%")
        }
        var porcentaje2 = (contmes/data.length)*100
        var n2 = porcentaje2.toFixed(2)
        $("#total").css({"width": ""+porcentaje2+"%"});
        $("#total").html("# Eventos: "+contmes+" - "+n2+"%");

    }
        },
        error: function (xhr, ajaxOptions, thrownError) {
     		  alert(xhr.status);
      		alert(thrownError);
      	}
});


}