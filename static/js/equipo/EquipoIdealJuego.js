$(document).ready(function () {


var nombreUsuario = localStorage.getItem("nomUsuario");
console.log(nombreUsuario)
$("#nombreUsuario").text("Equipo ideal por :"+nombreUsuario) 


  	var cont1;
  	var cont2;
  	var cont3;
  	var cont4;
  	var cont5;
    $(".formacion").click(function () {
    	cont1 = 0;
    	cont2 = 0;
    	cont3 = 0;
    	cont4 = 0;
    	cont5 = 0;
        var formacion = $(this).html();
        $("#drop-formaciones").html(
            formacion +
            `<span class="caret"></span>`
        );
        var pos = formacion.trim().split("-");
        var def = pos[0];
        var med = pos[1];
        var del = pos[2];
        printArquero();
        printDefensa(def);
        printMedio(med);
        printDelantero(del);

    });

    function printArquero(){
        $("#arquero").html("");
        $("#arquero").html(
        `
        <div id="jugador`+(++cont1)+`" class="col-xs-offset-4 col-xs-4" name="">
            <div class="center">
                <span class="badge">0</span>
            </div>
            <div class="center">
                <div id="`+(++cont5)+`banderapais">
                    <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
                </div>
            </div>
            <div class="center">
                <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
            </div>
        </div>
        `);
    }

    function printDefensa(def) {
        $("#defensa").html("");
        var ancho;
        switch (def) {
            case "4":
                ancho = 3;
                break;
            case "3":
                ancho = 4;
                break;
            default:
                ancho = 2;
        }
        if (ancho === 3 || ancho === 4) {
            for (var i = 0; i < def; i++) {
                $("#defensa").append(
                    `
                    <div id="jugador`+(++cont1)+`" class="nada col-xs-${ancho}">
                        <div class="center">
                            <span class="badge">0</span>
                        </div>
                        <div class="center">
               				 <div id="`+(++cont5)+`banderapais">
               				     <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              				  </div>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                        </div>
                    </div>
                    `
                );
            }
        } else {
            printOne(2, "defensa");
            printThree(3, "defensa");
            printOne(6, "defensa");
        }

    }

    function printMedio(med) {
        $("#medio").html("");
        var ancho;
        switch (med) {
            case "4":
                ancho = 3;
                break;
            case "3":
                ancho = 4;
                break;
            default:
                ancho = 2;
        }
        if (ancho === 3 || ancho === 4) {
            for (var i = 0; i < med; i++) {
                $("#medio").append(
                    `
                    <div id="jugador`+(++cont1)+`" class="nada col-xs-${ancho}">
                        <div class="center">
                            <span class="badge">0</span>
                        </div>
                        <div class="center">
                            <div id="`+(++cont5)+`banderapais">
               				    <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              				 </div>
                        </div> 
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                        </div>
                    </div>
                    `
                );
            }
        } else {
            printOne(1, "medio");
            printThree(1, "medio");
            printOne(1, "medio");
        }
    }

    function printDelantero(del) {
        $("#delantero").html("");
        var ancho;
        switch (del) {
            case "1":
                ancho = 12;
                break;
            case "2":
                ancho = 6;
                break;
            default:
                ancho = 4;
        }
        for (var i = 0; i < del; i++) {
            $("#delantero").append(
                `
                <div id="jugador`+(++cont1)+`" class="nada col-xs-${ancho}">
                    <div class="center">
                        <span class="badge">0</span>
                    </div>
                    <div class="center">
                        <div id="`+(++cont5)+`banderapais">
               			     <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              		   </div>
                    </div> 
                    <div class="center"> 
                        <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                    </div>
                </div>
                `
            );
        }
    }

    function printOne(num, posicion) {
        $(`#${posicion}`).append(
            `
            <div class="col-xs-2 nada row">
                <div id="jugador`+(++cont1)+`" class="col-xs-12">
                    <div class="center">
                        <span class="badge">0</span>
                    </div>
                    <div class="center">
                        <div id="`+(++cont5)+`banderapais">
               			     <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              			 </div>
                    </div>
                    <div class="center" > 
                        <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                    </div>
                </div>
            </div>
            `
        );


    }

    function printThree(num, posicion) {
        $(`#${posicion}`).append(
            `
            <div class="col-xs-8 nada row">
                    <div id="jugador`+(++cont1)+`" class="col-xs-4">
                        <div class="center">
                            <span class="badge">0</span>
                        </div>
                        <div class="center">
                            <div id="`+(++cont5)+`banderapais">
               				     <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              				  </div>
                        </div>
                        <div class="center"> 
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                        </div>
                    </div>
                    <div id="jugador`+(++cont1)+`" class="col-xs-4">
                        <div class="center">
                            <span class="badge">0</span>
                        </div>
                        <div class="center">
                            <div id="`+(++cont5)+`banderapais">
               				     <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              				  </div>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                        </div>
                    </div>
                    <div id="jugador`+(++cont1)+`" class="col-xs-4">
                        <div class="center">
                            <span class="badge">0</span>
                        </div>
                        <div class="center">
                            <div id="`+(++cont5)+`banderapais">
               				     <img width="44" height="44" alt="Añadir jugador" src="https://thumb.resfu.com/media/img/avatar-mini-player.jpg">
              				  </div>
                        </div>
                        <div class="center">
                            <input class="center input-cancha" style="cursor:pointer" type="text" placeholder="Ingresar jugador" data-toggle="modal" data-target="#myModal`+(++cont3)+`" data-id="`+(++cont4)+`">
                        </div>
                    </div>
                </div>
            `
        );
    }


    var puntajetotal = 0;
/////////////// Opciones Paises Jugadores
    var docsjuga = JSON.parse(localStorage.getItem("jugadores"));

    var paises = []
	var cad = ""

	Array.prototype.unique=function(a){
  	return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
	});

	for (var j = 1; j < docsjuga.length; j++) {
		paises.push(docsjuga[j].pais)
	}
	paises = paises.unique()

	for (var i = 0; i < paises.length; i++) {
		cad = cad + "<option value='"+i+"'>"+paises[i]+"</option>";
	}
	$("#1sel1").html(cad);
	$("#2sel1").html(cad);
	$("#3sel1").html(cad);
	$("#4sel1").html(cad);
	$("#5sel1").html(cad);
	$("#6sel1").html(cad);
	$("#7sel1").html(cad);
	$("#8sel1").html(cad);
	$("#9sel1").html(cad);
	$("#10sel1").html(cad);
	$("#11sel1").html(cad);

function calcularpuntaje() {

	var auxpunt = 0;
	for (var f = 1; f <= 11; f++) {
		auxpunt = auxpunt + parseInt($('#jugador'+f+' div span').text())
	}
	
    return auxpunt;
}

$("#myModal1").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').html(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#1sel1" ).click(function() {
        x=$( "#1sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#1sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#1sel1 option:selected" ).text();


   			$( "#1sel2" ).click(function() {
   				w = $( "#1sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador1").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;

						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)					 	 
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal1').modal('hide');  
       				    	
       				 $('#puntajetotal').val(calcularpuntaje())			 
   				 });


});
////////////////////
	

