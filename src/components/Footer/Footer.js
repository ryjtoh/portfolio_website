import React from 'react';

import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';
import { SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Contact Me!</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = "tel:253-213-6557">253-213-6557</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = "mailto:ryjtoh@gmail.com">ryjtoh@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
