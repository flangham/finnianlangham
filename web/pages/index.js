import Header from '../components/Header';
import client from '../client';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
// import Loader from '../components/Loader';
import CustomHead from '../components/CustomHead';

export default function Home({ projects }) {
  return (
    <>
      <CustomHead />
      {/* <Loader /> */}
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
