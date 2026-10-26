type Props = { name: string };

const paths: Record<string, React.ReactNode> = {
  baby: (
    <>
      <circle cx="12" cy="6" r="2.4" />
      <path d="M6 20c1.5-4 4-6 6-6s4.5 2 6 6M9 12l3 2 3-2" />
    </>
  ),
  car: (
    <>
      <path d="M4 13l1.6-4.2A2 2 0 0 1 7.5 7.5h9a2 2 0 0 1 1.9 1.3L20 13" />
      <rect x="3" y="13" width="18" height="5" rx="1.4" />
      <circle cx="7.5" cy="18.5" r="1.3" />
      <circle cx="16.5" cy="18.5" r="1.3" />
    </>
  ),
  shower: (
    <>
      <path d="M6 10V6a2 2 0 0 1 2-2h2M6 10h8M10 10l-2 0" />
      <path d="M8 14v1M11 15v1M14 14v1M9.5 18v1M12.5 18v1" />
    </>
  ),
  locker: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <path d="M12 3v18M9 7h0.01M15 7h0.01" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  radio: (
    <>
      <rect x="3" y="9" width="18" height="10" rx="2" />
      <circle cx="16" cy="14" r="2.3" />
      <path d="M7 13h3M7 16h3M8 9l8-4" />
    </>
  ),
  apple: (
    <>
      <path d="M12 8c-2-2-6-1.6-6 3 0 3.5 2.6 7 4.3 7 .9 0 1.1-.5 1.7-.5s.8.5 1.7.5C15.4 18 18 14.5 18 11c0-4.6-4-5-6-3Z" />
      <path d="M12 8c0-2 1-3 2.5-3.2" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 11a1.5 1.5 0 0 1-1.5 1.3H8.5A1.5 1.5 0 0 1 7 19L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
};

export default function Icon({ name }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
