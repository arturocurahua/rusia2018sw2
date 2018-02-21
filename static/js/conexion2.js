
var serviceURL = "https://"+window.location.hostname+"/juegosmundial/";
//var serviceURL = "http://"+window.location.hostname+":8000/juegosmundial/";
console.log(serviceURL)

getTiposList();
getjugadores();
obtenerUsuario();

$(document).ajaxError(function(event, request, settings) {
    console.log("conexion Ajax");
    alert("Error conectadose al servidor");
});

function obtenerUsuario(){
    console.log("gg wp")    
    valnombre = $("#nombreUsuario").text()    
    var nomUsu = valnombre.split(":");
    console.log("abajo lo q hay")
    console.log(nomUsu[1])
    console.log(typeof(nomUsu[1]))
    if (nomUsu[1] == "") {
        console.log("esta vacio el usuario")
        var conservar = localStorage.getItem("nomUsuario");
        console.log(conservar)       
        $("#nombreUsuario").text("Bienvenido :"+conservar) 
    }else{
        console.log("podriamamos conservar")
        console.log(nomUsu[1])
        localStorage.setItem("nomUsuario", nomUsu[1] );
    }
    
}

function getTiposList() {
    var docs = [""];

    console.log("estamos dentro")
    $.ajax({
        url: serviceURL + 'listado',
        async: false,
        success: function(data) {

    	//console.log(data);
        //console.log(typeof(data));
        //console.log(data[0]);
        //console.log(data[1]);
        var auxpreguntas = data[0];
        var auxrespuestas = data[1];

        for (var i = 0; i < auxpreguntas.length; i++) {

            //console.log(auxpreguntas[i]);
            //console.log(auxpreguntas[i].fields.descripcion);
            //console.log(auxpreguntas[i].fields.correcta);
            var arrayrespuestas = []
            for (var j = 0; j < auxpreguntas[i].fields.respuestas.length; j++) {
                var respXpreg = auxpreguntas[i].fields.respuestas[j]; 

                for (var z = 0; z < auxrespuestas.length; z++) {
                    //console.log(auxrespuestas[z].pk);

                    if (respXpreg == auxrespuestas[z].pk) {
                        arrayrespuestas.push(auxrespuestas[z].fields.descripcion)
                    }

                }

            }

            docs.push({
                quest : auxpreguntas[i].fields.descripcion,
                ans : arrayrespuestas, 
                res : auxpreguntas[i].fields.correcta 
             });
        }
        

    }});   


    console.log(docs)


    localStorage.setItem("probemos", JSON.stringify(docs));
  
}

//Agregando Listado de Jugadores
function getjugadores() {
    var docsjuga = [""];  
    $.ajax({
        url: serviceURL + 'equipoidealjugadores',
        async: false,
        success: function(data) {

        
        for (var i = 0; i < data.length; i++) {

            //console.log(data[i])

            docsjuga.push({
                nombre : data[i].fields.nombre,
                pais : data[i].fields.pais, 
                dorsal : data[i].fields.dorsal,
                puntaje : data[i].fields.puntaje
            });
          
        }
        

    }});   


    localStorage.setItem("jugadores", JSON.stringify(docsjuga));   
  
}



function getEquipos() {
    var docs = [""];

    console.log("estamos dentro get getEquipos")
    $.ajax({
        url: serviceURL + 'equipos',
        async: false,
        success: function(data) {

        //console.log(data);
        //console.log(typeof(data));
        //console.log(data[0]);
        //console.log(data[1]);
        var auxpreguntas = data[0];
        var auxrespuestas = data[1];

        for (var i = 0; i < auxpreguntas.length; i++) {

            //console.log(auxpreguntas[i]);
            //console.log(auxpreguntas[i].fields.descripcion);
            //console.log(auxpreguntas[i].fields.correcta);
            var arrayrespuestas = []
            for (var j = 0; j < auxpreguntas[i].fields.respuestas.length; j++) {
                var respXpreg = auxpreguntas[i].fields.respuestas[j]; 

                for (var z = 0; z < auxrespuestas.length; z++) {
                    //console.log(auxrespuestas[z].pk);

                    if (respXpreg == auxrespuestas[z].pk) {
                        arrayrespuestas.push(auxrespuestas[z].fields.descripcion)
                    }

                }

            }

            docs.push({
                quest : auxpreguntas[i].fields.descripcion,
                ans : arrayrespuestas, 
                res : auxpreguntas[i].fields.correcta 
             });
        }
        

    }});   


    console.log(docs)


    localStorage.setItem("probemos", JSON.stringify(docs));
  
}
