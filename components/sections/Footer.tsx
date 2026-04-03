export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Large watermark */}
        <div
          className="font-display text-[clamp(4rem,14vw,10rem)] font-extrabold leading-none tracking-[-0.04em] text-white/[0.02] select-none pointer-events-none"
          aria-hidden="true"
        >
          CIAVORA
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-[0.12em] text-text-primary">
              CIAVORA
            </span>
            <p className="text-text-muted text-sm mt-1">
              Software a medida que acelera tu negocio.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.1em] text-text-muted">
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
