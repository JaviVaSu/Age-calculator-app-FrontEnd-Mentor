$(document).ready(function() {
    let fecha = new Date();
    let mesActual = fecha.getMonth();
    mesActual = mesActual + 1;
    let diaActual = fecha.getDate();
    let añoActual = fecha.getFullYear();
    let diasdelmes = [31,28,31,30,31,30,31,31,30,31,30,31];

    let calculoAños = 0;
    let calculoMeses = 0;
    let calculoDias = 0;
    let auxiliar = 0;

    $("#boton").click(function(){
        var diaNacimiento = $("#valor-dia").val();
        var mesNacimiento = $("#valor-mes").val();
        var añoNacimiento = $("#valor-año").val();
        if(($("#valor-dia").val() == '') || ($("#valor-mes").val() == '')  || ($("#valor-año").val() == '')){
            $("#valor-dia").val('');
            $("#valor-mes").val('');
            $("#valor-año").val('');
            $("#error1").css("display", "block");
            $("#error4").css("display", "block");
            $("#error6").css("display", "block");
        }else{
            $("#error1").css("display", "none");
            $("#error4").css("display", "none");
            $("#error6").css("display", "none");
            if(($("#valor-año").val() > añoActual)){
                if(($("#valor-mes").val() <= 0) || ($("#valor-mes").val() > 12)){
                    $("#error7").css("display", "block");
                    $("#error5").css("display", "block");
                }else{
                    $("#error7").css("display", "block");
                }
            }else{
                if(($("#valor-mes").val() <= 0) || ($("#valor-mes").val() > 12)){
                    $("#error5").css("display", "block");
                }else{
                    if( ($("#valor-año").val() % 400 == 0) || (($("#valor-año").val() % 100 != 0) && ($("#valor-año").val() % 4 == 0))){
                        diasdelmes[1] = 29;
                        if( $("#valor-mes").val() <= mesActual ){
                            if( $("#valor-mes").val() == mesActual ){
                                if( $("#valor-dia").val() <= diaActual){
                                    calculoAños = añoActual - añoNacimiento;
                                    calculoMeses = 0;
                                    calculoDias = diaActual - diaNacimiento;
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }else{
                                    calculoAños = añoActual - añoNacimiento -1;
                                    calculoMeses = 11;
                                    calculoDias = diaNacimiento - diaActual;
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }
                            }else{
                                calculoAños = añoActual - añoNacimiento;
                                if( $("#valor-dia").val() <= diaActual){
                                    calculoMeses = mesActual - mesNacimiento;
                                    calculoDias = diaActual - diaNacimiento;
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }else{
                                    console.log("aca");
                                    calculoMeses = mesActual - mesNacimiento -1;
                                    auxiliar = mesNacimiento -1;
                                    calculoDias = diasdelmes[auxiliar] - (diaNacimiento- diaActual);
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }
                            }
                        }else{
                            calculoAños = añoActual - añoNacimiento -1;
                            if( $("#valor-dia").val() <= diaActual){
                                calculoMeses = 12 - (mesNacimiento - mesActual);
                                calculoDias = diaActual - diaNacimiento;
                                $("#error1").css("display", "none");
                                $("#error2").css("display", "none");
                                $("#error3").css("display", "none");
                                $("#error4").css("display", "none");
                                $("#error5").css("display", "none");
                                $("#error6").css("display", "none");
                                $("#error7").css("display", "none");
                                $("#resultado-años").html(calculoAños);
                                $("#resultado-meses").html(calculoMeses);
                                $("#resultado-dias").html(calculoDias);
                            }else{
                                calculoMeses = 12 - (mesNacimiento - mesActual) -1;
                                auxiliar = mesNacimiento -1;
                                calculoDias = diasdelmes[auxiliar] - (diaNacimiento- diaActual);
                                $("#error1").css("display", "none");
                                $("#error2").css("display", "none");
                                $("#error3").css("display", "none");
                                $("#error4").css("display", "none");
                                $("#error5").css("display", "none");
                                $("#error6").css("display", "none");
                                $("#error7").css("display", "none");
                                $("#resultado-años").html(calculoAños);
                                $("#resultado-meses").html(calculoMeses);
                                $("#resultado-dias").html(calculoDias);
                            }
                        }
                    }else{
                        if( $("#valor-mes").val() <= mesActual ){
                            if( $("#valor-mes").val() == mesActual ){
                                if( $("#valor-dia").val() <= diaActual){
                                    calculoAños = añoActual - añoNacimiento;
                                    calculoMeses = 0;
                                    calculoDias = diaActual - diaNacimiento;
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }else{
                                    calculoAños = añoActual - añoNacimiento -1;
                                    calculoMeses = 11;
                                    calculoDias = diaNacimiento - diaActual;
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }
                            }else{
                                calculoAños = añoActual - añoNacimiento;
                                if( $("#valor-dia").val() <= diaActual){
                                    calculoMeses = mesActual - mesNacimiento;
                                    calculoDias = diaActual - diaNacimiento;
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }else{
                                    console.log("aca");
                                    calculoMeses = mesActual - mesNacimiento -1;
                                    auxiliar = mesNacimiento -1;
                                    calculoDias = diasdelmes[auxiliar] - (diaNacimiento- diaActual);
                                    $("#error1").css("display", "none");
                                    $("#error2").css("display", "none");
                                    $("#error3").css("display", "none");
                                    $("#error4").css("display", "none");
                                    $("#error5").css("display", "none");
                                    $("#error6").css("display", "none");
                                    $("#error7").css("display", "none");
                                    $("#resultado-años").html(calculoAños);
                                    $("#resultado-meses").html(calculoMeses);
                                    $("#resultado-dias").html(calculoDias);
                                }
                            }
                        }else{
                            calculoAños = añoActual - añoNacimiento -1;
                            if( $("#valor-dia").val() <= diaActual){
                                calculoMeses = 12 - (mesNacimiento - mesActual);
                                calculoDias = diaActual - diaNacimiento;
                                $("#error1").css("display", "none");
                                $("#error2").css("display", "none");
                                $("#error3").css("display", "none");
                                $("#error4").css("display", "none");
                                $("#error5").css("display", "none");
                                $("#error6").css("display", "none");
                                $("#error7").css("display", "none");
                                $("#resultado-años").html(calculoAños);
                                $("#resultado-meses").html(calculoMeses);
                                $("#resultado-dias").html(calculoDias);
                            }else{
                                calculoMeses = 12 - (mesNacimiento - mesActual) -1;
                                auxiliar = mesNacimiento -1;
                                calculoDias = diasdelmes[auxiliar] - (diaNacimiento- diaActual);
                                $("#error1").css("display", "none");
                                $("#error2").css("display", "none");
                                $("#error3").css("display", "none");
                                $("#error4").css("display", "none");
                                $("#error5").css("display", "none");
                                $("#error6").css("display", "none");
                                $("#error7").css("display", "none");
                                $("#resultado-años").html(calculoAños);
                                $("#resultado-meses").html(calculoMeses);
                                $("#resultado-dias").html(calculoDias);
                            }
                        }
                    }
                }
            }
        }
    });

});