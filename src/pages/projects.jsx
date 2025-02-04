import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Whatsapp from '../components/whatsapp';
import projectsJson from '../utils/projects.json';
import './projects.scss';

function Projects() {
  const navigate = useNavigate();
  const { type } = useParams();

  return (
    <>
      <Header />
      <main>
        <section className='projects'>
          <div className='container'>
            <h1>Projetos {projectsJson[type].name}</h1>
            {projectsJson[type].projects.length > 0 && (
              <div className='items'>
                {Array.from(
                  { length: projectsJson[type].projects.length },
                  (_, i) => (
                    <button
                      className='item'
                      key={i}
                      onClick={() =>
                        navigate(`${projectsJson[type].projects[i].id}`)
                      }
                    >
                      <img
                        src={`${projectsJson[type].projects[i].url}1.jpg`}
                        alt='teste'
                      />
                      <h2>{projectsJson[type].projects[i].name}</h2>
                    </button>
                  )
                )}
              </div>
            )}
            {projectsJson[type].projects.length == 0 && (
              <h2>Nenhum projeto encontrado</h2>
            )}
          </div>
        </section>
        <Whatsapp />
        <Footer />
      </main>
    </>
  );
}

export default Projects;
