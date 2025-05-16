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

## 📄 Licença

Este projeto está sob a licença MIT.
