$(document).ready(function () {
    console.log("READY");
    //var BASE_URL = "http://" + window.location.hostname + ":8000/juegosmundial/";
    var BASE_URL = "https://"+window.location.hostname+"/juegosmundial/";

    $(".apuesta").click(function () {
        var e1 = $(this).parent().find("button:nth-child(1)").html().split("<br>")[0].trim();
        var e2 = $(this).parent().find("button:nth-child(3)").html().split("<br>")[0].trim();
        var pk_partido = $(this).parent().attr("id");
        var ganador = getGanador($(this).index());
        var sele = $(this).parent().find(`button:nth-child(${$(this).index() + 1})`).html().split("<br>")[0].trim();

        console.log(`${e1} vs ${e2} : (${pk_partido})`);
        console.log(`Ganador : ${sele}   ${ganador}`);
        swal({
            title: `${e1} vs ${e2}`,
            text: `Declarar  ganador a : ${sele}  (${ganador})`,
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((response) => {
                datos = {
                    partido: pk_partido,
                    ganador: ganador
                }
                if (response) {
                    solvePartido(datos, function () {
                        location.reload();
                    });
                }
            });
    });

    function getGanador(index) {
        var apu;
        switch (index) {
            case 0:
                apu = "L";
                break;
            case 1:
                apu = "E";
                break;
            case 2:
                apu = "V";
                break;
            default:
        }
        return apu;
    }

    function solvePartido(datos, callback) {
        $.ajax({
            type: "POST",
            url: BASE_URL + "solvepartido/",
            data: {
                usuario: localStorage.getItem('nomUsuario'),
                partido: datos.partido,
                ganador: datos.ganador
            },
            success: function (data) {
                swal("Resultado del partido registrado", {
                    icon: "success",
                }).then(function () {
                    console.log(data);
                    callback();
                });

            }
        });
    }
});