
var BASE_URL = "https://appeventmongo.herokuapp.com/eventos/";
var BASE_URL2 = "https://appeventmongo.herokuapp.com/eventos2/";
//var BASE_URL = "http://"+window.location.hostname+":8000/eventos/";


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
            	/*
                if(data==="true"){
                    alert("Usuario Ingresado Correctamente");
                    //window.location.assign(BASE_URL+'Hoja?nom='+$("#usuario").val());
                }else{                    
                    alert("Ha introducido mal los datos requeridos");
                }
                */
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

	$.ajax({
	   type: "POST",
       url: BASE_URL2,
       async: false,
       success: function(data) {

      	console.log("hola")
       	console.log(data)
       	var datos = data['collection']
       	console.log(datos)
       	$('#total').attr(style, "width: 50%; background-color: #4CAF50;")
 

       	/*
       	for (var i = Things.length - 1; i >= 0; i--) {
       		Things[i]
       	}
       	*/
       },
        error: function (xhr, ajaxOptions, thrownError) {
     		alert(xhr.status);
      		alert(thrownError);
      	}
});

/*
var app = angular.module('analiticas', []);
app.controller('reporte1', function($scope,$http) {

  $http({
        method : "POST",
        url : BASE_URL + "mostrarinfo",
    }).then(function mySuccess(response) {
      $scope.eventos = response.data.collection;
 

      for (var i = 0; i < response.data.collection.length; i++) {
        evento = $scope.eventos[i]
        console.log(evento)

       }

    }, function myError(response) {
        alert("TODO NO OK :(");
    });

})
*/

}