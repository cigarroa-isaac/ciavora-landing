export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-semibold tracking-[0.08em] text-text-primary">
              CIAVORA
            </span>
            <p className="text-text-muted text-sm mt-1">
              Software a medida que acelera tu negocio.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Ciavora. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
