type SiteHeaderProps = {
  isContactPage: boolean
  isProjectsPage: boolean
  isCvPage: boolean
}

function SiteHeader({ isContactPage, isProjectsPage, isCvPage }: SiteHeaderProps) {
  return (
    <header className="site-header container d-flex align-items-center justify-content-between">
      <a href="#/" className="brand" aria-label="Ir a la página Sobre mí">
        MM<span>.</span>
      </a>
      <nav className="site-nav d-flex align-items-center gap-2" aria-label="Navegación principal">
        <a href="#/" className={!isContactPage && !isProjectsPage && !isCvPage ? 'active' : ''}>
          Sobre mí
        </a>
        <a href="#/cv" className={isCvPage ? 'active' : ''}>
          CV
        </a>
        <a href="#/contacto" className={isContactPage ? 'active' : ''}>
          Contacto
        </a>
        <a href="#/proyectos" className={isProjectsPage ? 'active' : ''}>
          Proyectos
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
