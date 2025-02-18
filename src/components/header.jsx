import { Link } from 'react-router-dom';
import './header.scss';
import InstagramLogo from '/images/instagram.png';
import LinkedinLogo from '/images/linkedin.png';
import Logo from '/images/logo.png';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav>
          <Link
            to={{ pathname: '/', hash: '#home' }}
            aria-label='focus'
            title='focus'
            aria-labelledby='focus'
            className='logo'
          >
            <img
              src={Logo}
              alt='Focus Arquitetura e Engenharia company logo'
              className='logo'
            />
            <span>
              ARQUITETURA
              <br />
              ENGENHARIA
            </span>
          </Link>
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
              <Link to={{ pathname: '/', hash: '#home' }} data-i18n='home'>
                Home
              </Link>
            </li>
            <li>
              <Link to={{ pathname: '/', hash: '#about' }} data-i18n='about'>
                A Focus
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: '/', hash: '#projects' }}
                data-i18n='projects'
              >
                Projetos
              </Link>
            </li>
            <li>
              <a
                href='https://wa.me/3132670301?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Focus%20Arquitetura%20e%20Engenharia.'
                data-i18n='contact'
                title='Fale Conosco'
                aria-label='Fale Conosco'
                target='_blank'
                rel='noopener'
              >
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
