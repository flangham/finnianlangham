import Header from '../components/Header';
import client from '../client';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home({ projects }) {
  return (
    <>
      <Header />
      <Work projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == 'project']`);

  return {
    props: {
      projects,
    },
  };
}
