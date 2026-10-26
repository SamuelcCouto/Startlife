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
- [~] **2. Movimento + construção** (skill `site-premium`) — **plano de movimento apresentado** no `design-plan.md` (seção "Identidade de movimento" + mapa de seções). **Aguardando aprovação antes de codar.** Gesto-assinatura "A barra carregada" (anilhas); apoio: faixa de advertência que avança, chapas de aço deslizando, raio que risca no load. Mundo industrial — diferente da "academia de bairro" já registrada.
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

## Última atualização
26/10/2026 — Next.js definido; plano de identidade apresentado (`design-plan.md` + preview). Aguardando aprovação para seguir à etapa 2 (site-premium: plano de movimento).
