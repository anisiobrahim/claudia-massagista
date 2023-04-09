
var clientes = [];

function classClientes(nro, nome, email) {
    this.nome = nome;
    this.numero = nro;
    this.email = email;
}



function criarCliente() {
    var telefoneCliente = document.getElementById("txtNumero").value;
    var nomeCliente= document.getElementById("txtNome").value;
    var emailCliente= document.getElementById("txtEmail").value;

    var repete = 0;

    if (!isNaN(numeroCliente) && !isNaN(nomeCliente)) {
        for (var j = 0; j < clientes.length; j++) {
            if (clientes[j].nro == telefoneCliente) {
                clientes[j].nome = nomeCliente;
                repetido = 1;
            }
            if (repetido == 0) {
                var novoCliente = new classClientes(telefoneCliente, nomeCliente,emailCliente);
                clientes.push(novoCliente);
            }

        }
    }
}

/**
 * Botão Submit
 */
document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("procedimento");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }
};

/**
 * Botão Load
 */
document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("procedimento");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "massagem") {
            radios[i].checked = true;
        }
    }
};

document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("procedimento");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "plástica dos pés") {
            radios[i].checked = true;
        }
    }
};

document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("procedimento");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "Spar dos pés") {
            radios[i].checked = true;

        }
    }
};

document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("procedimento");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "Spar dos mãos") {
            radios[i].checked = true;

        }
    }
};

<select name="choice">
  <option value="massagem selected">Massagem Value</option>
  <option value="plasticadospes selected">Plástica dos pés Value</option>
  <option value="spardospes selected">Spar dos pés</option>
  <option value="spardasmaos selected">Spar das mãos Value</option>
</select>

/**
 * Botão Submit
 */
document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("procedimento");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }
};

/**
 * Botão Load
 */
document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("pagamentos");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "Débito") {
            radios[i].checked = true;
        }
    }
};

document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("procedimento");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "Crédito") {
            radios[i].checked = true;
        }
    }
};

document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("procedimento");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "Pix") {
            radios[i].checked = true;

        }
    }
};








