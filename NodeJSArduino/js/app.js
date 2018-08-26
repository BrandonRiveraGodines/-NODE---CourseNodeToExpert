$(document).ready(function() {
    var show_btn = $('.show-modalInsertID');
    var show_btn = $('.show-modalInsertID');
    //$("#testmodal").modal('show');

    show_btn.click(function() {
        $("#testmodalIntID").modal('show');
    })
});

$(document).ready(function() {
    var show_btn = $('.show-modalLogin');
    var show_btn = $('.show-modalLogin');
    //$("#testmodal").modal('show');

    show_btn.click(function() {
        $("#testmodalLogin").modal('show');
    })
});

$(document).ready(function() {
    var show_btn = $('.show-modalRegister');
    var show_btn = $('.show-modalRegister');
    //$("#testmodal").modal('show');

    show_btn.click(function() {
        //console.log($("");
        const valor = $("#insertID").val();
        if (valor === '' || parseInt(valor) < 1 || parseInt(valor) > 100) {
            alert(`Favor de verificar el ID introducido`);
        } else {
            $("#testmodalIntID").modal('hide');
            $("#testmodalRegistro").modal('show');
            console.log(valor);
        }
    })
});

console.log("Carga bien todo");