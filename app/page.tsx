import Image from "next/image";
import { GlowLink } from "./GlowLink";
import { RandomSwapLink } from "./RandomSwapLink";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  { title: "Store · Sound to God", type: "UI/UX · E-commerce", image: "/projects/29-hd.webp", href: "https://www.behance.net/gallery/94759109/Music-player-mobile-app" },
  { title: "Sound to God · Store", type: "Web design · Front-end", image: "/projects/28-hd.webp", href: "http://www.loja.soundtogod.com/" },
  { title: "Sound to God · Play", type: "Player · Front-end", image: "/projects/27-hd.webp", href: "https://github.com/xWeet777x/Player777" },
  { title: "Sound to God", type: "Brand · Website", image: "/projects/26-hd.webp", href: "http://www.soundtogod.com" },
  { title: "777 · iOS App", type: "Product design · UI/UX", image: "/projects/23-hd.webp", href: "https://www.behance.net/gallery/30852557/777-IOS-9-UIUX-App-Design" },
  { title: "Márcia Coriolano", type: "Identidade visual", image: "/projects/22-hd.webp", href: "https://br.pinterest.com/pin/13370130121934512/" },
  { title: "Andressa Carvalho", type: "Direção de arte", image: "/projects/21-hd.webp", href: "https://br.pinterest.com/pin/13370130121934509/" },
  { title: "Tiago Imazio", type: "Identidade visual", image: "/projects/25-hd.webp", href: "http://br.pinterest.com/pin/13370130121934484/" },
];

const services = [
  { number: "01", title: "UI / UX Design", text: "Interfaces claras, funcionais e visualmente marcantes, pensadas para pessoas reais." },
  { number: "02", title: "Front-end", text: "Sites responsivos com HTML, CSS e atenção obsessiva aos detalhes da experiência." },
  { number: "03", title: "Branding", text: "Identidades visuais, peças digitais e impressas que transformam ideias em presença." },
];

const socials = [
  ["Behance", "http://www.behance.net/xweet777x"],
  ["GitHub", "https://github.com/xWeet777x/"],
  ["LinkedIn", "http://br.linkedin.com/in/weet777"],
  ["Instagram", "http://instagram.com/weet777"],
];

