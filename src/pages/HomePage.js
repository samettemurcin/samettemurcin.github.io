import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Volunteering from '../components/Volunteering';
import Skills from '../components/Skills';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo || (location.hash ? location.hash.replace('#', '') : null);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <About />
      <Experience />
      <Education />
      <Volunteering />
      <Skills />
    </>
  );
}

export default HomePage;
