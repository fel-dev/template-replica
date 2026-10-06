function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div style={{ textAlign: 'center' }}>
              <h3>Jessicka Soares</h3>
              <p>Psicóloga Clínica • CRP 05/68948</p>
            </div>
          </div>
          <nav className="footer-links" aria-label="Links legais">
            <a href="/termo-de-uso.html">Termos de Uso</a>
            <a href="/politica-de-privacidade.html">
              Política de Privacidade
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <img
            src="/images/logo-favicon-s-dark.jpeg"
            alt="Logo Jessicka Soares"
            width={250}
            style={{
              display: 'block',
              margin: '0 auto',
              borderRadius: '100px',
            }}
          />
          <p>© 2026 Jessicka Soares. Todos os direitos reservados.</p>
          <p className="cnpj" hidden>
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
