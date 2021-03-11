import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const mystyle = {
    color: 'white',
    backgroundColor: '#333333',
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contacto" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta || '¿Te interesa contactarme?'}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/gurudiel/elcarro.do'}
            >
              {btn || 'onarpiern@gmail.com'}
            </a>
            <p>
              <span style={mystyle}>Tel.: 809-533-7990</span> <br />
              <span style={mystyle}>Cel.: 829-322-5306</span>
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
