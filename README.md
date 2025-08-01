# TMA IPTV PREMIUM

Site institucional da loja **TMA IPTV PREMIUM** com planos de IPTV, links de pagamento, área de downloads e painel administrativo.

---

## 🌐 Estrutura de Páginas

- `index.html` — Página inicial com apresentação dos produtos
- `downloads.html` — Página com links de download para apps de TV Box e celular
- `login.html` — Tela de login (visual)
- `painel.html` — Estrutura base do painel administrativo
- `contato.html` — Formulário para envio de mensagens via WhatsApp
- `termos.html` — Termos de uso e políticas

---

## 📁 Estrutura do Projeto

```
tma-iptv/
├── index.html
├── downloads.html
├── login.html
├── painel.html
├── contato.html
├── termos.html
├── style.css
└── assets/
    ├── *.jpg (imagens dos combos)
    └── whatsapp-icon.png
```

---

## 🚀 Como publicar

### Requisitos:
- Conta no GitHub
- Conta na Vercel (vercel.com)

### Passo a passo:
1. Faça login na Vercel e conecte o repositório do GitHub onde o site foi enviado.
2. Confirme que a Vercel está usando o branch `main` e a raiz do projeto é a raiz do repositório.
3. Toda alteração feita no GitHub será automaticamente publicada pela Vercel.
4. O site ficará acessível em `https://tma-iptv.vercel.app` (ou domínio próprio, se configurado).

---

## 💬 Contato

Botão de WhatsApp flutuante integrado com o número: `+55 35 99899-3464`

Chatbot automático conectado com o servidor:
`https://imperioxcc.top/chatbot/check/?k=47e8091700`

---

## 🛠 Personalização

- Os links de pagamento estão em formato genérico e podem ser alterados futuramente via painel.
- Os arquivos de imagem podem ser substituídos diretamente na pasta `assets/`.

---

Feito com ❤️ para TMA IPTV

---

## 🛠 Painel com Edição Local (JavaScript + localStorage)

A página `painel.html` permite editar os produtos diretamente no navegador, sem backend.

### Funcionalidades:
- Atualizar valores e links de pagamento
- As alterações são salvas localmente via `localStorage`
- Funciona mesmo após recarregar a página (desde que no mesmo navegador)

### Como usar:
1. Acesse `painel.html`
2. Altere os campos de preço e link
3. Clique em “Salvar” — os dados ficam armazenados no navegador
4. Para limpar, apague o cache do navegador

> Esta versão é ideal para testes ou operação manual. Em breve, você pode evoluir para um painel com banco de dados real.
