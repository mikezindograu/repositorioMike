const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal característica do boto cor de rosa de acordo com o folclore brasileiro?",
        alternativas: [
            {
                texto: "Ele é conhecido por transformar-se em um homem encantador para seduzir mulheres.",
                afirmacao: "No folclore, o boto cor de rosa é frequentemente descrito como um ser que se transforma em um homem atraente para seduzir mulheres, especialmente em festas à noite.) "
            },
            {
                texto: "Ele é famoso por ser um protetor das crianças que brincam perto da água.",
                afirmacao: "Embora o boto seja uma figura importante no folclore, a ideia de proteger crianças não é uma característica central associada a ele.)"
            }
        ]
    }
        enunciado: "Qual é a principal consequência de um encontro com o boto cor de rosa, segundo a tradição?"
    {
        alternativas: [
            {
                texto: "A mulher que encontra o boto pode engravidar e ter um filho com ele.",
                afirmacao: "Segundo a lenda, uma mulher que tem um encontro com o boto pode engravidar e, às vezes, o boto desaparece depois do evento, deixando a mulher com um filho.)."
            },
            {
                texto: "A pessoa que encontra o boto ganha um desejo concedido.",
                afirmacao: "No folclore, o boto não é conhecido por conceder desejos; seu papel é  mais associado a encontros românticos e suas consequências.)"
            }
        ]
    },
    {
        enunciado: "Qual é a origem das lendas sobre o boto cor de rosa na cultura amazônica?",
        alternativas: [
            {
                texto: "Elas surgiram como uma explicação para desaparecimentos e eventos misteriosos na comunidade ribeirinha.",
                afirmacao: "As lendas do boto muitas vezes surgem como explicações para eventos misteriosos ou desaparecimentos inexplicáveis nas comunidades ribeirinhas da Amazônia.)"
            },
            {
                texto: "Elas foram criadas para ensinar crianças sobre os perigos de nadar em águas profundas.",
                afirmacao: "Embora a lenda possa ter algum valor educativo, o foco principal das histórias do boto não é especificamente ensinar sobre os perigos de nadar, mas sim sobre encontros românticos e consequências sociais."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {{
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();