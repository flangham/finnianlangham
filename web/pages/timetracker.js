import Header from '../components/Header';
import client from '../client';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import CustomHead from '../components/CustomHead';
import TimeTracker from '../components/TimeTracker';

export default function Home({ folio }) {
  return (
    <>
      <CustomHead>
        <meta name="robots" content="noindex" />
      </CustomHead>
      <TimeTracker />
    </>
  );
}

export async function getStaticProps() {
  const folio = await client.fetch(`*[_type == 'folio'][0].selected_projects{
    "project": *[_type == 'project' && _id == ^._ref]{
      image,
      name,
      slug,
      url
    }
  }`);

  return {
    props: {
      folio,
    },
  };
}
