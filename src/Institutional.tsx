import { ArrowRight, ArrowUpRight, House, MapPin, MessageCircle } from 'lucide-react';
import { asset, intents, money, properties, wa } from './data';

export const sections = [
  { slug: 'servicios', title: 'Servicios', lead: 'Compra, alquiler y venta en un mismo lugar.', items: ['Comprar una propiedad', 'Alquilar una propiedad', 'Vender una propiedad'] },
  { slug: 'propietarios', title: 'Para propietarios', lead: 'Un espacio para conversar sobre tu propiedad.', items: ['Venta', 'Alquiler', 'Primera consulta'] },
  { slug: 'tasaciones', title: 'Tasaciones', lead: 'Una futura sección para solicitar una evaluación.', items: ['Características del inmueble', 'Ubicación', 'Consulta personalizada'] },
  { slug: 'nosotros', title: 'Sobre Gaspar', lead: 'Atención local en Cruz del Eje.', items: ['Presentación profesional', 'Forma de trabajo', 'Contacto directo'] },
  { slug: 'zonas', title: 'Zonas', lead: 'Explorá Cruz del Eje y sus alrededores.', items: ['Cruz del Eje', 'Camino al Dique', 'Otras zonas a confirmar'] },
  { slug: 'preguntas', title: 'Preguntas frecuentes', lead: 'Respuestas simples antes de dar el próximo paso.', items: ['Disponibilidad de propiedades', 'Cómo coordinar una visita', 'Consultas sobre tasaciones'] },
  { slug: 'contacto', title: 'Contacto', lead: 'Un punto de encuentro para tu consulta.', items: ['WhatsApp', 'Correo electrónico', 'Ubicación a confirmar'] },
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
        <p>Así podría organizarse en la web institucional. Los contenidos definitivos se definirían con la inmobiliaria.</p>
      </div>
      <div className="institutional-list" aria-label={`Contenido previsto para ${section.title}`}>
        {section.items.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
      </div>
      {section.slug === 'contacto' ? (
        <div className="institutional-actions">
          <a className="button primary" href={wa(intents.visita)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Consultar por WhatsApp</a>
          <a className="text-link" href="mailto:gaspar.rednova@gmail.com">gaspar.rednova@gmail.com <ArrowUpRight size={16} /></a>
        </div>
      ) : (
        <div className="institutional-actions">
          <a className="button primary" href="#/propiedades">Ver propiedades de la demo <ArrowUpRight size={17} /></a>
        </div>
      )}
    </section>
  );
}

export function HomeLanding() {
  return (
    <>
      <section className="hero">
        <div className="hero-image"><img src={asset(properties[0].images[0])} alt="Parque y casa publicada en Camino al Dique, Cruz del Eje" fetchPriority="high" width="1500" height="1000" /></div>
        <div className="hero-shade" />
        <div className="hero-content container">
          <span className="eyebrow"><span className="small-line" /> CRUZ DEL EJE · CÓRDOBA</span>
          <h1>Hay un lugar<br />para tu <em>próxima historia.</em></h1>
          <p>Propiedades en Cruz del Eje y alrededores. Una forma simple de conocer opciones y empezar a conversar.</p>
          <div className="hero-buttons">
            <a className="button warm" href="#/propiedades">Ver propiedades <ArrowUpRight size={18} /></a>
            <a className="hero-owner" href="#/seccion/propietarios">Tengo una propiedad <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
      <section className="home-preview section container" aria-labelledby="home-preview-title">
        <div className="section-top">
          <div><span className="eyebrow">UNA MUESTRA DE LA DEMO</span><h2 id="home-preview-title">Explorá algunas propiedades.</h2><p>Precios y disponibilidad sujetos a confirmación.</p></div>
          <a className="text-link" href="#/propiedades">Ver catálogo <ArrowUpRight size={18} /></a>
        </div>
        <div className="home-preview-grid">
          {properties.filter(property => property.featured).slice(0, 3).map(property => (
            <a className="home-preview-card" href={`#/propiedad/${property.slug}`} key={property.id}>
              <img src={asset(property.images[0])} alt={`${property.type} publicada en ${property.address}`} loading="lazy" width="640" height="450" />
              <div><span><MapPin size={14} /> {property.zone} · {property.type}</span><h3>{property.address}</h3><strong>{money(property)}</strong><small>Consultar disponibilidad <ArrowUpRight size={14} /></small></div>
            </a>
          ))}
        </div>
      </section>
      <section className="home-next-step">
        <div className="container home-next-layout">
          <div><span className="eyebrow">ATENCIÓN LOCAL</span><h2>Conversemos sobre tu próximo paso.</h2><p>Comprar, alquilar o consultar por una propiedad.</p></div>
          <a className="button warm" href={wa(intents.visita)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Contactar por WhatsApp</a>
        </div>
      </section>
      <div className="home-demo-note container"><House size={17} /><p>Demo conceptual no oficial. Las otras secciones del menú muestran cómo podría organizarse la futura web institucional.</p></div>
    </>
  );
}
