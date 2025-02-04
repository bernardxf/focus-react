import './header.scss';
import InstagramLogo from '/images/instagram.png';
import LinkedinLogo from '/images/linkedin.png';
import Logo from '/images/logo.png';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav>
          <a
            href='#home'
            aria-label='focus'
            title='focus'
            aria-labelledby='focus'
            className='logo'
          >
            <img src={Logo} alt='logo focus' className='logo' />
            <span>
              ARQUITETURA
              <br />
              ENGENHARIA
            </span>
          </a>
          <a
            href='#'
            id='icon-menu'
            className='icon-menu'
            title='icon-menu'
            aria-label='icon-menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul id='nav-ul'>
            <li>
              <a href='#home' data-i18n='home'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' data-i18n='about'>
                A Focus
              </a>
            </li>
            <li>
              <a href='#projects' data-i18n='projects'>
                Projetos
              </a>
            </li>
            <li>
              <a href='#contact' data-i18n='contact'>
                Fale Conosco
              </a>
            </li>
            <li>
              <div className='social'>
                <a
                  href='https://www.linkedin.com/company/focusarquiteturaeengenharia'
                  aria-label='Linkedin Focus Arquitetuira e Engenharia'
                  title='Linkedin Focus Arquitetuira e Engenharia'
                  target='_blank'
                  rel='noopener'
                >
                  <img
                    src={LinkedinLogo}
                    alt='Linkedin Focus Arquitetuira e Engenharia'
                  />
                </a>
                <a
                  href='https://www.instagram.com/focusarquitetura/'
                  aria-label='Instagram Focus Arquitetuira e Engenharia'
                  title='Instagram Focus Arquitetuira e Engenharia'
                  target='_blank'
                  rel='noopener'
                >
                  <img
                    src={InstagramLogo}
                    alt='Instagram Focus Arquitetuira e Engenharia'
                  />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
