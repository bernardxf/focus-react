import './whatsapp.scss';

import Logo from '/images/icon-whatsapp.png';

function Whatsapp() {
  return (
    <a
      href='#'
      className='whatsapp'
      title='Whatsapp Focus Arquitetuira e Engenharia'
      aria-label='Whatsapp Focus Arquitetuira e Engenharia'
    >
      <img src={Logo} alt='whatsapp focus' />
    </a>
  );
}

export default Whatsapp;
