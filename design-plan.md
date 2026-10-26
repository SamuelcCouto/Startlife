# Plano de identidade — Start Life Vera Cruz

**Modo:** completar (a marca já existe: preto + amarelo, logo com seta/raio).
**Princípio do modo:** manter o que o público reconhece, refinar a execução, preencher o que falta. Não redesenhar logo nem trocar a cor principal.
**Aprovado em 26/10/2026** — paleta, conceito e voz aprovados pelo usuário. **Fonte e layout revisados** nesta versão a pedido dele (v2).

---

## Conceito em uma frase

**Chão de fábrica.** A academia como piso de treino industrial — aço preto, amarelo de faixa de advertência, letreiro atlético pesado e a reputação real (4,5★ / 89 avaliações) no centro. Energia e disciplina, zero floreio.

---

## Inventário: manter · ajustar · completar

| Manter (reconhecível) | Ajustar (inconsistente/fraco) | Completar (não existe) |
|---|---|---|
| Preto como superfície · amarelo como energia · logo seta/raio | Tipografia: trocar **Nunito** (arredondada, "mole") por uma grotesca com personalidade | Papéis de cada cor + tons derivados (texto secundário, linha, elevação) |
| Texto off-white quente sobre preto | Rótulos "PALAVRA — fragmento" com travessão (tell de template) | Escala tipográfica com pesos e entrelinhas intencionais |
| | Cantos de 6px genéricos → raio intencional e consistente | Voz da marca + estados (botão, erro, vazio) e usos do logo |

---

## Cor — tokens, papel e contraste (medido, AAA) — aprovado

| Token | Hex | Papel | Proporção |
|---|---|---|---|
| `--bg` | `#0A0A0A` | Superfície base (aço preto) | ~70% |
| `--surface` | `#141414` | Painel elevado (cards, blocos) | ~15% |
| `--text` | `#F4F3EF` | Texto principal (off-white quente) | — |
| `--text-muted` | `#A8A6A0` | Texto secundário / apoio | — |
| `--action` | `#FDB92E` | Ação e energia (amarelo advertência) | ~8%, pontual |
| `--action-ink` | `#0A0A0A` | Texto sobre o amarelo | — |
| `--line` | `rgba(244,243,239,.12)` | Divisórias e bordas | — |

**Contraste verificado** (`scripts/contraste.py`): texto/bg **17.8:1**, preto/amarelo **11.5:1**, amarelo/preto **11.5:1**, muted/bg **8.1:1**, texto/surface **16.6:1** — todos **AAA**.
Regra do amarelo: só como fundo de botão/faixa ou acento curto sobre preto. Nunca texto amarelo sobre claro.

---

## Tipografia (v2 — revisada)

Duas famílias, papéis bem separados — ambas no Google Fonts (via `next/font/google`).

- **Bricolage Grotesque** (display: títulos, números, preços) — pesos 700/800. Grotesca contemporânea com personalidade e leve tensão no desenho; lida **premium e "desenhada"**, não default. Usada em **caixa mista**, não forçada em CAIXA ALTA. É o elemento memorável.
- **Instrument Sans** (corpo, UI, botões) — 400/500/600. Neutra, limpa, ótima legibilidade; contrasta com o display sem a moleza arredondada do Nunito.

**Escala** (clamp, fluido): Hero `clamp(3rem, 8vw, 6.5rem)`/lh .95 · Título de seção `clamp(2rem, 5vw, 3.5rem)` · Número grande (preço/stat) display 800 · Corpo `1.0625rem`/lh 1.6 (medida < 72ch) · UI/botão 600.

**Alternativa de 1 clique:** se quiser o letreiro mais "grito de academia", troco o display por **Anton** (condensada, caixa alta de sinalização) mantendo o Instrument Sans no corpo.

**O que NÃO faço** (tells de página gerada): não destaco palavra do título em outra cor; não ponho rótulo em CAIXA ALTA acima de todo bloco; sem "→" no fim de link; sem metadado com ponto médio. Títulos em caixa mista; caixa alta só em rótulos curtos e com parcimônia.

---

## Layout (v2 — revisado)

**Conceito:** **hero cinematográfico em tela cheia.** A foto da unidade ocupa todo o quadro (escurecida para o texto respirar); o título ancora **embaixo, à esquerda**, com um **CTA dominante** e o selo **4,5★ · 89** flutuando no canto. Sem rótulo-sobrancelha no topo. Abaixo, seções em **ritmo assimétrico** (imagem e texto alternando lados), nunca três cards iguais em fileira como recurso principal.

```
┌───────────────────────────────────────────────┐
│ [logo]            Sobre  Estrutura  Planos   ≡  │
│                                                 │
│        (FOTO DA UNIDADE — ocupa o quadro,       │
│              escurecida)         ┌ ★ 4,5 · 89 ┐ │
│                                  └────────────┘ │
│                                                 │
│  Start Life Vera Cruz    ← Bricolage, embaixo   │
│  Treino sério, preço de bairro.                 │
│  ▸ Falar no WhatsApp                            │
│ ▰▰▰ filete de advertência (4px) ▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰ │
└───────────────────────────────────────────────┘
```

