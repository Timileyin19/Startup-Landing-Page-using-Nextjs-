/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Modern_Tools from 'assets/feature/modern_tools.svg';
import Global_Reach from 'assets/feature/global_reach.svg';
import Fully_Optimized from 'assets/feature/fully_optimized.svg';
import Award_Winning from 'assets/feature/award_winning.svg';

const data = [
  {
    id: 1,
    imgSrc: Modern_Tools,
    altText: 'Modern Tools',
    title: 'Modern Tools',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis, dolores, saepe repudiandae perspiciatis, cumque autem voluptas veritatis sapiente unde harum qui commodi. Unde eum tenetur sapiente quisquam minima, excepturi consectetur facilis cum distinctio fugit ratione modi delectus illum.',
  },
  {
    id: 2,
    imgSrc: Global_Reach,
    altText: 'Universal Reach',
    title: 'Universal Reach',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis, dolores, saepe repudiandae perspiciatis, cumque autem voluptas veritatis sapiente unde harum qui commodi. Unde eum tenetur sapiente quisquam minima, excepturi consectetur facilis cum distinctio fugit ratione modi delectus illum.',
  },
  {
    id: 3,
    imgSrc: Fully_Optimized,
    altText: 'Fully Targeted Solutions',
    title: 'Fully Targeted Solutions',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis, dolores, saepe repudiandae perspiciatis, cumque autem voluptas veritatis sapiente unde harum qui commodi. Unde eum tenetur sapiente quisquam minima, excepturi consectetur facilis cum distinctio fugit ratione modi delectus illum.',
  },
  {
    id: 4,
    imgSrc: Award_Winning,
    altText: 'Build to Beat Competitiors',
    title: 'Build to Beat Competitiors',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis, dolores, saepe repudiandae perspiciatis, cumque autem voluptas veritatis sapiente unde harum qui commodi. Unde eum tenetur sapiente quisquam minima, excepturi consectetur facilis cum distinctio fugit ratione modi delectus illum.',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature' }}>
     <Container>
        <SectionHeader 
          slogan="Why we are Special"
          title="Check out Product Features"
        />

        <Grid sx={styles.grid}>
          {data.map((feature) => (
            <FeatureCard 
              key={feature.id}
              src={feature.imgSrc}
              altText={feature.altText}
              title={feature.title}
              text={feature.text}
              />
          ))}
        </Grid>
     </Container>
     
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
