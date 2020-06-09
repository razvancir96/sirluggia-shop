import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";

import Container from "../utils/style-utils";

const StyledIcon = css`
  width: 24px;
  height: 24px;

  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
`;

const PhoneIcon = styled(Phone)`
  ${StyledIcon}
`;

const MailIcon = styled(Mail)`
  ${StyledIcon}
`;

const GitHubIcon = styled(GitHub)`
  ${StyledIcon}
`;

const LinkedInIcon = styled(LinkedIn)`
  ${StyledIcon}
`;

const FooterContainer = styled.footer.attrs({
  className: "pt-3 mt-3 bg-light",
})``;

const FooterLine = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterGroup = styled.div.attrs({
  className: "d-flex flex-column",
})`
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h3.attrs({
  className: "h5",
})``;

const P = styled.p`
  margin: 0;
`;

const Copyright = styled.div.attrs({
  className: "py-3",
})`
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <FooterLine>
      <FooterGroup>
        <Title>Link-uri rapide:</Title>
        <Link to="/about">Despre</Link>
        <Link to="/terms-and-conditions">Termeni și condiții</Link>
      </FooterGroup>
      <FooterGroup>
        <Title>Contactează-mă:</Title>
        <P>
          <a href="mailto:razvan.cirlugea@gmail.com">
            <MailIcon />
            razvan.cirlugea@gmail.com
          </a>
        </P>
        <P>
          <PhoneIcon />
          +40728998166
        </P>
      </FooterGroup>
      <FooterGroup>
        <Title>Contactează-mă:</Title>
        <P>
          <a href="https://github.com/razvancir96">
            <GitHubIcon />
            razvancir96
          </a>
        </P>
        <P>
          <a href="https://www.linkedin.com/in/razvancirlugea/">
            <LinkedInIcon />
            razvancirlugea
          </a>
        </P>
      </FooterGroup>
    </FooterLine>

    <Copyright>&copy; Răzvan Cîrlugea, 2019</Copyright>
  </FooterContainer>
);

export default Footer;
