           //muda o nome dessa desgraça
           var sigma = document.querySelector(".subtitulo");
			sigma.textContent = "meus Gestirlsons";
			var aparecida = document.querySelector(".titulo");
			aparecida.textContent = "Gestirlson Nutrição"

           //acessa o paulo (la ele)

            var paciente = document.querySelector("#primeiro-paciente");
            
            //vê o peso do paule (gordofobia)
           
            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
            
           //tamanho do paulo (la ele)

            var tdAlt = paciente.querySelector(".info-altura");
            var altura = tdAlt.textContent;

            //coloca o imc dele na tabela e calcula

            var imc = peso / (altura * altura);
            var tdImc = paciente.querySelector(".info-imc");
            tdImc.textContent = imc;

            //avisa q o gordo ta pesado

           if (peso < 0 || peso > 1000){
            alert(" peso errado ")
           }

           //avisa q a arvore ta muito alta

           if (altura < 0 || altura > 4.00){
            alert(" altura errada ")
           }