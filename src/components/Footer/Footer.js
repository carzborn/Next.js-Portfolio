import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import {SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href='mailto:devcarzborn@gmail.com'>devcarzborn@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>All rights reserved © carzborn.dev 2022</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href='https://github.com/carzborn' target='_blank'>
                        <AiFillGithub size='3rem'/>
                    </SocialIcons>
                    <SocialIcons
                        href='https://www.linkedin.com/in/hugo-carzborn-89134022b/'
                        target='_blank'>
                        <AiFillLinkedin size='3rem'/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