const whatsappUrl = "https://api.whatsapp.com/send?phone=5521981004038&text=Ol%C3%A1%2C%20Josemar%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <div className="site-shell">
        <header className="nav">
          <a className="brand" href="#top" aria-label="Início">Josemar<br />dos Santos</a>
          <nav aria-label="Navegação principal">
            <RandomSwapLink href="#sobre" text="Sobre" />
            <RandomSwapLink href="#projetos" text="Projetos" />
            <RandomSwapLink href="#experiencia" text="Experiência" />
            <RandomSwapLink href="#contato" text="Contato" />
          </nav>
          <GlowLink label="Vamos conversar" className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" />
        </header>

        <section className="hero" id="top">
          <div className="orbit orbit-one" />
          <div className="eyebrow">… / designer & developer / rj …</div>
          <div className="hero-title">
            <h1><span>UI/UX</span><span>Designer</span></h1>
            <h1 className="title-right"><span>& Front-end</span><span>Developer</span></h1>
          </div>
          <div className="hero-bottom">
            <p>Eu transformo ideias em experiências digitais <em>claras, funcionais e bonitas</em> — do conceito ao código.</p>
            <a className="pill-button" href="#projetos">Ver projetos <span>↓</span></a>
          </div>
          <div className="social-row">
            {socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <span>↗</span></a>)}
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="section-label" data-reveal="text">… / sobre mim …</div>
          <div className="about-intro">
            <p data-reveal="text">Olá, sou Josemar — também conhecido como Weet.</p>
            <h2 data-reveal="text" data-delay="1">Design com intenção.<br /><em>Código com precisão.</em></h2>
          </div>
          <div className="about-grid">
            <div className="portrait-wrap" data-reveal="image">
              <div className="orbit orbit-two" />
              <Image src="/josemar-hd.webp" alt="Josemar dos Santos" width={1568} height={1568} sizes="(max-width: 900px) 220px, 300px" quality={95} />
              <span>Rio de Janeiro<br />Brasil</span>
            </div>
            <div className="about-copy">
              <p data-reveal="text">Sou formado em Web Design e Design Gráfico pela Universidade Castelo Branco. Há mais de 10 anos desenvolvo websites, interfaces e identidades visuais.</p>
              <p data-reveal="text" data-delay="1">Meu trabalho une facilidade de uso, otimização e uma estética que revela a personalidade de cada projeto — no digital e no impresso.</p>
              <a data-reveal="text" data-delay="2" href="/portfolio-josemar-dos-santos.pdf" target="_blank" rel="noreferrer">Baixar portfólio em PDF <span>↗</span></a>
            </div>
          </div>
          <div className="services">
            {services.map(item => (
              <article key={item.number} data-reveal="card" data-delay={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" id="projetos">
          <div className="section-heading">
            <div className="section-label" data-reveal="text">… / projetos selecionados …</div>
            <h2 data-reveal="text" data-delay="1">Trabalho<span>↘</span></h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a className={`project-card card-${index + 1}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-image" data-reveal="image"><Image src={project.image} alt={project.title} width={2000} height={2000} sizes="(max-width: 900px) calc(100vw - 40px), 46vw" quality={95} /></div>
                <div className="project-meta" data-reveal="text" data-delay="1"><span>0{index + 1}</span><div><h3>{project.title}</h3><p>{project.type}</p></div><b>↗</b></div>
              </a>
            ))}
          </div>
        </section>

        <section className="experience" id="experiencia">
          <div className="section-label" data-reveal="text">… / experiência …</div>
          <h2 data-reveal="text" data-delay="1">Mais de uma década<br />criando <em>com propósito.</em></h2>
          <div className="timeline">
            <article data-reveal="card"><span>2015 — hoje</span><h3>Freelancer</h3><p>UI/UX Designer & Front-End Developer</p><b>Websites · Interfaces · Branding</b></article>
            <article className="active" data-reveal="card" data-delay="1"><span>2014 — 2015</span><h3>Copy & Print</h3><p>Designer Gráfico</p><b>Direção de arte · Identidade · Social</b></article>
            <article data-reveal="card" data-delay="2"><span>2009 — 2014</span><h3>Gráfica Mafes</h3><p>Designer Gráfico</p><b>Editorial · Produção · Atendimento</b></article>
          </div>
          <div className="skills" data-reveal="text">
            <span>HTML5 / CSS3</span><span>UI / UX Design</span><span>WordPress</span><span>Photoshop</span><span>Illustrator</span><span>CorelDRAW</span><span>Fotomanipulação</span>
          </div>
        </section>

        <footer id="contato">
          <div className="orbit orbit-three" />
          <div className="section-label" data-reveal="text">… / contato …</div>
          <div className="footer-title"><h2 data-reveal="text">Tem uma ideia?</h2><h2 data-reveal="text" data-delay="1"><em>Vamos criar.</em></h2></div>
          <div className="footer-grid">
            <a className="contact-button" data-reveal="card" href={whatsappUrl} target="_blank" rel="noreferrer">Iniciar conversa <span>↗</span></a>
            <div data-reveal="text" data-delay="1"><small>E-mail</small><a href="mailto:contato@josemardossantos.com">contato@josemardossantos.com</a></div>
            <div data-reveal="text" data-delay="2"><small>WhatsApp</small><a href="tel:+5521981004038">+55 21 98100-4038</a></div>
          </div>
          <div className="footer-bottom" data-reveal="text"><span>© 2026 Josemar dos Santos</span><div>{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div><a href="#top">Voltar ao topo ↑</a></div>
        </footer>
      </div>
    </main>
  );
}
