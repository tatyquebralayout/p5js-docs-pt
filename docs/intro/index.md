---
sidebar_position: 1
---

# Bem-vindo ao p5.js

O p5.js é uma biblioteca JavaScript para programação criativa, que torna a arte e o design interativo acessível a todos.

## O que você pode fazer com p5.js?

- Criar desenhos e animações interativas
- Desenvolver visualizações de dados
- Trabalhar com mídia (imagens, sons, vídeos)
- Criar arte generativa
- Explorar interações com mouse e teclado

## Estrutura do Tutorial

- **Ambiente de Desenvolvimento**: Configure seu ambiente
- **Estrutura Básica**: Aprenda a estrutura de um sketch p5.js
- **Coordenadas e Formas**: Comece a desenhar!

## Primeiro Exemplo

```jsx live
function PrimeiroSketch() {
  const sketch = p5 => {
    p5.setup = () => {
      p5.createCanvas(400, 200);
      p5.background(220);
    };

    p5.draw = () => {
      p5.fill(255, 0, 0);
      p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
    };
  };

  return <P5Sketch sketch={sketch} />;
}
2. `sidebars.js`:
```javascript
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'INTRODUÇÃO AO P5.JS',
      items: [
        'intro/index',
        'intro/ambiente/index',
        'intro/estrutura/index',
        'intro/coordenadas/index',
      ],
    },
    {
      type: 'category',
      label: 'REFERÊNCIA',
      items: [
        'reference/index',
        {
          type: 'category',
          label: 'Estrutura',
          items: ['reference/estrutura/index'],
        },
        {
          type: 'category',
          label: 'Formas',
          items: ['reference/forma-2d/index', 'reference/forma-3d/index'],
        },
      ],
    },
    {
      type: 'category',
      label: 'TUTORIAIS',
      items: [
        'tutorials/index',
        {
          type: 'category',
          label: 'Desenho',
          items: ['tutorials/desenho/index'],
        },
      ],
    },
  ],
};

module.exports = sidebars;