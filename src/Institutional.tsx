import { ArrowRight, ArrowUpRight, Building2, House, KeyRound, MapPin } from 'lucide-react';

export const sections = [
  { slug: 'propiedades', title: 'Propiedades', lead: 'Un espacio para descubrir inmuebles en venta y alquiler.', items: ['Casas y departamentos', 'Terrenos', 'Filtros por tipo y ubicación'] },
  { slug: 'servicios', title: 'Servicios', lead: 'Cada operación tendrá un punto de partida claro.', items: ['Comprar', 'Alquilar', 'Vender'] },
  { slug: 'propietarios', title: 'Para propietarios', lead: 'Una sección para quienes quieran ofrecer un inmueble.', items: ['Presentar una propiedad', 'Conocer el proceso', 'Solicitar una consulta'] },
  { slug: 'tasaciones', title: 'Tasaciones', lead: 'Un lugar para explicar cómo solicitar una evaluación.', items: ['Tipo de inmueble', 'Ubicación', 'Características principales'] },
  { slug: 'nosotros', title: 'Sobre Guillermo', lead: 'Una presentación profesional breve.', items: ['Quién es', 'Cómo trabaja', 'Zona de atención'] },
  { slug: 'zonas', title: 'Zonas', lead: 'Información local para orientar cada búsqueda.', items: ['Cruz del Eje', 'Alrededores', 'Zonas por confirmar'] },
  { slug: 'preguntas', title: 'Preguntas frecuentes', lead: 'Respuestas claras para las dudas habituales.', items: ['Disponibilidad', 'Visitas', 'Documentación'] },
  { slug: 'contacto', title: 'Contacto', lead: 'Los canales de consulta se agregarán más adelante.', items: ['Canales de atención', 'Horarios', 'Ubicación'] },
] as const;

export type InstitutionalSection = (typeof sections)[number];

export function InstitutionalPage({ section }: { section: InstitutionalSection }) {
  return (
    <section className="institutional-page container" aria-labelledby="institutional-title">
      <a className="text-link" href="#/"><ArrowRight className="back-arrow" size={17} /> Volver al inicio</a>
      <div className="institutional-intro">
        <span className="eyebrow">WEB INSTITUCIONAL · VISTA DE DEMOSTRACIÓN</span>
        <h1 id="institutional-title">{section.title}</h1>
        <p>{section.lead}</p>
      </div>
      <div className="demo-notice" role="note">
        <strong>Esta sección todavía es una demo.</strong>
        <p>La estructura y el contenido final se definirán con Guillermo. Por ahora no hay propiedades ni datos de contacto confirmados para publicar.</p>
      </div>
      <div className="institutional-list" aria-label={`Contenido previsto para ${section.title}`}>
        {section.items.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
      </div>
      {section.slug === 'contacto' && <p className="contact-pending">Teléfono, correo y dirección: pendientes de confirmación.</p>}
      <div className="institutional-actions"><a className="button primary" href="#/">Volver a la portada <ArrowUpRight size={17} /></a></div>
    </section>
  );
}

const steps = [
  { icon: House, title: 'Propiedades', text: 'Una selección de inmuebles cuando el inventario esté confirmado.', href: '#/seccion/propiedades' },
  { icon: KeyRound, title: 'Servicios', text: 'Compra, alquiler y venta explicados con sencillez.', href: '#/seccion/servicios' },
  { icon: Building2, title: 'Para propietarios', text: 'Un recorrido claro para ofrecer una propiedad.', href: '#/seccion/propietarios' },
] as const;

export function HomeLanding() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content container">
          <div className="hero-copy">
            <span className="eyebrow"><span className="small-line" /> GUILLERMO IRACET · CRUZ DEL EJE</span>
            <h1>Hay un lugar para tu <em>próxima historia.</em></h1>
            <p>Una propuesta web para explorar propiedades y encontrar el próximo paso con claridad.</p>
            <div className="hero-buttons">
              <a className="button warm" href="#/seccion/propiedades">Conocer la propuesta <ArrowUpRight size={18} /></a>
              <a className="hero-owner" href="#/seccion/servicios">Ver servicios <ArrowUpRight size={17} /></a>
            </div>
            <span className="hero-status">Demo en desarrollo · Contenidos sujetos a confirmación</span>
          </div>
          <div className="hero-architecture" aria-hidden="true">
            <div className="architecture-sky" />
            <div className="architecture-house">
              <div className="architecture-window" />
              <div className="architecture-door" />
            </div>
            <div className="architecture-path" />
            <div className="architecture-caption"><MapPin size={14} /> CRUZ DEL EJE · CÓRDOBA</div>
          </div>
        </div>
      </section>
      <section className="home-preview section container" aria-labelledby="home-preview-title">
        <div className="section-top">
          <div><span className="eyebrow">LA FUTURA WEB INSTITUCIONAL</span><h2 id="home-preview-title">Lo esencial, en un solo lugar.</h2><p>Estas secciones muestran cómo podría organizarse el sitio definitivo.</p></div>
        </div>
        <div className="home-preview-grid">
          {steps.map(({ icon: Icon, title, text, href }) => (
            <a className="home-preview-card" key={title} href={href}>
              <Icon size={28} strokeWidth={1.3} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span>Ver sección <ArrowUpRight size={16} /></span>
            </a>
          ))}
        </div>
      </section>
      <section className="home-next-step">
        <div className="container home-next-layout">
          <div><span className="eyebrow">UNA DEMO, UN PUNTO DE PARTIDA</span><h2>Una presencia digital preparada para crecer.</h2><p>Textos, propiedades y medios de contacto se agregarán después de validarlos con Guillermo.</p></div>
          <a className="button warm" href="#/seccion/contacto">Ver contacto de muestra <ArrowUpRight size={18} /></a>
        </div>
      </section>
    </>
  );
}
