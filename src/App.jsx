import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Journey from './sections/Journey';
import Learning from './sections/Learning';
import Blog from './sections/Blog';
import Fun from './sections/Fun';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Journey />
        <Learning />
        {/* <Blog /> */}
        <Fun />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
