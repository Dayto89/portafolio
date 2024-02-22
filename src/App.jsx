import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const lightGradientColors = [
    [36, 142, 208],
    [255, 255, 255]
  ];

  const darkGradientColors = [
    [0, 0, 0],
    [7, 10, 59]
  ];

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const updateNavBackgroundColor = () => {
      const nav = document.getElementById('mainNav');
      const scrollPosition = window.scrollY;
      const body = document.body;

      const gradientColors = isDarkMode ? darkGradientColors : lightGradientColors;

      const step = 1 / (gradientColors.length - 1);
      const colorIndex = Math.min(
        Math.floor(scrollPosition / (body.scrollHeight * step)),
        gradientColors.length - 2
      );
      const percentage =
        (scrollPosition - colorIndex * body.scrollHeight * step) /
        (body.scrollHeight * step);

      const colorStart = gradientColors[gradientColors.length - colorIndex - 1];
      const colorEnd = gradientColors[gradientColors.length - colorIndex - 2];

      const r = Math.round(colorStart[0] + (colorEnd[0] - colorStart[0]) * percentage);
      const g = Math.round(colorStart[1] + (colorEnd[1] - colorStart[1]) * percentage);
      const b = Math.round(colorStart[2] + (colorEnd[2] - colorStart[2]) * percentage);

      const bgColor = isDarkMode ? `rgb(${r},${g},${b})` : `rgb(${r},${g},${b})`;
      nav.style.backgroundColor = bgColor;
      body.style.backgroundColor = bgColor; // Aplica el color de fondo al body
    };

    updateNavBackgroundColor();
    window.addEventListener('scroll', updateNavBackgroundColor);

    return () => {
      window.removeEventListener('scroll', updateNavBackgroundColor);
    };
  }, [isDarkMode]);

  const modeClass = isDarkMode ? 'dark-mode' : 'light-mode';

  const handleOpenEdu1 = () => {
    const newWindow = window.open("https://certificates.academlo.com/en/verify/22163346106250");
    newWindow.focus();
  }

  const handleOpenEdu2 = () => {
    const newWindow = window.open("https://certificates.academlo.com/en/verify/12557749626009");
    newWindow.focus();
  }

  const handleOpenPro1 = () => {
    const newWindow = window.open("https://rick-and-morty-new.netlify.app");
    newWindow.focus();
  }

  const handleOpenPro2 = () => {
    const newWindow = window.open("https://pokemon-app-new.netlify.app");
    newWindow.focus();
  }

  const handleOpenPro3 = () => {
    const newWindow = window.open("https://crud-users-new.netlify.app");
    newWindow.focus();
  }

  const handleOpenPro4 = () => {
    const newWindow = window.open("https://galletas-fortuna.netlify.app");
    newWindow.focus();
  }

  const handleOpenSocial1 = () => {
    const newWindow = window.open("https://www.linkedin.com/in/daniel-dev-fullstack/");
    newWindow.focus();
  }

  const handleOpenSocial2 = () => {
    const newWindow = window.open("https://github.com/Dayto89");
    newWindow.focus();
  }

  return (
    <div className={`app ${modeClass}`}>
      <section id='home' className={`section__home`}>
        <div>
          <nav id='mainNav'>
            <div className='menu'>
            <div className={`nav__social ${modeClass}`}>

              <div className='social' onClick={handleOpenSocial1}><i class='bx bxl-linkedin'></i></div>
              <div className='social' onClick={handleOpenSocial2}><i class='bx bxl-github' ></i></div>

            </div>
            <div
              id='mode_white'
              className={`boton mode_white ${modeClass}`}
              onClick={changeMode}
              >
              {isDarkMode ? <i className='bx bxs-moon'></i> : <i className='bx bxs-sun'></i>}
            </div>
            <ul>
              <a href="#home">Home</a>
              <a href="#about">Sobre mí</a>
              <a href="#skills">Habilidades</a>
              <a href="#education">Educación</a>
              <a href="#proyects">Proyectos</a>
              <a href="#contac">Contacto</a>
            </ul>
            </div>
          </nav>
          <h1 className={`name ${modeClass}`}><strong>{'['}</strong> Daniel López <strong>{"]"}</strong></h1>
          <h2 className={`subtitle ${modeClass}`}>DESARROLLADOR WEB FULLSTACK!</h2>
        </div>
      </section>
      <section id='about' className={`section__about ${modeClass}`}>
        <h1 className={`about ${modeClass}`}>Sobre mí</h1>
        <p className={`about ${modeClass}`}>Mi nombre es Daniel Leonardo López Barón, tengo 21 años, soy desarrollador Full-Stack, mis motivaciones de cada día es seguir mejorando, buscar ser mejor que ayer, siempre buscando aprender de los errores del día anterior.</p>
        <a href="/CV_Daniel_L_L_B.pdf" download="CV_Daniel_L_L_B.pdf">
          <button className={`${modeClass}`}>Descargar CV</button>
        </a>
      </section>
      <section id='skills' className={`section__skills ${modeClass}`}>
        <div>
          <h1 className={modeClass}>Habilidades</h1>
          <div className={`container__skills ${modeClass}`}>
            <div className={`skill bg1`}>HTML5<i className='bx bxl-html5 bx-tada logo' ></i></div>
            <div className={`skill bg2`}>CSS3<i className='bx bxl-css3 bx-tada logo' ></i></div>
            <div className={`skill bg3`}>React<i className='bx bxl-react bx-tada logo' ></i></div>
            <div className={`skill bg4`}>JavaScript <i className='bx bxl-javascript bx-tada logo' ></i></div>
            <div className={`skill bg5`}>GitHub<i className='bx bxl-github bx-tada logo' ></i></div>
            <div className={`skill bg6`}>Node Js<i className='bx bxl-nodejs bx-tada logo' ></i></div>
          </div>
        </div>
      </section>
      <section id='education' className={`section__education ${modeClass}`}>
        <div>
          <h1 className={modeClass}>Educación</h1>
          <div className={`container__edu ${modeClass}`}>
            <div className={`edu ${modeClass}`} onClick={handleOpenEdu1}>
              <h2>Academlo</h2>
              <p>Fundamentos del Desarrollo Web</p>
              <img src="/images/academlo.jpg" alt="" />
            </div>
            <div className={`edu ${modeClass}`} onClick={handleOpenEdu2}>
              <h2>Academlo</h2>
              <p>Desarrollo de Aplicaciones Web con React</p>
              <img src="/images/academlo.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id='proyects' className={`section__proyects ${modeClass}`}>
        <div>
          <h1 className={modeClass}>Proyectos</h1>
          <div className={`container__proyects ${modeClass}`}>
            <div className={`proyect bgp1 ${modeClass}`} onClick={handleOpenPro1}>Rick And Morty</div>
            <div className={`proyect bgp2 ${modeClass}`} onClick={handleOpenPro2}>Pokédex</div>
            <div className={`proyect bgp3 ${modeClass}`} onClick={handleOpenPro3}>CRUD Users</div>
            <div className={`proyect bgp4 ${modeClass}`} onClick={handleOpenPro4}>Galletas de la fortuna</div>
          </div>
        </div>
      </section>
      <section id='contac' className={`section__contac ${modeClass}`}>
        <h1 className={modeClass}>Contacto</h1>
        <form action="mailto:danielbaron297@gmail.com" method="post" encType="text/plain">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default App;