**Elemento-assinatura (visual):** a **faixa de advertência** (diagonal amarelo/preto, que já existe no piso da academia) reduzida a um **filete fino na base do hero** e reaproveitada como marcador de seção ativa — acento, nunca enfeite repetido. O movimento cinematográfico fica para a etapa `site-premium`.

---

## Voz — aprovado

Três adjetivos: **direto, chão-de-academia, confiante.** Frases do mundo do cliente, sem "a gente cuida dos detalhes".

- **Botão:** "Falar no WhatsApp" (diz o que acontece) — nunca "Enviar".
- **Erro:** "Número estranho — confere o DDD e tenta de novo."
- **Vazio / sem dado:** se não temos o dado, **não mostramos o campo** e jogamos a pessoa pro WhatsApp. **Nunca** publicamos "em validação com a unidade" (o erro-chave do site atual).

---

## O que esta marca não faz

Sem degradê roxo; sem Inter/Nunito; sem depoimento inventado; sem campo "em validação" no ar; sem três cards iguais como recurso principal; sem cantos super-arredondados de SaaS; sem `canonical`/`og` apontando para domínio morto.

---

## Identidade de movimento (v1 — para aprovar)

> Anti-repetição: o registro já tem uma "academia de bairro" (mundo de muro/lambe-lambe — cartaz colado, letreiro pintado, placa que vira, porta de aço). **Nada disso se repete aqui.** A Start Life vive noutro mundo: **chão de fábrica industrial**.

- **Materiais e objetos:** aço preto e chapa escovada, **faixa de advertência** amarelo/preto, **anilhas e barra**, cabo de aço e polia, o **raio/seta** do logo.
- **Verbos desses objetos:** a anilha **cai e assenta com peso**; a faixa de advertência **avança** pela tela; a chapa de aço **desliza** pesada; o cabo **tensiona**; o raio **risca** seco.
- **Temperamento (3 adjetivos):** **potente, disciplinada, industrial.** (A outra academia do registro era "direta, barulhenta, de bairro" — temperamento diferente de propósito.)
- **Gesto-assinatura — "A barra carregada":** no momento marcante (os planos), cada bloco entra como uma **anilha encaixada na barra**: cai de cima com peso (`power2.in`), **assenta com um micro-tranco metálico** (`back.out(1.4)` curto) e a barra cede 1–2px sob a carga. Comunica força e peso — o oposto do "mole". Nenhum outro projeto do registro usa carga/anilha.
- **Curvas:** queda/peso `power2.in`; travamento `back.out(1.4)`; deslize de aço `power3.inOut`; raio `power4.out` (seco/elétrico); scrub 0.6.
- **O que esta marca NÃO faz em movimento:** sem blur orgânico (a academia é nítida e crua); sem cortina do centro; **sem cartaz colado, placa que vira ou porta de aço** (são da outra academia); sem pêndulo, tinta escorrendo ou grade de pixels.

### Gestos de apoio
1. **Faixa de advertência que avança** — o filete amarelo/preto do hero é *desenhado* pela rolagem e reaparece como divisor que avança na diagonal entre seções (scrub). É o elemento-assinatura visual em movimento.
2. **Chapa de aço que desliza (contínua)** — Estrutura e Comodidades numa trilha horizontal de chapas de aço que deslizam *contínuas* e pesadas (não em passos — passos são da outra academia), com leve parallax da textura escovada.
3. **O raio risca (carregamento)** — uma única orquestração ao carregar: a seta/raio do logo risca a tela e o título do hero trava no lugar. Entradas espalhadas por seção, não.

## Mapa de seções

| # | Seção | Conteúdo real | Mecânica | Gesto |
|---|---|---|---|---|
| 1 | **Hero** | Foto da unidade + "Start Life Vera Cruz" + CTA WhatsApp + selo 4,5★·89 | Pin curto (+=50%) | Raio risca ao carregar; faixa de advertência se desenha |
| 2 | **Em números / prova** | 4,5★ e 89 avaliações (reais); temas reais das avaliações (equipamento novo, muito cardio, ambiente agradável, equipe atenciosa) como texto — **sem número inventado** | Sem pin | Os 2 números reais assentam como anilhas (mini-assinatura) |
| 3 | **Estrutura & Comodidades** | Lista real da rede (brinquedoteca c/ monitora, estacionamento, vestiário c/ chuveiro quente, armários, app de treinos, rádio interativa, acompanhamento nutricional, loja de suplementos) | Trilha horizontal (pin ou nativo no mobile) | Chapas de aço deslizando contínuas |
| 4 | **Planos** | Mensal R$139 · Recorrente R$129 · Semestral R$119 (6x)/R$714 · Anual R$109,90 (12x)/R$1.318,80 | Pin médio (+=100%) | **MARCANTE — "A barra carregada"** |
| 5 | **Localização** | Endereço real + mapa; horário/telefone via WhatsApp (nunca "em validação") | Sem pin | Faixa de advertência divide; mapa revela |
| 6 | **CTA final + rodapé** | WhatsApp (62) 99343-4152, Instagram, endereço, navegação | Sem pin | — |

**Máx. 2 trechos fixados** (hero curto + planos). Momento marcante = os planos carregados na barra.

### Nota do caderno (aplicada na construção)
Next 16 com `cacheComponents` quebra com `dynamicParams` e com `new Date()` em componente de servidor — vou evitar ambos (sem data dinâmica no rodapé; `notFound()` cobre slug).
