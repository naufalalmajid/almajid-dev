import { useState } from 'react';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';

export type Page = 'home' | 'resume' | 'projects' | 'blog';

function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />;
      case 'resume': return <Resume />;
      case 'projects': return <Projects />;
      case 'blog': return <Blog />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
