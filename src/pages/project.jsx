import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Whatsapp from '../components/whatsapp';
import projectsJson from '../utils/projects.json';
import './project.scss';

function Project() {
  const { type, id } = useParams();
  const [index, setIndex] = useState(-1);

  var slides = Array.from(
    { length: projectsJson[type].projects[id].photos },
    (_, i) => ({
      src: `${projectsJson[type].projects[id].url}${i + 1}${
        projectsJson[type].projects[id].extension
      }`,
    })
  );

  return (
    <>
      <Header />
      <main>
        <section className='project'>
          <div className='container'>
            <h1>{projectsJson[type].projects[id].name}</h1>
            <p>{projectsJson[type].projects[id].desc}</p>

            <div className='grid'>
              {slides.map((slide, i) => (
                <div key={i} className='item' onClick={() => setIndex(i)}>
                  <img
                    src={slide.src}
                    alt={`${projectsJson[type].projects[id].name} - Photo ${
                      i + 1
                    }`}
                  />
                </div>
              ))}
            </div>

            <Lightbox
              index={index}
              slides={slides}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </div>
        </section>
        <Whatsapp />
        <Footer />
      </main>
    </>
  );
}

export default Project;
