// Conteúdo real da unidade Start Life Vera Cruz (Goiânia/GO).
// Nada inventado: preços, comodidades e avaliações vêm da rede e do Google.

export const UNIDADE = "Vera Cruz";
export const CIDADE = "Goiânia — GO";
export const ADDRESS =
  "Av. Gercina Borges Teixeira, Quadra 126 — Vera Cruz 2, Goiânia — GO, 74493-060";
export const ADDRESS_SHORT = "Av. Gercina Borges Teixeira, Q.126 — Vera Cruz 2";
export const MAPS_URL = "https://maps.app.goo.gl/MEh3XsYLq6n3c2227";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Av.%20Gercina%20Borges%20Teixeira%2C%20Quadra%20126%20Vera%20Cruz%202%2C%20Goi%C3%A2nia%20GO&output=embed";
export const INSTAGRAM = "https://www.instagram.com/startlifeacademia/";
export const INSTAGRAM_HANDLE = "@startlifeacademia";
export const WHATSAPP = "5562993434152";
export const WHATSAPP_LABEL = "(62) 99343-4152";
export const RATING = "4,5";
export const REVIEWS = "89";
export const HORARIO = "Aberto hoje · fecha 00h";

export function waLink(msg: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export type Plano = {
  nome: string;
  preco: string;
  unidade: string;
  aVista?: string;
  resumo: string;
  itens: string[];
  destaque?: boolean;
  tag?: string;
};

export const PLANOS: Plano[] = [
  {
    nome: "Mensal",
    preco: "139,00",
    unidade: "/mês",
    resumo: "Mais liberdade, sem compromisso de longo prazo.",
    itens: [
      "Acesso ilimitado à academia",
      "Todas as modalidades inclusas",
      "Acesso à unidade da matrícula",
    ],
  },
  {
    nome: "Recorrente",
    preco: "129,00",
    unidade: "/mês",
    resumo: "Débito automático no cartão. Praticidade e economia.",
    itens: [
      "Acesso ilimitado à academia",
      "Todas as modalidades inclusas",
      "Acesso a todas as unidades",
      "Economize R$ 10 por mês",
    ],
  },
  {
    nome: "Semestral",
    preco: "119,00",
    unidade: "/mês em 6x",
    aVista: "ou R$ 714,00 à vista",
    resumo: "Mais tempo para construir hábitos e ver evolução.",
    itens: [
      "Acesso ilimitado à academia",
      "Todas as modalidades inclusas",
      "Acesso a todas as unidades",
      "Economize R$ 120 em 6 meses",
    ],
  },
  {
    nome: "Anual",
    preco: "109,90",
    unidade: "/mês em 12x",
    aVista: "ou R$ 1.318,80 à vista",
    resumo: "O melhor custo por mês para quem vai com tudo.",
    itens: [
      "Acesso ilimitado à academia",
      "Todas as modalidades inclusas",
      "Acesso a todas as unidades",
      "Economize R$ 349,20 no ano",
    ],
    destaque: true,
    tag: "Mais econômico",
  },
];

export type Comodidade = { label: string; icon: string };

// icon = chave para o SVG em components/icons
export const COMODIDADES: Comodidade[] = [
  { label: "Brinquedoteca com monitora", icon: "baby" },
  { label: "Estacionamento", icon: "car" },
  { label: "Vestiários e chuveiros quentes", icon: "shower" },
  { label: "Armários", icon: "locker" },
  { label: "App de acompanhamento de treinos", icon: "phone" },
  { label: "Rádio interativa", icon: "radio" },
  { label: "Acompanhamento nutricional", icon: "apple" },
  { label: "Loja de suplementos e acessórios", icon: "bag" },
];

export const DESTAQUES: string[] = [
  "Equipamentos novos e de alta qualidade",
  "Muitas máquinas de cardio",
  "Ambiente agradável e climatizado",
  "Equipe atenciosa e prestativa",
];
