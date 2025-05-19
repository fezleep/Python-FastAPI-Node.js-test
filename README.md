Python-FastAPI-Node.js-test
Este projeto foi desenvolvido como parte dos meus estudos para praticar a criação e integração de APIs RESTful utilizando Python (com FastAPI) e Node.js (com Express). O objetivo é entender como serviços escritos em linguagens diferentes podem se comunicar.

Tecnologias utilizadas
Python 3.11

FastAPI

Uvicorn

Node.js

Express

Axios

Objetivo do projeto
O foco deste projeto é simular uma comunicação entre duas APIs independentes, cada uma desenvolvida com uma tecnologia diferente. A aplicação em Python recebe uma requisição, processa e responde, enquanto o serviço em Node.js consome essa API e exibe os dados no terminal.  Este projeto faz parte do meu processo de aprendizado em desenvolvimento backend e integração de APIs. Ainda estou me aperfeiçoando na área e desenvolvendo projetos pessoais para praticar conceitos e ferramentas.

Como executar
Clone este repositório.

bash
Copiar
Editar
git clone https://github.com/fezleep/Python-FastAPI-Node.js-test.git
Acesse a pasta do projeto e instale as dependências de cada aplicação.

Backend Python (FastAPI)
bash
Copiar
Editar
cd backend-python
pip install -r requirements.txt
uvicorn main:app --reload
A API estará disponível em http://localhost:8000

Backend Node.js (Express)
Em outro terminal:

bash
Copiar
Editar
cd backend-node
npm install
node app.js

Fim!
