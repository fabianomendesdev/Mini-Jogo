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
			document.getElementById("qst1").value = "Tem entre 2 a 4 litros. São retirados 450 mililitros";
			document.getElementById("qst2").value = "Tem entre 4 a 6 litros. São retirados 450 mililitros";
			document.getElementById("qst3").value = "Tem 10 litros. São retirados 2 litros";
			document.getElementById("qst4").value = "Tem 7 litros. São retirados 1,5 litros";
			document.getElementById("qst5").value = "Tem 0,5 litros. São retirados 0,5 litros";
		break;

		case 2: 
			document.getElementById("inpText").value = "Atualmente, quantos elementos químicos a tabela periódica possui?";
			document.getElementById("qst1").value = "113";
			document.getElementById("qst2").value = "109";
			document.getElementById("qst3").value = "108";
			document.getElementById("qst4").value = "118";
			document.getElementById("qst5").value = "92";
		break;

		case 3:
			document.getElementById("inpText").value = "Quanto tempo a luz do Sol demora para chegar à Terra?";
			document.getElementById("qst1").value = "12 minutos";
			document.getElementById("qst2").value = "1 dia";
			document.getElementById("qst3").value = "12 horas";
			document.getElementById("qst4").value = "8 minutos";
			document.getElementById("qst5").value = "segundos";
		break;

		case 4:
			document.getElementById("inpText").value = "Em que ordem surgiram os modelos atômicos?";
			document.getElementById("qst1").value = "Thomson, Dalton, Rutherford, Rutherford-Bohr";
			document.getElementById("qst2").value = "Rutherford-Bohr, Rutherford, Thomson, Dalton";
			document.getElementById("qst3").value = "Dalton, Rutherford-Bohr, Thomson, Rutherford";
			document.getElementById("qst4").value = "Dalton, Thomson, Rutherford-Bohr, Rutherford";
			document.getElementById("qst5").value = "Dalton, Thomson, Rutherford, Rutherford-Bohr";
		break;

		case 5:
			document.getElementById("inpText").value = "Qual a velocidade da luz?";
			document.getElementById("qst1").value = "300 000 000 metros por segundo (m/s)";
			document.getElementById("qst2").value = "150 000 000 metros por segundo (m/s)";
			document.getElementById("qst3").value = "199 792 458 metros por segundo (m/s)";
			document.getElementById("qst4").value = "299 792 458 metros por segundo (m/s)";
			document.getElementById("qst5").value = "30 000 000 metros por segundo (m/s)";
		break;

		case 6:
			document.getElementById("inpText").value = "Quais destas doenças são sexualmente transmissíveis?";
			document.getElementById("qst1").value = "Aids, tricomoníase e ebola";
			document.getElementById("qst2").value = "Chikungunya, aids e herpes genita";
			document.getElementById("qst3").value = "Gonorreia, clamídia e sífilis";
			document.getElementById("qst4").value = "Botulismo, cistite e gonorreia";
			document.getElementById("qst5").value = "Hepatite B, febre tifoide e hanseníase";
		break;
			
		case 7:
			document.getElementById("inpText").value = "As pessoas de qual tipo sanguíneo são consideradas doadores universais?";
			document.getElementById("qst1").value = "Tipo A";
			document.getElementById("qst2").value = "Tipo B";
			document.getElementById("qst3").value = "Tipo O";
			document.getElementById("qst4").value = "Tipo AB";
			document.getElementById("qst5").value = "Tipo ABO";
		break;
			
		case 8:
			document.getElementById("inpText").value = "Qual o maior animal terrestre?";
			document.getElementById("qst1").value = "Baleia Azul";
			document.getElementById("qst2").value = "Dinossauro";
			document.getElementById("qst3").value = "Elefante africano";
			document.getElementById("qst4").value = "Tubarão Branco";
			document.getElementById("qst5").value = "Girafa";
		break;
			
		case 9:
			document.getElementById("inpText").value = "Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?";
			document.getElementById("qst1").value = "Marie Curie";
			document.getElementById("qst2").value = "Blaise Pascal";
			document.getElementById("qst3").value = "Louis Pasteur";
			document.getElementById("qst4").value = "Antoine Lavoisier";
			document.getElementById("qst5").value = "Charles Darwin";
		break;
			
		case 10:
			document.getElementById("inpText").value = "Quais são os cromossomos que determinam o sexo masculino?";
			document.getElementById("qst1").value = "Os V";
			document.getElementById("qst2").value = "Os X";
			document.getElementById("qst3").value = "Os Y";
			document.getElementById("qst4").value = "Os W";
			document.getElementById("qst5").value = "Os Z";
		break;

		case 11:
			document.getElementById("inpText").value = "Que substância é absorvida pelas plantas e expirada por todos os seres vivos?";
			document.getElementById("qst1").value = "o oxigênio";
			document.getElementById("qst2").value = "o nitrogênio";
			document.getElementById("qst3").value = "o nitrato de sódio";
			document.getElementById("qst4").value = "o dióxido de ferro";
			document.getElementById("qst5").value = "o dióxido de carbono";
		break;

		case 12: 
			document.getElementById("inpText").value = "Qual o metal cujo símbolo químico é o Au?";
			document.getElementById("qst1").value = "Cobre";
			document.getElementById("qst2").value = "Prata";
			document.getElementById("qst3").value = "Mercúrio";
			document.getElementById("qst4").value = "Ouro";
			document.getElementById("qst5").value = "Manganês";
		break;

		case 13:
			document.getElementById("inpText").value = "Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:";
			document.getElementById("qst1").value = "Tubarão branco, crocodilo e sucuri";
			document.getElementById("qst2").value = "Tigre, gavião e orca";
			document.getElementById("qst3").value = "Hiena, urso branco e lobo cinzento";
			document.getElementById("qst4").value = "Orca, onça e tarântula";
			document.getElementById("qst5").value = "Leão, tubarão branco e urso cinzento";
		break;

		case 14:
			document.getElementById("inpText").value = "Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?";
			document.getElementById("qst1").value = "veias";
			document.getElementById("qst2").value = "átrios";
			document.getElementById("qst3").value = "ventrículos";
			document.getElementById("qst4").value = "artérias";
			document.getElementById("qst5").value = "aurículos";
		break;

		case 15:
			document.getElementById("inpText").value = "Qual a doença sexualmente transmissível que virou surto no Brasil em 2017?";
			document.getElementById("qst1").value = "Febre amarela";
			document.getElementById("qst2").value = "Zika";
			document.getElementById("qst3").value = "Sífilis";
			document.getElementById("qst4").value = "Hepatite B";
			document.getElementById("qst5").value = "Candidíase";
		break;

		case 16:
			document.getElementById("inpText").value = "De quem é a famosa frase “Penso, logo existo”?";
			document.getElementById("qst1").value = "Platão";
			document.getElementById("qst2").value = "Galileu Galilei";
			document.getElementById("qst3").value = "Descartes";
			document.getElementById("qst4").value = "Sócrates";
			document.getElementById("qst5").value = "Francis Bacon";
		break;
			
		case 17:
			document.getElementById("inpText").value = "Quais o menor e o maior país do mundo?";
			document.getElementById("qst1").value = "Vaticano e Rússia";
			document.getElementById("qst2").value = "Nauru e China";
			document.getElementById("qst3").value = "Mônaco e Canadá";
			document.getElementById("qst4").value = "Malta e Estados Unidos";
			document.getElementById("qst5").value = "São Marino e Índia";
		break;
			
		case 18:
			document.getElementById("inpText").value = "Qual o nome do presidente do Brasil que ficou conhecido como Jango?";
			document.getElementById("qst1").value = "Jânio Quadros";
			document.getElementById("qst2").value = "Jacinto Anjos";
			document.getElementById("qst3").value = "Getúlio Vargas";
			document.getElementById("qst4").value = "João Figueiredo";
			document.getElementById("qst5").value = "João Goulart";
		break;
			
		case 19:
			document.getElementById("inpText").value = "Quais os países que têm a maior e a menor expectativa de vida do mundo?";
			document.getElementById("qst1").value = "Japão e Serra Leoa";
			document.getElementById("qst2").value = "Austrália e Afeganistão";
			document.getElementById("qst3").value = "Itália e Chade";
			document.getElementById("qst4").value = "Brasil e Congo";
			document.getElementById("qst5").value = "Estados Unidos e Angola";
		break;
			
		case 20:
			document.getElementById("inpText").value = "Em que período da pré-história o fogo foi descoberto?";
			document.getElementById("qst1").value = "Neolítico";
			document.getElementById("qst2").value = "Paleolítico";
			document.getElementById("qst3").value = "Idade dos Metais";
			document.getElementById("qst4").value = "Período da Pedra Polida";
			document.getElementById("qst5").value = "Idade Média";
		break;

		case 21:
			document.getElementById("inpText").value = "Qual a montanha mais alta do Brasil?";
			document.getElementById("qst1").value = "Pico da Neblina";
			document.getElementById("qst2").value = "Pico Paraná";
			document.getElementById("qst3").value = "Monte Roraima";
			document.getElementById("qst4").value = "Pico Maior de Friburgo";
			document.getElementById("qst5").value = "Pico da Bandeira";
		break;

		case 22: 
			document.getElementById("inpText").value = "Em qual local da Ásia o português é língua oficial?";
			document.getElementById("qst1").value = "Índia";
			document.getElementById("qst2").value = "Filipinas";
			document.getElementById("qst3").value = "Moçambique";
			document.getElementById("qst4").value = "Macau";
			document.getElementById("qst5").value = "Portugal";

		break;

		case 23:
			document.getElementById("inpText").value = "Qual destes países é transcontinental?";
			document.getElementById("qst1").value = "Rússia";
			document.getElementById("qst2").value = "Filipinas";
			document.getElementById("qst3").value = "Istambul";
			document.getElementById("qst4").value = "Groenlândia";
			document.getElementById("qst5").value = "Tanzânia";

		break;

		case 24:
			document.getElementById("inpText").value = "Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?";
			document.getElementById("qst1").value = "Igualdade das raças";
			document.getElementById("qst2").value = "Justiça para os menos favorecidos";
			document.getElementById("qst3").value = "Intolerância religiosa";
			document.getElementById("qst4").value = "Prêmio Nobel da Paz";
			document.getElementById("qst5").value = "Luta contra o Apartheid";

		break;

		case 25:
			document.getElementById("inpText").value = "Que líder mundial ficou conhecida como “Dama de Ferro”?";
			document.getElementById("qst1").value = "Dilma Rousseff";
			document.getElementById("qst2").value = "Angela Merkel";
			document.getElementById("qst3").value = "Margaret Thatcher";
			document.getElementById("qst4").value = "Hillary Clinton";
			document.getElementById("qst5").value = "Christine Lagarde";

		break;

		case 26:
			document.getElementById("inpText").value = "Qual a religião monoteísta que conta com o maior número de adeptos no mundo?";
			document.getElementById("qst1").value = "Judaísmo";
			document.getElementById("qst2").value = "Zoroastrismo";
			document.getElementById("qst3").value = "Islamismo";
			document.getElementById("qst4").value = "Cristianismo";
			document.getElementById("qst5").value = "Hinduísmo";
		break;
			
		case 27:
			document.getElementById("inpText").value = "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?";
			document.getElementById("qst1").value = "Yuri Gagarin, em 1961";
			document.getElementById("qst2").value = "Buzz Aldrin, em 1969";
			document.getElementById("qst3").value = "Charles Conrad, em 1969";
			document.getElementById("qst4").value = "Charles Duke, em 1971";
			document.getElementById("qst5").value = "Neil Armstrong, em 1969";
		break;
			
		case 28:
			document.getElementById("inpText").value = "Com que dois países faz fronteira o Equador?";
			document.getElementById("qst1").value = "com o Brasil e com a Colômbia";
			document.getElementById("qst2").value = "com a Colômbia e com a Venezuela";
			document.getElementById("qst3").value = "com a Colômbia e com o Peru";
			document.getElementById("qst4").value = "com o Peru e com o Equador";
			document.getElementById("qst5").value = "com o Equador e o Brasil";
		break;
			
		case 29:
			document.getElementById("inpText").value = "Qual é o maior arquipélago da Terra?";
			document.getElementById("qst1").value = "a Filipinas";
			document.getElementById("qst2").value = "a Indonésia";
			document.getElementById("qst3").value = "as Bahamas";
			document.getElementById("qst4").value = "a Finlândia";
			document.getElementById("qst5").value = "as Maldivas";
		break;
			
		case 30:
			document.getElementById("inpText").value = "Em que século o continente europeu foi devastado pela peste bubônica?";
			document.getElementById("qst1").value = "No século X";
			document.getElementById("qst2").value = "No século XI";
			document.getElementById("qst3").value = "No século XII";
			document.getElementById("qst4").value = "No século XIII";
			document.getElementById("qst5").value = "No século XIV";
		break;

		case 31:
			document.getElementById("inpText").value = "Qual o livro mais vendido no mundo a seguir à Bíblia?";
			document.getElementById("qst1").value = "O Senhor dos Anéis";
			document.getElementById("qst2").value = "Dom Quixote";
			document.getElementById("qst3").value = "O Pequeno Príncipe";
			document.getElementById("qst4").value = "Ela, a Feiticeira";
			document.getElementById("qst5").value = "Um Conto de Duas Cidades";
		break;

		case 32: 
			document.getElementById("inpText").value = "Quais os principais autores do Barroco no Brasil?";
			document.getElementById("qst1").value = "Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira";
			document.getElementById("qst2").value = "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri";
			document.getElementById("qst3").value = "Padre Antônio Vieira, Padre Manuel de Melo e Gregório de Matos";
			document.getElementById("qst4").value = "Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira";
			document.getElementById("qst5").value = "Álvares de Azevedo, Gregório de Matos e Bento Teixeira";
		break;

		case 33:
			document.getElementById("inpText").value = "Quem pintou Guernica?";
			document.getElementById("qst1").value = "Paul Cézanne";
			document.getElementById("qst2").value = "Pablo Picasso";
			document.getElementById("qst3").value = "Diego Rivera";
			document.getElementById("qst4").value = "Tarsila do Amaral";
			document.getElementById("qst5").value = "Salvador Dalí";
		break;

		case 34:
			document.getElementById("inpText").value = "Qual a tradução da frase “Fabiano cogió su saco antes de salir”?";
			document.getElementById("qst1").value = "Fabiano coseu seu paletó antes de sair";
			document.getElementById("qst2").value = "Fabiano fechou o saco antes de sair";
			document.getElementById("qst3").value = "Fabiano pegou seu paletó antes de sair";
			document.getElementById("qst4").value = "Fabiano cortou o saco antes de cair";
			document.getElementById("qst5").value = "Fabiano rasgou seu paletó antes de cair";
		break;

		case 35:
			document.getElementById("inpText").value = "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?";
			document.getElementById("qst1").value = "Caipora";
			document.getElementById("qst2").value = "Saci";
			document.getElementById("qst3").value = "Lobisomem";
			document.getElementById("qst4").value = "Boitatá";
			document.getElementById("qst5").value = "Negrinho do Pastoreio";
		break;

		case 36:
			document.getElementById("inpText").value = "Qual das alternativas abaixo apenas contêm classes de palavras?";
			document.getElementById("qst1").value = "Vogais, semivogais e consoantes";
			document.getElementById("qst2").value = "Artigo, verbo transitivo e verbo intransitivo";
			document.getElementById("qst3").value = "Fonologia, Morfologia e Sintaxe";
			document.getElementById("qst4").value = "Hiatos, ditongos e tritongos";
			document.getElementById("qst5").value = "Substantivo, verbo e preposição";
		break;
			
		case 37:
			document.getElementById("inpText").value = "Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?";
			document.getElementById("qst1").value = "Eu caibo";
			document.getElementById("qst2").value = "Ele cabe";
			document.getElementById("qst3").value = "Que eu caiba";
			document.getElementById("qst4").value = "Eu cabo";
			document.getElementById("qst5").value = "Nenhuma das alternativas";
		break;
			
		case 38:
			document.getElementById("inpText").value = "Em qual das orações abaixo a palavra foi empregada incorretamente?";
			document.getElementById("qst1").value = "Mais uma vez, portou-se mal";
			document.getElementById("qst2").value = "É um homem mal";
			document.getElementById("qst3").value = "Esse é o mal de todos";
			document.getElementById("qst4").value = "Mal falou nele, o fulano apareceu";
			document.getElementById("qst5").value = "É um mau vendedor";
		break;
			
		case 39:
			document.getElementById("inpText").value = "Qual desses filmes foi baseado na obra de Shakespeare?";
			document.getElementById("qst1").value = "Muito Barulho por Nada (2012)";
			document.getElementById("qst2").value = "Capitães de Areia (2011)";
			document.getElementById("qst3").value = "A Dama das Camélias (1936)";
			document.getElementById("qst4").value = "A Revolução dos Bichos (1954)";
			document.getElementById("qst5").value = "Excalibur (1981)";
		break;
			
		case 40:
			document.getElementById("inpText").value = "Que artista é conhecido como um dos expoentes máximos do Ready-Mades?";
			document.getElementById("qst1").value = "Pablo Picasso";
			document.getElementById("qst2").value = "Salvador Dalí";
			document.getElementById("qst3").value = "Marcel Duchamp";
			document.getElementById("qst4").value = "Van Gogh";
			document.getElementById("qst5").value = "Leonardo da Vinci";
		break;

		case 41:
			document.getElementById("inpText").value = "Quem foi o criador da tragédia grega?";
			document.getElementById("qst1").value = "Homero";
			document.getElementById("qst2").value = "Eurípedes";
			document.getElementById("qst3").value = "Plutarco";
			document.getElementById("qst4").value = "Ésquilo";
			document.getElementById("qst5").value = "Sófocles";
		break;

		case 42:
			document.getElementById("inpText").value = "O que a palavra legend significa em português?";
			document.getElementById("qst1").value = "Legenda";
			document.getElementById("qst2").value = "Conto";
			document.getElementById("qst3").value = "História";
			document.getElementById("qst4").value = "Lenda";
			document.getElementById("qst5").value = "Legendário";
		break;

		case 43: 
			document.getElementById("inpText").value = "“It is six twenty ou twenty past six”. Que horas são em inglês?";
			document.getElementById("qst1").value = "12:06";
			document.getElementById("qst2").value = "6:20";
			document.getElementById("qst3").value = "2:20";
			document.getElementById("qst4").value = "6:02";
			document.getElementById("qst5").value = "12:20";
		break;

		case 44:
			document.getElementById("inpText").value = "Qual era o nome de Aleijadinho?";
			document.getElementById("qst1").value = "Alexandrino Francisco Lisboa";
			document.getElementById("qst2").value = "Manuel Francisco Lisboa";
			document.getElementById("qst3").value = "Alex Francisco Lisboa";
			document.getElementById("qst4").value = "Francisco Antônio Lisboa";
			document.getElementById("qst5").value = "Antônio Francisco Lisboa";
		break;

		case 45:
			document.getElementById("inpText").value = "Qual o grupo em que todas as palavras foram escritas corretamente?";
			document.getElementById("qst1").value = "Asterístico, beneficiente, meteorologia, entertido";
			document.getElementById("qst2").value = "Asterisco, beneficente, meteorologia, entretido";
			document.getElementById("qst3").value = "Asterisco, beneficente, metereologia, entretido";
			document.getElementById("qst4").value = "Asterístico, beneficiente, metereologia, entretido";
			document.getElementById("qst5").value = "Asterisco, beneficiente, metereologia, entretido";

		break;

		case 46:
			document.getElementById("inpText").value = "Observe a expressão numérica: 15+34-93:3.(4+7) O que deve ser feito primeiro?";
			document.getElementById("qst1").value = "Adição (+)";
			document.getElementById("qst2").value = "Subtração (-)";
			document.getElementById("qst3").value = "Divisão (:)";
			document.getElementById("qst4").value = "Parênteses";
			document.getElementById("qst5").value = "Multiplicação(x)";

		break;

		case 47:
			document.getElementById("inpText").value = "Qual dos números a seguir NÃO é um número primo?";
			document.getElementById("qst1").value = "2";
			document.getElementById("qst2").value = "5";
			document.getElementById("qst3").value = "9";
			document.getElementById("qst4").value = "3";
			document.getElementById("qst5").value = "7";

		break;
			
		case 48:
			document.getElementById("inpText").value = "Quanto é 1/3 de 603?";
			document.getElementById("qst1").value = "104";
			document.getElementById("qst2").value = "201";
			document.getElementById("qst3").value = "402";
			document.getElementById("qst4").value = "301";
			document.getElementById("qst5").value = "302";

		break;
			
		case 49:
			document.getElementById("inpText").value = "Leandro tem 40 balas chupou 12 e deu 10 para sua irmã. Com quantas balas ele ficou?";
			document.getElementById("qst1").value = "15";
			document.getElementById("qst2").value = "18";
			document.getElementById("qst3").value = "14";
			document.getElementById("qst4").value = "16";
			document.getElementById("qst5").value = "13";
		break;
			
		case 50:
			document.getElementById("inpText").value = "Quantos números 1 eu tenho de 1 até 191?";
			document.getElementById("qst1").value = "140";
			document.getElementById("qst2").value = "136";
			document.getElementById("qst3").value = "132";
			document.getElementById("qst4").value = "150";
			document.getElementById("qst5").value = "126";
		break;
			
		case 51:
			document.getElementById("inpText").value = "Pedro tem 30 anos e tem mais três irmãos: Bianca de 27, Victor de 23 e Alex de 18. Qual a diferença de idade entre Pedro e irmão caçula?";
			document.getElementById("qst1").value = "13";
			document.getElementById("qst2").value = "11";
			document.getElementById("qst3").value = "12";
			document.getElementById("qst4").value = "14";
			document.getElementById("qst5").value = "16";
		break;

		case 52:
			document.getElementById("inpText").value = "Andando por uma rua, um homem conta 10 árvores à sua direita. Na volta, conta 10 árvores à sua esquerda. Quantas árvores ele viu no total?";
			document.getElementById("qst1").value = "10";
			document.getElementById("qst2").value = "20";
			document.getElementById("qst3").value = "30";
			document.getElementById("qst4").value = "40";
			document.getElementById("qst5").value = "50";
		break;

		case 53: 
			document.getElementById("inpText").value = "Em uma igreja havia 4 velas. Entraram 2 ladrões e cada um levou uma vela. Quantas velas ficaram?";
			document.getElementById("qst1").value = "2";
			document.getElementById("qst2").value = "4";
			document.getElementById("qst3").value = "5";
			document.getElementById("qst4").value = "6";
			document.getElementById("qst5").value = "8";
		break;

		case 54:
			document.getElementById("inpText").value = "Ganhei 100 balas. Dei 20 para Gabi e 10 para Bela. Com quantas balas fiquei?";
			document.getElementById("qst1").value = "60";
			document.getElementById("qst2").value = "84";
			document.getElementById("qst3").value = "70";
			document.getElementById("qst4").value = "30";
			document.getElementById("qst5").value = "49";
		break;

		case 55:
			document.getElementById("inpText").value = "Qual é a metade de 65?";
			document.getElementById("qst1").value = "32,5";
			document.getElementById("qst2").value = "45";
			document.getElementById("qst3").value = "26";
			document.getElementById("qst4").value = "8";
			document.getElementById("qst5").value = "30";
		break;

		case 56:
			document.getElementById("inpText").value = "Qual é o antecesor de 659?";
			document.getElementById("qst1").value = "660";
			document.getElementById("qst2").value = "649";
			document.getElementById("qst3").value = "600";
			document.getElementById("qst4").value = "657";
			document.getElementById("qst5").value = "658";
		break;

		case 57:
			document.getElementById("inpText").value = "Em matemática, faces são:";
			document.getElementById("qst1").value = "todos os números maiores que 1000";
			document.getElementById("qst2").value = "todos os números que possuem raiz quadrada";
			document.getElementById("qst3").value = "os polígonos que delimitam um sólido";
			document.getElementById("qst4").value = "todas as figuras quadradas ou retangulares";
			document.getElementById("qst5").value = "quaisquer objetos em formato de cone";
		break;
			
		case 58:
			document.getElementById("inpText").value = "O que é um compasso?";
			document.getElementById("qst1").value = "instrumento usado para medir passos";
			document.getElementById("qst2").value = "é uma trena com aproximadamente 3 metros de comprimento";
			document.getElementById("qst3").value = "instrumento de desenho usado para traçar circunferências";
			document.getElementById("qst4").value = "um relógio analógico antigo";
			document.getElementById("qst5").value = "um medidor de pressão arterial";
		break;
			
		case 59:
			document.getElementById("inpText").value = "Figuras congruentes são aquelas que...";
			document.getElementById("qst1").value = "possuem a mesma forma e a mesma medida";
			document.getElementById("qst2").value = "possuem formato cilíndrico";
			document.getElementById("qst3").value = "possuem todas as medidas diferentes";
			document.getElementById("qst4").value = "possuem ângulos retos";
			document.getElementById("qst5").value = "são tridimensionais";
		break;
			
		case 60:
			document.getElementById("inpText").value = "A operação inversa da potenciação é a:";
			document.getElementById("qst1").value = "adição";
			document.getElementById("qst2").value = "divisão";
			document.getElementById("qst3").value = "radiciação";
			document.getElementById("qst4").value = "subtração";
			document.getElementById("qst5").value = "multiplicação";
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
			document.getElementById("div_quest").style.display = 'none';
			document.getElementById("div_opc").style.display = 'inline';

		} else {
			document.getElementById("div_quest").style.display = 'inline';
			document.getElementById("div_opc").style.display = 'none';
		}
	} else {
		alert("Selecione uma das opções abaixo");
	}	
}

function fim() {

	if (Q != 0){

		AUX++;
		document.getElementById("fim").style.display = 'inline';
		document.getElementById("div_quest").style.display = 'none';

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
	document.getElementById("div_quest").style.display = 'none';
	document.getElementById("div_opc").style.display = 'inline';
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