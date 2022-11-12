import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with different technologies in web development.
      From Backend To Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>      <ListItem>
        <FiFigma size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
