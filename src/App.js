import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './components/Projects';
import ProjectDetailPage from './pages/ProjectDetailPage';
import styles from './App.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.page}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
