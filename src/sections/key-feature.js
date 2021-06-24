/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Award_Winning from 'assets/feature/award_winning.svg';
import Fully_Optimized from 'assets/feature/fully_optimized.svg';
import Global_Reach from 'assets/feature/global_reach.svg';
import Modern_Tools from 'assets/feature/modern_tools.svg';

const data = [
  {
    id: 1,
    imgSrc: Award_Winning,
    altText: 'Award Winning',
    title: 'Award Winning',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut repellendus tempore optio odit ipsum.',
  },
  {
    id: 2,
    imgSrc: Fully_Optimized,
    altText: 'Fully Optimized Solutions',
    title: 'Fully Optimized Solutions',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut repellendus tempore optio odit ipsum.',
  },
  {
    id: 3,
    imgSrc: Global_Reach,
    altText: 'Global Reach',
    title: 'Global Reach',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut repellendus tempore optio odit ipsum.',
  },
  {
    id: 4,
    imgSrc: Modern_Tools,
    altText: 'Modern Tools',
    title: 'Modern Tools',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut repellendus tempore optio odit ipsum.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id="feature">
     <Container>
       <SectionHeader 
        slogan="What make us special?"
        title="The Unbeatable Features of Our Product"
       />

       <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
       </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
