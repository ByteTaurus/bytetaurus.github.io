# Quiz do 19

Sistema web de questionario interativo, responsivo e com visual moderno para desktop e celular.

## Como executar

Abra o arquivo `index.html` no navegador.

## Onde inserir suas perguntas

Edite o objeto `quizModules` no arquivo `script.js`.

Formato de modulo:

```js
nomeDoModulo: {
  title: "Titulo do modulo",
  description: "Descricao curta",
  questions: [
    {
      text: "Pergunta aqui",
      answers: ["Opcao A", "Opcao B", "Opcao C", "Opcao D", "Opcao E"],
      correctIndex: 2,
      reference: "Explicacao curta para feedback"
    }
  ]
}
```

Formato de cada pergunta:

```js
{
  text: "Pergunta aqui",
  answers: ["Opcao A", "Opcao B", "Opcao C", "Opcao D", "Opcao E"],
  correctIndex: 2,
  reference: "Explicacao curta para feedback"
}
```

- `correctIndex` comeca em `0` (A=0, B=1, C=2, D=3, E=4).
- O sistema mostra feedback imediato com base no campo `reference`.
- Para criar um novo questionario, adicione uma nova chave dentro de `quizModules`.

## Estrutura

- `index.html`: estrutura da interface
- `styles.css`: layout, animacoes e responsividade
- `script.js`: logica do quiz (navegacao, pontuacao e resultado)

## Proximos passos sugeridos

- Personalizar perguntas e textos de resultado
- Adicionar imagem/logo do projeto
- Publicar com GitHub Pages
