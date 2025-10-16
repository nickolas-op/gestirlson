//executa a porra toda

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();

  var formulario = document.querySelector("#form-adiciona");
  var paciente = buscaValor(formulario);
  var pacienteTr = criarTr(paciente);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

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

 //adiciona a desgraça toda

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;
  //cria o rai do Tr

  var pacienteTr = document.createElement("tr");

  //faz a desgraça das Td

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");



  //coloca a porra toda na tela

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
} 