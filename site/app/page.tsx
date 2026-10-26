import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Motion from "../components/Motion";
import Icon from "../components/Icons";
import {
  ADDRESS,
  ADDRESS_SHORT,
  CIDADE,
  COMODIDADES,
  DESTAQUES,
  HORARIO,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  MAPS_EMBED,
  MAPS_URL,
  PLANOS,
  RATING,
  REVIEWS,
  UNIDADE,
  WHATSAPP_LABEL,
  waLink,
} from "../lib/site";

const Check = () => (
  <svg className="ck" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Start Life Vera Cruz",
  description:
    "Academia Start Life, unidade Vera Cruz, em Goiânia. Equipamento novo, muito cardio e equipe que acompanha.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Gercina Borges Teixeira, Quadra 126 — Vera Cruz 2",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    postalCode: "74493-060",
    addressCountry: "BR",
  },
  telephone: "+5562993434152",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "89",
  },
  sameAs: [INSTAGRAM],
};

export default function Page() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__inner">
            <span className="loc">
              <i /> {CIDADE} · {UNIDADE}
            </span>
            <h1 className="title">
              <span className="ln"><span>Start Life</span></span>
              <span className="ln"><span>Vera Cruz</span></span>
            </h1>
            <p className="hero__sub">
              Treino sério, preço de bairro. Equipamento novo, muito cardio e
              uma equipe que acompanha de verdade.
            </p>
            <div className="hero__actions">
              <a className="btn btn-primary" href={waLink("Olá! Vim pelo site da Start Life Vera Cruz e quero saber dos planos.")} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.8-1c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" /></svg>
                Falar no WhatsApp
              </a>
              <a className="btn btn-ghost" href="#planos">Ver planos</a>
              <span className="rating"><span className="stars">★★★★★</span> <b>{RATING}</b> · {REVIEWS} avaliações no Google</span>
            </div>
          </div>
          <div className="facts">
            <div className="facts__in">
              <div className="fact">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.6" /></svg>
                <div><span className="k">Endereço</span><span className="v">{ADDRESS_SHORT}</span></div>
              </div>
              <div className="fact">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div><span className="k">Funcionamento</span><span className="v">{HORARIO}</span></div>
              </div>
              <div className="fact">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div><span className="k">WhatsApp</span><span className="v">{WHATSAPP_LABEL}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROVA */}
        <section className="section prova" id="reputacao">
          <div className="section__in">
            <div data-reveal>
              <p className="kicker">Reputação real</p>
              <h2 className="h2">Quem treina aqui recomenda.</h2>
            </div>
            <div className="prova__grid">
              <div className="score" data-reveal>
                <div className="score__num">{RATING}</div>
                <div className="score__stars">★★★★★</div>
                <div className="score__meta">{REVIEWS} avaliações</div>
                <div className="score__src">no Google</div>
              </div>
              <ul className="destaques" data-reveal>
                {DESTAQUES.map((d) => (
                  <li key={d}><Check />{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ESTRUTURA */}
        <section className="section" id="estrutura">
          <div className="section__in">
            <div data-reveal>
              <p className="kicker">Estrutura &amp; comodidades</p>
              <h2 className="h2">A gente cuida do que te faz voltar.</h2>
              <p className="lead">
                Facilidades que deixam o seu dia a dia mais simples — para você
                focar no treino.
              </p>
            </div>
            <div className="como__grid">
              {COMODIDADES.map((c) => (
                <div className="como" key={c.label} data-reveal>
                  <span className="como__ico"><Icon name={c.icon} /></span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
            <p className="como__note">* Consulte a disponibilidade dos serviços e comodidades na unidade.</p>
          </div>
        </section>

        {/* PLANOS */}
        <section className="section planos" id="planos">
          <div className="section__in">
            <div data-reveal>
              <p className="kicker">Planos</p>
              <h2 className="h2">Escolha o seu jeito de treinar.</h2>
              <p className="lead">
                Valores iguais em todas as unidades Start Life. Escolha o plano
                ideal e fale com a gente.
              </p>
            </div>
            <div className="planos__grid">
              {PLANOS.map((p) => (
                <div className={`plan ${p.destaque ? "plan--hot" : ""}`} key={p.nome} data-reveal>
                  {p.tag && <span className="plan__tag">{p.tag}</span>}
                  <div className="plan__name">{p.nome}</div>
                  <p className="plan__resumo">{p.resumo}</p>
                  <div className="plan__price">
                    <span className="cur">R$</span>
                    <span className="val">{p.preco}</span>
                    <span className="per">{p.unidade}</span>
                  </div>
                  <div className="plan__vista">{p.aVista || ""}</div>
                  <ul className="plan__itens">
                    {p.itens.map((it) => (
                      <li key={it}><Check />{it}</li>
                    ))}
                  </ul>
                  <a className={`btn ${p.destaque ? "btn-primary" : "btn-ghost"}`} href={waLink(`Olá! Quero o plano ${p.nome} da Start Life Vera Cruz.`)} target="_blank" rel="noopener noreferrer">
                    Quero o plano {p.nome}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="section" id="localizacao">
          <div className="section__in">
            <div data-reveal>
              <p className="kicker">Onde fica</p>
              <h2 className="h2">Pertinho de você, no Vera Cruz.</h2>
            </div>
            <div className="loc__grid">
              <div className="loc__card" data-reveal>
                <div className="loc__row">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.6" /></svg>
                  <div><span className="k">Endereço</span><span className="v">{ADDRESS}</span></div>
                </div>
                <div className="loc__row">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div><span className="k">Funcionamento</span><span className="v">{HORARIO}</span></div>
                </div>
                <div className="loc__row">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div><span className="k">Contato</span><span className="v">{WHATSAPP_LABEL}</span></div>
                </div>
                <div className="loc__actions">
                  <a className="btn btn-primary" href={waLink("Olá! Quero fazer uma visita à Start Life Vera Cruz.")} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
                  <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Como chegar</a>
                </div>
              </div>
              <div className="map" data-reveal>
                <iframe src={MAPS_EMBED} title="Mapa da Start Life Vera Cruz" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section cta">
          <div className="section__in" data-reveal>
            <h2 className="h2">Bora começar hoje?</h2>
            <p>Chama no WhatsApp, tira suas dúvidas e já agenda sua primeira visita.</p>
            <a className="btn" href={waLink("Olá! Quero começar na Start Life Vera Cruz.")} target="_blank" rel="noopener noreferrer">Falar no WhatsApp agora</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__in">
          <a className="brand" href="#top" aria-label="Start Life Academia">
            <svg className="bolt" viewBox="0 0 48 48" aria-hidden="true"><path d="M27 5 L11 27 H23 L20 43 L37 20 H25 Z" /></svg>
            <span className="wordmark"><b>STARTLIFE</b><span>ACADEMIA</span></span>
          </a>
          <div className="footer__links">
            <div className="footer__col">
              <h4>Navegação</h4>
              <a href="#estrutura">Estrutura</a>
              <a href="#planos">Planos</a>
              <a href="#localizacao">Localização</a>
            </div>
            <div className="footer__col">
              <h4>Contato</h4>
              <a href={waLink("Olá! Vim pelo site da Start Life Vera Cruz.")} target="_blank" rel="noopener noreferrer">{WHATSAPP_LABEL}</a>
              <p>{ADDRESS_SHORT}</p>
              <p>Goiânia — GO</p>
            </div>
            <div className="footer__col">
              <h4>Siga</h4>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <span>© 2026 Start Life Academia — Unidade Vera Cruz</span>
          <span>Goiânia, Goiás</span>
        </div>
      </footer>

      <Intro />
      <Motion />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
