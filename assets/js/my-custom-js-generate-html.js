function generateHtmlElements(array, elementType, parentId, addOrdinalNumbers = false) {
    const parentElement = document.getElementById(parentId);

    array.forEach((data, index) => {
        const element = document.createElement(elementType);
        if (addOrdinalNumbers) {
            element.textContent = `${index + 1}°: ${data}`;
        } else {
            element.textContent = data;
        }
        parentElement.appendChild(element);
    });
}

generateHtmlElements([
    "No dia 23 de novembro de 1959, com apenas 5 anos, foi quando tudo começou. Meu tio Nivaldo Rezende faixa amarela de judô treinava sob as orientações do Prof. Durval Simas na Rua Dias da Cruz no Méier e namorava minha tia Helena, nós morávamos no Engenho Novo e quando Nivaldo chegava do quartel com o judogui enrolado naquela faixa amarela eu ficava pedindo que nos levasse para treinar eu e meu irmão Hamilton.",
    "Foi então em um belo dia que meu tio trouxe uma lona de caminhão e estendeu na grama do nosso quintal e assim começou a me ensinar os primeiros rolamentos e na semana seguinte nos levou para treinar com o professor Simas já situado na ACM do Méier no Engenho de Dentro, foi o dia mais feliz da minha vida.",
    "Depois disto, já com a faixa verde, Nivaldo passou a me levar nas Academias do Prof. Hernany e Prof. Medih onde conheci grandes ícones do judô. Já depois de um certo tempo com 20 anos e faixa marrom passei a participar dos Campeonatos da Budokan em São Paulo pela academia Cordeiro.",
    "Em 12/12/1976 foi um dia de glória em minha vida em que no Clube Municipal no Rio fiz meu exame para faixa preta pela FJERJ com meu irmão de Uke e eu fui o Uke dele passamos com nota máxima diga-se de passagem. Nossa banca examinadora foram: Profs.Avany Magalhães 4° Dan, Nagashima 6° Dan, Ogino 5° Dan, Takeshi Ueda 5° Dan, e prof. Ceny Perez 2° Dan.",
    "Certificados preenchidos a mão com caneta Nankin, mas infelizmente se perdeu nas enchentes de Blumenau em 1981.",
    "Está é a trajetória de um simples judoca com 63 anos de História. Obrigado meu Deus e a todos que puderam me ajudar nesta jornada."
], "p", "textoJornadaDoHeroi", true);
