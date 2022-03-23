function alertaValoracion() {
    var valoracion = document.getElementById("valoracion").value;
    alert("Has valorado con "+valoracion+" puntos");
}

function alertaCuenta() {
    var pais = document.getElementById("pais").value;
    var iban = document.getElementById("IBAN").value;
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("DC").value;
    var cuenta = document.getElementById("cuenta").value;
    var cuentaBancaria = (pais+iban+"-"+entidad+"-"+sucursal+"-"+dc+"-"+cuenta);
    if (iban.length < 2 || entidad.length < 4 || sucursal.length < 4 || dc.length < 2 || cuenta.length < 10) {
        alert("Faltan datos de la cuenta bancaria por rellenar")
    }
    else {alert("Le informamos que su cuenta bancaria es: "+cuentaBancaria);}
}

const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function alertaDia() {
    var fecha = document.getElementById("fecha").value;
    var numDia = new Date(fecha).getUTCDay();
    var dia = dias[numDia]
    alert("La fecha seleccionada en el elemento de fecha es un "+dia)
}

const provincias = new Map();

provincias.set (1, "Álava");
provincias.set (2, "Albacete");
provincias.set (3, "Alicante");
provincias.set (4, "Almería");
provincias.set (5, "Ávila");
provincias.set (6, "Badajoz");
provincias.set (7, "Islas Baleares");
provincias.set (8, "Barcelona");
provincias.set (9, "Burgos");
provincias.set (10, "Cáceres");
provincias.set (11, "Cádiz");
provincias.set (12, "Castellón");
provincias.set (13, "Ciudad Real");
provincias.set (14, "Córdoba");
provincias.set (15, "La Coruña");
provincias.set (16, "Cuenca");
provincias.set (17, "Gerona");
provincias.set (18, "Granada");
provincias.set (19, "Guadalajara");
provincias.set (20, "Guipúzcoa");
provincias.set (21, "Huelva");
provincias.set (22, "Huesca");
provincias.set (23, "Jaén");
provincias.set (24, "León");
provincias.set (25, "Lérida");
provincias.set (26, "La Rioja");
provincias.set (27, "Lugo");
provincias.set (28, "Madrid");
provincias.set (29, "Málaga");
provincias.set (30, "Murcia");
provincias.set (31, "Navarra");
provincias.set (32, "Orense");
provincias.set (33, "Asturias");
provincias.set (34, "Palencia");
provincias.set (35, "Las Palmas");
provincias.set (36, "Pontevedra");
provincias.set (37, "Salamanca");
provincias.set (38, "Santa Cruz De Tenerife");
provincias.set (39, "Cantabria");
provincias.set (40, "Segovia");
provincias.set (41, "Sevilla");
provincias.set (42, "Soria");
provincias.set (43, "Tarragona");
provincias.set (44, "Teruel");
provincias.set (45, "Toledo");
provincias.set (46, "Valencia");
provincias.set (47, "Valladolid");
provincias.set (48, "Vizcaya");
provincias.set (49, "Zamora");
provincias.set (50, "Zaragoza");
provincias.set (51, "Ceuta");
provincias.set (52, "Melilla");


function validarCP() {
    var cp = document.getElementById("CP");
    var codigo = cp.value.substring(0, 2);
    var claveInt = parseInt(codigo);

    var provincia = document.getElementById("provincia").value;

    var textoCP = document.getElementById("textoCP");
    var textoProvincia = document.getElementById("textoProvincia");

    var numeros = /^[0-9]+$/;

    function provinciaDeCP(input) { //Da el nombre de provincia a partir del CP
        for (const [clave, valor] of provincias) {
            if (clave === input) {return valor}
        }
    }

    function provinciaEnMapa(input) { //Comprueba si la provincia introducida está en el mapa
        for (const [clave, valor] of provincias) {
            if (valor == input) {return true}
        }
    }

    if (cp.value.match(numeros) === false || cp.value.length < 5 && cp.value.length > 0) {
        alert("El código postal no cumple con el formato de cinco dígitos.")
    }
    else if (provincia.length == 0) { 
        textoCP.innerHTML = "El código postal que comienza por "+codigo+" corresponde a "+provinciaDeCP(claveInt);
        textoProvincia.innerHTML = "";
        } //Da una pista de la provincia si aún no se ha introducido
    else { //Si se ha introducido la provincia, se comprueba si es correcta y si se ha incluido el CP
        if (provinciaEnMapa(provincia) != true){
            alert("La provincia introducida no es correcta. Revise mayúsculas y tildes.")
        }
         else if (cp.value == "") {alert("Introduzca el Código Postal")}
            else if (cp.value.length < 5 || cp.value.match(numeros) === false) {
                alert("El código postal no cumple con el formato de cinco dígitos.")
            }
                else { //Si ambos datos se han introducido correctamente, se comprueba si coinciden
                    if (provincia == provinciaDeCP(claveInt)) {
                    textoProvincia.innerHTML = "El código postal y la provincia coinciden";
                    textoProvincia.style.color="green";
                    textoCP.innerHTML = "";
                    }
                    else {
                    textoProvincia.innerHTML = "¡Atención! El código postal y la provincia no coinciden. Revisa los datos.";
                    textoProvincia.style.color="red";
                    textoCP.innerHTML = "El código postal que comienza por "+codigo+" corresponde a "+provinciaDeCP(claveInt);
                    }
                }
    }
}