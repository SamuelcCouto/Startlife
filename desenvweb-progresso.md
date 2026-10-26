# Progresso — Site Start Life Vera Cruz (premium, do zero)

Cliente potencial: **Start Life Academia — unidade Vera Cruz**, Goiânia/GO.
Objetivo: entregar uma página **infinitamente melhor** que a concorrente, com transições/animações/interações exclusivas, e **apresentar as falhas** da página atual na proposta.

## Referências
- Concorrente (a bater): https://redestartlife.vercel.app/unidades/vera-cruz
- Instagram: https://www.instagram.com/startlifeacademia/
- Google Maps: 4,5★ (89 avaliações). Endereço: Av. Gercina Borges Teixeira, Quadra 126 — Vera Cruz 2, Goiânia-GO, 74493-060. Tel: (62) 99343-4152.

## Dados reais coletados (não inventar nada além disto)
- **Marca:** preto + amarelo; logo "STARTLIFE ACADEMIA" com seta/raio.
- **Planos (da própria rede):** Mensal R$139/mês · Recorrente R$129/mês (débito automático) · Semestral R$119/mês (6x) ou R$714 à vista · Anual R$109,90/mês (12x) ou R$1.318,80 à vista.
- **Comodidades da rede:** brinquedoteca com monitora, estacionamento, vestiários com chuveiro quente, armários, app de treinos, rádio interativa, acompanhamento nutricional, loja de suplementos.
- **Avaliações Google:** 4,5★ / 89. Elogios: equipamentos novos/variados, muitas máquinas de cardio, ambiente agradável/cheiroso, preço acessível, equipe atenciosa. Críticas: lotação à noite, manutenção lenta de aparelhos quando quebram, saída de emergência.

## Etapas
- [x] **0. Preparar** — pasta criada, estado verificado. Falta confirmar briefing com o usuário.
- [x] **Auditoria do concorrente** → `auditoria-concorrente.md` (observável/não-intrusiva). Achados: telefone e horário como placeholder "em validação"; prova social ignorada; copy genérica; sem CSP/anti-clickjacking; ACAO `*`. Base técnica (HSTS, SEO, mobile) OK.
- [x] **1. Identidade visual** — **APROVADA** (26/10). Paleta #0A0A0A / #141414 / #F4F3EF / #FDB92E (AAA). Fontes **v2: Bricolage Grotesque (display) + Instrument Sans (corpo)** — troca o Nunito. Layout **v2: hero cinematográfico em tela cheia**, título ancorado embaixo. Conceito "chão de fábrica"; assinatura visual = faixa de advertência.
- [x] **2. Movimento + construção** (skill `site-premium`) — **v1 construída em `site/` (Next.js 16, estático) e no GitHub** (SamuelcCouto/Startlife, branch main). Hero cinematográfico + intro de halteres (1ª visita, em primeiro plano), prova (4,5/89), estrutura/comodidades, planos reais, localização c/ mapa, rodapé. Build OK, QA desktop+mobile OK. Stack: next/font (Bricolage+Instrument), Lenis, GSAP instalado. Preview/hero evoluiu em Artifact (v6) — intro a refinar.
  - **Deploy Vercel:** importar o repo, **Root Directory = `site`**, framework Next.js (auto). Depois do 1º deploy, setar env `NEXT_PUBLIC_SITE_URL` com o domínio real (OG/canonical).
  - **Onde trocar mídia/dados:** textos e preços em `site/lib/site.ts`; hero é CSS (sem foto ainda) — entra foto real depois. WhatsApp: 5562993434152.
- [ ] **3. Mapa do código** (skill `cartographer`) após 1º commit.
- [ ] **4. Ajustes finos.**
- [ ] **5. Mobile** (skill `mobile`) antes de publicar.
- [ ] **6. Segurança** (skill `seguranca-web` + `/security-review`) no NOSSO código antes de publicar.
- [ ] **7. Fechar** — juntar aprendizados.

## Decisões tomadas
- **Stack: Next.js + React** (stack da casa) — confirmado pelo usuário.
- Domínio `startlifeacademia.com.br` **suspenso/descontinuado** (página de erro). Concorrente aponta canonical/og para ele → achado extra na auditoria.
- CTA principal (default até confirmação): **Falar no WhatsApp (62) 99343-4152**.
- Mídia (default): **stock premium** por enquanto; trocar por fotos reais quando o usuário enviar.

## Próximos passos (refino na Vercel)
- Afinar a intro de halteres (densidade/velocidade/duração) com o site no ar.
- Trocar o fundo CSS do hero por foto real da unidade quando o cliente enviar.
- Etapa 5 (skill `mobile`): auditoria nos 12 tamanhos reais com o site publicado.
- Etapa 6 (`seguranca-web`): site é estático sem formulário/login (só links WhatsApp + mapa) → risco baixo; rodar checagem rápida + nota LGPD antes de divulgar.
- Considerar OG image própria e sitemap/robots.

## Última atualização
26/10/2026 — v1 em Next.js construída, testada (desktop+mobile) e enviada ao GitHub (SamuelcCouto/Startlife). Pronta para deploy na Vercel (Root Directory = site). Refino da intro e mídia real ficam para a produção.
