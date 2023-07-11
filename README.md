# Hero Card

O componente `HeroCard` é uma parte do front-end de uma 
aplicação que consome uma API para exibir informações de um herói gerado
 aleatoriamente. O componente exibe os atributos e detalhes do herói em 
um cartão.

![944shots_so](https://github.com/berdfandrade/hero-card/assets/96706881/4ac16ca3-a0be-4ab8-a085-477eaa8ef2c5)


## Dependências

O componente utiliza as seguintes dependências:

- React: Biblioteca JavaScript para criar interfaces de usuário.
- Chakra UI: Uma biblioteca de componentes de interface do usuário para React, que facilita a criação de UIs bonitas e responsivas.
- React Icons: Uma biblioteca de ícones populares para React.
- Axios: Uma biblioteca para fazer requisições HTTP.

# Documentação do Componente HeroCard

O componente `HeroCard` é uma parte do front-end de uma aplicação que consome uma API para exibir informações de um herói gerado aleatoriamente. O componente exibe os atributos e detalhes do herói em um cartão.

## Dependências

O componente utiliza as seguintes dependências:

- React: Biblioteca JavaScript para criar interfaces de usuário.
- Chakra UI: Uma biblioteca de componentes de interface do usuário para React, que facilita a criação de UIs bonitas e responsivas.
- React Icons: Uma biblioteca de ícones populares para React.
- Axios: Uma biblioteca para fazer requisições HTTP.

## Uso

Para utilizar o componente `HeroCard`, siga os seguintes passos:

1. Instale as dependências necessárias no seu projeto:

```bash
npm install react chakra-ui/react react-icons axios
```

2. Importe as dependências necessárias e o componente `HeroCard` no seu arquivo:

```jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Badge,
  VStack,
  HStack,
  Flex,
  Image,
  Center,
  Icon,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import {
  GiPointySword,
  GiElfHelmet,
  GiMuscleUp,
  Gi3DHammer,
} from "react-icons/gi";
import { RiShieldFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import avatarHandle from "./avatarHandle";

import axios from "axios";

const HeroCard = () => {
  // ...código do componente
};

export default HeroCard;

```

3. Utilize o componente `HeroCard` no seu aplicativo onde desejar exibir o herói:

## Props

O componente `HeroCard` não aceita nenhuma prop.

## Funcionamento

Ao ser renderizado, o componente `HeroCard` faz uma requisição para a API em `http://localhost:5000/heroi` para obter as informações do herói aleatório. O componente utiliza o hook `useEffect` para executar essa requisição assim que o componente é montado.

Enquanto a requisição estiver em andamento, o componente exibe o texto "Carregando...". Assim que os dados do herói são recebidos, o componente renderiza as informações em um cartão.

## Estrutura do Cartão

O cartão renderizado pelo componente `HeroCard` contém as seguintes informações do herói:

- Nome: O nome do herói.
- Avatar: Uma imagem representando o herói.
- Apresentação: Uma frase de apresentação do herói.
- Gênero: O gênero do herói, exibido como uma badge colorida.
- Atributos: Os atributos do herói, exibidos como ícones seguidos pelo valor do atributo.
  - HP: Pontos de vida do herói.
  - Ataque: Valor de ataque do herói.
  - Defesa: Valor de defesa do herói.
  - Stamina: Valor de stamina do herói.
- Level: O nível do herói, exibido com um ícone.
- Estilo: O estilo ou temperamento do herói, exibido com um ícone de estrela.
- Inventário: Lista de itens no inventário do herói.

## Considerações Finais

Este é um resumo da documentação do componente `HeroCard`. Lembre-se de instalar as dependências necessárias e importar corretamente os componentes e bibliotecas mencionadas. Certifique-se também de que a API em `http://localhost:5000/heroi` esteja disponível e retorne os dados esperados pelo componente.


