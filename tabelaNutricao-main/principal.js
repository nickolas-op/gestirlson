           //muda o nome dessa desgraça
           var sigma = document.querySelector(".subtitulo");
			sigma.textContent = "meus Gestirlsons";
			var aparecida = document.querySelector(".titulo");
			aparecida.textContent = "Gestirlson Nutrição"

           //acessa o paulo (la ele)

            var paciente = document.querySelector(".paciente");
            
           for(var i = 0; i < paciente.lenght; i++){

             //vê o peso do paulo (gordofobia)
           
             var tdPeso = paciente.querySelector(".info-peso");
             var peso = tdPeso.textContent;
             
            //tamanho do paulo (la ele)
 
             var tdAlt = paciente.querySelector(".info-altura");
             var altura = tdAlt.textContent;
 
             //coloca o imc dele na tabela e calcula
 
             var imc = peso / (altura * altura);
             var tdImc = paciente.querySelector(".info-imc");
             tdImc.textContent = imc;
 
             //variaveis certas
            var pesoValido = true;
            var alturaValida = true;
 
            //define limites para peso e altura
 
            if(peso <= 0 || peso >= 1000){
             alert("peso-inválido")
             var pesoInvalido
             tdImc.textContent = "peso-invalido";
            }
            if(altura <= 0 || altura >= 4.00){
             alert("altura-inválida")
             var alturaInvalida
             tdimc.textContent = "altura-invalida";
            }
            
            if (pesoValido && alturaValida)
            var tdImc = paciente.querySelector(".info-imc");
             tdImc.textContent = imc;

           }