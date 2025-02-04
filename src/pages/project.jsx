import 'lightgallery.js/dist/css/lightgallery.css';
import PT from 'prop-types';
import {
  LightgalleryItem,
  LightgalleryProvider,
  useLightgallery,
} from 'react-lightgallery';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Whatsapp from '../components/whatsapp';
import projectsJson from '../utils/projects.json';
import './project.scss';

function Project() {
  const { type, id } = useParams();

  const PhotoItem = ({ image, thumb, group, className }) => (
    <div className={className}>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} style={{ width: '100%' }} />
      </LightgalleryItem>
    </div>
  );
  PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired,
    className: PT.string,
  };

  const OpenButtonWithHook = ({ className, index, ...rest }) => {
    const { openGallery } = useLightgallery();
    return (
      <button
        {...rest}
        onClick={() => openGallery('group2', index)}
        className={['button is-primary', className || ''].join(' ')}
      />
    );
  };

  OpenButtonWithHook.propTypes = {
    className: PT.string,
    index: PT.number,
  };

  return (
    <>
      <Header />
      <main>
        <section className='project'>
          <div className='container'>
            <h1>{projectsJson[type].projects[id].name}</h1>
            <p>{projectsJson[type].projects[id].desc}</p>
            <LightgalleryProvider>
              <div className='items'>
                {Array.from(
                  { length: projectsJson[type].projects[id].photos },
                  (_, i) => (
                    <PhotoItem
                      key={i}
                      image={`${projectsJson[type].projects[id].url}${
                        i + 1
                      }.jpg`}
                      className={`item item-${i + 1}`}
                    />
                  )
                )}
              </div>
            </LightgalleryProvider>
          </div>
        </section>
        <Whatsapp />
        <Footer />
      </main>
    </>
  );
}

export default Project;
