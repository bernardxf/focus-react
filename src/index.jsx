import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './pages/home.jsx';
import Project from './pages/project.jsx';
import Projects from './pages/projects.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/:type' element={<Projects />} />
      <Route path='/projects/:type/:id' element={<Project />} />
    </Routes>
  </BrowserRouter>
);