$("#myModal2").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#2sel1" ).click(function() {
        x=$( "#2sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#2sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#2sel1 option:selected" ).text();


   			$( "#2sel2" ).click(function() {
   				w = $( "#2sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador2").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal2').modal('hide');   	
       				 $('#puntajetotal').val(calcularpuntaje())
   				 });


});
		
////////////////////////

$("#myModal3").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#3sel1" ).click(function() {
        x=$( "#3sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#3sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#3sel1 option:selected" ).text();


   			$( "#3sel2" ).click(function() {
   				w = $( "#3sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador3").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal3').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////

////////////////////////

$("#myModal4").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#4sel1" ).click(function() {
        x=$( "#4sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#4sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#4sel1 option:selected" ).text();


   			$( "#4sel2" ).click(function() {
   				w = $( "#4sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador4").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal4').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////

////////////////////////

$("#myModal5").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#5sel1" ).click(function() {
        x=$( "#5sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#5sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#5sel1 option:selected" ).text();


   			$( "#5sel2" ).click(function() {
   				w = $( "#5sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador5").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal5').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////
////////////////////////

$("#myModal6").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#6sel1" ).click(function() {
        x=$( "#6sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#6sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#6sel1 option:selected" ).text();


   			$( "#6sel2" ).click(function() {
   				w = $( "#6sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador6").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal6').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////
////////////////////////

$("#myModal7").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var o;
	var w ="";

	$( "#7sel1" ).click(function() {
        x=$( "#7sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#7sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#7sel1 option:selected" ).text();


   			$( "#7sel2" ).click(function() {
   				w = $( "#7sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador7").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal7').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////
////////////////////////

$("#myModal8").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#8sel1" ).click(function() {
        x=$( "#8sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#8sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#8sel1 option:selected" ).text();


   			$( "#8sel2" ).click(function() {
   				w = $( "#8sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador8").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal8').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////
////////////////////////

$("#myModal9").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#9sel1" ).click(function() {
        x=$( "#9sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#9sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#9sel1 option:selected" ).text();


   			$( "#9sel2" ).click(function() {
   				w = $( "#9sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador9").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal9').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////
////////////////////////

$("#myModal10").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').text(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#10sel1" ).click(function() {
        x=$( "#10sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#10sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#10sel1 option:selected" ).text();


   			$( "#10sel2" ).click(function() {
   				w = $( "#10sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador10").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal10').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});


///////////////////////////////////////
////////////////////////

$("#myModal11").on('show.bs.modal', function (e) {
    var indexjugador = $(e.relatedTarget).attr('data-id');
    var indexfijo = parseInt(indexjugador);
    console.log("imprimir index "+indexjugador)
    $(this).find('.roomNumber').html(indexjugador);

	var x ="";
	var dorsal;
	var banderita;
	var puntaje;
  var numJuga;
	var w ="";

	$( "#11sel1" ).click(function() {
        x=$( "#11sel1 option:selected" ).text();
        console.log(x)
        var jugadorXpais = []
		for (var z = 0; z < docsjuga.length; z++) {

			if (docsjuga[z].pais == x) {

				jugadorXpais.push(docsjuga[z].nombre)
			}	
		}

		var cad2 = "";
		for (var aa = 0; aa < jugadorXpais.length; aa++) {
			cad2 = cad2 + "<option value='"+aa+"'>"+jugadorXpais[aa]+"</option>";
		}
		$("#11sel2").html(cad2);


/////////////////////////////////////////////////////
  			

   			y = $( "#11sel1 option:selected" ).text();


   			$( "#11sel2" ).click(function() {
   				w = $( "#11sel2 option:selected" ).text();
   			});

   		});

			
			    $("#guardarjugador11").click(function () {
       				 console.log("entro al modal guardar")
       				 console.log(y)
       				 //$('#jugador'+indexjugador+' div input').val(y)

       				for (var o = 0; o < docsjuga.length; o++) {
						if (docsjuga[o].nombre == w) {
							dorsal = docsjuga[o].dorsal;
							banderita = docsjuga[o].pais;
							puntaje = docsjuga[o].puntaje;
              numJuga = o;
						}	
					}
					 console.log("antes de guardar"+indexfijo)
					 console.log(indexfijo)
					 var cadbanderas = '<img width="60" height="44" src="/static/img/banderas/'+banderita+'.png" alt="'+banderita+'">'
					 
       				 $('#'+indexfijo+'banderapais').html(cadbanderas)
       				 
       				 $('#jugador'+indexfijo+' div input').val(w)
       				 $('#jugador'+indexfijo+' div input').val(dorsal+' - '+w)
       				 $('#jugador'+indexfijo+' div span').text(puntaje)
               $('#jugador'+indexfijo+'').attr('name',numJuga);
       				 $('#myModal11').modal('hide');
       				 $('#puntajetotal').val(calcularpuntaje())	
   				 });


});

///////////////////////////////////////
////////////////////////

});


function seleccionar_todo(numtactica, numJu){ 
  $('#id_tactica').val(numtactica);



   //for (i=0;i<352;i++) {

      console.log("entro al for")
        //if($('#id_jugadores_'+i+'').val() == numJu) {
          //console.log("entro")
          //$('#id_jugadores_'+i+'').prop('checked', true);
        //}
      for (var b = 0; b < numJu.length; b++) {
        $('#id_jugadores_'+(numJu[b]-1)+'').prop('checked', true);
      }
      
   //}

   var auxnombreUsuario = localStorage.getItem("nomUsuario");

   for (var h = 0; h <= 10; h++) {
      var aux = $("#id_usuario option[value="+ h +"]").text()
      if (aux == auxnombreUsuario) {
          $("#id_usuario option[value="+ h +"]").attr("selected",true);
      }    
     
   }
   
   $("#guardarequipo").click();

} 


$("#guardadofinal").click(function(){


    var forma = $("#drop-formaciones").text()
    var formaint;
    if (forma=="4-4-2") {
      formaint = 1
    }else if(forma=="4-3-3"){
      formaint = 2
    }else if(forma=="3-4-3"){
      formaint = 3
    }else if(forma=="4-5-1"){
      formaint = 4
    }else if(forma=="5-4-1"){
      formaint = 5
    }
    console.log(forma);
    console.log(formaint);
    console.log("gg wpdd")
   
    var listjuga = []

    for (var n = 1; n <= 11; n++) {
      var opc = $('#jugador'+n+'').attr('name');
      listjuga.push(opc)
    }
   
    seleccionar_todo(formaint,listjuga);

});
