import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import TestimonialPage from './pages/TestimonialPage.jsx';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/project' element={<ProjectPage></ProjectPage>}></Route>
          <Route path='/service' element={<ServicePage></ServicePage>}></Route>
          <Route path='/team' element={<TeamPage></TeamPage>}></Route>
          <Route path='/testimonial' element={<TestimonialPage></TestimonialPage>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;