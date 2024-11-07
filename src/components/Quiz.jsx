import { useState } from 'react';

const perguntas = [
    {
        pergunta: 'Quem é o líder do Squad Fubox?',
        opcoes: ['Victor', 'Vinícius', 'Luiz', 'Breno'],
        resposta: 'Vinícius'
    },
    {
        pergunta: 'Qual é o melhor professor(a)?',
        opcoes: ['Bigode', 'Gabriel', 'Jailson', 'Kakashi'],
        resposta: 'Jailson'
    },
    {
        pergunta: 'O Vito seria capaz de ganhar um 1x6 contra todo o Squad Fubox?',
        opcoes: ['Não', 'Nunca', 'Impossível', 'O Vito sola!'],
        resposta: 'O Vito sola!'
    }
];

function Quiz() {
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [respostas, setRespostas] = useState([]);
    const [resultado, setResultado] = useState(null);

    const responder = (respostaSelecionada) => {
        const novaRespostas = ([...respostas, respostaSelecionada]);
        setRespostas(novaRespostas)
        if (indicePergunta + 1 < perguntas.length) {
            setIndicePergunta(indicePergunta + 1)
        } else {
            calcularResultado(novaRespostas);
        }
    }

    const calcularResultado = (todasRespostas) => {
        let pontuacao = 0;
        for (let i = 0; i < perguntas.length; i++) {
            if (todasRespostas[i] === perguntas[i].resposta) {
                pontuacao++;
            }
        }
        setResultado(pontuacao);
    };

    const reiniciarQuiz = () => {
        setIndicePergunta(0);
        setRespostas([]);
        setResultado(null);
    };

    return (
        <>
            {resultado !== null ? (
                <div>
                    <h2>Resultado do Quiz</h2>
                    <p>Voce acertou {resultado} de {perguntas.length} perguntas!</p>
                    <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>Pergunta {indicePergunta + 1}</h2>
                    <p>{perguntas[indicePergunta].pergunta}</p>
                    <ul>
                        {perguntas[indicePergunta].opcoes.map((opcao, index) => (
                            <li key={index} onClick={() => responder(opcao)}>{opcao}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )


}

export default Quiz;