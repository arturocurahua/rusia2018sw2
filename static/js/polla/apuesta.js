$(document).ready(function () {

    //var BASE_URL = "http://" + window.location.hostname + ":8000/juegosmundial/";
    var BASE_URL = "https://"+window.location.hostname+"/juegosmundial/";
    if ($("#dinero").val() == "...") {
        $.ajax({
            type: "POST",
            url: BASE_URL + "finddinero/",
            data: {
                usuario: localStorage.getItem('nomUsuario')
            },
            success: function (data) {
                $("#dinero").val(data.dinero);
                console.log(data);
            }
        });
    }
    $(".grupo").click(function () {
        var grupo = $(this).attr("grupo");
        console.log("Grupo : " + grupo);
        $("#yourIframe").attr("src", "/juegosmundial/grupo" + grupo + "");

    });

    $(".apuesta").click(function () {
        var monto = $(this).html().split("<br>")[1];
        var ganador = getGanador($(this).index());
        var part = $(this).parent().attr("id");

        if (!part) {
            alert("Este partido no tiene identificador");
        } else {
            localStorage.setItem("monto", monto);
            localStorage.setItem("ganador", ganador);
            localStorage.setItem("id_partido", part);
            console.log("Apuesta : " + monto);
        }


    });

    $(".importe").click(function () {
        var importe = $(this).html().trim();
        localStorage.setItem('s_apuesta', importe);
        var monto = localStorage.getItem("monto");
        console.log("Importe : " + importe);
        $("#importe").html(
            `
        ${importe} <span class="caret"></span>
        `);
        var apuesta = monto * importe;
        console.log("Monto a ganar : " + apuesta);
        $("#apuesta").val(apuesta.toFixed(3));

    });

    $("#apostar").click(function () {
        var apues = localStorage.getItem('s_apuesta');
        var multi = localStorage.getItem("monto");
        var ganador = localStorage.getItem("ganador");
        var partido = localStorage.getItem("id_partido");
        var datos = {
            partido: partido,
            apuesta: Number(apues),
            importe: multi * Number(apues),
            resultado: ganador,
            usuario: localStorage.getItem('nomUsuario')
        }
        console.log(datos);
        saveApuesta(datos, function () {
            swal("", "Apuesta registrada con exito", "success").then(function () {
                location.reload();
            });
        });
    });

    function saveApuesta(datos, callback) {
        $.ajax({
            type: "POST",
            url: BASE_URL + "saveapuesta/",
            data: datos,
            success: function (data) {
                console.log(data);
                callback();
            }
        });
    }

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
});