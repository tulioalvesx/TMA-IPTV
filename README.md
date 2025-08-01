
# 📦 TMA IPTV PREMIUM

Este projeto é um site estático para a loja **TMA IPTV PREMIUM**, com foco em exibição de produtos, integração com chatbot, painel administrativo simples e botão de contato via WhatsApp.

---

## 🗂 Estrutura de Diretórios

```
📁 tma-iptv/
├── index.html               ← Página principal com cards de produtos
├── produto.html             ← Template para página individual de produto
├── painel.html              ← Painel para cadastrar/editar produtos (via localStorage)
├── downloads.html           ← Página com links de apps
├── termos.html              ← Termos de uso
├── contato.html             ← Informações de contato
├── login.html               ← (Reservado para autenticação futura)
├── sucesso/index.html       ← Tela pós-pagamento
│
├── css/
│   └── style.css            ← Estilos visuais
│
├── js/
│   ├── produto.js           ← Lógica para exibir os produtos na página inicial
│   ├── painel.js            ← Funções de CRUD do painel admin
│   └── chatbot.js           ← Integração com chatbot personalizado
│
├── assets/
│   ├── imagens dos produtos
│   ├── whatsapp-icon.png    ← Ícone do botão flutuante do WhatsApp
```

---

## 🚀 Funcionalidades

- ✅ Exibição dinâmica de produtos na home (via `produto.js`)
- ✅ Cadastro, edição e exclusão de produtos via painel (armazenado em `localStorage`)
- ✅ Página individual com detalhes do produto e botão de download
- ✅ Aplicação de desconto com tarja “X% OFF”
- ✅ Botão flutuante com WhatsApp: `+55 35 99899-3464`
- ✅ Chatbot com API integrada: [`https://imperioxcc.top/chatbot/check/?k=47e8091700`](https://imperioxcc.top/chatbot/check/?k=47e8091700)
- ✅ Página de sucesso após pagamento

---

## 💾 Armazenamento e Painel Administrativo

Todos os produtos são salvos localmente no navegador através do `localStorage`.

- Para acessar o painel: vá para `painel.html`
- No painel você pode:
  - Criar novo produto
  - Adicionar imagem (nome de arquivo já salvo em `/assets`)
  - Inserir link de download
  - Inserir link de pagamento
  - Aplicar desconto (em %)

---

## 🔁 Atualização no GitHub + Deploy Automático

1. Atualize qualquer arquivo na pasta `C:\Users\tulio\Documents\tma-iptv`
2. Rode o script `.bat` que faz:
   - Commit no GitHub
   - Push automático
3. O Vercel se encarrega de fazer o deploy do site estático

---

## 📦 Link de downloads dos apps

Você pode manter os arquivos nesta pasta no Google Drive:

📁 [Pasta Drive de Aplicativos](https://drive.google.com/drive/folders/1Wss1Mv71yAy9zq5KSfFCSdGW5rtv0Edi?usp=drive_link)

Cada produto pode conter o botão de download individual + página geral de `downloads.html`.

---

## 🛠️ Próximas evoluções (sugestões)

- Painel com autenticação (login por senha)
- Banco de dados real + painel online com backend (Firebase ou Supabase)
- Filtros e busca de produtos
- Modal para login de revendedores
- Página de FAQs e Suporte
