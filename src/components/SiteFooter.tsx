function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="footer-brand">
            <div className="text-center">
              <h3 className="text-2xl text-accent">Jessicka Soares</h3>
              <p className="text-sm text-muted-foreground">
                Psicóloga Clínica • CRP 05/68948
              </p>
            </div>
          </div>
          <nav
            className="flex gap-6 text-sm"
            aria-label="Links legais"
          >
            <a className="text-muted-foreground transition-colors duration-300 ease-[ease] hover:text-accent" href="/termo-de-uso.html">Termos de Uso</a>
            <a className="text-muted-foreground transition-colors duration-300 ease-[ease] hover:text-accent" href="/politica-de-privacidade.html">
              Política de Privacidade
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <img
            src="/images/logo-favicon-s-dark.jpeg"
            alt="Logo Jessicka Soares"
            width={250}
            className="mx-auto mb-0 block rounded-full"
          />
          <p className="text-sm text-muted-foreground">
            © 2026 Jessicka Soares. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-muted-foreground" hidden>
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
