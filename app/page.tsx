export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: '0 auto',
        padding: '14vh 24px 20vh',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(44px, 8vw, 76px)',
          fontWeight: 500,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          marginBottom: 14,
        }}
      >
        Ignas Ausiejus
      </h1>
      <p style={{ maxWidth: '46ch' }}>
        Frontend engineer building design systems and white-label products —
        interfaces other companies ship as their own.
      </p>
      <p style={{ color: 'var(--muted)', marginTop: 10 }}>Vilnius</p>
    </main>
  );
}
