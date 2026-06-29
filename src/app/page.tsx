import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import FloatingCTA from '@/components/FloatingCTA';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-dvh">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HomePage;
