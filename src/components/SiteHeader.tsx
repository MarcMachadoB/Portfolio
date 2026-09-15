type SiteHeaderProps = {
  isContactPage: boolean
}

function SiteHeader({ isContactPage }: SiteHeaderProps) {
  return (
    <header className="site-header container">
      <a href="#/" className="brand" aria-label="Ir a la página Sobre mí">
        MM<span>.</span>
      </a>
      <nav className="site-nav" aria-label="Navegación principal">
        <a href="#/" className={!isContactPage ? 'active' : ''}>
          Sobre mí
        </a>
        <a href="#/contacto" className={isContactPage ? 'active' : ''}>
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
