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
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href='tel:+46-733-64-68-30'>+46-733-64-68-30</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href='mailto:devcarzborn@gmail.com'>devcarzborn@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Slow and steady wins the race</Slogan>
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
