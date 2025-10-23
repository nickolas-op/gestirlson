// executa a porra toda

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();

  var formulario = document.querySelector("#form-adiciona");
  var paciente = buscaValor(formulario);
  var pacienteTr = criarTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  formulario.reset();
});

function buscaValor(formulario){

  var paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calcularIMC(formulario.peso.value, formulario.altura.value)
  }
  return paciente;
}

function criarTr(paciente){

  // Cria o TR
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // cria o caraio dasTDs e bota no TR
  pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function criarTd(dado, classe){

  const td = document.createElement("td")

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}