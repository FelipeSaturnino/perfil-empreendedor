const questions = [
    {
        text: "Quando você tem uma ideia, o que faz primeiro?",
        options: {
            A: "Compartilho com amigos e peço sugestões.",
            B: "Faço um plano para colocar a ideia em prática.",
            C: "Espero que alguém faça isso por mim."
        },
        image: "assets/p1.gif"
    },
    {
        text: "Como você lida com desafios?",
        options: {
            A: "Tento encontrar uma solução diferente.",
            B: "Anoto os problemas e busco maneiras de resolver.",
            C: "Fico desanimado e deixo para lá."
        },
        image: "assets/p2.png"
    },
    {
        text: "Você gosta de trabalhar em equipe?",
        options: {
            A: "Sim, pois posso ouvir diferentes opiniões.",
            B: "Às vezes, mas prefiro trabalhar sozinho.",
            C: "Não, gosto mais de fazer as coisas do meu jeito."
        },
        image: "assets/p3.gif"
    },
    {
        text: "Como você se sente ao propor novas ideias?",
        options: {
            A: "Animado, gosto de inovar!",
            B: "Cauteloso, mas estou disposto a tentar.",
            C: "Nervoso, prefiro não me expor."
        },
        image: "assets/p4.png"
    },
    {
        text: "O que você faz quando algo não sai como o planejado?",
        options: {
            A: "Pergunto a outras pessoas como poderiam ter feito melhor.",
            B: "Analiso o que deu errado e faço ajustes para tentar novamente.",
            C: "Desisto e não tento mais."
        },
        image: "assets/p5.gif"
    },
    {
        text: "Qual é sua atitude em relação a feedbacks?",
        options: {
            A: "Aceito com prazer e quero melhorar.",
            B: "Levo em consideração, mas não gosto muito.",
            C: "Fico ofendido e não gosto de ouvir críticas."
        },
        image: "assets/p6.png"
    },
    {
        text: "Quando você vê um problema, qual é a sua reação?",
        options: {
            A: "Vou investigar e tentar encontrar uma solução.",
            B: "Penso se vale a pena resolver.",
            C: "Ignoro, pois não é meu problema."
        },
        image: "assets/p7.gif"
    },
    {
        text: "Você acredita que pode fazer a diferença na sua comunidade?",
        options: {
            A: "Com certeza, tenho muitas ideias para isso!",
            B: "Às vezes, se tiver apoio de outras pessoas.",
            C: "Não, acho que não tenho poder para mudar nada."
        },
        image: "assets/p8.png"
    }
];

let currentQuestionIndex = 0;
let answers = { A: 0, B: 0, C: 0 };

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.querySelector(".question h2").textContent = question.text;
        document.querySelector(".question-image img").src = question.image;
        document.querySelectorAll(".question button").forEach((button, index) => {
            const option = ["A", "B", "C"][index];
            button.textContent = `${option}) ${question.options[option]}`;
        });
    } else {
        showResults();
    }
}

function selectAnswer(option) {
    answers[option]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        updateProgressBar();
        loadNextQuestion();
    } else {
        showResults(); // Chama a função ao final do quiz
    }
}


function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar div');
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    const { A, B, C } = answers;

    let redirectURL;

    if (A > B && A > C) {
        redirectURL = 'social-e-colaborativo.html';
    } else if (B > A && B > C) {
        redirectURL = 'planejador-e-resiliente.html';
    } else if (C > A && C > B) {
        redirectURL = 'cauteloso-e-dependente.html';
    } else if (A === B && A > C) {
        redirectURL = 'social-e-estrategista.html';
    } else if (A === C && A > B) {
        redirectURL = 'colaborador-relutante.html';
    } else if (B === C && B > A) {
        redirectURL = 'planejador-conservador.html';
    }

    // Redireciona para a URL calculada
    if (redirectURL) {
        window.location.href = redirectURL;
    }
}


// Iniciar com a primeira pergunta
loadNextQuestion();
