# 🍕 Pizzaria Backend

Este é o backend da aplicação Pizzaria, desenvolvido com Node.js, Express e Prisma. Ele gerencia usuários, categorias, produtos e pedidos, além de integrar com o Cloudinary para armazenamento de imagens.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Prisma**
- **SQLite**
- **JWT**
- **bcrypt**
- **Cloudinary**
- **dotenv**

## 📁 Estrutura do Projeto

```
pizzaria-backend/
├── prisma/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
├── .env
├── package.json
```

## ⚙️ Configuração e Execução

```bash
git clone https://github.com/chicomelo/pizzaria-backend.git
cd pizzaria-backend

npm install
```

Configure o `.env` com suas credenciais do Cloudinary:

```env
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
```

Execute as migrações e inicie o servidor:

```bash
npx prisma migrate dev
npm run dev
```

O backend estará disponível em `http://localhost:3333`.

## 📌 Endpoints Disponíveis

### 🧑‍💼 Usuários

- `POST /users`
- `POST /session`

### 📂 Categorias

- `POST /category`
- `GET /category`

### 🍕 Produtos

- `POST /product` (com imagem para o Cloudinary)
- `GET /category/product`

### 🧾 Pedidos

- `POST /order`
- `DELETE /order`
- `POST /order/add`
- `DELETE /order/remove`
- `PUT /order/send`
- `GET /orders`
- `GET /order/detail`
- `PUT /order/finish`

## ☁️ Upload de Imagens

As imagens de produtos são enviadas diretamente para o **Cloudinary** via API. O link retornado é salvo no banco de dados.

## 🔐 Autenticação

Use o token JWT no cabeçalho:

```
Authorization: Bearer <seu_token>
```

## 📦 Exemplo de Uso da API

### Login

```bash
curl -X POST http://localhost:3333/session \
  -H "Content-Type: application/json" \
  -d '{"email": "usuario@example.com", "password": "senha123"}'
```

### Criar Categoria

```bash
curl -X POST http://localhost:3333/category \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "Pizzas"}'
```

### Criar Produto (com imagem via Cloudinary)

Use uma requisição `multipart/form-data` com os campos:

- `name`
- `price`
- `description`
- `category_id`
- `file` (imagem)

### Listar Produtos por Categoria

```bash
curl -X GET "http://localhost:3333/category/product?category_id=CATEGORY_ID"
```

### Criar Pedido

```bash
curl -X POST http://localhost:3333/order \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"table": "12", "name": "Mesa Exemplo"}'
```

### Adicionar Item ao Pedido

```bash
curl -X POST http://localhost:3333/order/add \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"order_id": "ORDER_ID", "product_id": "PRODUTO_ID", "amount": 2}'
```

## 📄 Licença

Este projeto está sob a licença MIT.
