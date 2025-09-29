//muda o nome dessa desgraça
var sigma = document.querySelector(".subtitulo");
sigma.textContent = "meus Gestirlsons";
var aparecida = document.querySelector(".titulo");
aparecida.textContent = "Gestirlson Nutrição"

//acessa o paulo (la ele)

var pacientes = document.querySelectorAll(".paciente");
            
for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];
  //vê o peso do paulo (gordofobia)
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
        
      
  //tamanho do paulo (la ele)
  
  var tdAlt = paciente.querySelector(".info-altura");
  var altura = tdAlt.textContent;

  //calcula o imc
  
  var imc = peso / (altura * altura);
  
  //variaveis certas
  var pesoValido = true;
  var alturaValida = true;

  if (pesoValido && alturaValida){
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(1);
  }

  //define limites para peso e altura
  
  if(peso <= 0 || peso >= 1000){
    alert("peso-inválido")
    var pesoInvalido
    tdImc.textContent = "peso-invalido";
    paciente.classList.add("campo-invalido");
  }
  if(altura <= 0 || altura >= 4.00){
    alert("altura-inválida")
    var alturaInvalida
    tdImc.textContent = "altura-invalida";
    paciente.classList.add("campo-invalido");
  }
}

//clicar no titulo e fazer alguma desgraça
sigma.addEventListener('click', zap);

function zap (){
  alert("ta procurando o guê")
}