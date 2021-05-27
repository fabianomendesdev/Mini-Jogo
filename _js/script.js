function misturar(array) {
 	
 	var m = array.length, t, i;

 	while (m) {

    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function quest(v) {

	var tq = [];
	var a = [];

	switch (v) {

		case 1 : 

			for (var i=0; i < 15; i++){
				tq.push(i+1);
			}

			tq = misturar(tq);

		break;

		case 2:
			for (var i=15; i < 30; i++){
				tq.push(i+1);
			}

			tq = misturar(tq);

		break;

		case 3:
			for (var i=30; i < 45; i++){
				tq.push(i+1);
			}

			tq = misturar(tq);

		break;

		case 4:
			for (var i=45; i < 60; i++){
				tq.push(i+1);
			}

			tq = misturar(tq);

		break;

		case 5:

			for (var i=0; i < 60; i++) {
			tq.push(i+1);
			}

			tq = misturar(tq);

		break;

	}

	for (var i=0; i < 5; i++){
		a.push(tq[i]);	
	}

	a = misturar(a);

	return(a);
}	

function buscar(y){

	document.getElementById("inpText").value = "";
	document.getElementById("qst1").value = "";
	document.getElementById("qst2").value = "";
	document.getElementById("qst3").value = "";
	document.getElementById("qst4").value = "";
	document.getElementById("qst5").value = "";

	switch (y) {

		case 1:
			document.getElementById("inpText").value = "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?";
			document.getElementById("qst1").innerText = "Tem entre 2 a 4 litros. São retirados 450 mililitros";
			document.getElementById("qst2").innerText = "Tem entre 4 a 6 litros. São retirados 450 mililitros";
			document.getElementById("qst3").innerText = "Tem 10 litros. São retirados 2 litros";
			document.getElementById("qst4").innerText = "Tem 7 litros. São retirados 1,5 litros";
			document.getElementById("qst5").innerText = "Tem 0,5 litros. São retirados 0,5 litros";
		break;

		case 2: 
			document.getElementById("inpText").value = "Atualmente, quantos elementos químicos a tabela periódica possui?";
			document.getElementById("qst1").innerText = "113";
			document.getElementById("qst2").innerText = "109";
			document.getElementById("qst3").innerText = "108";
			document.getElementById("qst4").innerText = "118";
			document.getElementById("qst5").innerText = "92";
		break;

		case 3:
			document.getElementById("inpText").value = "Quanto tempo a luz do Sol demora para chegar à Terra?";
			document.getElementById("qst1").innerText = "12 minutos";
			document.getElementById("qst2").innerText = "1 dia";
			document.getElementById("qst3").innerText = "12 horas";
			document.getElementById("qst4").innerText = "8 minutos";
			document.getElementById("qst5").innerText = "segundos";
		break;

		case 4:
			document.getElementById("inpText").value = "Em que ordem surgiram os modelos atômicos?";
			document.getElementById("qst1").innerText = "Thomson, Dalton, Rutherford, Rutherford-Bohr";
			document.getElementById("qst2").innerText = "Rutherford-Bohr, Rutherford, Thomson, Dalton";
			document.getElementById("qst3").innerText = "Dalton, Rutherford-Bohr, Thomson, Rutherford";
			document.getElementById("qst4").innerText = "Dalton, Thomson, Rutherford-Bohr, Rutherford";
			document.getElementById("qst5").innerText = "Dalton, Thomson, Rutherford, Rutherford-Bohr";
		break;

		case 5:
			document.getElementById("inpText").value = "Qual a velocidade da luz?";
			document.getElementById("qst1").innerText = "300 000 000 metros por segundo (m/s)";
			document.getElementById("qst2").innerText = "150 000 000 metros por segundo (m/s)";
			document.getElementById("qst3").innerText = "199 792 458 metros por segundo (m/s)";
			document.getElementById("qst4").innerText = "299 792 458 metros por segundo (m/s)";
			document.getElementById("qst5").innerText = "30 000 000 metros por segundo (m/s)";
		break;

		case 6:
			document.getElementById("inpText").value = "Quais destas doenças são sexualmente transmissíveis?";
			document.getElementById("qst1").innerText = "Aids, tricomoníase e ebola";
			document.getElementById("qst2").innerText = "Chikungunya, aids e herpes genita";
			document.getElementById("qst3").innerText = "Gonorreia, clamídia e sífilis";
			document.getElementById("qst4").innerText = "Botulismo, cistite e gonorreia";
			document.getElementById("qst5").innerText = "Hepatite B, febre tifoide e hanseníase";
		break;
			
		case 7:
			document.getElementById("inpText").value = "As pessoas de qual tipo sanguíneo são consideradas doadores universais?";
			document.getElementById("qst1").innerText = "Tipo A";
			document.getElementById("qst2").innerText = "Tipo B";
			document.getElementById("qst3").innerText = "Tipo O";
			document.getElementById("qst4").innerText = "Tipo AB";
			document.getElementById("qst5").innerText = "Tipo ABO";
		break;
			
		case 8:
			document.getElementById("inpText").value = "Qual o maior animal terrestre?";
			document.getElementById("qst1").innerText = "Baleia Azul";
			document.getElementById("qst2").innerText = "Dinossauro";
			document.getElementById("qst3").innerText = "Elefante africano";
			document.getElementById("qst4").innerText = "Tubarão Branco";
			document.getElementById("qst5").innerText = "Girafa";
		break;
			
		case 9:
			document.getElementById("inpText").value = "Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?";
			document.getElementById("qst1").innerText = "Marie Curie";
			document.getElementById("qst2").innerText = "Blaise Pascal";
			document.getElementById("qst3").innerText = "Louis Pasteur";
			document.getElementById("qst4").innerText = "Antoine Lavoisier";
			document.getElementById("qst5").innerText = "Charles Darwin";
		break;
			
		case 10:
			document.getElementById("inpText").value = "Quais são os cromossomos que determinam o sexo masculino?";
			document.getElementById("qst1").innerText = "Os V";
			document.getElementById("qst2").innerText = "Os X";
			document.getElementById("qst3").innerText = "Os Y";
			document.getElementById("qst4").innerText = "Os W";
			document.getElementById("qst5").innerText = "Os Z";
		break;

		case 11:
			document.getElementById("inpText").value = "Que substância é absorvida pelas plantas e expirada por todos os seres vivos?";
			document.getElementById("qst1").innerText = "o oxigênio";
			document.getElementById("qst2").innerText = "o nitrogênio";
			document.getElementById("qst3").innerText = "o nitrato de sódio";
			document.getElementById("qst4").innerText = "o dióxido de ferro";
			document.getElementById("qst5").innerText = "o dióxido de carbono";
		break;

		case 12: 
			document.getElementById("inpText").value = "Qual o metal cujo símbolo químico é o Au?";
			document.getElementById("qst1").innerText = "Cobre";
			document.getElementById("qst2").innerText = "Prata";
			document.getElementById("qst3").innerText = "Mercúrio";
			document.getElementById("qst4").innerText = "Ouro";
			document.getElementById("qst5").innerText = "Manganês";
		break;

		case 13:
			document.getElementById("inpText").value = "Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:";
			document.getElementById("qst1").innerText = "Tubarão branco, crocodilo e sucuri";
			document.getElementById("qst2").innerText = "Tigre, gavião e orca";
			document.getElementById("qst3").innerText = "Hiena, urso branco e lobo cinzento";
			document.getElementById("qst4").innerText = "Orca, onça e tarântula";
			document.getElementById("qst5").innerText = "Leão, tubarão branco e urso cinzento";
		break;

		case 14:
			document.getElementById("inpText").value = "Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?";
			document.getElementById("qst1").innerText = "veias";
			document.getElementById("qst2").innerText = "átrios";
			document.getElementById("qst3").innerText = "ventrículos";
			document.getElementById("qst4").innerText = "artérias";
			document.getElementById("qst5").innerText = "aurículos";
		break;

		case 15:
			document.getElementById("inpText").value = "Qual a doença sexualmente transmissível que virou surto no Brasil em 2017?";
			document.getElementById("qst1").innerText = "Febre amarela";
			document.getElementById("qst2").innerText = "Zika";
			document.getElementById("qst3").innerText = "Sífilis";
			document.getElementById("qst4").innerText = "Hepatite B";
			document.getElementById("qst5").innerText = "Candidíase";
		break;

		case 16:
			document.getElementById("inpText").value = "De quem é a famosa frase “Penso, logo existo”?";
			document.getElementById("qst1").innerText = "Platão";
			document.getElementById("qst2").innerText = "Galileu Galilei";
			document.getElementById("qst3").innerText = "Descartes";
			document.getElementById("qst4").innerText = "Sócrates";
			document.getElementById("qst5").innerText = "Francis Bacon";
		break;
			
		case 17:
			document.getElementById("inpText").value = "Quais o menor e o maior país do mundo?";
			document.getElementById("qst1").innerText = "Vaticano e Rússia";
			document.getElementById("qst2").innerText = "Nauru e China";
			document.getElementById("qst3").innerText = "Mônaco e Canadá";
			document.getElementById("qst4").innerText = "Malta e Estados Unidos";
			document.getElementById("qst5").innerText = "São Marino e Índia";
		break;
			
		case 18:
			document.getElementById("inpText").value = "Qual o nome do presidente do Brasil que ficou conhecido como Jango?";
			document.getElementById("qst1").innerText = "Jânio Quadros";
			document.getElementById("qst2").innerText = "Jacinto Anjos";
			document.getElementById("qst3").innerText = "Getúlio Vargas";
			document.getElementById("qst4").innerText = "João Figueiredo";
			document.getElementById("qst5").innerText = "João Goulart";
		break;
			
		case 19:
			document.getElementById("inpText").value = "Quais os países que têm a maior e a menor expectativa de vida do mundo?";
			document.getElementById("qst1").innerText = "Japão e Serra Leoa";
			document.getElementById("qst2").innerText = "Austrália e Afeganistão";
			document.getElementById("qst3").innerText = "Itália e Chade";
			document.getElementById("qst4").innerText = "Brasil e Congo";
			document.getElementById("qst5").innerText = "Estados Unidos e Angola";
		break;
			
		case 20:
			document.getElementById("inpText").value = "Em que período da pré-história o fogo foi descoberto?";
			document.getElementById("qst1").innerText = "Neolítico";
			document.getElementById("qst2").innerText = "Paleolítico";
			document.getElementById("qst3").innerText = "Idade dos Metais";
			document.getElementById("qst4").innerText = "Período da Pedra Polida";
			document.getElementById("qst5").innerText = "Idade Média";
		break;

		case 21:
			document.getElementById("inpText").value = "Qual a montanha mais alta do Brasil?";
			document.getElementById("qst1").innerText = "Pico da Neblina";
			document.getElementById("qst2").innerText = "Pico Paraná";
			document.getElementById("qst3").innerText = "Monte Roraima";
			document.getElementById("qst4").innerText = "Pico Maior de Friburgo";
			document.getElementById("qst5").innerText = "Pico da Bandeira";
		break;

		case 22: 
			document.getElementById("inpText").value = "Em qual local da Ásia o português é língua oficial?";
			document.getElementById("qst1").innerText = "Índia";
			document.getElementById("qst2").innerText = "Filipinas";
			document.getElementById("qst3").innerText = "Moçambique";
			document.getElementById("qst4").innerText = "Macau";
			document.getElementById("qst5").innerText = "Portugal";

		break;

		case 23:
			document.getElementById("inpText").value = "Qual destes países é transcontinental?";
			document.getElementById("qst1").innerText = "Rússia";
			document.getElementById("qst2").innerText = "Filipinas";
			document.getElementById("qst3").innerText = "Istambul";
			document.getElementById("qst4").innerText = "Groenlândia";
			document.getElementById("qst5").innerText = "Tanzânia";

		break;

		case 24:
			document.getElementById("inpText").value = "Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?";
			document.getElementById("qst1").innerText = "Igualdade das raças";
			document.getElementById("qst2").innerText = "Justiça para os menos favorecidos";
			document.getElementById("qst3").innerText = "Intolerância religiosa";
			document.getElementById("qst4").innerText = "Prêmio Nobel da Paz";
			document.getElementById("qst5").innerText = "Luta contra o Apartheid";

		break;

		case 25:
			document.getElementById("inpText").value = "Que líder mundial ficou conhecida como “Dama de Ferro”?";
			document.getElementById("qst1").innerText = "Dilma Rousseff";
			document.getElementById("qst2").innerText = "Angela Merkel";
			document.getElementById("qst3").innerText = "Margaret Thatcher";
			document.getElementById("qst4").innerText = "Hillary Clinton";
			document.getElementById("qst5").innerText = "Christine Lagarde";

		break;

		case 26:
			document.getElementById("inpText").value = "Qual a religião monoteísta que conta com o maior número de adeptos no mundo?";
			document.getElementById("qst1").innerText = "Judaísmo";
			document.getElementById("qst2").innerText = "Zoroastrismo";
			document.getElementById("qst3").innerText = "Islamismo";
			document.getElementById("qst4").innerText = "Cristianismo";
			document.getElementById("qst5").innerText = "Hinduísmo";
		break;
			
		case 27:
			document.getElementById("inpText").value = "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?";
			document.getElementById("qst1").innerText = "Yuri Gagarin, em 1961";
			document.getElementById("qst2").innerText = "Buzz Aldrin, em 1969";
			document.getElementById("qst3").innerText = "Charles Conrad, em 1969";
			document.getElementById("qst4").innerText = "Charles Duke, em 1971";
			document.getElementById("qst5").innerText = "Neil Armstrong, em 1969";
		break;
			
		case 28:
			document.getElementById("inpText").value = "Com que dois países faz fronteira o Equador?";
			document.getElementById("qst1").innerText = "com o Brasil e com a Colômbia";
			document.getElementById("qst2").innerText = "com a Colômbia e com a Venezuela";
			document.getElementById("qst3").innerText = "com a Colômbia e com o Peru";
			document.getElementById("qst4").innerText = "com o Peru e com o Equador";
			document.getElementById("qst5").innerText = "com o Equador e o Brasil";
		break;
			
		case 29:
			document.getElementById("inpText").value = "Qual é o maior arquipélago da Terra?";
			document.getElementById("qst1").innerText = "a Filipinas";
			document.getElementById("qst2").innerText = "a Indonésia";
			document.getElementById("qst3").innerText = "as Bahamas";
			document.getElementById("qst4").innerText = "a Finlândia";
			document.getElementById("qst5").innerText = "as Maldivas";
		break;
			
		case 30:
			document.getElementById("inpText").value = "Em que século o continente europeu foi devastado pela peste bubônica?";
			document.getElementById("qst1").innerText = "No século X";
			document.getElementById("qst2").innerText = "No século XI";
			document.getElementById("qst3").innerText = "No século XII";
			document.getElementById("qst4").innerText = "No século XIII";
			document.getElementById("qst5").innerText = "No século XIV";
		break;

		case 31:
			document.getElementById("inpText").value = "Qual o livro mais vendido no mundo a seguir à Bíblia?";
			document.getElementById("qst1").innerText = "O Senhor dos Anéis";
			document.getElementById("qst2").innerText = "Dom Quixote";
			document.getElementById("qst3").innerText = "O Pequeno Príncipe";
			document.getElementById("qst4").innerText = "Ela, a Feiticeira";
			document.getElementById("qst5").innerText = "Um Conto de Duas Cidades";
		break;

		case 32: 
			document.getElementById("inpText").value = "Quais os principais autores do Barroco no Brasil?";
			document.getElementById("qst1").innerText = "Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira";
			document.getElementById("qst2").innerText = "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri";
			document.getElementById("qst3").innerText = "Padre Antônio Vieira, Padre Manuel de Melo e Gregório de Matos";
			document.getElementById("qst4").innerText = "Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira";
			document.getElementById("qst5").innerText = "Álvares de Azevedo, Gregório de Matos e Bento Teixeira";
		break;

		case 33:
			document.getElementById("inpText").value = "Quem pintou Guernica?";
			document.getElementById("qst1").innerText = "Paul Cézanne";
			document.getElementById("qst2").innerText = "Pablo Picasso";
			document.getElementById("qst3").innerText = "Diego Rivera";
			document.getElementById("qst4").innerText = "Tarsila do Amaral";
			document.getElementById("qst5").innerText = "Salvador Dalí";
		break;

		case 34:
			document.getElementById("inpText").value = "Qual a tradução da frase “Fabiano cogió su saco antes de salir”?";
			document.getElementById("qst1").innerText = "Fabiano coseu seu paletó antes de sair";
			document.getElementById("qst2").innerText = "Fabiano fechou o saco antes de sair";
			document.getElementById("qst3").innerText = "Fabiano pegou seu paletó antes de sair";
			document.getElementById("qst4").innerText = "Fabiano cortou o saco antes de cair";
			document.getElementById("qst5").innerText = "Fabiano rasgou seu paletó antes de cair";
		break;

		case 35:
			document.getElementById("inpText").value = "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?";
			document.getElementById("qst1").innerText = "Caipora";
			document.getElementById("qst2").innerText = "Saci";
			document.getElementById("qst3").innerText = "Lobisomem";
			document.getElementById("qst4").innerText = "Boitatá";
			document.getElementById("qst5").innerText = "Negrinho do Pastoreio";
		break;

		case 36:
			document.getElementById("inpText").value = "Qual das alternativas abaixo apenas contêm classes de palavras?";
			document.getElementById("qst1").innerText = "Vogais, semivogais e consoantes";
			document.getElementById("qst2").innerText = "Artigo, verbo transitivo e verbo intransitivo";
			document.getElementById("qst3").innerText = "Fonologia, Morfologia e Sintaxe";
			document.getElementById("qst4").innerText = "Hiatos, ditongos e tritongos";
			document.getElementById("qst5").innerText = "Substantivo, verbo e preposição";
		break;
			
		case 37:
			document.getElementById("inpText").value = "Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?";
			document.getElementById("qst1").innerText = "Eu caibo";
			document.getElementById("qst2").innerText = "Ele cabe";
			document.getElementById("qst3").innerText = "Que eu caiba";
			document.getElementById("qst4").innerText = "Eu cabo";
			document.getElementById("qst5").innerText = "Nenhuma das alternativas";
		break;
			
		case 38:
			document.getElementById("inpText").value = "Em qual das orações abaixo a palavra foi empregada incorretamente?";
			document.getElementById("qst1").innerText = "Mais uma vez, portou-se mal";
			document.getElementById("qst2").innerText = "É um homem mal";
			document.getElementById("qst3").innerText = "Esse é o mal de todos";
			document.getElementById("qst4").innerText = "Mal falou nele, o fulano apareceu";
			document.getElementById("qst5").innerText = "É um mau vendedor";
		break;
			
		case 39:
			document.getElementById("inpText").value = "Qual desses filmes foi baseado na obra de Shakespeare?";
			document.getElementById("qst1").innerText = "Muito Barulho por Nada (2012)";
			document.getElementById("qst2").innerText = "Capitães de Areia (2011)";
			document.getElementById("qst3").innerText = "A Dama das Camélias (1936)";
			document.getElementById("qst4").innerText = "A Revolução dos Bichos (1954)";
			document.getElementById("qst5").innerText = "Excalibur (1981)";
		break;
			
		case 40:
			document.getElementById("inpText").value = "Que artista é conhecido como um dos expoentes máximos do Ready-Mades?";
			document.getElementById("qst1").innerText = "Pablo Picasso";
			document.getElementById("qst2").innerText = "Salvador Dalí";
			document.getElementById("qst3").innerText = "Marcel Duchamp";
			document.getElementById("qst4").innerText = "Van Gogh";
			document.getElementById("qst5").innerText = "Leonardo da Vinci";
		break;

		case 41:
			document.getElementById("inpText").value = "Quem foi o criador da tragédia grega?";
			document.getElementById("qst1").innerText = "Homero";
			document.getElementById("qst2").innerText = "Eurípedes";
			document.getElementById("qst3").innerText = "Plutarco";
			document.getElementById("qst4").innerText = "Ésquilo";
			document.getElementById("qst5").innerText = "Sófocles";
		break;

		case 42:
			document.getElementById("inpText").value = "O que a palavra legend significa em português?";
			document.getElementById("qst1").innerText = "Legenda";
			document.getElementById("qst2").innerText = "Conto";
			document.getElementById("qst3").innerText = "História";
			document.getElementById("qst4").innerText = "Lenda";
			document.getElementById("qst5").innerText = "Legendário";
		break;

		case 43: 
			document.getElementById("inpText").value = "“It is six twenty ou twenty past six”. Que horas são em inglês?";
			document.getElementById("qst1").innerText = "12:06";
			document.getElementById("qst2").innerText = "6:20";
			document.getElementById("qst3").innerText = "2:20";
			document.getElementById("qst4").innerText = "6:02";
			document.getElementById("qst5").innerText = "12:20";
		break;

		case 44:
			document.getElementById("inpText").value = "Qual era o nome de Aleijadinho?";
			document.getElementById("qst1").innerText = "Alexandrino Francisco Lisboa";
			document.getElementById("qst2").innerText = "Manuel Francisco Lisboa";
			document.getElementById("qst3").innerText = "Alex Francisco Lisboa";
			document.getElementById("qst4").innerText = "Francisco Antônio Lisboa";
			document.getElementById("qst5").innerText = "Antônio Francisco Lisboa";
		break;

		case 45:
			document.getElementById("inpText").value = "Qual o grupo em que todas as palavras foram escritas corretamente?";
			document.getElementById("qst1").innerText = "Asterístico, beneficiente, meteorologia, entertido";
			document.getElementById("qst2").innerText = "Asterisco, beneficente, meteorologia, entretido";
			document.getElementById("qst3").innerText = "Asterisco, beneficente, metereologia, entretido";
			document.getElementById("qst4").innerText = "Asterístico, beneficiente, metereologia, entretido";
			document.getElementById("qst5").innerText = "Asterisco, beneficiente, metereologia, entretido";

		break;

		case 46:
			document.getElementById("inpText").value = "Observe a expressão numérica: 15+34-93:3.(4+7) O que deve ser feito primeiro?";
			document.getElementById("qst1").innerText = "Adição (+)";
			document.getElementById("qst2").innerText = "Subtração (-)";
			document.getElementById("qst3").innerText = "Divisão (:)";
			document.getElementById("qst4").innerText = "Parênteses";
			document.getElementById("qst5").innerText = "Multiplicação(x)";

		break;

		case 47:
			document.getElementById("inpText").value = "Qual dos números a seguir NÃO é um número primo?";
			document.getElementById("qst1").innerText = "2";
			document.getElementById("qst2").innerText = "5";
			document.getElementById("qst3").innerText = "9";
			document.getElementById("qst4").innerText = "3";
			document.getElementById("qst5").innerText = "7";

		break;
			
		case 48:
			document.getElementById("inpText").value = "Quanto é 1/3 de 603?";
			document.getElementById("qst1").innerText = "104";
			document.getElementById("qst2").innerText = "201";
			document.getElementById("qst3").innerText = "402";
			document.getElementById("qst4").innerText = "301";
			document.getElementById("qst5").innerText = "302";

		break;
			
		case 49:
			document.getElementById("inpText").value = "Leandro tem 40 balas chupou 12 e deu 10 para sua irmã. Com quantas balas ele ficou?";
			document.getElementById("qst1").innerText = "15";
			document.getElementById("qst2").innerText = "18";
			document.getElementById("qst3").innerText = "14";
			document.getElementById("qst4").innerText = "16";
			document.getElementById("qst5").innerText = "13";
		break;
			
		case 50:
			document.getElementById("inpText").value = "Quantos números 1 eu tenho de 1 até 191?";
			document.getElementById("qst1").innerText = "140";
			document.getElementById("qst2").innerText = "136";
			document.getElementById("qst3").innerText = "132";
			document.getElementById("qst4").innerText = "150";
			document.getElementById("qst5").innerText = "126";
		break;
			
		case 51:
			document.getElementById("inpText").value = "Pedro tem 30 anos e tem mais três irmãos: Bianca de 27, Victor de 23 e Alex de 18. Qual a diferença de idade entre Pedro e irmão caçula?";
			document.getElementById("qst1").innerText = "13";
			document.getElementById("qst2").innerText = "11";
			document.getElementById("qst3").innerText = "12";
			document.getElementById("qst4").innerText = "14";
			document.getElementById("qst5").innerText = "16";
		break;

		case 52:
			document.getElementById("inpText").value = "Andando por uma rua, um homem conta 10 árvores à sua direita. Na volta, conta 10 árvores à sua esquerda. Quantas árvores ele viu no total?";
			document.getElementById("qst1").innerText = "10";
			document.getElementById("qst2").innerText = "20";
			document.getElementById("qst3").innerText = "30";
			document.getElementById("qst4").innerText = "40";
			document.getElementById("qst5").innerText = "50";
		break;

		case 53: 
			document.getElementById("inpText").value = "Em uma igreja havia 4 velas. Entraram 2 ladrões e cada um levou uma vela. Quantas velas ficaram?";
			document.getElementById("qst1").innerText = "2";
			document.getElementById("qst2").innerText = "4";
			document.getElementById("qst3").innerText = "5";
			document.getElementById("qst4").innerText = "6";
			document.getElementById("qst5").innerText = "8";
		break;

		case 54:
			document.getElementById("inpText").value = "Ganhei 100 balas. Dei 20 para Gabi e 10 para Bela. Com quantas balas fiquei?";
			document.getElementById("qst1").innerText = "60";
			document.getElementById("qst2").innerText = "84";
			document.getElementById("qst3").innerText = "70";
			document.getElementById("qst4").innerText = "30";
			document.getElementById("qst5").innerText = "49";
		break;

		case 55:
			document.getElementById("inpText").value = "Qual é a metade de 65?";
			document.getElementById("qst1").innerText = "32,5";
			document.getElementById("qst2").innerText = "45";
			document.getElementById("qst3").innerText = "26";
			document.getElementById("qst4").innerText = "8";
			document.getElementById("qst5").innerText = "30";
		break;

		case 56:
			document.getElementById("inpText").value = "Qual é o antecesor de 659?";
			document.getElementById("qst1").innerText = "660";
			document.getElementById("qst2").innerText = "649";
			document.getElementById("qst3").innerText = "600";
			document.getElementById("qst4").innerText = "657";
			document.getElementById("qst5").innerText = "658";
		break;

		case 57:
			document.getElementById("inpText").value = "Em matemática, faces são:";
			document.getElementById("qst1").innerText = "todos os números maiores que 1000";
			document.getElementById("qst2").innerText = "todos os números que possuem raiz quadrada";
			document.getElementById("qst3").innerText = "os polígonos que delimitam um sólido";
			document.getElementById("qst4").innerText = "todas as figuras quadradas ou retangulares";
			document.getElementById("qst5").innerText = "quaisquer objetos em formato de cone";
		break;
			
		case 58:
			document.getElementById("inpText").value = "O que é um compasso?";
			document.getElementById("qst1").innerText = "instrumento usado para medir passos";
			document.getElementById("qst2").innerText = "é uma trena com aproximadamente 3 metros de comprimento";
			document.getElementById("qst3").innerText = "instrumento de desenho usado para traçar circunferências";
			document.getElementById("qst4").innerText = "um relógio analógico antigo";
			document.getElementById("qst5").innerText = "um medidor de pressão arterial";
		break;
			
		case 59:
			document.getElementById("inpText").value = "Figuras congruentes são aquelas que...";
			document.getElementById("qst1").innerText = "possuem a mesma forma e a mesma medida";
			document.getElementById("qst2").innerText = "possuem formato cilíndrico";
			document.getElementById("qst3").innerText = "possuem todas as medidas diferentes";
			document.getElementById("qst4").innerText = "possuem ângulos retos";
			document.getElementById("qst5").innerText = "são tridimensionais";
		break;
			
		case 60:
			document.getElementById("inpText").value = "A operação inversa da potenciação é a:";
			document.getElementById("qst1").innerText = "adição";
			document.getElementById("qst2").innerText = "divisão";
			document.getElementById("qst3").innerText = "radiciação";
			document.getElementById("qst4").innerText = "subtração";
			document.getElementById("qst5").innerText = "multiplicação";
		break;				
	}
}

AUX = 0;

function jg(u) {
	
	if (AUX == 0) {
		K = quest(u);
		op();
	}
}

function op() {
	if ((Q != 0) || (AUX == 0)) {
		desmarcar();
		buscar(K[AUX]);
		AUX++;
		
		if (AUX == (K.length)) {
			document.getElementById("btnPro").style.display = 'none';
			document.getElementById("btnEnv").style.display = 'inline';	
		} else {
			document.getElementById("btnPro").style.display = 'inline';
			document.getElementById("btnEnv").style.display = 'none';
		}	
		
		if(AUX == 0) {
			document.querySelector(".div_quest").style.display = 'none';
			document.querySelector('.div_opc').style.display = 'inline';

		} else {
			document.querySelector('.div_quest').style.display = 'inline';
			document.querySelector('.div_opc').style.display = 'none';
		}
	} else {
		alert("Selecione uma das opções abaixo");
	}	
}

function fim() {

	if (Q != 0){

		AUX++;
		document.getElementById("fim").style.display = 'inline';
		document.querySelector(".div_quest").style.display = 'none';

	} else {
		alert("Selecione uma das opções abaixo");
	}
}

function ini(){
	AUX = 0;
	ACERTOS = 0;
	ERROS = 0;
	PONTOS = 0;
	desmarcar();
	document.getElementById("fim").style.display = 'none';
	document.querySelector(".div_quest").style.display = 'none';
	document.querySelector(".div_opc").style.display = 'inline';
}

Q = 0;

function qst(m) {
	Q = m;
}

var G = [2,4,4,5,4,3,3,3,3,3,5,4,3,4,3,3,1,5,1,2,1,4,1,1,3,4,5,3,2,5,2,1,2,3,1,5,1,2,1,3,4,4,2,5,2,4,3,2,2,3,3,1,4,3,1,5,3,3,1,3];

valUniPontos = 5;

PONTOS = 0;

ACERTOS = 0;

ERROS = 0;

function co() {

	if (Q != 0) {

		if ((G[((K[AUX-2])-1)]) == Q) {
			PONTOS += valUniPontos;
			ACERTOS++;
		} else {
			ERROS++;
		}

		if (ACERTOS >= ((K.length) / 2)) {
			document.getElementById("agra").value = "PARABÉNS";
		} else {
			document.getElementById("agra").value = "SE ESFORCE MAIS";
		}


		document.getElementById("inAcer").value = ACERTOS;
		document.getElementById("inErr").value = ERROS;
		document.getElementById("inPont").value = PONTOS;

		Q = 0;	
	}
}

function desmarcar() {
	document.getElementById("rad1").checked = false;
	document.getElementById("rad2").checked = false;
	document.getElementById("rad3").checked = false;
	document.getElementById("rad4").checked = false;
	document.getElementById("rad5").checked = false;
}