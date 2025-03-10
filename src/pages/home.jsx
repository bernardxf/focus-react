import Footer from '../components/footer';
import Header from '../components/header';
import Whatsapp from '../components/whatsapp';
import './home.scss';

import { useNavigate } from 'react-router-dom';
import ImgCover from '/images/bg.jpg';
import ImgProj4 from '/images/projects/com/barreiro/1.jpg';
import ImgProj2 from '/images/projects/ind/pesqueiro/1.png';
import ImgProj1 from '/images/projects/ins/correios/4.png';
import ImgProj3 from '/images/projects/res/falcatas/1.png';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <section id='home'>
          <img
            src={ImgCover}
            alt='Focus Architecture company building exterior'
          />
        </section>
        <section id='about'>
          <div className='container'>
            <h2 data-i18n='about'>A Focus</h2>
            <p data-i18n='aboutDescription'>
              Empresa especializada no desenvolvimento e coordenação de
              projetos, está situada em Belo Horizonte, no estado de Minas
              Gerais, Brasil, onde iniciou as suas atividade no ano de 2005. A
              Focus possui atuação diversificada no mercado, com destaque para
              projetos no setor industrial, mineral e comercial, tanto para
              iniciativa provada quanto para o poder público. O trabalho
              integrado entra a arquitetura e demais disciplinas da engenharia
              resulta em soluções compatibilizadas que contibuem para obras mais
              eficientes. A empresa possui corpo técnico multidisciplinar que
              prima pelo pelno atendimento às demandas de seus clientes.
            </p>
          </div>
        </section>
        <section id='projects'>
          <div className='container'>
            <h2 data-i18n='projects'>Projetos</h2>
            <div className='project-grid'>
              <div className='project' onClick={() => navigate('/projects/1')}>
                <img
                  src={ImgProj1}
                  alt='Institutional architecture project showcase'
                />
                <h3>Institucional</h3>
              </div>
              <div className='project' onClick={() => navigate('/projects/2')}>
                <img
                  src={ImgProj2}
                  alt='Industrial architecture project showcase'
                />
                <h3>Industrial</h3>
              </div>
              <div className='project' onClick={() => navigate('/projects/3')}>
                <img
                  src={ImgProj3}
                  alt='Residential architecture project showcase'
                />
                <h3>Residencial</h3>
              </div>
              <div className='project' onClick={() => navigate('/projects/4')}>
                <img
                  src={ImgProj4}
                  alt='Commercial architecture project showcase'
                />
                <h3>Comercial</h3>
              </div>
            </div>
          </div>
        </section>
        <Whatsapp />
        <Footer />
      </main>
    </>
  );
}

export default Home;
