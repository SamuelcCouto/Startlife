# Auditoria técnica — página concorrente

**Alvo:** https://redestartlife.vercel.app/unidades/vera-cruz
**Data:** 26/10/2026
**Método:** análise **observável e não-intrusiva** — somente o que o navegador de qualquer visitante já recebe (código-fonte público, cabeçalhos HTTP da resposta, performance, acessibilidade, SEO e render em desktop/mobile). Nenhuma ferramenta de ataque ou pentest foi executada contra o site (não temos autorização e não é necessário).

---

## Veredito honesto

A página **não está quebrada nem tem falha de segurança grave**. Tecnicamente ela é competente: Next.js, responsiva, HTTPS com HSTS, SEO básico presente, sem erros de console.

O problema dela é outro, e é pior do ponto de vista comercial: **ela é genérica e está publicada incompleta**. Ela falha no trabalho que deveria fazer — transformar quem visita em aluno matriculado. É exatamente essa a brecha que a nossa proposta ataca.

> Posicionamento para o cliente: não dizer "o site está inseguro/hackeável". Dizer "o site está **inacabado e sem personalidade**; o nosso **converte** e tem acabamento premium, com atenção aos detalhes que o atual deixou passar".

---

## 1. Conteúdo e conversão — onde mais dói

Estas são as falhas que um dono de academia entende na hora:

- **Telefone não aparece.** O campo mostra *"Em validação com a unidade."* — um placeholder publicado. O número real existe e está público no Google (**(62) 99343-4152**). Uma página de academia onde o cliente não acha o telefone falha no básico.
- **Horário de funcionamento não aparece.** Mesmo placeholder *"Em validação com a unidade."*. O horário também está no Google Maps.
- **Banner de "obra inacabada".** A própria página avisa: *"Algumas informações desta unidade estão sendo validadas e serão atualizadas em breve."* — passa imagem de descuido num site que já está no ar.
- **Zero prova social.** A unidade tem **4,5 estrelas com 89 avaliações** no Google. Nada disso aparece na página. É o ativo de marketing mais forte que existe, jogado fora.
- **Copy com "voz de IA".** Frases genéricas e intercambiáveis: *"a gente cuida dos detalhes"*, *"no seu próprio ritmo"*, *"focar no que importa"*. Serviriam para qualquer academia do Brasil — não vendem **esta**.
- **Sem fotos reais da unidade.** Só uma imagem de corredor de musculação, reaproveitada como capa e como imagem social (og:image).

## 2. Design e diferenciação — a "cara de IA/template"

- Layout escuro + amarelo, fonte sans padrão, seções empilhadas uma embaixo da outra. Hierarquia até correta, mas **esquecível**.
- **Zero movimento e zero personalidade.** Nenhuma transição, revelação ou interação própria. É esse vazio de identidade de movimento que dá a sensação de "template" / "feito por IA".
- Nada no site diz por que escolher a Start Life Vera Cruz em vez da academia da esquina.

## 3. Higiene de segurança — observável nos cabeçalhos HTTP

Severidade **baixa a média** para uma página institucional estática, mas serve como munição de "atenção aos detalhes":

| Item | Estado | Comentário |
|---|---|---|
| Content-Security-Policy | **Ausente** | Sem camada de mitigação de XSS e sem `frame-ancestors`. |
| Proteção contra clickjacking | **Ausente** | Nem `X-Frame-Options` nem CSP `frame-ancestors` — a página pode ser embutida em iframe por terceiros. |
| Access-Control-Allow-Origin | **`*`** | Liberado para qualquer origem no próprio documento HTML — permissivo sem necessidade. |

**Para sermos justos (o que está correto):** HSTS presente (`max-age` de 2 anos), `X-Content-Type-Options: nosniff`, `Referrer-Policy` e `Permissions-Policy` configurados, HTTPS ok. Ou seja: a base da Vercel protege, mas **ninguém endureceu a configuração** — faltou mão.

## 4. SEO e acessibilidade — onde está OK (honestidade reforça credibilidade)

- Meta description, Open Graph, `canonical`, um único `<h1>`, JSON-LD de SEO local e `alt` nas imagens: **SEO básico presente**.
- **Porém, erro grave de SEO/compartilhamento:** o `canonical` e a `og:image` apontam para `https://startlifeacademia.com.br/...` — e esse domínio está **suspenso/descontinuado** (retorna página de erro `suspendedpage.cgi`). Resultado: o Google é instruído a dar crédito a uma URL morta, e o preview ao compartilhar no WhatsApp/Instagram tenta puxar uma imagem de um site fora do ar. É o tipo de detalhe que passa despercebido e sabota o alcance.
- Responsivo no mobile, sem erro de console, performance aparentemente boa (Next.js + turbopack).

Reconhecer isso na proposta nos deixa mais críveis quando apontamos o resto.

---

## Resumo de uma linha para a reunião

> "O site de vocês está no ar, mas **incompleto** (telefone e horário aparecem como 'em validação'), **sem usar as 89 avaliações 4,5★** que vocês têm, e com **cara de template**. A gente entrega uma página que mostra a unidade de verdade, usa a reputação de vocês como prova e tem um acabamento premium — com transições e interações feitas só para a Start Life."
