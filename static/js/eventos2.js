
var BASE_URL = "https://appeventmongo.herokuapp.com/eventos/";

function eventoingresar(tipo){

	var nombreUsuario = localStorage.getItem("nomUsuario");
	var d = new Date();
    var diahora = d.getHours()+":"+d.getMinutes()+"//"+d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
    
        var evento = {
            usuario: nombreUsuario,
            tipoevento: tipo,
            fecha: diahora
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