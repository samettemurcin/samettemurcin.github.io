import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './components/Projects';
import styles from './App.module.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.app}>
            <Navbar />
            <main className={styles.main}>
              <HomePage />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/projects"
        element={
          <div className={styles.app}>
            <Navbar />
            <main className={styles.main}>
              <Projects />
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
