import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getDataFromSanity, getSanityDataBySlug } from '../../../sanity/sanity-utils';

export interface Props {
    projectDetails: any
}

export default function App (props) {
  // const router = useRouter()
  //   console.log(router.query.slug);
    // const projectDetails = getSanityDataBySlug('Projects', router.query.slug);
    console.log(props);
  return (
    <div>
       Project details page 
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getDataFromSanity('Projects', false);
  const paths = projects?.map((project) => ( {
    params: {slug: project.slug.current}
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const projectDetails = await getSanityDataBySlug('Projects', params.slug)
    return { props: {projectDetails}}
}