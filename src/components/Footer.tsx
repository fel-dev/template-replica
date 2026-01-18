const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl text-accent mb-2">Tatiana Pacher</p>
            <p className="text-muted-foreground text-sm">
              Psicóloga Clínica • CRP XX/XXXXX
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tatiana Pacher. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
