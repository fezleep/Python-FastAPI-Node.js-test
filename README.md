Python-FastAPI-Node.js-test

Este projeto foi desenvolvido como parte dos meus estudos para praticar a criação e integração de APIs RESTful utilizando Python com FastAPI e Node.js com Express. O objetivo é entender como serviços escritos em linguagens diferentes podem se comunicar. 
Faz parte do meu processo de aprendizado em desenvolvimento backend e integração de APIs. Ainda estou me aperfeiçoando na área e desenvolvendo projetos pessoais para praticar conceitos e ferramentas. Se quiser acompanhar, o repositório está aberto para feedbacks e sugestões.


Tecnologias utilizadas:

Python 3.11
FastAPI
Uvicorn
Node.js
Express
Axios

Objetivo do projeto:

O foco deste projeto é simular a comunicação entre duas APIs independentes, cada uma desenvolvida com uma tecnologia diferente. A aplicação em Python recebe uma requisição, processa e responde, enquanto o serviço em Node.js consome essa API e exibe os dados no terminal.

Como executar:

Clone este repositório:
git clone https://github.com/fezleep/Python-FastAPI-Node.js-test.git

Acesse a pasta do projeto e instale as dependências de cada aplicação.

Backend Python (FastAPI)
cd backend-python
uvicorn main:app --reload

A API estará disponível em http://localhost:8000

Backend Node.js (Express)
Em outro terminal:
cd backend-node
npm install
node app.js

Fim!
