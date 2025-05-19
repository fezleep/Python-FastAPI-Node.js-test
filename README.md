PROJETO FULLSTACK SIMPLES (FastAPI + Express)

BACKEND (FastAPI - Python)

Roda em http://localhost:8000

Endpoint: /items/ → retorna {"items": ["item1", "item2", "item3"]}

Configurado CORS para liberar o frontend

FRONTEND (Express - Node.js)

Roda em http://localhost:3000

Pega dados da API (/items/) usando Axios

Mostra os itens num template EJS

COMO RODAR:

Backend:

bash
cd backend  
uvicorn api:app --reload  
Frontend (outro terminal):

bash
cd frontend  
npm install  
npm start  
O QUE APRENDI:

Como criar uma API simples (FastAPI)

Como consumir API no frontend (Express + Axios)

Problemas de CORS e como resolver

Renderização básica com EJS

PRÓXIMOS PASSOS:

Add banco de dados

Fazer CRUD completo

Melhorar o frontend (React?)

(Projeto de estudo - foco em entender a comunicação entre backend/frontend)
