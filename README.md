# Sessão de Acolhimento VLA

Projeto desenvolvido para apoiar o processo de acolhimento psicológico realizado pela profissional **Jessicka Soares**.  
O objetivo é oferecer uma interface simples, acessível e organizada para gerenciar sessões de acolhimento e interação com pacientes.

---

## 📋 Funcionalidades

- Página inicial com informações sobre a sessão de acolhimento.
- Estrutura responsiva para diferentes dispositivos.
- Conteúdo informativo sobre o processo de atendimento.
- Possibilidade de expansão futura para agendamento online e integração com plataformas de cursos.

---

## 🚀 Tecnologias Utilizadas

- **Vite**: servidor de desenvolvimento e build para produção.
- **React + TypeScript**: componentes e interatividade.
- **HTML/CSS**: conteúdo e estilos existentes, migrados gradualmente.

## Desenvolvimento local

Requer Node.js 20.19+ ou 22.12+ (Node.js 24 é compatível).

```sh
npm ci
npm run dev
```

O comando `npm run build` gera o site em `dist/`. O deploy do GitHub Pages usa
esse build; imagens, páginas legais e o arquivo `CNAME` são copiados de `public/`.

---

## 📂 Estrutura do Projeto

        Cliente    JESSICKA
          │          │
          │          ▼
          │    PAINEL ADMIN
          │          │
          │define disponibilidade
          │          │
          │          ▼
          │      SUPABASE
          │          │
          ┌─────────┴─────────┐
          ▼                   ▼
      SITE CLIENTE       GOOGLE CALENDAR
          │                   │
          ▼                   ▼
     faz reserva          recebe evento
