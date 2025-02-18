import './whatsapp.scss';

import Logo from '/images/icon-whatsapp.png';

function Whatsapp() {
  return (
    <a
      href='https://wa.me/3132670301?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Focus%20Arquitetura%20e%20Engenharia.'
      className='whatsapp'
      title='Whatsapp Focus Arquitetuira e Engenharia'
      aria-label='Whatsapp Focus Arquitetuira e Engenharia'
      target='_blank'
      rel='noopener'
    >
      <img src={Logo} alt='whatsapp focus' />
    </a>
  );
}

export default Whatsapp;
