# 📢 Vocalize API

Uma API RESTful desenvolvida em **Node.js, Express e TypeScript** para gerenciar uma plataforma de comunicados corporativos. O sistema conta com autenticação JWT e controle de acesso baseado em cargos (RBAC - Role-Based Access Control).

## 🚀 Tecnologias Utilizadas
* **Backend:** Node.js, Express, TypeScript
* **Banco de Dados:** MongoDB (Mongoose)
* **Segurança:** Autenticação via JWT (JSON Web Token) e criptografia de senhas com bcryptjs.

## ⚙️ Como rodar o projeto localmente

1. **Clone o repositório:**
   \`\`\`bash
   git clone https://github.com/SEU_USUARIO/Vocalize-API.git
   \`\`\`

2. **Instale as dependências:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais:
   \`\`\`env
   PORT=3000
   MONGO_URI=sua_string_de_conexao_do_mongodb_atlas
   JWT_SECRET=sua_chave_secreta_aqui
   \`\`\`

4. **Inicie o servidor em modo de desenvolvimento:**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🔐 Regras de Negócio (Endpoints)
* **Público:** Qualquer usuário pode ler a listagem de comunicados.
* **Privado:** Apenas usuários com a credencial de \`admin\` podem criar, editar e excluir comunicados, além de registrar novos usuários.