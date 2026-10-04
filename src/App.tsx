import { useEffect, useState } from 'react';
import { ArrowUpRight, House, Menu, X } from 'lucide-react';
import { HomeLanding, InstitutionalPage, sections } from './Institutional';
import './styles.css';
import './institutional.css';

const demoNotice = 'Demo conceptual no oficial. Contenidos y datos definitivos pendientes de confirmación.';

function sectionFromHash(hash: string) {
  const slug = hash.startsWith('#/seccion/') ? hash.slice('#/seccion/'.length) :
    hash.startsWith('#/propiedad/') || hash === '#/propiedades' || hash === '#propiedades' ? 'propiedades' : '';
  return sections.find(section => section.slug === slug);
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [menuOpen, setMenuOpen] = useState(false);
  const section = sectionFromHash(hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = section
      ? `${section.title} | Guillermo Iracet · Demo`
      : 'Guillermo Iracet | Demo inmobiliaria en Cruz del Eje';
  }, [section]);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#contenido" onClick={event => { event.preventDefault(); document.getElementById('contenido')?.focus(); }}>Saltar al contenido</a>
      <div className="demo-strip"><span>{demoNotice}</span><span>CRUZ DEL EJE · CÓRDOBA</span></div>
      <header className="header">
        <a href="#/" className="brand" aria-label="Guillermo Iracet, inicio" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><House strokeWidth={1.2} /></span>
          <span><strong>Guillermo Iracet</strong><small>PROPUESTA INMOBILIARIA · CRUZ DEL EJE</small></span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}<span>Menú</span>
        </button>
        <nav id="site-menu" className={menuOpen ? 'navigation open' : 'navigation'} hidden={!menuOpen} aria-label="Secciones de la web">
          <a href="#/" onClick={() => setMenuOpen(false)}>Inicio</a>
          {sections.map(item => (
            <a key={item.slug} href={`#/seccion/${item.slug}`} onClick={() => setMenuOpen(false)}>
              {item.title}<span>Demo</span>
            </a>
          ))}
        </nav>
      </header>
      {menuOpen && <button className="menu-backdrop" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)} />}
      <main id="contenido" tabIndex={-1}>
        {section ? <InstitutionalPage section={section} /> : <HomeLanding />}
      </main>
      <footer className="footer">
        <div className="container footer-top">
          <a href="#/" className="brand"><span className="brand-mark"><House strokeWidth={1.2} /></span><span><strong>Guillermo Iracet</strong><small>DEMO INSTITUCIONAL</small></span></a>
          <a className="text-link" href="#/seccion/propiedades">Ver sección Propiedades <ArrowUpRight size={16} /></a>
        </div>
        <div className="container footer-bottom">
          <p>{demoNotice} No se muestran propiedades ni datos de contacto hasta su validación.</p>
          <a href={`${import.meta.env.BASE_URL}fuentes.html`} target="_blank" rel="noopener noreferrer">Fuentes y alcance <ArrowUpRight size={14} /></a>
          <span>© 2026 · Demo conceptual</span>
        </div>
      </footer>
    </>
  );
}
