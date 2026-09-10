# BLACKLINE

Landing page conceitual para uma empresa de estética automotiva, criada para apresentar serviços, processo de trabalho e transformação visual com uma experiência de scroll responsiva.

[Ver projeto em produção](https://automotivo-alpha.vercel.app)

## Objetivo

Traduzir precisão, cuidado e acabamento premium para uma página rápida de entender, conduzindo o visitante da primeira impressão até o pedido de avaliação pelo WhatsApp.

## Funcionalidades

- Preloader
- Navegação responsiva
- Narrativa visual durante o scroll
- Comparação antes e depois
- Apresentação de serviços
- Etapas do processo
- Indicadores e chamadas para contato
- Integração com WhatsApp
- Respeito à preferência de movimento reduzido

## Tecnologias

- React
- TypeScript
- Vite
- GSAP e ScrollTrigger
- Lenis
- CSS
- Vercel

## Arquitetura

A página é composta por seções independentes em `src/components`. Serviços e etapas do processo ficam centralizados em `src/data/content.ts`, o que permite alterar conteúdo sem modificar a estrutura dos componentes.

O Lenis controla o scroll suave e sincroniza sua atualização com o ScrollTrigger. Quando o usuário ativa `prefers-reduced-motion`, o comportamento adicional de scroll não é iniciado.

## Decisões e desafios

- Separar conteúdo dos componentes visuais
- Sincronizar scroll suave e animações
- Preservar navegação e legibilidade em dispositivos móveis
- Usar a comparação visual como demonstração do serviço
- Manter CTAs acessíveis ao longo da página

## Limites do projeto

Este é um projeto de apresentação no frontend. Não possui painel administrativo, agendamento ou banco de dados. O telefone do WhatsApp deve ser configurado antes de uso comercial.

## Executar localmente

```bash
git clone https://github.com/mateusdomingues/automotivo.git
cd automotivo
npm install
npm run dev
```

Validação:

```bash
npm run lint
npm run build
```
