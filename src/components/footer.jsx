import './footer.scss';

function Footer() {
  return (
    <section id='contact'>
      <div className='container'>
        <h2 data-i18n='contact'>Fale Conosco</h2>
        <div className='content'>
          <div className='map'>
            <p>Rua Jaceguai, 208 - Prado, Belo Horizonte - MG, 30411-040</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0746607873043!2d-43.96161992302677!3d-19.92125838146515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69741bd3cc4f9%3A0x8ea06e3faffc31e8!2sR.%20Jaceguai%2C%20208%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-040!5e0!3m2!1spt-BR!2sbr!4v1721692672204!5m2!1spt-BR!2sbr'
              width='600'
              height='450'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='social'>
            <p>Telefone: (31) 3267-0301</p>
            <p>Whatsapp: (31) 3267-0301</p>
            <p>
              Instagram:
              <a
                href='https://www.instagram.com/focusarquitetura/'
                aria-label='Instagram Focus Arquitetuira e Engenharia'
                title='Instagram Focus Arquitetuira e Engenharia'
                target='_blank'
                rel='noopener'
              >
                @focusarquitetura
              </a>
            </p>
            <p>
              Linkedin:
              <a
                href='https://www.linkedin.com/company/focusarquiteturaeengenharia'
                aria-label='Linkedin Focus Arquitetuira e Engenharia'
                title='Linkedin Focus Arquitetuira e Engenharia'
                target='_blank'
                rel='noopener'
              >
                @focusarquiteturaeengenharia
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
