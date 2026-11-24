import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Nav from '@/components/nav/Nav';
import Practice from '@/components/practice/Practice';
import SkipLink from '@/components/skip-link/SkipLink';
import Toolkit from '@/components/toolkit/Toolkit';
import { WorkSection } from '@/components/work/WorkSection';

const HomePage = () => (
  <main>
    <SkipLink />
    <Nav />
    {/* Skip target starts after the nav so keyboard users bypass it. */}
    <div id="content" tabIndex={-1}>
      <Hero />
      <WorkSection />
      <Practice />
      <About />
      <Toolkit />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </main>
);

export default HomePage;
