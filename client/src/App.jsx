export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: 20, background: "#0a0a0a", color: "#fff" }}>
        <h1>NavalCell</h1>
        <p>Assistência técnica em celulares</p>
      </header>

      <main style={{ padding: 20 }}>
        <h2>Nossos serviços</h2>
        <ul>
          <li>Troca de tela</li>
          <li>Troca de bateria</li>
          <li>Conserto de placa</li>
          <li>Atualização de software</li>
        </ul>

        <button
          style={{
            marginTop: 20,
            padding: "12px 20px",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 16
          }}
        >
          Solicitar orçamento
        </button>
      </main>

      <footer style={{ padding: 20, background: "#f0f0f0" }}>
        <p>© {new Date().getFullYear()} NavalCell</p>
      </footer>
    </div>
  );
}
