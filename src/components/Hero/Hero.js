import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        My name is <em><b>Ryan Oh</b></em>, and I am studying Informatics at the University of Washington! I aim for a career in either software engineering or product/program management, which I am currently studying for. I am a highly driven individual who is motivated to achieve the goals I set regardless of the obstacles.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;