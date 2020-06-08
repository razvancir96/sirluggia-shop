import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";

const StyledIcon = css`
  width: 24px;
  height: 24px;
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

const Container = styled.footer``;

const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterGroup = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
`;

const Footer = () => (
  <Container className="pt-3 mt-3 bg-light">
    <FooterLine className="container-fluid container-min-max-width">
      <FooterGroup className="d-flex flex-column">
        <h3 className="h5">Link-uri rapide:</h3>
        <Link to="/about">Despre</Link>
        <Link to="/terms-and-conditions">Termeni și condiții</Link>
      </FooterGroup>
      <FooterGroup>
        <h3 className="h5">Contactează-mă:</h3>
        <p className="m-0">
          <a href="mailto:razvan.cirlugea@gmail.com">
            <MailIcon className="mr-1 mb-1 footer-icon" />
            razvan.cirlugea@gmail.com
          </a>
        </p>
        <p className="m-0">
          <PhoneIcon className="mr-1 footer-icon" />
          +40728998166
        </p>
      </FooterGroup>
      <FooterGroup>
        <h3 className="h5">Contactează-mă:</h3>
        <p className="m-0">
          <a href="https://github.com/razvancir96">
            <GitHubIcon className="mr-1 mb-1 footer-icon" />
            razvancir96
          </a>
        </p>
        <p className="m-0">
          <a href="https://www.linkedin.com/in/razvancirlugea/">
            <LinkedInIcon className="mr-1 footer-icon" />
            razvancirlugea
          </a>
        </p>
      </FooterGroup>
    </FooterLine>

    <Copyright className="py-3">&copy; Răzvan Cîrlugea, 2019</Copyright>
  </Container>
);

export default Footer;
